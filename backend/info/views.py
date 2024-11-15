from rest_framework import viewsets
from .models import Skill, Project, Education, Experience
from .serializers import SkillSerializer, ProjectSerializer, EducationSerializer, ExperienceSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# ViewSet for Skills
class SkillViewSet(viewsets.ModelViewSet):

    queryset = Skill.objects.all()  # Define queryset
    serializer_class = SkillSerializer  # Define serializer

    def list(self, request):
        queryset = self.queryset  # Use the defined queryset
        serializer = self.serializer_class(queryset, many=True)  # Use the defined serializer
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = self.queryset  # Use the defined queryset
        skill = get_object_or_404(queryset, pk=pk)
        serializer = self.serializer_class(skill)  # Use the defined serializer
        return Response(serializer.data)
    
    def update(self, request, pk=None, *args, **kwargs):
        """
        Update a skill (full update).
        """
        skill = get_object_or_404(self.queryset, pk=pk)
        serializer = self.serializer_class(skill, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

# ViewSet for Projects
class ProjectViewSet(viewsets.ModelViewSet):
    
    def list(self, request):
        queryset = Project.objects.all()
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Project.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ProjectSerializer(user)
        return Response(serializer.data)

# ViewSet for Education
class EducationViewSet(viewsets.ModelViewSet):
    
    def list(self, request):
        queryset = Education.objects.all()
        serializer = EducationSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Education.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = EducationSerializer(user)
        return Response(serializer.data)

# ViewSet for Experience
class ExperienceViewSet(viewsets.ModelViewSet):

    def list(self, request):
        queryset = Experience.objects.all()
        serializer = ExperienceSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Experience.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ExperienceSerializer(user)
        return Response(serializer.data)
