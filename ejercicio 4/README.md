@"

\# Ejercicio 4: Persistencia y Compartición de Datos



\*\*Objetivo:\*\* Demostrar el uso avanzado de volúmenes para persistencia y compartición de datos.



\## Descripción



1\. Crea un contenedor `writer` que escriba la fecha actual cada 10 segundos en un archivo `/data/timestamp.log`.

2\. Crea un contenedor `reader` que lea y muestre el contenido actual del archivo cada vez que ejecutes un comando.

3\. Si detienes y eliminas ambos contenedores, al recrearlos deben poder seguir accediendo a los datos anteriores.

4\. Implementa una solución que permita hacer backup del volumen sin detener los contenedores.



\### Prueba de éxito

\- Los datos persisten entre reinicios de contenedores.  

\- Puedes crear un backup del volumen y restaurarlo en otro volumen.

"@ | Out-File -Encoding utf8 README.md



