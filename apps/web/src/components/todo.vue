<template>
  <div class="todo-container">
    <div class="input-container">
      <Checkbox :id="id" :is-default-checked="isDone" />
      <input type="text" :value="name" readonly autofocus class="input" />
    </div>

    <div class="buttons">
      <button type="submit" aria-label="criar tarefa" class="button">
        <i class="ph-bold ph-pencil"></i>
      </button>
      <button type="submit" aria-label="criar tarefa" class="button">
        <i class="ph-bold ph-x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Checkbox from './checkbox.vue';

export default {
  name: 'Todo',
  props: {
    id: String,
    name: String,
    isDone: Boolean
  },
  components: {
    Checkbox
  }
}
</script>

<style scoped>
.todo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-theme-very-light-gray);

  border-bottom: 1px solid var(--light-theme-light-grayish-blue);
  height: 4rem;

  padding: 1rem;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.input {
  flex: 1;

  background-color: transparent;
  outline: none;
  cursor: default;

  font-size: 1rem;
  font-weight: 500;
  color: var(--light-theme-dark-grayish-blue);
}

.buttons {
  display: none;
  gap: 8px;
}

.button {
  display: grid;
  place-content: center;

  padding: 8px;
  border-radius: 8px;
  font-size: 1.2rem;
  color: var(--light-theme-dark-grayish-blue);
}

.todo-container:hover .buttons {
  display: flex;
}
</style>
