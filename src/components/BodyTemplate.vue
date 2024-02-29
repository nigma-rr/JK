<script setup>
import SidebarTemplate from "../components/SidebarTemplate.vue";
import UserProfile from "./User/UserProfile.vue";
import UsersList from "./User/UsersList.vue";
import LoaderComponent from "./UI/LoaderComponent.vue";
import ErrorComponent from "./UI/ErrorComponent.vue";
import InputComponent from "./UI/InputComponent.vue";
import LabelComponent from "./UI/LabelComponent.vue";
import { useSearch } from "../composables/search";
const { searchText, loader, users, errorMessage } = useSearch();
</script>

<template>
  <section class="users">
    <div class="container">
      <div class="users__wrap">
        <div class="users__wrap-col">
          <sidebar-template>
            <div class="users__search">
              <label-component
                :label-for="'users__search'"
                :class-name="'users__search-title'"
                ><template #text>Поиск сотрудников</template></label-component
              >
              <input-component
                v-model="searchText"
                :id="'users__search-input'"
                :message="searchText"
                :placeholder="'Введите Id или имя'"
                :name="'users'"
                :class="'users__search-input'"
              />
            </div>
            <div class="users__result">
              <div class="users__result-title">Результаты</div>
              <users-list :users="users" />
              <div
                v-if="!searchText && !loader"
                class="users__result-placeholder"
              >
                начните поиск
              </div>
              <div
                class="users__result-empty"
                v-if="
                  searchText && !errorMessage && !loader && users.length === 0
                "
              >
                Пользователи не найдены
              </div>
              <loader-component :show="loader" />
              <error-component :message="errorMessage" />
            </div>
          </sidebar-template>
        </div>
        <div class="users__wrap-col">
          <user-profile />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.users {
  height: calc(100vh - 115px);
  background: #fdfdfd;
  &__wrap {
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    height: calc(100vh - 160px);
    &-col:nth-child(2) {
      flex-grow: 1;
      display: flex;
    }
  }
  &__search {
    padding: 0 25px;
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    &-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #333;
      margin-bottom: 14px;
    }
    &-input {
      padding: 15px;
      padding-right: 80px;
      border: 1.5px solid #e9ecef;
      border-radius: 8px;
      &,
      &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #76787d;
      }
    }
  }
  &__result {
    &-title {
      padding: 0 25px;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #333;
      margin-bottom: 18px;
    }
    &-placeholder,
    &-empty,
    &-error {
      padding: 0 25px;
      font-weight: 400;
      font-size: 14px;
      color: #76787d;
    }
    &-error {
      color: red;
      text-transform: uppercase;
    }
  }
}
</style>
