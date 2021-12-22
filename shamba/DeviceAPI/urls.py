from django.urls import path
from .views import Device_view

urlpatterns = [
    path('', Device_view.as_view()),
]
