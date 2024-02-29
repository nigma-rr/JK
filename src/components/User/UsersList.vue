<script setup>
import UserItem from "./UserItem.vue";
import { useUsers } from "../../composables/users";
const { users, selectUser } = useUsers();
</script>

<template>
  <div
    class="users__list"
    :class="{ 'users__list--empty': users.length === 0 }"
  >
    <user-item
      v-for="user in users"
      :key="user.id"
      :user="user"
      @select-user="selectUser"
    />
  </div>
</template>

<style lang="scss" scoped>
.users {
  &__list {
    font-weight: 400;
    font-size: 14px;
    color: #76787d;
    overflow: auto;
    max-height: 60vh;
    padding: 25px;
    &--empty {
      padding: 0;
    }
  }
}
</style>
