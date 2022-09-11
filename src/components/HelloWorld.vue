<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.greetings {
  h1 {
    @apply text-center font-medium;
    @apply lg:text-left;
    top: -10px;
  }

  h3 {
    @apply text-center;
    @apply lg:text-left;
    font-size: 1.2rem;
  }
}
</style>

<script setup lang="ts">
// In the setup script, we do not need to explicitly import `defineProps` or `defineEmits`. They are compiler macros
// only usable inside the setup script.
defineProps<{
  msg: string
}>()
</script>
