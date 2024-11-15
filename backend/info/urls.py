# info/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, EducationViewSet, ExperienceViewSet

# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'education', EducationViewSet)
router.register(r'experience', ExperienceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # Include the API URLs
]
