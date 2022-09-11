<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="text-center"><img class="inline-block" src="@/assets/image/fzhong.webp" width="360" height="360" /></p>
  </div>
</template>

<style lang="scss">
.about {
  @apply mt-8;
  @apply lg:mt-0 lg:flex lg:flex-col lg:justify-center;
  h1 {
    @apply mb-5 text-center text-2xl font-bold;
  }
}
</style>
