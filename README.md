<h1 align="center">V-Todo</h1>

<div align="center">
   <a href="https://github.com/JohnPetros">
    <img alt="Made by JohnPetros" src="https://img.shields.io/badge/made%20by-JohnPetros-blueviolet">
   </a>
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/JohnPetros/v-todo">
   <a href="https://github.com/JohnPetros/v-todo/commits/main">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/JohnPetros/v-todo">
   </a>
  </a>
   </a>
   <a href="https://github.com/JohnPetros/v-todo/blob/main/LICENSE.md">
    <img alt="GitHub License" src="https://img.shields.io/github/license/JohnPetros/v-todo">
   </a>
    <img alt="Stargazers" src="https://img.shields.io/github/stars/JohnPetros/v-todo?style=social">
</div>
<br>

## 🖥️ Sobre o projeto

**V-Todo** é app de lista de tarefas simples, ou seja, é possível adicionar, remover e atualizar uma tarefa, bem como é possível filtrar as tarefas por status de conclusão. Esse projeto foi realizado com o intuito de aprender os conceitos básicos de desenvolvimento web com [Vue](https://vuejs.org/).

---

## 📖 Guia de instalação

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Nodejs](https://www.python.org/) pelo menos acima da versão 18.

### Close o repositório

```bash
git clone https://github.com/JohnPetros/v-todo.git
```

### Acesse a pasta do projeto

```bash
cd v-todo
```

### Instale as dependências

```bash
npm install
```

### Execute as duas aplicações ao mesmo tempo

```bash
npm run dev
```

> O Frontend estará rodando em `http://localhost:3000`
> O Backend estará rodando em `http://localhost:3333`

---

## 🛣 Rotas do backend

|                                                                    Tipo | Rota `/task`                         | Ação                            |
| ----------------------------------------------------------------------: | :----------------------------------- | :------------------------------ |
| [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]()    | `/tarefas`                           | Buscar todas as tarefas         |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]()   | `/tarefas`                           | Cadastra uma tarefa             |
| [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]()    | `/tarefas/:id`                       | Atualiza uma tarefa             |
| [![](https://img.shields.io/badge/PATCH-F48F43?style=for-the-badge)]()  | `/tarefas/status/:id`                | Atualiza o status de uma tarefa |
| [![](https://img.shields.io/badge/DELETE-CD853F?style=for-the-badge)]() | `/tarefas/:id`                       | Deleta uma tarefa               |

---

<p align="center">
  Made with 💜 by John Petros 👋🏻
</p>