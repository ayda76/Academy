from rest_framework.routers import DefaultRouter
from profile_app.api.views import *
from django.contrib import admin
from django.urls import path , include ,re_path

router = DefaultRouter()
router.register("profile", ProfileViewSet)
router.register("ProfileOfflineCourse", ProfileOfflineCourseViewSet)
router.register("instructorProfileDetail", InstructorProfileDetailViewSet)


urlpatterns = [

    path("", include(router.urls)),
    path('change/password/', PasswordChangeView.as_view()),
    path('SignUp/', RegisterView.as_view(), name='signup'),
    path('Login/', LoginView.as_view(), name='login'),
    path('ME/', ProfileMeViewSet.as_view(), name='me'),

]
