from django.urls import path
from . import views

app_name = 'universities'

urlpatterns = [
    path('', views.home, name='home'),
    path('university/<slug:slug>/', views.university_detail, name='university_detail'),
    path('api/basic/', views.api_basic, name='api_basic'),
    path('api/fees/', views.api_fees, name='api_fees'),
    path('api/submit-lead/', views.api_submit_lead, name='api_submit_lead'),
]
