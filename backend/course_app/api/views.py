from rest_framework import generics, viewsets
from rest_framework.decorators import api_view ,permission_classes
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from course_app.api.serializers import *
from profile_app.models import Profile
from course_app.models import *

from rest_framework import generics
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers, vary_on_cookie
from django.conf import settings
from rest_framework import authentication
from rest_framework import exceptions
from rest_framework.authentication import get_authorization_header
from django.db.models import Q
import jwt
from django.contrib.auth.forms import PasswordChangeForm
from rest_framework.views import APIView

from drf_yasg.utils import swagger_auto_schema 

from rest_framework.generics import ListAPIView , CreateAPIView, UpdateAPIView,DestroyAPIView

from rest_framework_simplejwt.tokens import RefreshToken

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.prefetch_related('courses_organization')
    serializer_class = OrganizationSerializer
    my_tags = ["Course"]
    
    
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    my_tags = ["Course"]
    

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.select_related('instructor').prefetch_related('articles','links')
    serializer_class = LessonSerializer
    my_tags = ["Course"]

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related('organization').prefetch_related('lessons_related')
    serializer_class = CourseSerializer
    my_tags = ["Course"]
    
class TermViewSet(viewsets.ModelViewSet):
    queryset = Term.objects.select_related('course_related').prefetch_related('students')
    serializer_class = TermSerializer
    my_tags = ["Course"]