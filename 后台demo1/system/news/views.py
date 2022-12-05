from django.shortcuts import render

from rest_framework import viewsets

from news.models import News
from news.serializer import NewsSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer