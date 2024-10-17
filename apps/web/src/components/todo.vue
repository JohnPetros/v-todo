<template>
  <div class="todo-container">
    <div class="input-container">
      <Checkbox
        :id="id"
        :is-default-checked="isDone"
        @change="handleCheckboxChange"
      />
      <input
        type="text"
        v-model="todoName"
        :readonly="!isUpdatingEnable"
        :class="{
          input: true,
          isDone: this.isDone && !isUpdatingEnable,
          updatable: isUpdatingEnable,
        }"
        :autofocus="isUpdatingEnable"
      />
    </div>

    <div class="buttons">
      <button
        v-show="isUpdatingEnable"
        type="submit"
        aria-label="criar tarefa"
        @click="handleUpdate"
        class="button"
      >
        <i class="ph-bold ph-check"></i>
      </button>
      <button
        v-show="!isUpdatingEnable"
        type="submit"
        aria-label="criar tarefa"
        @click="handleUpdateEnable"
        class="button"
      >
        <i class="ph-bold ph-pencil"></i>
      </button>
      <button
        v-show="!isUpdatingEnable"
        type="submit"
        aria-label="criar tarefa"
        @click="$emit('delete', id)"
        class="button"
      >
        <i class="ph-bold ph-x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Checkbox from "./checkbox.vue";

export default {
  name: "Todo",
  emits: ["update", "update:status", "delete"],
  props: {
    id: String,
    name: String,
    isDone: Boolean,
  },
  components: {
    Checkbox,
  },
  data() {
    return {
      todoName: this.name,
      isUpdatingEnable: false,
    };
  },
  methods: {
    handleCheckboxChange(isTodoDone) {
      this.$emit("update:status", this.id, isTodoDone);
    },
    handleNameInputChange(event) {
      this.todoName = event.currentTarget.value;
    },
    handleUpdateEnable() {
      this.isUpdatingEnable = true;
    },
    handleUpdate() {
      this.isUpdatingEnable = false;

      if (this.todoName === this.name) return;

      this.$emit("update", {
        id: this.id,
        name: this.todoName,
        isDone: this.isDone,
      });
    },
  },
};
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

.dark .todo-container {
  background-color: var(--dark-theme-very-dark-desaturated-blue);
  border-bottom-color: var(--light-theme-very-dark-grayish-blue);
}

.input-container {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.input {
  width: 24rem;

  background-color: transparent;
  outline: none;
  cursor: default;

  font-size: 1rem;
  font-weight: 500;
  color: var(--light-theme-dark-grayish-blue);

  padding: 8px;
  border-radius: 8px;
}

.input.isDone {
  text-decoration: line-through;
}

.input.updatable {
  border: 1px solid var(--light-theme-dark-grayish-blue);
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
