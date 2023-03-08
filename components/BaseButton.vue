<template>
  <button
    type="button"
    :class="[  
      base,  
      type === 'secondary' ? secondary : primary,
      size === 'small' ? small : large,
    ]"
  > 
    <div class="flex justify-between">
      <slot />
      <slot
        name="icon"
        class="h-6 w-6"
      />
    </div>
  </button>
</template>
<script setup lang="ts">
defineProps<{ type: "primary" | "secondary"; size: "small" | "large" }>();
const base =
  "my-auto rounded transition-colors duration-100 ease-in-out hover:scale-[101%] hover:shadow-md";

/* Types */
const primary =
  "bg-gray-200 ring-1 ring-gray-300 hover:bg-primary-500 hover:shadow-primary-100 hover:text-white";
const secondary = "bg-primary-500 ring-1 ring-primary-600 text-white";
 
/* Sizes */
const small = "px-4 py-2"; 
const large = 
  "py-2 px-8 hover:bg-primary-600 hover:ring-1 ring-primary-700 shadow-primary-500";
</script>
<style> 
button svg { 
  width: 1.5rem;
  height: 1.5rem;
} 
</style>
