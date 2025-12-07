from django.contrib import admin

from .resources import *
from import_export.admin import ImportExportModelAdmin 
# Register your models here.
from .models import *


@admin.register(Organization)
class OrganizationAdmin(ImportExportModelAdmin):

    list_display = ('id',)


    resource_class = OrganizationResource
    
@admin.register(Resource)
class ResourceAdmin(ImportExportModelAdmin):

    list_display = ('id',)


    resource_class = ResourceResource
    
@admin.register(Lesson)
class LessonAdmin(ImportExportModelAdmin):

    list_display = ('id', )


    resource_class = LessonResource
    

    
@admin.register(Course)
class CourseAdmin(ImportExportModelAdmin):

    list_display = ('id', )


    resource_class = CourseResource
    
@admin.register(Term)
class TermAdmin(ImportExportModelAdmin):

    list_display = ('id', )


    resource_class = TermResource
    
@admin.register(Rating)
class RatingAdmin(ImportExportModelAdmin):

    list_display = ('id', )


    resource_class = RatingResource