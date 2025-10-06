from rest_framework.routers import DefaultRouter
from course_app.api.views import *
from django.contrib import admin
from django.urls import path , include ,re_path

router = DefaultRouter()
router.register("organization", OrganizationViewSet)
router.register("resource", ResourceViewSet)
router.register("lesson", LessonViewSet)
router.register("course", CourseViewSet)




urlpatterns = [

    path("", include(router.urls)),
    # path('change/password/', PasswordChangeView.as_view()),


]
