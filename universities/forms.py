from django import forms
from .models import Lead

class LeadForm(forms.ModelForm):
    INTAKE_CHOICES = [
        ('', 'Select Intake'),
        ('jan', 'January'),
        ('apr', 'April'),
        ('jul', 'July'),
        ('oct', 'October'),
    ]
    
    STATE_CHOICES = [
        ('', 'Select State'),
        ('andhra', 'Andhra Pradesh'),
        ('bihar', 'Bihar'),
        ('goa', 'Goa'),
        ('maharashtra', 'Maharashtra'),
        ('tamil', 'Tamil Nadu'),
        ('karnataka', 'Karnataka'),
        ('delhi', 'Delhi'),
        ('other', 'Other'),
    ]

    intake = forms.ChoiceField(choices=INTAKE_CHOICES, widget=forms.Select(attrs={
        'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
    }))
    
    state = forms.ChoiceField(choices=STATE_CHOICES, widget=forms.Select(attrs={
        'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
    }))

    class Meta:
        model = Lead
        fields = ['name', 'email', 'phone', 'state', 'course', 'intake', 'brochure_required', 'consent']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder': 'Your Full Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder': 'your.email@example.com'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder': '1234567890',
                'maxlength': '10'
            }),
            'course': forms.TextInput(attrs={
                'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500',
                'placeholder': 'B.Tech / MBA / BBA'
            }),
            'brochure_required': forms.CheckboxInput(attrs={
                'class': 'w-4 h-4'
            }),
            'consent': forms.CheckboxInput(attrs={
                'class': 'w-4 h-4'
            }),
        }
