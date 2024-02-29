import { ref, computed, watch } from "vue";
import { useUsers } from "./users";
import { useStore } from "vuex";

export const useSearch = () => {
  const store = useStore();
  const { users, getUsers } = useUsers();
  const searchText = ref("");
  const loader = ref(false);
  const errorMessage = ref("");
  const searchIdParsed = computed(() => {
    return searchText.value
      .split(",")
      .map((item) => `id=${item.trim()}`)
      .join("&");
  });
  const searchNameParsed = computed(() => {
    return searchText.value
      .split(",")
      .map((item) => `username=${item.trim()}`)
      .join("&");
  });

  watch(searchText, (newText) => {
    store.dispatch("setSelectedUser", null);
    const params = /\d/.test(newText) ? searchIdParsed : searchNameParsed;
    loader.value = true;
    getUsers(params.value)
      .catch((err) => {
        errorMessage.value = err.message;
        store.dispatch("setErrorLogs", err);
        console.log(err.message);
      })
      .finally(() => {
        loader.value = false;
      });
  });

  return {
    searchText,
    searchIdParsed,
    searchNameParsed,
    loader,
    users,
    errorMessage,
  };
};
