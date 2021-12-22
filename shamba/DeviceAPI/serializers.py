from rest_framework import serializers
from .models import DeviceModel


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceModel
        fields = '__all__'
