from django.db import models
from profile_app.models import Profile
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime, date
# Create your models here.


class Organization(models.Model):
    name     = models.CharField(max_length=500, blank=True, null=True)
    phone    = PhoneNumberField(blank=True, null=True)
    address  = models.CharField(max_length=500, blank=True, null=True)
    
    def __str__(self):
        return self.name
    

class Resource(models.Model):
    file_doc  = models.FileField(upload_to="media/files/%Y/%m/%d/", blank=True, null=True)
    link      = models.CharField(max_length=500, blank=True, null=True)
  
    
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
    price            = models.DecimalField(max_digits=10,decimal_places=2, default=0)
    is_online        = models.BooleanField(default=True, blank=True, null=True)
    def __str__(self):
        return self.name
    
    @property
    def has_term(self):
        return any(term.valid_enroll_time for term in self.terms.all())
    
    
class Term(models.Model):
    title                  = models.CharField(max_length=800, blank=True, null=True)
    course_related         = models.ForeignKey(Course,related_name='terms',on_delete=models.CASCADE)
    start_date             = models.DateField(blank=True, null=True)
    finish_date            = models.DateField(blank=True, null=True)
    students               = models.ManyToManyField(Profile,related_name='terms',blank=True)
    limit                  = models.PositiveIntegerField(default=0)
    enroll_start_date      = models.DateField(blank=True, null=True)
    enroll_finish_date     = models.DateField(blank=True, null=True)
    
    @property
    def has_capacity(self):
        return self.limit > self.students.count()
    
    @property
    def valid_enroll_time(self):
        today=date.today()  
        if self.enroll_start_date and self.enroll_finish_date:
            return self.enroll_start_date <= today <= self.enroll_finish_date
        return False
       
    @property
    def is_active(self):
        today=date.today()
        if self.start_date and self.finish_date:
            return self.start_date <= today <= self.finish_date
        return False
    
    def __str__(self):
        return self.title
    
class Rating(models.Model):
    rate              = models.PositiveIntegerField(default=1)
    profile_related   = models.ForeignKey(Profile,related_name='ratings_profile',on_delete=models.CASCADE)
    course_related    = models.ForeignKey(Course,related_name='ratings_course',on_delete=models.CASCADE)
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)  
    def __str__(self):
        return self.id