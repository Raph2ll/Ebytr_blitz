# Boas vindas ao repositório do processo seletivo Ebytr

## Contexto

Esse projeto foi desenvolvido para uma vaga de fullstack na empresa [`Ebytr`](www.betrybe.com).

A proposta é desenvolver uma aplicação capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade...

Foi combinado com a **Ebytr** utilizar a stack [`MERN`](https://www.mongodb.com/mern-stack) para resolver o problema de organização e produtividade da empresa.

---

## O que deverá ser desenvolvido

Nesse processo seletivo eu serei responsavel por criar uma aplicação de lista de tarefas, integrando do back-end ao front-end utilizando Arquitetura em Camadas.

---

## Funcionalidades da aplicação **CRUD**

* Visualizar a lista de tarefas;

  * Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;

* Inserir uma nova tarefa na lista;

* Remover uma tarefa da lista;

* Atualizar uma tarefa da lista;

* A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

---

## Como instalar

### Pre-requisitos para rodar o projeto **MERN**

* MongoDb
* NPM

### Clone o repositório

* Git clone

```Bash
git@github.com:Raph2ll/Ebytr_blitz.git
```

* Entre na pasta do repositório que você acabou de clonar:

```Bash
cd Ebyrt_blitz/Back-end/
```

* Instale as dependências:

```Bash
npm install
```

* Inicie a aplicação:

```Bash
npm start
```

* O servidor inciará na porta:3001, então segue o link:

```Bash
http://localhost:3001
```

## Modo de utilização

### A API roda em uma 1 rota

* **[POST]** ./tasks

```Json
{
  "task": "Fazer atividades físicas"
}
```

Cria uma tarefa

```Json
{
	"_id": "620d8fd26b483949c661132b",
	"task": "Fazer atividades físicas",
	"date": "16-02-2022 20:29:07"
}
```
Retorno


* **[GET]** ./tasks

```Json
[
 {
  "_id": "620d88ca6b483949c6611327",
  "task": "Levar o cachorro pra passear",
  "date": "16-02-2022 20:29:07"
 },
 {
  "_id": "620d88d46b483949c6611328",
  "task": "Caminhar",
  "date": "16-02-2022 20:29:07"
 },
 {
  "_id": "620d88e26b483949c6611329",
  "task": "Beber água",
  "date": "16-02-2022 20:29:07"
 },
 {
  "_id": "620d88ec6b483949c661132a",
  "task": "Jogar Xadrez",
  "date": "16-02-2022 20:29:07"
 }
 {
	"_id": "620d8fd26b483949c661132b",
	"task": "Fazer atividades físicas",
	"date": "16-02-2022 20:29:07"
}
]
```

Lista todas as tarefas

* **[GET]** ./tasks:id

```LocalHost
http://localhost:3001/tasks/620d88e26b483949c6611329
```

Lista uma tarefa por id

```Json
{
	"_id": "620d88e26b483949c6611329",
	"task": "Beber água",
	"date": "16-02-2022 20:29:07"
}
```

Retorno


* **[PUT]** ./tasks:id

```Json
http://localhost:3001/tasks/620d88ec6b483949c661132a
{
	"task": "Jogar LOL"
}
```

Altera uma tarefa

```Json
{
	"_id": "620d88ec6b483949c661132a",
	"task": "Jogar LOL",
	"date": "16-02-2022 20:29:07"
}
```

Retorno

* **[DELETE]** ./tasks:id

```Json
http://localhost:3001/tasks/620d88ec6b483949c661132a
```

Deleta uma tarefa

## Próximos passos


* Implementar o **front-end + react**

* Deploy no **Heroku** + PM2

* Implementar **Socket.io** para adicionar status as tarefas

* Testes de integração

* Implementação do **Swagger** para documentação da API

* Adicionar uma página de **LOGIN/REGISTER**

* Token de acesso **JWT**


## Autor

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/Raph2ll"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66336767?v=4" width="100px;" alt="Raphael"/><br /><sub><b>Raphael</b></sub></a><br /><a href="https://github.com/Raph2ll" title="GitHub Raphael"><img src="https://img.shields.io/badge/-GitHub-gray?style=flat&logo=github" alt="GitHub"/></a><br /><a href="https://www.linkedin.com/in/Raph2ll/" title="Linkedin Raphael"><img src="https://img.shields.io/badge/-Linkedin-informational?style=flat&logo=linkedin" alt="Linkedin Raphael"/></a></td>
</table>

<p align="center">Obrigado pela oportunidade Ebyrt esse projeto foi feito com muito ❤️, empenho, esforço.</>
