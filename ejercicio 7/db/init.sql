CREATE TABLE IF NOT EXISTS greetings (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL
);

INSERT INTO greetings (message) VALUES
('¡Bienvenido!'),
('Docker + Postgres funcionando 👌'),
('Este es un dato de prueba');
