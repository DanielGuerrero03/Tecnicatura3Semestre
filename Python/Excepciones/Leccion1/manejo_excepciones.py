try:
    10/0
except Exception as e:
    print(f'Ocurrio un error: {e}')

#error o excepcion es un cierre abrupto del programa.
from NumerosIgualesException import NumerosIgualesException
resultado = None

try:
    a = int(input('Digite el primer numero: '))
    b = int(input('Digite el segundo numero: '))
    if a == b:
            raise NumerosIgualesException('Son numeros igaules') #raise permite arrojar una excepcion
    resultado = a / b
except TypeError as e:
    print(f'TypeError Ocurrio un error {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError Ocurrio un error {type(e)}')
except Exception as e:
    print(f'Exceotion Ocurrio un error: {type(e)}')
#Division por cero error.
else:
    print('No se arrojo ninguna excepcion')
print(f'El resultado es :{resultado}')
print('seguimos...')
#