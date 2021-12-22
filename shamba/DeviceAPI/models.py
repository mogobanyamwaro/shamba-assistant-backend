from django.db import models
from datetime import datetime


class DeviceModel(models.Model):
    potassium = models.CharField(max_length=200)
    phosphorus = models.CharField(max_length=100)
    Nitrogen = models.CharField(max_length=100)
    Moistue = models.TextField(max_length=100)
    Longitude = models.CharField()
    Latitude = models.CharField()
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')

    def __str__(self):
        return self.Latitude
