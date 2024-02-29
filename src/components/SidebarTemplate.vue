<script setup></script>

<template>
  <div class="users__sidebar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.users {
  &__sidebar {
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 293px;
    border-right: 1px solid #dededd;
  }
}
</style>
