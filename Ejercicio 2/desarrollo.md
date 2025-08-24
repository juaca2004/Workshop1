# Informe ejercicio 2

Tenesmos que crear 3 contenedores y 3 redes independientes

usamos estos comandos para levantar los contenedores y las redes 

# 1. Crear las redes
```
docker network create red_a
docker network create red_b
docker network create red_c
```

# 2. Contenedor alpha en red_a
```
docker run -dit --name alpha --network red_a alpine sh
```

# 3. Contenedor beta en red_b
```
docker run -dit --name beta --network red_b alpine sh
```

# 4. Contenedor gamma en red_c
```
docker run -dit --name gamma --network red_c alpine sh
```

# 5. Contenedor delta que pueda comunicarse con todos
```
docker run -dit --name delta --network red_a alpine sh
```

# Conectar delta a las demás redes
```
docker network connect red_b delta
docker network connect red_c delta
```


![Contenedore](/src/Ej2docker.png)
![network](/src/networkej2.png)


