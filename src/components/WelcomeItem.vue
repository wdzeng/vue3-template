<template>
  <div class="item">
    <i><slot name="icon"></slot></i>
    <div class="details">
      <h3><slot name="heading"></slot></h3>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  @apply mt-8 flex;

  i {
    @apply flex place-content-center place-items-center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
  }

  .details {
    @apply ml-4 flex-1;

    h3 {
      @apply font-medium;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
      color: var(--color-heading);
    }
  }
}

@screen lg {
  .item {
    @apply mt-0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);

    i {
      @apply absolute border-r-8;
      top: calc(50% - 25px);
      left: -26px;
      border: 1px solid var(--color-border);
      background: var(--color-background);
      width: 50px;
      height: 50px;
    }

    &:before,
    &:after {
      @apply absolute left-0;
      border-left: 1px solid var(--color-border);
      content: ' ';
      height: calc(50% - 25px);
    }

    &:before {
      bottom: calc(50% + 25px);
    }

    &:after {
      top: calc(50% + 25px);
    }

    &:first-of-type:before,
    &:last-of-type:after {
      @apply hidden;
    }
  }
}
</style>
