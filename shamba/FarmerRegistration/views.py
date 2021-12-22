from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FarmerModel
from .serializers import FarmerSerializer


@api_view(['GET', 'POST'])
def Farmer_view(request):
    """
    List all device objects, or create a new Device data.
    """
    if request.method == 'GET':
        Farmer = FarmerModel.objects.all()
        serializer = FarmerSerializer(Farmer, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FarmerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
