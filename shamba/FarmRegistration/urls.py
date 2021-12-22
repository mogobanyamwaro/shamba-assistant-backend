from django.urls import path
from .views import Farm_view

urlpatterns = [
    path('', Farm_view.as_view()),
]
