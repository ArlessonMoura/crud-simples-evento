# Introdução ao backend com Node.js e Express

Este material resume os principais conceitos vistos na aula introdutória sobre backend, requisições HTTP e rotas com Express.

## 1. O que é uma requisição HTTP?

Uma requisição HTTP é a forma como um cliente comunica com um servidor. Ela pode ser usada para buscar, criar, atualizar ou excluir dados.

A estrutura básica de uma requisição é:

- linha de requisição
- headers
- body (opcional)

### Exemplo de requisição

```http
GET /users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
```

### Exemplo de resposta

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  { "id": 1, "name": "Ana" }
]
```

## 2. Verbos HTTP

Os verbos HTTP indicam a intenção da requisição.

| Verbos  | Função                            |
| ------- | --------------------------------- |
| GET     | Buscar dados                      |
| POST    | Criar novos dados                 |
| PUT     | Atualizar um recurso inteiro      |
| PATCH   | Atualizar parcialmente um recurso |
| DELETE  | Remover um recurso                |
| HEAD    | Buscar apenas os headers          |
| OPTIONS | Mostrar os métodos permitidos     |

### Observação importante

- GET não deve alterar o estado do servidor.
- POST, PUT, PATCH e DELETE geralmente alteram dados.

## 3. Estrutura de uma requisição

### Linha de requisição

Contém o verbo HTTP, o caminho e a versão do protocolo.

Exemplo:

```http
POST /users HTTP/1.1
```

### Headers

São informações adicionais enviadas junto com a requisição.

```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <token>"
}
```

### Body

O body é usado para enviar dados no corpo da requisição, geralmente em métodos como POST e PUT.

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

## 4. Path parameters

Path parameters são valores dinâmicos incluídos na URL.

Exemplo:

```text
http://localhost:3000/users/123
```

Nesse caso, `123` é o identificador do recurso.

### Exemplo com Express

```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});
```

Você também pode ter mais de um parâmetro:

```javascript
app.get('/users/:userId/orders/:orderId', (req, res) => {
  const { userId, orderId } = req.params;
  res.json({ userId, orderId });
});
```

## 5. Query parameters

Query parameters são usados para filtrar ou modificar a resposta, e aparecem após o `?` na URL.

Exemplo:

```text
http://localhost:3000/products?category=electronics&sort=price
```

### Exemplo com Express

```javascript
app.get('/products', (req, res) => {
  const category = req.query.category;
  const sort = req.query.sort;

  res.json({ category, sort });
});
```

## 6. Body parameters

Body parameters são enviados no corpo da requisição e são ideais para dados sensíveis, como senha.

### Exemplo com Express

```javascript
app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  res.json({ name, email });
});
```

> Para trabalhar com JSON no Express, é comum usar `express.json()` para permitir o parse do corpo da requisição.

## 7. Headers

Os headers podem enviar informações importantes para o servidor, como autenticação e tipo de conteúdo.

Exemplo:

```javascript
app.get('/users', (req, res) => {
  const token = req.headers.authorization;

  res.json({ token });
});
```

## 8. Resposta HTTP

Assim como a requisição, a resposta também possui estrutura.

Ela pode incluir:

- linha de status
- headers
- body

Exemplos de status:

- `200 OK` → sucesso
- `201 Created` → recurso criado
- `400 Bad Request` → erro de validação
- `404 Not Found` → recurso não encontrado
- `401 Unauthorized` → não autorizado
- `500 Internal Server Error` → erro do servidor

## 9. Exemplo completo com Express

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json([{ id: 1, name: 'Ana' }]);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id, name: 'Ana' });
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ name, email });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

## 10. Boas práticas

- Use o método correto para cada operação.
- Valide os dados recebidos.
- Não envie dados sensíveis pela URL.
- Use headers para autenticação.
- Retorne mensagens e status HTTP claros.

## Resumo rápido

- Path parameters identificam um recurso específico.
- Query parameters alteram a forma como a busca é feita.
- Body parameters enviam dados no corpo da requisição.
- Headers carregam metadados e autenticação.
- Status HTTP ajudam a comunicar o resultado da operação.
