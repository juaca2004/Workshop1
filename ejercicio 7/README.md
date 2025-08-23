# Ejercicio 7 - Troubleshooting con Docker Compose (demo mínima)

## Levantar
```bash
docker compose up -d --build
```

## Probar
- Abre: http://localhost:8080
- Llama a la API:
  - `curl http://localhost:8080/api/hello`
  - `curl http://localhost:8080/api/db`
