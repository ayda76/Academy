from rest_framework import generics, viewsets
from rest_framework.decorators import api_view ,permission_classes

from comment_app.api.serializers import *
from profile_app.models import Profile
from comment_app.models import *
from rest_framework.response import Response


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    pagination_class=None
    my_tags = ["Comment"]
    def perform_create(self, serializer):
        try:
            profileSelected = Profile.get_user_jwt(self , self.request)
            
            instance=serializer.save()
            
            instance.profile_related=profileSelected
            instance.save()
            return instance
        except:
            return Response('no profile')
    
    
    
    
    
    
    
    
    
    