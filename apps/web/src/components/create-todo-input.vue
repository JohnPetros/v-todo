<template>
  <form @submit="handleSubmit">
    <p class="status-label">Já concluída?</p>
    <div class="container">
      <div class="input-container">
        <Checkbox id="create-todo" @change="handleCheckboxChange" />
        <input
          v-model="name"
          type="text"
          placeholder="Crie uma nova tarefa..."
          autofocus
          class="input"
        />
      </div>
      <button type="submit" aria-label="criar tarefa" class="button">
        <i class="ph-bold ph-plus"></i>
      </button>
    </div>
  </form>
</template>

<script>
import Checkbox from "./checkbox.vue";

export default {
  name: "CreateTodoInput",
  emits: ["create", "error"],
  components: {
    Checkbox,
  },
  data() {
    return {
      name: "",
      isDone: false,
    };
  },
  methods: {
    handleCheckboxChange(isChecked) {
      this.isDone = isChecked;
    },

    async handleSubmit(event) {
      event.preventDefault();

      const response = await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          isDone: this.isDone,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        this.$emit("error", data.message);
        return;
      }

      this.name = "";
      this.isDone = false;
      this.$emit("create", data);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-theme-very-light-gray);

  border-radius: 8px;
  padding: 1rem;
}

.dark .container {
  background-color: var(--dark-theme-very-dark-desaturated-blue);
}

.status-label {
  color: var(--light-theme-very-light-gray);
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.input {
  flex: 1;

  height: 2rem;

  background-color: transparent;
  font-size: 1rem;
  color: var(--light-theme-dark-grayish-blue);
  font-weight: 500;
  outline: none;
}

.button {
  display: grid;
  place-content: center;
  padding: 8px;
  border-radius: 8px;
  background: var(--check-background);
  color: var(--light-theme-very-light-gray);
}
</style>
