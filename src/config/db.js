import mysql from 'mysql2/promise';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL não configurado nas variáveis de ambiente");
}

export const pool = mysql.createPool(DATABASE_URL);

export async function getConnection() {
  return await pool.getConnection();
}
