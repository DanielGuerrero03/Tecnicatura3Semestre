import psycopg2# Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s ,%s ,%s)'
            valores = ("Juan Carlos", "Roldan", "rcarlos@gmail.com") # Es una tupla
            cursor.execute(sentencia, valores) # De est manera ejecutamos la sentencia
            registros_insertados = cursor.rowcount
            print(f"Los registros insertados son: {registros_insertados}")

except Exception as e:
    print(f"Ocurrio un error: {e}")
finally:
    conexion.close()

# https://www.psycopg.org/docs/usage.html