import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || "db";
const DB_USER = process.env.DB_USER || "app";
const DB_PASSWORD = process.env.DB_PASSWORD || "secret";
const DB_NAME = process.env.DB_NAME || "appdb";

const pool = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

const app = express();

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde la API 👋" });
});

app.get("/api/time", (req, res) => {
  res.json({ now: new Date().toISOString() });
});

app.get("/api/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, message FROM greetings ORDER BY id ASC LIMIT 5");
    res.json({ rows: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
