from django.urls import path
from .views import listar_tareas, crear_tareas, eliminar_tareas

urlpatterns = [
    path('', listar_tareas),
    path('nueva/', crear_tareas, name= 'nueva_tarea'),
    path('eliminar_tareas/<int:tareas_id>/', eliminar_tareas, name= 'eliminar_tareas')
]