import { getConnection } from '../config/db.js';

export async function executarSQL(query, params = []) {
    const conn = await getConnection();
    try {
        const [result] = await conn.execute(query, params);
        return result;
    } finally {
        conn.release();
    }
}