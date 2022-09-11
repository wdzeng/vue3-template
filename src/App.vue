<template>
  <header>
    <!-- Use @ to locate src directory -->
    <img alt="Vue logo" class="logo" src="@/assets/image/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/instruction">Instruction</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="lg:max-h-full lg:overflow-y-scroll" />
</template>

<style lang="scss" scoped>
header {
  @apply leading-normal;
  @apply lg:flex lg:h-full lg:place-items-center;

  @screen lg {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    @apply mx-auto my-8 mt-0 block;
    @apply lg:m-0 lg:mr-8;
  }

  .wrapper {
    @apply lg:flex lg:flex-wrap;
    @screen lg {
      place-items: flex-start;
    }

    nav {
      @apply mt-8 w-full text-center;
      font-size: 12pt;

      @apply lg:-ml-4 lg:mt-4 lg:py-4 lg:px-0 lg:text-left lg:text-base;

      a {
        @apply inline-block py-0 px-4;
        border-left: 1px solid var(--color-border);

        &.router-link-exact-active {
          color: var(--color-text);
          &:hover {
            @apply bg-transparent;
          }
        }

        &:first-of-type {
          @apply border-0;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>
