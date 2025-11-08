from django.contrib import admin

from .resources import *
from import_export.admin import ImportExportModelAdmin 
# Register your models here.
from .models import *


@admin.register(Comment)
class CommentAdmin(ImportExportModelAdmin):

    list_display = ('id',)


    resource_class = CommentResource