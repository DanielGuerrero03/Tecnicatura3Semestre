from django.urls import path
from .views import list_task, create_task

urlpatterns = {
    path('', list_task),
    path('new/', create_task, name="createtask"),
}