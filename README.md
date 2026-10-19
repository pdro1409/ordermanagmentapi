# Order Management API

API de gerenciamento de pedidos construída com Node.js, TypeScript e
Express.

## Requisitos

- Node.js 20 ou superior
- npm
- Docker e Docker Compose (para executar o PostgreSQL)

## Instalação

Clone o projeto, entre na pasta e instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a conexão do banco:

```env
DATABASE_URL=postgresql://postgres:postgres_dev@localhost:5432/order_management
```

## Banco de dados

Inicie o PostgreSQL com:

```bash
docker compose up -d
```

O banco será executado com os seguintes dados:

| Configuração | Valor |
| --- | --- |
| Container | `order-management-db` |
| Banco | `order_management` |
| Usuário | `postgres` |
| Senha | `postgres_dev` |
| Porta | `5432` |

Os dados são persistidos no volume Docker `postgres_data`.

Para parar o banco:

```bash
docker compose down
```

## Desenvolvimento

Execute a API em modo de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado na porta `3000`. O Nodemon observa os arquivos
TypeScript em `src/` e reinicia a aplicação automaticamente após alterações,
sem gerar arquivos JavaScript.

## Testes

Execute os testes com:

```bash
npm test
```

## Endpoints

### Verificar saúde da API

```http
GET /health
```

Resposta:

```json
{
  "status": "ok",
  "service": "order-management-api"
}
```

Rotas inexistentes retornam `404` com o caminho solicitado. Erros internos
retornam `500`.

## Estrutura principal

```text
src/
├── config/
├── database/
├── errors/
├── middlewares/
├── modules/
└── test/
```
