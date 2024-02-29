import { inject, computed } from "vue";
import { useStore } from "vuex";

export const useUsers = () => {
  const store = useStore();
  const api = inject("api");
  const users = computed(() => store.getters.getUsers);
  const selectedUser = computed(() => store.getters.getSelectedUser);

  const getUsers = async (searchParams) => {
    await api.users.getUsers("/users", searchParams).then((res) => {
      store.dispatch("setUsers", res.data);
    });
  };

  const selectUser = (id) => {
    store.dispatch("setSelectedUser", id);
  };
  const userInfo = computed(() => store.getters.getUserInfo);

  return {
    users,
    getUsers,
    selectedUser,
    selectUser,
    userInfo,
  };
};
