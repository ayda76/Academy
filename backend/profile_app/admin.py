from django.contrib import admin

from .resources import *
from import_export.admin import ImportExportModelAdmin 
# Register your models here.
from .models import *



@admin.register(Profile)
class ProfileAdmin(ImportExportModelAdmin):

    list_display = ('id','firstname','lastname' )
    resource_class = ProfileResource
 
 
@admin.register(InstructorProfileDetail)
class InstructorProfileDetailAdmin(ImportExportModelAdmin):

    list_display = ('id','profile_related','teaching_field' )
    resource_class = InstructorProfileDetailResource   

@admin.register(ProfileDetail)
class ProfileDetailAdmin(ImportExportModelAdmin):

    list_display = ('id','profile_related' )
    resource_class = ProfileDetailResource   
