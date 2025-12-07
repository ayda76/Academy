
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
    instructor=ProfileSerializer(read_only=True)
    articles=ResourceSerializer(required=False,many=True,read_only=True)
    links=ResourceSerializer(required=False,many=True,read_only=True)
    class Meta:
        model=Lesson
        fields='__all__'
 
class TermSimpleSerializer(serializers.ModelSerializer):

    class Meta:
        model=Term
        fields='__all__'       
class CourseSerializer(serializers.ModelSerializer):
    lessons_related=LessonSerializer(many=True,read_only=True)
    organization=OrganizationSimpleSerializer(read_only=True)
    latest_term=serializers.SerializerMethodField()
    has_term=serializers.SerializerMethodField()
    class Meta:
        model=Course
        fields='__all__'

    def get_latest_term(self,obj):
        last_term=Term.objects.filter(course_related=obj).last()
        if last_term==None:
            return None
        return TermSimpleSerializer(last_term).data

    def get_has_term(self,obj):
        return obj.has_term  
  
  
class OrganizationSerializer(serializers.ModelSerializer):
    courses_organization=CourseSerializer(required=False,read_only=True)
    class Meta:
        model=Organization
        fields='__all__'
        

class TermSerializer(serializers.ModelSerializer):
    course_related=CourseSerializer(read_only=True)
    students=ProfileSerializer(required=False,read_only=True,many=True)
    class Meta:
        model=Term
        fields='__all__'
        
class EnrollTermSerializer(serializers.Serializer):
    term_id = serializers.IntegerField()  

class BuyCourseSerializer(serializers.Serializer):
    course_ids = serializers.CharField()      

class RatingSerializer(serializers.ModelSerializer):

    class Meta:
        model=Rating
        fields='__all__'