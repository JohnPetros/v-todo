<script setup>
</script>

<template>
  <main class="container">
    <img src="/images/bg-desktop-light.jpg" alt="" class="background" />
    <h1 class="title">V-Todo</h1>
  </main>
</template>

<style scoped>
.container {
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
}
</style>
