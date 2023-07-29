# Vue 3 Template

- [Demo](https://wdzeng.github.io/vue3-template)

This is a template [Vue 3](https://vuejs.org/) project, integrated with:

- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Sweetalert2](https://sweetalert2.github.io/)
- [Storybook](https://storybook/)
- [Pnpm](https://pnpm.io/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [VS Code](https://code.visualstudio.com/)

## Recommended IDE Setup

Use IDE [VSCode](https://code.visualstudio.com/) for development.

### TypeScript Setup

You must make VSCode to use Typescript which is installed on node_modules instead of a builtin one.
Open command palette (ctrl + shift + p) and search for `TypeScript: Select TypeScript Version...` to
update the settings.

### Vue.js Development Setup

Install VSCode extensions [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
(and disable Vetur) +
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

You must make VSCode to use Typescript which is installed on node_modules instead of a builtin one.
Open command palette (ctrl + shift + p) and search for `Volar: Select TypeScript Version...` to
update the settings.

### Formatter and Linter Setup

Install VSCode extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
and set it as default formatter for all .vue and .ts files in VSCode. Though Prettier is installed
on `pnpm i`, you don't need to install or enable [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
extension, since we are not using it with VSCode.

## Development Backend

## Project Setup

```sh
pnpm i
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Development with [Storybook](https://storybook.js.org/)

```sh
pnpm storybook
```
