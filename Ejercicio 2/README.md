# Ejercicio 2: Comunicación Entre Contenedores en Diferentes Redes

Objetivo: Demostrar comprensión del aislamiento de red y comunicación entre
redes.
Descripción:
1. Crea tres redes docker: red_a , red_b y red_c
2. Despliega un contenedor alpha en red_a
3. Despliega un contenedor beta en red_b
4. Despliega un contenedor gamma en red_c
5. Despliega un contenedor delta que pueda comunicarse con todos los
demás
6. Configura todo para que:
- alpha pueda comunicarse con delta pero no con los demás
- beta pueda comunicarse con delta pero no con los demás
- gamma pueda comunicarse con delta pero no con los demás
- delta puede comunicarse con todos

Prueba de éxito:
Desde cada contenedor, intenta hacer ping a los demás y confirma el patrón de
conectividad esperado.