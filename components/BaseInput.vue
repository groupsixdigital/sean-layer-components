<template>
  <div>
    <label
      :for="name"
      class="text-sm leading-7 text-gray-600"
    ><slot /></label>
    <input
      :id="name"
      :name="name"
      :class="[base]"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
  <script setup lang="ts">
  defineProps<{modelValue: string, name: string, type: 'email' | 'text' | 'number' | 'password'}>();
  const base =
    "w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:ring-2 focus:ring-sky-200";
  </script>
  