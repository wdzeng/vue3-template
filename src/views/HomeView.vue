<template>
  <main>
    <div>
      <TheWelcome />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply flex h-full items-center overflow-y-visible;
}
</style>

<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
</script>
