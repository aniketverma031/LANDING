from django.db import models
from django.core.validators import RegexValidator

class University(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    hero_title = models.CharField(max_length=200)
    hero_subtitle = models.TextField()
    about_text = models.TextField()
    placements_percentage = models.CharField(max_length=100, default="95%")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']


class Course(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=200)
    duration = models.CharField(max_length=100, default="2 years")
    fee = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.university.name} - {self.name}"

    class Meta:
        ordering = ['name']


class Campus(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='facilities')
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return f"{self.university.name} - {self.name}"

    class Meta:
        verbose_name_plural = "Campus Facilities"


class Lead(models.Model):
    INTAKE_CHOICES = [
        ('jan', 'January'),
        ('apr', 'April'),
        ('jul', 'July'),
        ('oct', 'October'),
    ]
    
    STATE_CHOICES = [
        ('andhra', 'Andhra Pradesh'),
        ('bihar', 'Bihar'),
        ('goa', 'Goa'),
        ('maharashtra', 'Maharashtra'),
        ('tamil', 'Tamil Nadu'),
        ('karnataka', 'Karnataka'),
        ('delhi', 'Delhi'),
        ('other', 'Other'),
    ]

    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='leads')
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone_regex = RegexValidator(regex=r'^\d{10}$', message='Phone number must be 10 digits.')
    phone = models.CharField(validators=[phone_regex], max_length=10)
    state = models.CharField(max_length=20, choices=STATE_CHOICES)
    course = models.CharField(max_length=200)
    intake = models.CharField(max_length=10, choices=INTAKE_CHOICES)
    brochure_required = models.BooleanField(default=False)
    consent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.university.name}"

    class Meta:
        ordering = ['-created_at']
