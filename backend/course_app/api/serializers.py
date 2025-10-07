
from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import serializers
from course_app.models import * 
from profile_app.api.serializers import ProfileSerializer

class OrganizationSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organization
        fields='__all__'

        
class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Resource
        fields='__all__'
        
class LessonSerializer(serializers.ModelSerializer):
    instructor=ProfileSerializer()
    articles=ResourceSerializer(required=False,many=True)
    links=ResourceSerializer(required=False,many=True)
    class Meta:
        model=Lesson
        fields='__all__'
        
class CourseSerializer(serializers.ModelSerializer):
    lessons_related=LessonSerializer(many=True)
    organization=OrganizationSimpleSerializer()
    class Meta:
        model=Course
        fields='__all__'
        
class OrganizationSerializer(serializers.ModelSerializer):
    courses_organization=CourseSerializer(required=False)
    class Meta:
        model=Organization
        fields='__all__'