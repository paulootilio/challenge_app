Sobre
========
Challege App

<!-- Requisitos -->
## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Docker**](https://www.docker.com/) para rodar o projeto.

<!-- Começando -->
## :gear: Começando

instruções sobre como configurar o projeto localmente.
```bash
# Entrar no diretório da aplicação:
  $ cd challege_app

  # buildar a imagem:
  $ docker build -t challenge_app:dev .

  # Criar container e rodar a aplicação:
  $ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm challenge_app:dev
```
Acessar aplicação: [**localhost:3001**](http://localhost:3001/)

Feito por Paulo Otilio 👋🏻 [Get in touch!](https://github.com/paulootilio)