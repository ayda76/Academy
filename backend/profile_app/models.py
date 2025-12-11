from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from rest_framework.authentication import get_authorization_header
from django.conf import settings
from rest_framework import exceptions
import jwt
from jwt import ExpiredSignatureError, InvalidTokenError

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
        
        #get authoriztion header
        auth = get_authorization_header(request).split()
        if not auth or len(auth) == 0:
            raise exceptions.AuthenticationFailed("Authorization header missing")

        # expected::: [b'Bearer', b'<token>']
        if auth[0].lower() != b'bearer' or len(auth) != 2:
            raise exceptions.AuthenticationFailed("Invalid Authorization header. Expected 'Bearer <token>'")
        
        #convert byte to str
        token = auth[1].decode('utf-8')

        try:
            # check if the signiture is valid according to secret key and token is not expired 
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        except ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Token has expired")
        except InvalidTokenError:
            raise exceptions.AuthenticationFailed("Invalid token")

        user_id = payload.get('user_id') or payload.get('id') or payload.get('sub')
        if not user_id:
            raise exceptions.AuthenticationFailed("Token payload does not contain user id")

        try:
            profile = Profile.objects.get(user__id=user_id)
        except Profile.DoesNotExist:
            raise exceptions.AuthenticationFailed("No profile found for user")
        return profile  
    
    
class InstructorProfileDetail(models.Model):
    profile_related  = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_InstructorProfileDetail" )
    teaching_field   = models.CharField(max_length=1000, blank=True, null=True)
    website          = models.CharField(max_length=1000, blank=True, null=True)
   
    work_experience  = models.DecimalField(blank=True , null=True, max_digits=2, decimal_places=0)
    resume           = models.FileField(upload_to="media/files/resume/%Y/%m/%d/", blank=True, null=True)
    about            = models.TextField(blank=True, null=True)
    def __str__(self) :
        return f"{self.about}"
    
class ProfileDetail(models.Model):
    from course_app.models import Course
    profile_related  = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_detail" )
    all_course       = models.ManyToManyField(Course, related_name='profileAllCourses',blank=True, null=True)
    about            = models.TextField(blank=True, null=True)
    social_link      = models.CharField(max_length=1000, blank=True, null=True)
    def __str__(self) :
        return f"{self.id}"
    
