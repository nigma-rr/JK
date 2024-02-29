import usersModule from "./users";
import instance from "./instance";

export default {
  users: usersModule(instance),
  instance: instance,
};
