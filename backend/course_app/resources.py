from import_export import resources
from .models import *


class OrganizationResource(resources.ModelResource):
     class Meta:
          model = Organization



class ResourceResource(resources.ModelResource):
     class Meta:
          model = Resource
          

class LessonResource(resources.ModelResource):
     class Meta:
          model = Lesson
          

class CourseResource(resources.ModelResource):
     class Meta:
          model = Course