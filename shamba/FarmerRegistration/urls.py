from django.urls import path
from .views import Farmer_view

urlpatterns = [
    path('', Farmer_view.as_view()),
]
