<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}>();
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500': variant === 'primary' || !variant,
        'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500': variant === 'secondary',
        'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-500': variant === 'ghost',
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-base': size === 'md' || !size,
        'px-6 py-3 text-lg': size === 'lg',
      }
    ]"
  >
    <slot />
  </button>
</template>