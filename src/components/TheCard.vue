<template>
  <div class="card">
    <h2><slot name="title"></slot></h2>
    <div class="card-body"><slot></slot></div>
    <div><p class="mt-2 text-end italic text-gray-400">This is a card component.</p></div>
  </div>
</template>

<style lang="scss">
// https://flowbite.com/docs/components/card/
.card {
  @apply block rounded-lg border border-gray-200 bg-white p-6 shadow-md  dark:border-gray-700 dark:bg-gray-800;

  h2 {
    @apply mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white;
  }

  .card-body > * {
    @apply font-normal text-gray-700 dark:text-gray-400;
  }
}
</style>
