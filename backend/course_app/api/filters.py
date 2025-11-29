import django_filters
from course_app.models import Course
from rest_framework import filters

class CourseFilter(django_filters.FilterSet):
    class Meta:
        model= Course
        fields={
            'name':['iexact','icontains'],
            'price':['exact','lt','gt','range'],
            'organization__name':['iexact','icontains'],
            'is_online':['exact']
            }