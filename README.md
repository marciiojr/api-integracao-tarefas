# API de Tarefas - pronta para deploy no Render

Alterações principais feitas:
- Estrutura MVC (controllers, services, routes) mantida.
- Conexão com MySQL via pool (`mysql2/promise`) usando variáveis de ambiente.
- Uso de prepared statements para evitar SQL injection.
- Suporte a SSL CA via variável de ambiente `DB_CA` (conteúdo PEM em base64) — ideal para conectar ao Aiven com `ssl-mode=REQUIRED`.
- `.env.example` adicionado com as variáveis necessárias.

**Como implantar no Render (resumo):**
1. Envie este repositório para um GitHub repo.
2. No Render, crie um novo **Web Service** e aponte para o repo.
3. Configure as Environment Variables (ou use Secret Files para o certificado CA). Render permite **Secret Files** e Environment Variables no painel. (Veja docs do Render)
4. Defina o build/start commands: `npm install` e `npm start`.
5. Se for usar o certificado CA do Aiven, envie-o como Secret File no Render e coloque seu conteúdo base64 em `DB_CA`.