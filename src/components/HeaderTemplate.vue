<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__logo">Жилфонд</div>
        <div class="header__user">Пользователь</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 50px;
  margin-bottom: 25px;
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  &__logo {
    font-weight: 700;
    font-size: 32px;
    color: #e31f24;
  }
  &__user {
    font-weight: 400;
    font-size: 16px;
    color: #333;
  }
}
</style>
