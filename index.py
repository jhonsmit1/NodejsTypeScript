import numpy as np

fx  = lambda x: x**3 - 5*x**2 + 3*x + 9  
dfx = lambda x: 3*x**2 - 10*x + 3        

x0 = 9  
tolera = 0.001  

tabla = []
tramo = abs(2*tolera)
# print(tramo)
xi = x0
while (tramo >= tolera):
    print(tramo)
    xnuevo = xi - fx(xi)/dfx(xi)
    print('xnuevo', xnuevo)
    print('xi',xi)
    tramo  = abs(xnuevo - xi)
    tabla.append([xi, xnuevo, tramo])
    xi = xnuevo


tabla = np.array(tabla)
n = len(tabla)

# SALIDA
print(['xi', 'xnuevo', 'tramo'])
np.set_printoptions(precision = 4)
print(tabla)
print('Raíz aproximada en: ', xi)
print('Con error de: ', tramo)
