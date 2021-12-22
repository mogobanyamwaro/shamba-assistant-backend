from django.urls import path
from FarmRegistration import views

urlpatterns = [
    path('', views.Farm_view),
]
