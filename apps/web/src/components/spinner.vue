<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 3.2rem;
  height: 3.2rem;

  border: 2.5px solid var(--primary-bright-blue);
  border-radius: 50%;
  border-bottom-color: transparent;

  animation: spin 1s linear infinite;
}
</style>