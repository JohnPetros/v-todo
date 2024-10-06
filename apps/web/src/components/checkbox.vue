<template>
  <label :for="id" class="label">
    <input :id="id" v-model="isChecked" @change="$emit('change', isChecked)" type="checkbox" class="input" />
    <span class="background"></span>
    <i class="indicator ph-bold ph-check"></i>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  emits: ['change'],
  props: {
    id: String,
    isDefaultChecked: Boolean
  },
  data() {
    return {
      isChecked: this.isDefaultChecked
    }
  }
}
</script>

<style scoped>
.label {
  position: relative;
  cursor: pointer;
}

.input {
  display: none
}

.background {
  display: block;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;

  border: 1px solid var(--light-theme-light-grayish-blue);
}

input:checked+.background {
  background: var(--check-background);
}

.indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  color: var(--light-theme-very-light-gray);
  font-size: 1rem;
}
</style>