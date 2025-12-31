from rest_framework.routers import DefaultRouter
from notification_app.api.views import *
from django.contrib import admin
from django.urls import path , include ,re_path

router = DefaultRouter()
router.register("notification", NotificationViewSet)



urlpatterns = [

    path("", include(router.urls)),

]
