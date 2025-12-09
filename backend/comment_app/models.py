from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from profile_app.models import Profile
from Academy.middleware import get_current_request
# Create your models here.


class Comment(models.Model):

    content_type      = models.ForeignKey(ContentType,blank = True , null = True , on_delete=models.CASCADE)
    object_id         = models.PositiveIntegerField(blank = True , null = True )
    content_object    = GenericForeignKey("content_type", "object_id")
    profile_related   = models.ForeignKey(Profile,related_name='comments_profile',on_delete=models.CASCADE)
    text              = models.TextField(blank = True , null = True)
    origin            = models.ForeignKey('self',blank = True , null = True , on_delete=models.CASCADE)
   
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)    
    
    def __str__(self):
        return f"{self.id}"
    
    
    
