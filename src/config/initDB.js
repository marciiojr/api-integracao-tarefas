import { pool } from "./db.js";

async function init() {
  try {
    // Criar tabela usuarios
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(100) NOT NULL
      );
    `);

    // Criar tabela tarefas
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tarefas (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(200) NOT NULL,
        descricao TEXT,
        id_usuario INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE
      );
    `);

    console.log("Tabelas criadas com sucesso!");
    process.exit(0);
  } catch (err) {
    console.error("Erro ao criar tabelas:", err);
    process.exit(1);
  }
}

init();
