<script setup>
import { toRefs } from "vue";
const props = defineProps({
  message: {
    type: String,
    default() {
      return false;
    },
  },
});
const { message } = toRefs(props);
</script>

<template>
  <div v-if="message" class="users__result-error">
    {{ message }}
  </div>
</template>
