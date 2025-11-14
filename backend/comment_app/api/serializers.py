
from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import serializers
from comment_app.models import * 
from profile_app.api.serializers import ProfileSerializer


class GenericRelatedModelSerializer(serializers.RelatedField):
    def to_internal_value(self, data):
        try:
            app_label, model_name = data.split('.')
            content_type = ContentType.objects.get(app_label=app_label, model=model_name)
            
            return content_type
        except ContentType.DoesNotExist:
            raise serializers.ValidationError(f"Invalid content type: {data}")
    def to_representation(self, value):
        return value.model

class CommentSerializer(serializers.ModelSerializer):
    content_type = GenericRelatedModelSerializer(queryset=ContentType.objects.all())
    profile_related=ProfileSerializer(read_only=True)
    class Meta:
        model  = Comment
        fields = '__all__'   
         
class CommentSimpleSerializer(serializers.ModelSerializer):
    profile_related=ProfileSerializer(read_only=True)
    class Meta:
        model  = Comment
        fields = '__all__'
