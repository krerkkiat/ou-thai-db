from django.conf.urls import url, include
from django.contrib import admin

from apiv1 import views

app_name = 'apiv1'
urlpatterns = [
    url(r'^search/$', views.SearchAPIView.as_view(), name='search')
]
