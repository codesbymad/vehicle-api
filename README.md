# Vehicle API

API RESTful para gerenciamento de veículos e operações de aluguel, desenvolvida com JavaScript, Node.js, Express, Sequelize e PostgreSQL.

## 📋 Sobre o projeto

O **Vehicle API** é uma API desenvolvida para gerenciar uma frota de veículos e suas operações de aluguel.

O projeto permite realizar o cadastro, consulta, edição e exclusão de veículos, além do gerenciamento de clientes, usuários e aluguéis.

A API também possui autenticação utilizando **JWT**, validações de dados, tratamento global de erros e documentação interativa com **Swagger/OpenAPI**.

## 🚀 Funcionalidades

### Veículos

* Cadastro de veículos
* Listagem de veículos
* Busca por ID
* Busca por placa
* Edição de veículos
* Exclusão de veículos
* Validação de placa duplicada
* Controle de status do veículo

### Clientes

* Cadastro de clientes
* Validação de dados obrigatórios

### Aluguéis

* Cadastro de aluguel
* Verificação da existência do veículo e do cliente
* Bloqueio de aluguel de veículo já alugado
* Validação das datas de aluguel
* Devolução do veículo
* Atualização automática do status do veículo

### Usuários

* Cadastro de usuários
* Autenticação com JWT
* Senhas armazenadas com hash utilizando bcrypt
* Validação de e-mail
* Controle de e-mail duplicado

## 🛠️ Tecnologias utilizadas

* **JavaScript**
* **Node.js**
* **Express**
* **Sequelize**
* **PostgreSQL**
* **JWT (JSON Web Token)**
* **bcrypt**
* **Swagger / OpenAPI**
* **Docker** — utilizado no ambiente de desenvolvimento
* **Render** — hospedagem da API
* **Neon** — banco de dados PostgreSQL em produção

## 📁 Estrutura do projeto

```text
vehicle-api/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   │   └── migrations/
│   ├── docs/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── .gitignore
├── .sequelizerc
├── package.json
└── README.md
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/codesbymad/vehicle-api.git
```

Entre no diretório:

```bash
cd vehicle-api
```

Instale as dependências:

```bash
npm install
```

## 🔐 Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=seu_host
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=seu_banco
JWT_SECRET=sua_chave_secreta
```

> O arquivo `.env` não deve ser enviado ao GitHub.

## 🗄️ Banco de dados

Após configurar as variáveis de ambiente, execute as migrations:

```bash
npm run migrate
```

As migrations são responsáveis pela criação das tabelas necessárias para o funcionamento da aplicação.

## ▶️ Executando a aplicação

Para iniciar a API localmente:

```bash
node --env-file=.env src/server.js
```

Por padrão, a aplicação utiliza a porta `3000`.

## 🔑 Autenticação

As rotas protegidas utilizam **JWT**.

Primeiro, é necessário realizar o login através do endpoint:

```text
POST /usuarios/login
```

Após receber o token, utilize-o no Swagger através do botão **Authorize**.

As requisições protegidas devem enviar o token no formato:

```text
Authorization: Bearer SEU_TOKEN
```

## 📚 Documentação da API

A API possui documentação interativa utilizando Swagger/OpenAPI.

**Swagger:**

[Swagger da Vehicle API](https://vehicle-api-1-1oeq.onrender.com/swagger/)

A documentação apresenta os endpoints disponíveis para veículos, clientes, aluguéis e usuários.

## 🌐 API em produção

A aplicação está hospedada gratuitamente no Render e utiliza PostgreSQL através do Neon.

**API:**

[Vehicle API — Produção](https://vehicle-api-1-1oeq.onrender.com/)

## 📌 Principais endpoints

### Usuários

| Método | Endpoint             | Descrição         |
| ------ | -------------------- | ----------------- |
| POST   | `/usuarios/cadastro` | Cadastrar usuário |
| POST   | `/usuarios/login`    | Realizar login    |

### Veículos

| Método | Endpoint                               | Descrição                |
| ------ | -------------------------------------- | ------------------------ |
| POST   | `/Produtos/cadastro`                   | Cadastrar veículo        |
| GET    | `/Produtos/todosProdutos`              | Listar veículos          |
| GET    | `/Produtos/buscarProdutoId/{id}`       | Buscar veículo por ID    |
| GET    | `/Produtos/buscarProdutoPlaca/{placa}` | Buscar veículo por placa |
| PUT    | `/Produtos/editar/{id}`                | Editar veículo           |
| DELETE | `/Produtos/deletar/{id}`               | Excluir veículo          |

### Clientes

| Método | Endpoint             | Descrição         |
| ------ | -------------------- | ----------------- |
| POST   | `/clientes/cadastro` | Cadastrar cliente |

### Aluguéis

| Método   | Endpoint                  | Descrição           |
| -------- | ------------------------- | ------------------- |
| POST     | `/alugueis/cadastro`      | Registrar aluguel   |
| POST | `/alugueis/devolver/{id}` | Registrar devolução |

> Os métodos e parâmetros exatos de cada operação podem ser consultados na documentação Swagger.

## 🧪 Validações e tratamento de erros

A API possui validações para impedir dados inválidos e regras de negócio inconsistentes, incluindo:

* Campos obrigatórios;
* Formato de e-mail;
* UUID inválido;
* Status de veículo inválido;
* Valor de diária inválido ou negativo;
* Datas de aluguel inválidas;
* Data de devolução anterior à data de início;
* Veículo inexistente;
* Cliente inexistente;
* Veículo já alugado;
* Placa duplicada;
* E-mail de usuário duplicado;
* Exclusão de veículo com histórico de aluguel.

Também existe um middleware global para tratamento de exceções e retorno de mensagens de erro com códigos HTTP apropriados.

## 📄 Licença

Este projeto está distribuído sob a licença MIT.
