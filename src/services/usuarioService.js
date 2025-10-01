import { executarSQL } from "../utils/executarSQL.js";

export const usuarioService = {
  async login(email, senha) {
    const result = await executarSQL(
      "SELECT * FROM usuarios WHERE email=$1 AND senha=$2",
      [email, senha]
    );
    return result.rows;
  },

  async listar() {
    const result = await executarSQL("SELECT * FROM usuarios");
    return result.rows;
  },

  async buscarPorId(id) {
    const result = await executarSQL("SELECT * FROM usuarios WHERE id=$1", [id]);
    return result.rows;
  },

  async criar(nome, email, senha) {
    const result = await executarSQL(
      "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)",
      [nome, email, senha]
    );
    return result;
  },

  async atualizar(id, nome, email, senha) {
    const result = await executarSQL(
      "UPDATE usuarios SET nome=$1, email=$2, senha=$3 WHERE id=$4",
      [nome, email, senha, id]
    );
    return result;
  },

  async deletar(id) {
    const result = await executarSQL("DELETE FROM usuarios WHERE id=$1", [id]);
    return result;
  }
};
