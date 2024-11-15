# info/serializers.py
from rest_framework import serializers
from .models import Skill, Project, Education, Experience

# Serializer for Skill
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'proficiency', 'description']

# Serializer for Project
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technologies_used', 'link', 'date_started', 'date_completed']

# Serializer for Education
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'school_name', 'degree', 'field_of_study', 'start_date', 'end_date', 'description']

# Serializer for Experience
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'company_name', 'position', 'start_date', 'end_date', 'description']
