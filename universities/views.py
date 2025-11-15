from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json
import requests
import os
from .models import University, Lead
from .forms import LeadForm

def home(request):
    universities = University.objects.all()
    context = {
        'universities': universities
    }
    return render(request, 'universities/index.html', context)


def university_detail(request, slug):
    university = get_object_or_404(University, slug=slug)
    courses = university.courses.all()
    facilities = university.facilities.all()
    
    if request.method == 'POST':
        form = LeadForm(request.POST)
        if form.is_valid():
            lead = form.save(commit=False)
            lead.university = university
            lead.save()
            
            # Send to Pipedream if webhook URL is configured
            webhook_url = os.environ.get('PIPEDREAM_WEBHOOK_URL')
            if webhook_url:
                try:
                    requests.post(webhook_url, json={
                        'name': lead.name,
                        'email': lead.email,
                        'phone': lead.phone,
                        'state': lead.state,
                        'course': lead.course,
                        'intake': lead.intake,
                        'university': university.name,
                        'brochure_required': lead.brochure_required,
                        'timestamp': lead.created_at.isoformat()
                    })
                except Exception as e:
                    print(f"Error sending to Pipedream: {e}")
            
            return render(request, 'universities/university_detail.html', {
                'university': university,
                'courses': courses,
                'facilities': facilities,
                'form': form,
                'success': True
            })
    else:
        form = LeadForm()
    
    context = {
        'university': university,
        'courses': courses,
        'facilities': facilities,
        'form': form,
    }
    return render(request, 'universities/university_detail.html', context)


@require_http_methods(["GET"])
def api_basic(request):
    return JsonResponse({'status': 'success'})


@require_http_methods(["GET"])
def api_fees(request):
    university_slug = request.GET.get('university')
    
    if university_slug:
        university = get_object_or_404(University, slug=university_slug)
        courses = university.courses.all()
    else:
        courses = []
    
    courses_data = [
        {
            'name': course.name,
            'duration': course.duration,
            'fee': float(course.fee)
        }
        for course in courses
    ]
    
    return JsonResponse({
        'courses': courses_data
    })


@csrf_exempt
@require_http_methods(["POST"])
def api_submit_lead(request):
    try:
        data = json.loads(request.body)
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'state', 'course', 'intake', 'university']
        for field in required_fields:
            if field not in data or not data[field]:
                return JsonResponse({'error': f'{field} is required'}, status=400)
        
        # Validate phone (10 digits)
        if len(data['phone']) != 10 or not data['phone'].isdigit():
            return JsonResponse({'error': 'Phone must be 10 digits'}, status=400)
        
        # Get university
        university = get_object_or_404(University, name=data['university'])
        
        # Create lead
        lead = Lead.objects.create(
            university=university,
            name=data['name'],
            email=data['email'],
            phone=data['phone'],
            state=data['state'],
            course=data['course'],
            intake=data['intake'],
            brochure_required=data.get('brochure_required', False),
            consent=data.get('consent', False)
        )
        
        # Send to Pipedream if webhook URL is configured
        webhook_url = os.environ.get('PIPEDREAM_WEBHOOK_URL')
        if webhook_url:
            try:
                requests.post(webhook_url, json={
                    'name': lead.name,
                    'email': lead.email,
                    'phone': lead.phone,
                    'state': lead.state,
                    'course': lead.course,
                    'intake': lead.intake,
                    'university': university.name,
                    'brochure_required': lead.brochure_required,
                    'timestamp': lead.created_at.isoformat()
                })
            except Exception as e:
                print(f"Error sending to Pipedream: {e}")
        
        return JsonResponse({'success': True, 'message': 'Lead created successfully'})
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
