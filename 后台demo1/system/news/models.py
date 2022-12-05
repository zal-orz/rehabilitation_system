from django.db import models

class News(models.Model):
    title = models.CharField(max_length=65)
    subtitle = models.CharField(max_length=30, blank=True, null=True)
    content = models.TextField()
