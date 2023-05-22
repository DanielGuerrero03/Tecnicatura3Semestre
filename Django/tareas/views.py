from django.shortcuts import render, redirect
from .models import Tareas

# Create your views here.
def listar_tareas(request):
    tareas = Tareas.objects.all()
    return render(request, 'listar_tareas.html', {"tareas": tareas})

def crear_tareas(request):
    print(request.POST)
    tarea= Tareas(titulo=request.POST["Tarea"], descripcion=request.POST["descripcion"])
    tarea.save()
    return redirect('/tareas/')
def eliminar_tareas(request, tareas_id):
    eliminar_tarea = Tareas.objects.get(id=tareas_id)
    eliminar_tarea.delete()
    return redirect('/tareas/')
