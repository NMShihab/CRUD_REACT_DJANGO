from django.urls import path,include
from .views import ContactViewSet
from rest_framework import  routers
app_name = "crudApi"

router = routers.DefaultRouter()
router.register('contact',ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
   
]