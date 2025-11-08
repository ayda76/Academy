from rest_framework import generics, viewsets
from rest_framework.decorators import api_view ,permission_classes
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from comment_app.api.serializers import *
from profile_app.models import Profile
from comment_app.models import *

from rest_framework import generics
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_headers, vary_on_cookie
from django.conf import settings
from rest_framework import authentication
from rest_framework import exceptions

from django.db.models import Q
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from rest_framework.views import APIView

from drf_yasg.utils import swagger_auto_schema 

from rest_framework.generics import ListAPIView , CreateAPIView, UpdateAPIView,DestroyAPIView



class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    my_tags = ["Comment"]
    