from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import DeviceModel
from .serializers import DeviceSerializer


@api_view(['GET', 'POST'])
def Device_view(request):
    """
    List all device objects, or create a new Device data.
    """
    if request.method == 'GET':
        DeviceAPI = DeviceModel.objects.all()
        serializer = DeviceSerializer(DeviceAPI, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DeviceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
