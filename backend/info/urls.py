# info/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, EducationViewSet, ExperienceViewSet

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'education', EducationViewSet, basename='education')
router.register(r'experience', ExperienceViewSet, basename='experience')

urlpatterns = [
    path('api/', include(router.urls)),  # Include the API URLs
]
