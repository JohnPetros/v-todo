<template>
  <main class="container">
    <img src="/images/bg-desktop-light.jpg" alt="" class="background" />
    <h1 class="title">V-Todo</h1>

    <CreateTodoInput @create="handleCreateTodo" @error="handleShowError" />

    <ErrorMessage
      v-show="errorMessage"
      :message="errorMessage"
      @close="handleErrorMessageClose"
    />

    <ul v-if="!isLoading" class="todos-list">
      <li v-for="todo in todos" :key="todo.id">
        <Todo
          :id="todo.id"
          :name="todo.name"
          :is-done="todo.isDone"
          @delete="handleDeleteTodo"
          @update="handleUpdateTodo"
          @update:status="handleUpdateTodoStatus"
        />
      </li>
      <li class="todo-list-footer">
        <p class="todos-count">{{ todos.length }} tarefas</p>
        <div>
          <button
            :class="{
              'filter-button': true,
              active: this.activeFilter === 'all',
            }"
            @click="() => handleListTodosFilter('all')"
          >
            Todos
          </button>
          <button
            :class="{
              'filter-button': true,
              active: this.activeFilter === 'done',
            }"
            @click="() => handleListTodosFilter('done')"
          >
            Concluídas
          </button>
          <button
            :class="{
              'filter-button': true,
              active: this.activeFilter === 'undone',
            }"
            @click="() => handleListTodosFilter('undone')"
          >
            Não concluídas
          </button>
        </div>
      </li>
    </ul>
    <div v-else class="loading">
      <Spinner />
    </div>
  </main>
</template>

<script>
import CreateTodoInput from "./components/create-todo-input.vue";
import ErrorMessage from "./components/error-message.vue";
import Todo from "./components/todo.vue";
import Spinner from "./components/spinner.vue";

export default {
  components: {
    CreateTodoInput,
    Todo,
    ErrorMessage,
    Spinner,
  },
  methods: {
    async listTodos(queryParam = "") {
      this.isLoading = true;

      const response = await fetch(
        `http://localhost:3000/tarefas${queryParam}`
      );
      const data = await response.json();
      this.todos = data;
      this.isLoading = false;
    },

    async handleCreateTodo(todo) {
      this.todos.push(todo);
    },

    async handleUpdateTodo(todo) {
      const response = await fetch(`http://localhost:3000/tarefas/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        const data = await response.json();
        this.handleShowError(data.message);
      }

      await this.listTodos();
    },

    async handleUpdateTodoStatus(todoId, isTodoDone) {
      const response = await fetch(
        `http://localhost:3000/tarefas/status/${todoId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isDone: isTodoDone }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        this.handleShowError(data.message);
      }

      await this.listTodos();
    },

    async handleDeleteTodo(todoId) {
      await fetch(`http://localhost:3000/tarefas/${todoId}`, {
        method: "DELETE",
      });

      await this.listTodos();
    },

    async handleListTodosFilter(activeFilter) {
      switch (activeFilter) {
        case "all":
          await this.listTodos();
          this.activeFilter = "all";
          break;
        case "done":
          await this.listTodos("?status=true");
          this.activeFilter = "done";
          break;
        case "undone":
          await this.listTodos("?status=false");
          this.activeFilter = "undone";
      }
    },

    handleShowError(errorMessage) {
      this.errorMessage = errorMessage;

      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
    },

    handleErrorMessageClose() {
      this.errorMessage = "";
    },
  },

  data() {
    return {
      todos: [],
      errorMessage: "",
      isLoading: true,
      activeFilter: "all",
    };
  },

  mounted() {
    this.listTodos();
  },
};
</script>

<style scoped>
main.container {
  max-width: 560px;
  margin: 0 auto;
  padding: 6rem 0;
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;

  object-fit: cover;
  width: 100%;
}

.title {
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--light-theme-very-light-gray);
  letter-spacing: 8px;
  margin-bottom: 1.2rem;
}

.loading {
  display: grid;
  place-content: center;

  width: 100%;
  height: 20rem;
}

.todos-list {
  margin-top: 2.4rem;
  border-radius: 8px;

  overflow: hidden;

  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.todo-list-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.2rem;
}

.todos-count {
  font-size: 1rem;
  font-weight: 600;

  color: var(--light-theme-dark-grayish-blue);
}

.filter-button {
  background: transparent;
  color: var(--light-theme-dark-grayish-blue);
  font-weight: 700;
}

.filter-button.active {
  color: var(--primary-bright-blue);
}

.filter-button + .filter-button {
  margin-left: 1.2rem;
}
</style>
