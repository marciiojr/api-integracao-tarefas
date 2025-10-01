import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import tarefaRoutes from "./routes/tarefaRoutes.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Tarefas rodando!");
});

app.use("/usuarios", usuarioRoutes);
app.use("/tarefas", tarefaRoutes);

app.listen(port, () => {
  console.log(`🦠 Servidor rodando em http://localhost:${port}`);
});
