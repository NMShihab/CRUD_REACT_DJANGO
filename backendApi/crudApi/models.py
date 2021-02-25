from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    email = models.EmailField(max_length = 200)
    phone = PhoneNumberField(unique = True)
    
