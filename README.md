# 📌 API de Tarefas com Usuários

Esta API permite gerenciar **usuários** e suas **tarefas**, com rotas para criação, listagem, atualização e exclusão.  
O projeto foi desenvolvido em **Node.js + Express + MySQL**.

---

## 🚀 Tecnologias
- Node.js
- Express
- MySQL2
- Nodemon (modo dev)
- CORS

---

## 📂 Estrutura de Pastas

api-tarefas-integracao/
│── src/
│ ├── app.js # Arquivo principal da aplicação
│ ├── config/
│ │ └── db.js # Conexão com banco de dados
│ ├── controllers/ # Controladores (lógica de entrada/saída)
│ ├── services/ # Regras de negócio
│ ├── routes/ # Rotas da API
│ ├── utils/ # Funções auxiliares
│── package.json
|── package-lock.json
│── README.md


---

## ⚙️ Instalação

1. Clone este repositório ou extraia o `.zip`:
   ```bash
   git clone <url-do-repositorio>
   cd api-tarefas-integracao

2. Clone este repositório ou extraia o `.zip`:
    npm install

3. Crie o banco de dados MySQL:
    CREATE DATABASE Tarefas_DB;
    USE Tarefas_DB;

    CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha varchar(50)
    );

    CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
    );

4. Configure seu .env (caso utilize):
    DB_HOST="localhost"
    DB_USER="root"
    DB_PASSWORD="sua_senha"
    DB_NAME="api_tarefas"

5. Inicie o servidor:
    npm run dev


---

## Rotas da API

1. Usuários
- GET /usuarios → Lista todos os usuários
- GET /usuarios/:id → Busca usuário por ID
- POST /usuarios → Cria um novo usuário
- PUT /usuarios/:id → Atualiza usuário existente
- DELETE /usuarios/:id → Remove usuário

2. Tarefas
- GET /tarefas → Lista todas as tarefas
- GET /tarefas/:id → Busca tarefa por ID
- GET /tarefas/usuario/:id_usuario → Lista todas as tarefas de um usuário
- POST /tarefas → Cria uma nova tarefa
- PUT /tarefas/:id → Atualiza tarefa existente
- DELETE /tarefas/:id → Remove tarefa

## Exemplo de Uso
Requisição para listar todas as tarefas do usuário ID = 1:
GET http://localhost:8000/tarefas/usuario/1

## Autor
## Desenvolvido por Marcio Junior, Caua Milfont & Lucas Figueredo