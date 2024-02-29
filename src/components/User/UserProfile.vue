<script setup>
import { useUsers } from "../../composables/users";
const { userInfo } = useUsers();
</script>

<template>
  <div class="user">
    <div class="user__wrap" v-if="userInfo">
      <div class="user__col">
        <div class="user__image">
          <img src="/src/assets/images/placeholder.jpg" alt="" />
        </div>
      </div>
      <div class="user__col">
        <div class="user__name">{{ userInfo.name }}</div>
        <div class="user__email"><span>email:</span> {{ userInfo.email }}</div>
        <div class="user__phone"><span>phone:</span> {{ userInfo.phone }}</div>
        <div class="user__about-title">О себе:</div>
        <div class="user__about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
    <div class="user__placeholder" v-else>
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  flex-grow: 1;
  &__wrap {
    padding: 30px 20px;
    display: flex;
    column-gap: 60px;
  }
  &__placeholder {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    color: #76787d;
  }
  &__image {
    display: flex;
    min-width: 424px;
    border: 1px solid #e0e0e0;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #000;
    margin-bottom: 10px;
  }
  &__email,
  &__phone {
    font-weight: 400;
    color: #76787d;
    line-height: 140%;
    font-size: 14px;
    margin-bottom: 10px;
    span {
      font-weight: 600;
      color: #333;
    }
  }
  &__about {
    &-title {
      margin-top: 20px;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #333;
      margin-bottom: 25px;
    }
    &-text {
      font-weight: 400;
      font-size: 14px;
      color: #76787d;
    }
  }
}
</style>
