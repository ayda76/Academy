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
from .filters import CourseFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.db import transaction
from functools import partial
from django.contrib.contenttypes.models import ContentType
from course_app.tasks import send_confirmation_email_enroll
from comment_app.models import Comment
from comment_app.api.serializers import *
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError, NotFound

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.prefetch_related('courses_organization')
    serializer_class = OrganizationSerializer
    pagination_class=None
    my_tags = ["Course"]
    
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    pagination_class=None
    my_tags = ["Course"]
    
class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.select_related('instructor').prefetch_related('articles','links')
    serializer_class = LessonSerializer
    pagination_class=None
    my_tags = ["Course"]

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related('organization').prefetch_related('lessons_related','terms')
    serializer_class = CourseSerializer
    
    pagination_class=PageNumberPagination
    pagination_class.page_size=3
    
    filterset_class=CourseFilter
    filter_backends=[DjangoFilterBackend,
                    # filters.SearchFilter,
                    # filters.OrderingFilter,
                    ]
    # search_fields=['name', 'price','organization__name']
    my_tags = ["Course"]
    
    @method_decorator(cache_page(60 * 15, key_prefix='course_list'))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
    @action(detail=True, methods=['get'])
    def EachCourseComments(self, request, pk=None):
        try:
            content_type = ContentType.objects.get(app_label="course_app", model="course")
            comments=Comment.objects.filter(content_type=content_type,object_id=pk)
            serialized_comments=CommentSimpleSerializer(comments, many=True).data
            
            return Response(serialized_comments)
        except:
            return Response('error')


class TermViewSet(viewsets.ModelViewSet):
    queryset = Term.objects.select_related('course_related').prefetch_related('students')
    pagination_class=None
    my_tags = ["Course"]
    def get_serializer_class(self):
        if self.request.method in ['POST','PUT','PATCH']:
            return TermSimpleSerializer
        else:
            return TermSerializer
        
class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.select_related('course_related','profile_related')
    pagination_class=None
    serializer_class=RatingSerializer
    my_tags = ["Course"]


       
class BuyCourse(CreateAPIView):
    serializer_class=BuyCourseSerializer
    my_tags = ["Course"]
    def post(self, request):
        profileSelected = Profile.get_user_jwt(self , self.request)
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            course_ids = serializer.validated_data['course_ids']
            list_courseIds=course_ids.split(',')
            list_ids=[]
            [list_ids.append(Course.objects.get(id=int(cr_id))) for cr_id in list_courseIds]
        with transaction.atomic(): 
            Variable, Created =ProfileDetail.objects.update_or_create(profile_related=profileSelected)
            Variable.all_course.set(list_ids)
            Variable.save()
            return Response('successfully submitted')
            
            
       
      
    
class Enroll(CreateAPIView):
    serializer_class=EnrollTermSerializer
    my_tags = ["Course"]
    def post(self, request):
        profileSelected = Profile.get_user_jwt(self , self.request)
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            term_id = serializer.validated_data['term_id']
            
        with transaction.atomic():    
            termSelected=Term.objects.select_for_update().get(id=term_id)
            if termSelected.has_capacity ==True and termSelected.valid_enroll_time ==True and profileSelected not in termSelected.students.all():
                
                termSelected.students.add(profileSelected)
                transaction.on_commit(partial(send_confirmation_email_enroll.delay,course_name=termSelected.course_related.name,term_start=termSelected.start_date,user_email=profileSelected.email))
                Variable, Created =ProfileDetail.objects.update_or_create(profile_related=profileSelected)
                Variable.all_course.add(termSelected.course_related)
                Variable.save()
                # transaction.on_commit(
                # lambda: send_confirmation_email_enroll.delay(
                #  course_id=termSelected.course_related.id,
                # user_email=self.request.user.email
                # )
                #)
                # send_confirmation_email_enroll.delay(termSelected.course_related.id,self.request.user.email)
                return Response('submited successfully')
            raise ValidationError({"detail": "failed to submit.(issues you should consider:capacity,enroll date,enrolled before)"})
        
        