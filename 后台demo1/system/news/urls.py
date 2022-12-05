from django.urls import path, include
from rest_framework.routers import DefaultRouter

from news import views


router = DefaultRouter()
router.register('news', views.NewsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]