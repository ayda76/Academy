from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import serializers
from notification_app.models import * 
from profile_app.api.serializers import ProfileSerializer

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notification
        fields='__all__'
