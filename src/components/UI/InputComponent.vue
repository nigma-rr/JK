<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default() {
      return false;
    },
  },
  placeholder: {
    type: String,
    default() {
      return "Введите значение";
    },
  },
  inputName: {
    type: String,
  },
  inputType: {
    type: String,
    default() {
      return "text";
    },
  },
  inputId: {
    type: String,
  },
  className: {
    type: String,
  },
});
</script>

<template>
  <input
    :id="inputId"
    :type="inputType"
    :class="className"
    :name="inputName"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
