/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Rule `vue/component-tags-order` was deprecated. Use `vue/block-order` instead.
    'vue/component-tags-order': 'off',
    'vue/block-order': ['warn', { order: ['template', 'style', 'script'] }],

    'vue/define-emits-declaration': ['warn', 'type-based'],
    'vue/define-macros-order': ['warn', { order: ['defineProps', 'defineEmits'] }],
    'vue/define-props-declaration': ['warn', 'type-based'],

    // There should be a space in <!-- --> comments.
    'vue/html-comment-content-spacing': 'warn',

    'vue/no-required-prop-with-default': ['error', { autofix: true }],
    'vue/no-template-target-blank': ['warn', { allowReferrer: false }],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-properties': 'error',
    'vue/no-unused-properties': 'warn',
    'vue/no-unsupported-features': ['error', { version: '^3.3.4' }],
    'vue/no-unused-refs': 'warn',
    'vue/no-useless-mustaches': 'warn',

    // There should always be a blank line between <template>, <style>, and <script>.
    'vue/padding-line-between-blocks': ['warn', 'always'],

    'vue/prefer-define-options': 'warn',
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-true-attribute-shorthand': 'warn',
    'vue/require-typed-object-prop': 'warn',
    'vue/require-typed-ref': 'warn'
  },
  overrides: [
    // @vue/eslint-config-typescript is conflicted with wdzeng/eslint-config/typescript as they depend on different
    // versions of @typescript-eslint/parser (v5/v6). Once https://github.com/vuejs/eslint-config-typescript/issues/57
    // is solved, try to add wdzeng/eslint-config/typescript for src/**/*.ts files.
    // {
    //   files: ['src/**/*.ts'],
    //   extends: ['wdzeng/typescript']
    // }
  ]
}
