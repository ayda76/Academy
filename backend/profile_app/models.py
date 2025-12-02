from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework.authentication import get_authorization_header
from django.conf import settings
from rest_framework import exceptions
import jwt

# Create your models here.

class Profile(models.Model):
    user          = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile" )
    firstname     = models.CharField(max_length=200, blank=True, null=True)
    lastname      = models.CharField(max_length=200, blank=True, null=True)
    email         = models.EmailField()
    phone         = models.DecimalField(blank=True , null=True, max_digits=11, decimal_places=0)
    is_instructor = models.BooleanField(default=False, blank=True, null=True)
   
    address    = models.TextField(blank=True, null=True)
    
    def __str__(self) :
        return f"{self.firstname}{self.lastname}"
    
    def get_user_jwt(self,request):
        
        token = get_authorization_header(request).decode('utf-8')
        if token is None or token == "null" or token.strip() == "":
            raise exceptions.AuthenticationFailed('Authorization Header or Token is missing on Request Headers')
        
        decoded = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        
        username = decoded['user_id']
       
        return Profile.objects.get(user__id=username)    
    
    
class InstructorProfileDetail(models.Model):
    profile_related  = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_InstructorProfileDetail" )
    teaching_field   = models.CharField(max_length=1000, blank=True, null=True)
    website          = models.CharField(max_length=1000, blank=True, null=True)
   
    work_experience  = models.DecimalField(blank=True , null=True, max_digits=2, decimal_places=0)
    resume           = models.FileField(upload_to="media/files/resume/%Y/%m/%d/", blank=True, null=True)
    about            = models.TextField(blank=True, null=True)
    def __str__(self) :
        return f"{self.about}"
    
class ProfileOfflineCourse(models.Model):
    from course_app.models import Course
    profile_related  = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_offlinecourses" )
    offline_course   = models.ManyToManyField(Course, related_name='profileOfflineCourses',blank=True, null=True)
    def __str__(self) :
        return f"{self.about}"