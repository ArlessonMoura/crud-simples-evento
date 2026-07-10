# 🎪 API de gestão de convidados do Festival de Inovação

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-3.x-76D04B?logo=nodemon&logoColor=white)

Este projeto foi pensado como um desafio prático de backend para organizar o cadastro de convidados em um evento fictício. A proposta é construir uma API simples, mas com regras de negócio claras, persistindo os dados em um arquivo local e permitindo operações de leitura, busca, cadastro, atualização e remoção.

## 🌟 Cenário

Imagine que um festival está montando a programação de palestras e precisa manter um catálogo com os principais convidados. A API funciona como um painel interno para registrar informações básicas, validar dados e garantir que as operações sejam feitas de forma consistente.

## 🧠 O que você vai praticar

- Leitura e escrita de arquivos com Node.js e o módulo `fs`;
- Criação de rotas e middlewares com Express;
- Validação de dados recebidos nas requisições;
- Uso de autenticação simples por token;
- Organização de respostas HTTP com mensagens claras;
- Pensamento lógico para lidar com fluxo assíncrono e persistência local.

## 🎯 Objetivo do desafio

Você vai desenvolver uma API que simule uma pequena ferramenta administrativa para o evento. O foco não é apenas criar endpoints, mas também pensar em regras de negócio, mensagens de erro e consistência dos dados salvos.

## ⚙️ Funcionalidades esperadas

A aplicação deverá permitir:

- listar todos os convidados cadastrados;
- buscar um convidado por id;
- autenticar um usuário e gerar um token;
- cadastrar um novo convidado;
- editar as informações de um convidado existente;
- remover um convidado;
- buscar convidados pelo nome.

## 📋 Regras de negócio resumidas

- O arquivo `casting.json` será a base de persistência.
- As operações de leitura e escrita devem acontecer nesse arquivo.
- As rotas de criação, atualização e exclusão devem exigir um token válido.
- Os dados devem ser validados antes de serem salvos.
- A API deve responder com status HTTP apropriados e mensagens objetivas.

## 🛠️ Tecnologias do projeto

- Node.js — ambiente de execução para rodar aplicações JavaScript no backend.
- Express — framework para criar rotas e APIs web de forma simples.
- JavaScript — linguagem principal usada para implementar a lógica da aplicação.
- Nodemon — ferramenta que reinicia automaticamente o servidor quando há alterações no código.
- `fs` — módulo do Node para ler e escrever arquivos, como o `casting.json`.
- `crypto` — módulo usado para gerar tokens de forma segura.
- JSON — formato leve usado para armazenar e trocar dados entre o servidor e o cliente.

## 📝 Observações técnicas

- A maior parte das operações deve ser feita com `fs` e suas funções assíncronas.
- Se a porta `3000` estiver ocupada, pode ser necessário encerrar processos antigos com `killall node`.
- O projeto pode ser evoluído depois com organização em camadas, rotas separadas e tratamento mais robusto de erros.

## 🚀 Desenvolvimento

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `Git Clone git@github.com:ArlessonMoura/crud-simples-evento.git`.
- Entre na pasta do repositório que você acabou de clonar

1. Instale as dependências [**Caso existam**]

- `npm install`

1. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `seu-nome-modulo-back-end`
  - Exemplo: `git checkout -b thiago-deepweb-modulo-back-end`

1. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _thiago-deepweb_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _thiago-deepweb/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

1. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin thiago-deepweb-modulo-back-end`

1. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/ArlessonMoura/crud-simples-evento)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/ArlessonMoura/crud-simples-evento/pulls) e confira que o seu _Pull Request_ está criado

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

## Depois de terminar o desenvolvimento (opcional)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e me marque:
  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `o nome de meu perfil github`.

# Requisitos do projeto

## Visão geral da atividade

A proposta agora é transformar esse exercício em uma mini aplicação de gestão de convidados para um evento. A ideia é que você implemente uma API com operações básicas de cadastro, consulta e atualização, usando o arquivo local como banco de dados temporário.

## Regras gerais

1. Com exceção da rota de login, todas as operações devem ser feitas utilizando o módulo `fs` para ler e escrever no arquivo `casting.json`.
2. O arquivo `casting.json` deve funcionar como a base de dados da aplicação durante a execução.
3. Se a porta 3000 estiver ocupada, pode ser necessário encerrar processos antigos com `killall node`.

---

### 1 - Listar convidados: GET `/casting`

Crie uma rota para retornar todos os convidados cadastrados. A resposta deve ter status `200` e um array no corpo.

Se não houver registros, a resposta deve retornar um array vazio com status `200`.

### 2 - Buscar convidado por id: GET `/casting/:id`

Crie uma rota que localize um convidado pelo id informado na URL.

- Se encontrar, retorne status `200` com os dados do convidado.
- Se não encontrar, retorne status `404` com uma mensagem clara.

### 3 - Login: POST `/login`

Crie uma rota para autenticar um usuário e gerar um token simples de 16 caracteres.

A requisição deve receber um objeto com `email` e `senha`.

- O campo `email` é obrigatório e deve estar em formato válido.
- O campo `senha` é obrigatório e deve ter pelo menos 6 caracteres.

Em caso de erro, a API deve responder com status `400` e uma mensagem clara.

### 4 - Cadastrar convidado: POST `/casting`

Crie uma rota para incluir um novo convidado no arquivo. O corpo da requisição deve conter `nomeCompleto`, `idade` e `participacao`.

Exemplo de payload:

```json
{
  "nomeCompleto": "Lúcia Mendes",
  "idade": 31,
  "participacao": {
    "dataPresenca": "22/10/2024",
    "nota": 5
  }
}
```

A rota deve exigir um token válido no header. Se algum dado estiver inválido ou incompleto, devolva status `400` com uma mensagem objetiva. Se tudo estiver correto, responda com status `201` e o registro criado.

### 5 - Editar convidado: PUT `/casting/:id`

Crie uma rota para atualizar os dados de um convidado já cadastrado, sem mudar o identificador do registro.

A rota deve validar os mesmos campos da criação, como `nomeCompleto`, `idade` e `participacao`, e exigir autenticação. Se o convidado existir e os dados estiverem corretos, responda com status `200` e o cadastro atualizado.

### 6 - Remover convidado: DELETE `/casting/:id`

Crie uma rota para remover um convidado usando o id da URL.

A operação deve exigir token válido. Se for bem-sucedida, retorne status `200` com uma mensagem de confirmação.

### 7 - Buscar convidados por nome: GET `/casting/search`

Crie uma rota que filtre os convidados pelo termo informado no query param `q`.

- Se o parâmetro estiver vazio ou ausente, retorne todos os convidados como na listagem.
- Se não houver coincidências, retorne um array vazio com status `200`.
- A rota também deve exigir token válido.

---
