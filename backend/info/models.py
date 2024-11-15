from django.db import models


# Model for Skills
class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.CharField(max_length=50, choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')])
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


# Model for Projects
class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    technologies_used = models.CharField(max_length=255)  # List of technologies used in the project
    link = models.URLField(blank=True, null=True)  # Link to the project (e.g., GitHub repository)
    date_started = models.DateField()
    date_completed = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title


# Model for Education
class Education(models.Model):
    school_name = models.CharField(max_length=255)
    degree = models.CharField(max_length=100)
    field_of_study = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.degree} in {self.field_of_study} at {self.school_name}"


# Model for Experience
class Experience(models.Model):
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.position} at {self.company_name}"
