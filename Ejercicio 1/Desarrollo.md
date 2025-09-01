# Informe del ejercicio 1
## organizacion
Se creó para el ejercicio 1 

3 carpetas con sus respectivos dockerfiles
```
EJERCICIOS DOCKER/
|  └── Ejercicio 1
|    |    ├── api
|    |    |   └── Dockerfile
|    |    ├── db
|    |    |   └──  Dockerfile
|    |    └── Frontend
|    |        ├──  Dockerfile
|    |        └──  index.html 
|    |    
|    ├── Desarrolo.md     
|    └── README.md
|        
```
## iniciamos con el frontend 

Creamos dos archivos, el dockerfile y el index.html 

```
├──  Frontend
     ├──  Dockerfile
     └──  index.html 
```
PD: El contenido del html no es relevante en este ejercico, entonces que solo imprima un texto, está bien 

Procedemos a buildear el frontend con este comando

```
docker build -t frontend ./frontend
```

Despues de haber creado estos dos archivos, tenemos que crear una red, este caso, la llamaermos frontend_net con el comando 
```
docker network create frontend_net
```

Una vez creado lo corremos con este comando

```
docker run -d --name frontend --network frontend_net -p 8080:80 frontend
```

Con etse comando estamos garantizando que el webserver nginx escuche por el puerto 8080 de nuestra maquina y se comunique por el puerto 80 del contenedor 


![Ejecucion de front](/src/frontview.png)

## Montaje de una API con httpd
```
├──  api
     └──  Dockerfile
     
```
En este caso existen dos posibilidades de montar el api, con una linea de comandos o creando el dockerfile ya que en este ejercicio solo necesitamos una api funcional basica, no tenemos que configurar mas factores

entonces podemos hacer lo siguiente 

por comando
```
docker run -d --name api httpd:alpine
```

o por el dockerfile 

```
# Dockerfile

FROM httpd:alpine

# Página básica
RUN echo '<h1>Hola, soy la API</h1>' > /usr/local/apache2/htdocs/index.html
```
Despues de buildear el dockerfile, necesitamos crear la red interna con este comando

```
docker network create --internal api_net
     
```
Finalmente se levanta el contenedor y se conecta con la red creada 


```
docker run -d --name api --network api_net api

     
```

PD: Concepto rápido

Una red normal en Docker (bridge) permite que los contenedores tengan salida a internet y se resuelvan por nombre.

Una red creada con --internal NO tiene salida a internet; los contenedores solo pueden hablar entre sí.

## montaje db

```
├──  db
     └──   Dockerfile
     
```
Igual que con la API se puede levantar de dos maneras por dockerfile o por comando

```
# por comando

docker run -d --name db --network api_net redis:alpine

     
```


```
# por dockerfile

FROM redis:alpine
# Página básica
RUN echo '<h1>Hola, soy Redis</h1>' > /data/index.html

```
## Comprobacion
![testeo](/src/pingEJ1.png)
