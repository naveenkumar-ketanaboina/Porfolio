from rest_framework import viewsets
from .models import Skill, Project, Education, Experience
from .serializers import SkillSerializer, ProjectSerializer, EducationSerializer, ExperienceSerializer

# ViewSet for Skills
class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

# ViewSet for Projects
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# ViewSet for Education
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

# ViewSet for Experience
class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
