import { executarSQL } from "../utils/executarSQL.js";

export const tarefaService = {
  async listar() {
    const result = await executarSQL("SELECT * FROM tarefas");
    return result.rows;
  },

  async buscarPorId(id) {
    const result = await executarSQL("SELECT * FROM tarefas WHERE id=$1", [id]);
    return result.rows;
  },

  async listarPorUsuario(id_usuario) {
    const result = await executarSQL("SELECT * FROM tarefas WHERE id_usuario=$1", [id_usuario]);
    return result.rows;
  },

  async criar(titulo, descricao, id_usuario) {
    const result = await executarSQL(
      "INSERT INTO tarefas (titulo, descricao, id_usuario) VALUES ($1, $2, $3)",
      [titulo, descricao, id_usuario]
    );
    return result;
  },

  async atualizar(id, titulo, descricao, id_usuario) {
    const result = await executarSQL(
      "UPDATE tarefas SET titulo=$1, descricao=$2, id_usuario=$3 WHERE id=$4",
      [titulo, descricao, id_usuario, id]
    );
    return result;
  },

  async deletar(id) {
    const result = await executarSQL("DELETE FROM tarefas WHERE id=$1", [id]);
    return result;
  }
};
