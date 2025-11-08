from rest_framework.routers import DefaultRouter
from course_app.api.views import *
from django.contrib import admin
from django.urls import path , include ,re_path

router = DefaultRouter()
router.register("comment", CommentViewSet)




urlpatterns = [

    path("", include(router.urls)),
    
    path('enroll/', Enroll.as_view()),


]
