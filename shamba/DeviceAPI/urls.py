from django.urls import path
from DeviceAPI import views

urlpatterns = [
    path('', views.Device_view),
]
