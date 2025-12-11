from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User
from profile_app.models import Profile,InstructorProfileDetail

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from profile_app.models import *

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn’t match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()

        Profile.objects.create(user=user)

        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    
class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password1 = serializers.CharField(required=True)
    new_password2 = serializers.CharField(required=True)
    
    
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'
class ProfileMeSerializer(serializers.ModelSerializer):
    all_courses=serializers.SerializerMethodField()
    class Meta:
        model = Profile
        fields = '__all__'
    def get_all_courses(self,obj):
        courses=ProfileDetail.objects.filter(profile_related=obj).values('all_course')
        list_courses=[]
        [list_courses.append(course['all_course']) for course in courses]
        return list_courses
 
class ProfileDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProfileDetail
        fields = '__all__'       

class InstructorProfileDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = InstructorProfileDetail
        fields = '__all__'
        
class ProfileInstructorSerializer(serializers.ModelSerializer):
    profile_InstructorProfileDetail=InstructorProfileDetailSerializer(required=True,many=True)
    class Meta:
        model = Profile
        fields = '__all__'
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email"]

