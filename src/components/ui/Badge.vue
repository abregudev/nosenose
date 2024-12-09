<script setup lang="ts">
defineProps<{
  variant?: 'brand' | 'accent' | 'neutral'
}>();
</script>

<template>
  <span
    :class="[
      'inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium',
      {
        'bg-brand-100 text-brand-700': variant === 'brand',
        'bg-accent-100 text-accent-700': variant === 'accent',
        'bg-neutral-100 text-neutral-700': variant === 'neutral' || !variant,
      }
    ]"
  >
    <slot />
  </span>
</template>