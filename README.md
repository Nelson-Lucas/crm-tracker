# 🧭 CRM Tracker

Sistema de CRM para registro de atendimentos e gerenciamento de clientes. Desenvolvido por Nelson Lucas como parte do teste técnico para vaga de Desenvolvedor Full Stack Pleno/Sênior na Tracker.

## 📘 Visão Geral do Projeto

A aplicação permite:

- Autenticação via login, com tipos de usuário: Admin, Vendedor e Atendente.
- Criação de usuários, onde poderá criar com qualquer um desses tipos.
- Cadastro de clientes (restrito a Admins e Vendedores).
- Validação de dados dos clientes:
  - Nome, Email
  - Telefone no formato: (XX)9XXXXXXXX com 11 dígitos
- Listagem de clientes em cards, paginada com até 12 por página.
- Exclusão de clientes (apenas Admins).
- Registro de atendimentos com descrição e associação pelo nome do cliente.
- Histórico de atendimentos, também paginado com 12 registros por página.

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- SQLite
- JWT

### Frontend
- React
- Styled Components
- Axios

## 📂 Arquitetura e Documentação

O arquivo `crm-tracker.drawio` inclui o diagrama completo da aplicação, modelado com **Draw.io / Diagrams.net**, contendo:

- ✅ Fluxo de autenticação e login
- 👤 Criação de usuários com campos de nome, email, senha e tipo
- 📋 Registro e listagem de clientes com validações e paginação
- 📝 Registro de atendimentos vinculados ao cliente
- 🔁 Navegação entre telas e controles como botões e mensagens de sucesso

Esse mapeamento visual ajuda a entender:

- As **etapas e decisões do sistema**
- Como as **telas estão interligadas**
- A lógica por trás das **permissões por tipo de usuário**

> Para visualizar, basta abrir o arquivo no [diagrams.net](https://www.diagrams.net) ou importar no [Draw.io](https://app.diagrams.net).

## 🔐 Autenticação JWT

Após login, o backend retorna um token JWT com:

- id
- nome
- tipo de usuário

Token é armazenado e enviado em rotas protegidas via:

Authorization: Bearer <token>


As rotas verificam o token antes de conceder acesso.

## 📡 Endpoints da API

| Método | Rota                            | Descrição                          |
|--------|---------------------------------|------------------------------------|
| POST   | /api/login                      | Autentica usuário e retorna JWT    |
| POST   | /api/users                      | Cria novo usuário                  |
| POST   | /api/clients                    | Cadastra novo cliente              |
| GET    | /api/clients                    | Lista clientes (paginado)          |
| DELETE | /api/clients/:id                | Exclui cliente (somente Admin)     |
| POST   | /api/atendimentos               | Registra atendimento               |
| GET    | /api/atendimentos/:clienteId    | Lista atendimentos do cliente      |

## 🧑‍💻 Como executar o projeto

### Backend
Entrar na pasta do projeto e rodar os seguintes comandos:
cd backend
npm install
node server.js

### Frontend
Entrar na pasta do projeto e rodar os seguintes comandos:
cd frontend
npm install
npm start

Depois disso, é só abrir o navegador e acessar http://localhost:3000.

## 🤝 Como Contribuir

Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, siga os passos abaixo:

1. **Faça um fork** do repositório:
   (https://github.com/Nelson-Lucas/crm-tracker)

2. **Clone** o repositório forkado:
   ```bash
   git clone https://github.com/seu-usuario/crm-tracker.git
Crie uma branch para sua contribuição:

bash
git checkout -b minha-contribuicao
Realize os ajustes no código e depois os commits:

bash
git commit -m "Descrição clara da melhoria"
Envie para seu repositório remoto:

bash
git push origin minha-contribuicao
Abra um Pull Request explicando as mudanças propostas.

Antes de começar, verifique se sua alteração está alinhada com os objetivos do projeto. Sinta-se livre para abrir uma issue se quiser discutir ideias antes de implementar!

## 📄 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

Você pode:

- Usar livremente o código
- Modificar e adaptar conforme suas necessidades
- Compartilhar com outras pessoas
- Utilizar comercialmente

**Aviso:** É necessário manter o aviso de copyright original ao redistribuir o projeto.


