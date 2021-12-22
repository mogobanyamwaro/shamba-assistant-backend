from django.urls import path
from FarmerRegistration import views

urlpatterns = [
    path('', views.Farmer_view),
]
