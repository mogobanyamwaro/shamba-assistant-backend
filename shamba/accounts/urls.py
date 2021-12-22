from django.urls import path
# from . import SignupView
from accounts import views

urlpatterns = [
    path('signup', views.SignupView.as_view()),
]
