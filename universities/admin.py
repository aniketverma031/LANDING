from django.contrib import admin
from .models import University, Course, Campus, Lead

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'created_at')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'university', 'fee', 'duration')
    list_filter = ('university',)
    search_fields = ('name',)


@admin.register(Campus)
class CampusAdmin(admin.ModelAdmin):
    list_display = ('name', 'university')
    list_filter = ('university',)
    search_fields = ('name',)


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'university', 'course', 'phone', 'created_at')
    list_filter = ('university', 'intake', 'state', 'created_at')
    search_fields = ('name', 'email', 'phone')
    readonly_fields = ('created_at',)
