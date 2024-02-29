export default {
  state() {
    return {
      users: [],
      selectedUser: null,
      errorLogs: [],
    };
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
    setErrorLogs(state, payload) {
      state.errorLogs = [...state.errorLogs, payload];
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectedUser(state) {
      return state.selectedUser;
    },
    getUserInfo(state) {
      return state.users.find((user) => user.id === state.selectedUser);
    },
    getErrorLogs(state) {
      return state.errorLogs;
    },
  },
  actions: {
    setUsers({ commit }, payload) {
      commit("setUsers", payload);
    },
    setSelectedUser({ commit }, payload) {
      commit("setSelectedUser", payload);
    },
    setErrorLogs({ commit }, payload) {
      commit("setErrorLogs", payload);
    },
  },
};
