<template>
  <div class="inst">
    <CardItem>
      <template #title>Awesome Vue Project</template>
      <p>
        This template is using <a target="_blank" href="https://vuejs.org/" rel="noreferrer noopener">Vue 3</a> and
        <a target="_blank" href="https://vitejs.dev/" rel="noreferrer noopener">Vite</a> with
        <a target="_blank" href="ttps://www.typescriptlang.org/" rel="noreferrer noopener">TypeScript</a> and
        <a target="_blank" href="https://sass-lang.com/" rel="noreferrer noopener">SCSS</a>, integrated with
        <a target="_blank" rel="noreferrer noopener" href="https://router.vuejs.org/">Vue Router</a> and
        <a target="_blank" rel="noreferrer noopener" href="https://pinia.vuejs.org/">Pinia</a>.
      </p>
      <p>
        <a href="https://tailwindcss.com/" rel="noreferrer noopener" target="_blank">Tailwindcss v3</a> and
        <a href="https://sweetalert2.github.io/" rel="noreferrer noopener" target="_blank">Sweetalert2</a> are
        available!
      </p>
      <p><button class="alert" @click="emitAlert">Alert!</button></p>
    </CardItem>
    <CardItem>
      <template #title>Development with VS&nbsp;Code</template>
      <p>
        Recommend to develop with
        <a target="_blank" rel="noreferrer noopener" href="https://code.visualstudio.com/">VS&nbsp;Code</a> with these
        extension:
      </p>
      <ul>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
            rel="noreferrer noopener"
            target="_blank"
            >ESLint</a
          >
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            rel="noreferrer noopener"
            target="_blank"
            >Prettier</a
          >
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
            rel="noreferrer noopener"
            target="_blank"
            >Volar</a
          >
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin"
            rel="noopener
            noreferrer"
            target="_blank"
            >TypeScript Vue Plugin for Volar</a
          >
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=csstools.postcss"
            rel="noreferrer noopener"
            target="_blank"
            >PostCSS Language Support</a
          >
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            rel="noopener noreferrer"
            target="_blank"
            >Tailwind CSS Intellisense</a
          >
        </li>
      </ul>
      <p>
        Use
        <a target="_blank" rel="noreferrer noopener" href="https://prettier.io/"
          ><span class="font-bold">prettier</span></a
        >
        as formatter for all file types, including Vue component, TypeScript and SCSS. Do not use volar, it is
        incompatible with tailwindcss.
      </p>
    </CardItem>
    <CardItem>
      <template #title>Development Commands</template>
      <p>
        Assumed you are using <a target="_blank" href="https://pnpm.io/" rel="noreferrer noopener">pnpm</a> as package
        manager.
      </p>
      <p>Install packages:</p>
      <code class="block">pnpm install</code>
      <p>Enable vite server:</p>
      <code class="block">pnpm dev</code>
      <p>Build project:</p>
      <code class="block">pnpm build</code>
      <p>Lint:</p>
      <code class="block">pnpm lint</code>
    </CardItem>
    <CardItem>
      <template #title>Tips</template>
      <p>Make use of vue typescript feature.</p>
      <ul>
        <li>
          In <code>&lt;script setup lang="ts"&gt;&lt;/script&gt;</code>, use <code>defineProp</code> and
          <code>defineEmits</code> without <code>import</code>, and use vue component tag without further definition in
          the template section.
        </li>
        <li>
          Use <code>@</code> to locate <code>src</code> directory when importing modules. This feature is also available
          in vue templates and SCSS files.
        </li>
      </ul>
      <p>Tailwind provides useful shorthands.</p>
      <ul>
        <li>
          Use
          <code>@apply</code>
          to inherit tailwindcss in classes.
        </li>
        <li>
          Use <code>@screen lg { ... }</code>to write css for size larger than
          <code>lg</code>
          screen only.
        </li>
      </ul>
      <p>Don't forget <code>noreferrer</code> and <code>noopener</code> in anchors!</p>
    </CardItem>
  </div>
</template>

<style lang="scss">
.inst {
  // @apply grid grid-cols-2 gap-4;
  @apply py-16;

  ul {
    @apply relative left-[1.25em] list-[circle];
  }

  code {
    @apply whitespace-pre;

    &:not(.block) {
      @apply inline-block px-1 text-blue-600;
    }

    &.block {
      @apply bg-slate-200 px-2 py-1;
    }
  }

  button {
    // This line is very long, but it's OK.
    @apply mr-3 inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500;
  }

  .card {
    .card-body {
      & > *:not(:last-child) {
        @apply mb-2;
      }
    }

    &:not(:last-child) {
      @apply mb-8;
    }
  }
}
</style>

<script lang="ts" setup>
import CardItem from '@/components/TheCard.vue'
import Swal from 'sweetalert2'

function emitAlert() {
  Swal.fire('Hello fzhong!')
}
</script>
