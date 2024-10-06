<template>
  <div class="error-message">
    <div class="info">
      <i class="ph-bold ph-circle-x"></i>
      <div>
        <strong class="title">Erro</strong>
        <p class="message">{{ message }}</p>
      </div>
    </div>
    <button class="close-button" @click="$emit('close')">
      <i class="ph-bold ph-x"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  emits: ["close"],
  props: {
    message: String,
  },
};
</script>

<style scoped>
@keyframes enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes exit {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.error-message {
  animation: enter 0.2s linear;

  display: flex;
  justify-content: space-between;

  min-width: 20rem;

  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  border-radius: 8px;
  background-color: #ffb7b6;
  color: #7a5757;
  padding: 1rem;
}

.info {
  display: flex;
  justify-content: space-between;
  gap: 6px;
}

.title {
  font-weight: 700;
  font-size: 1.2rem;
}

.message {
  font-size: 1rem;
  margin-top: 8px;
}

.close-button {
  background: transparent;
  font-size: 1.2rem;

  margin-left: 1rem;
}
</style>