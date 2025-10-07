from django.db import models
from profile_app.models import Profile
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class Organization(models.Model):
    name     = models.CharField(max_length=500, blank=True, null=True)
    phone    = PhoneNumberField(blank=True, null=True)
    address  = models.CharField(max_length=500, blank=True, null=True)
    
    def __str__(self):
        return self.name
    

class Resource(models.Model):
    file_doc  = models.FileField(upload_to='media/files/% Y/% m/% d/', blank=True, null=True)
    link      = models.CharField(max_length=500, blank=True, null=True)
    
    def __str__(self):
        return self.id
    
class Lesson(models.Model):
    name        = models.CharField(max_length=700, blank=True, null=True)
    instructor  = models.ForeignKey(Profile,related_name='lessons_instructor',on_delete=models.CASCADE)
    articles    = models.ManyToManyField(Resource,related_name='lessons_articles', blank=True)
    links       = models.ManyToManyField(Resource,related_name='lessons_links', blank=True)
    video       = models.FileField(upload_to='media/lessonVideos/% Y/% m/% d/', blank=True, null=True)
    
    def __str__(self):
        return self.name

class Course(models.Model):
    name             = models.CharField(max_length=800, blank=True, null=True)
    lessons_related  = models.ManyToManyField(Lesson,related_name='courses_lesson')
    organization     = models.ForeignKey(Organization,related_name='courses_organization',on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
    
class Term(models.Model):
    title          = models.CharField(max_length=800, blank=True, null=True)
    course_related = models.ForeignKey(Course,related_name='terms',on_delete=models.CASCADE)
    start_date     = models.DateField(blank=True, null=True)
    start_date     = models.DateField(blank=True, null=True)
    students       = models.ManyToManyField(Profile,related_name='terms',blank=True)
    def __str__(self):
        return self.title