from django.shortcuts import render
from rest_framework import  viewsets
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .serializers import  ContactSerializer
from .models import  Contact

# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer