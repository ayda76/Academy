from django.dispatch import receiver
from django.db.models.signals import post_save,post_delete
from course_app.models import Course
from django.core.cache import cache

@receiver([post_save,post_delete], sender=Course)
def invalidate_product_cache(sender,instance,**kwargs):
    cache.delete_pattern('*course_list*')