from rest_framework import generics, viewsets
from rest_framework.response import Response

from course_app.api.serializers import *
from profile_app.models import Profile,ProfileDetail
from course_app.models import *

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from django.db.models import Q
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from rest_framework.generics import ListAPIView , CreateAPIView, UpdateAPIView,DestroyAPIView

from rest_framework import filters

from django_filters.rest_framework import DjangoFilterBackend
from django.db import transaction
from functools import partial
from django.contrib.contenttypes.models import ContentType

from notification_app.models import *
from notification_app.api.serializers import *
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError, NotFound
from django.db.models import Avg


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    pagination_class=None
    my_tags = ["Notification"]