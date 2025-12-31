from django.db import models
from profile_app.models import Profile
# Create your models here.

class Notification(models.Model):
    profile_related = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=255,blank=True, null=True)
    body = models.TextField(blank=True, null=True)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)  
    def __str__(self):
        return self.title