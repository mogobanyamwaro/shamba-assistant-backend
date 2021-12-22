from django.db import models
from datetime import datetime


class FarmModel(models.Model):
    name = models.CharField(max_length=200)
    farm_id = models.CharField(max_length=100)

    def __str__(self):
        return self.name
