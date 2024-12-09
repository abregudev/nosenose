<script setup lang="ts">
defineProps<{
  name: string;
  size?: 'sm' | 'md' | 'lg';
}>();
</script>

<template>
  <div
    :class="[
      'rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-medium',
      {
        'w-8 h-8 text-sm': size === 'sm',
        'w-10 h-10 text-base': size === 'md' || !size,
        'w-12 h-12 text-lg': size === 'lg',
      }
    ]"
  >
    {{ name.charAt(0).toUpperCase() }}
  </div>
</template>