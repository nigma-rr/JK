<script setup>
import { toRefs, defineProps } from "vue";
import { useUsers } from "../../composables/users";
const props = defineProps({
  user: {
    type: Object,
  },
});
const { user } = toRefs(props);
const { selectedUser } = useUsers();
const emit = defineEmits(["selectUser"]);
const selectUser = (id) => {
  emit("selectUser", id);
};
</script>

<template>
  <div
    class="users__item"
    :class="{ active: user.id === selectedUser }"
    @click="selectUser(user.id)"
  >
    <div class="users__item-image">
      <img :src="user.image" alt="" v-if="user.hasOwnProperty('image')" />
      <img src="/src/assets/images/placeholder.jpg" alt="" v-else />
    </div>
    <div class="users__item-info">
      <div class="users__item-name">{{ user.username }}</div>
      <div class="users__item-email">{{ user.email }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.users {
  &__item {
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    overflow: hidden;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 18px;
    }
    &-image {
      min-width: 70px;
      max-width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #e0e0e0;
      & img {
        object-fit: cover;
        width: 100%;
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 15px;
    }
    &-name {
      font-weight: 600;
      font-size: 14px;
      color: #333;
      margin-bottom: 5px;
    }
    &-email {
      font-weight: 400;
      font-size: 14px;
      word-break: break-all;
    }
    &.active {
      outline: 1px solid #e0e0e0;
      .users__item {
        &-info {
          background: #e0e0e0;
        }
      }
    }
  }
}
</style>
