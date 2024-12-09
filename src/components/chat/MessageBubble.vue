<script setup lang="ts">
import Avatar from '../ui/Avatar.vue';

defineProps<{
  message: {
    text: string;
    userName: string;
    timestamp: Date;
    isOwn: boolean;
  }
}>();
</script>

<template>
  <div
    :class="[
      'flex gap-3 max-w-[85%]',
      message.isOwn ? 'ml-auto flex-row-reverse' : ''
    ]"
  >
    <Avatar
      :name="message.userName"
      size="sm"
    />
    <div
      :class="[
        'rounded-2xl p-3 shadow-soft',
        message.isOwn
          ? 'bg-brand-600 text-white'
          : 'bg-neutral-50 text-neutral-900'
      ]"
    >
      <div class="text-sm font-medium mb-1">{{ message.userName }}</div>
      <div>{{ message.text }}</div>
      <div
        :class="[
          'text-xs mt-1',
          message.isOwn ? 'text-brand-200' : 'text-neutral-500'
        ]"
      >
        {{ new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
      </div>
    </div>
  </div>
</template>