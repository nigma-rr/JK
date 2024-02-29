export default function (instance) {
  return {
    async getUsers(url, payload) {
      return await instance.get(url + `?${payload}`);
    },
  };
}
