import { pool } from "../config/db.js";

export async function executarSQL(query, params = []) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result; // result.rows para SELECT, result.rowCount para INSERT/UPDATE/DELETE
  } finally {
    client.release();
  }
}
