# Declaramos una variable
try:
    archivo = open("prueba.txt", "w", encoding="utf8") # La w es de write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Los acentos son importantes para las palabras\n")
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write("# Las letras son:\n'r' read leer, \n'a' append anexa, \n'w' write escribe, \n'x' crea un archivo")
    archivo.write("\nt esta es para texto o text, \nb esto es para binario o binary, \nw+ leer y escribe son iguales r+\n")
    archivo.write("Con esto terminamos")
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo
# archivo.write("Todo quedo perfecto"): este es un error ya que el archivo esta cerrado.
