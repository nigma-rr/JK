<script setup>
const props = defineProps({
  labelFor: {
    type: String,
  },
  className: {
    type: String,
  },
});
</script>

<template>
  <label :for="labelFor" :class="className">
    <slot name="text"></slot>
  </label>
</template>
