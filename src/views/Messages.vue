<script setup lang="ts">
import ChatRoom from '../components/ChatRoom.vue'
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-neutral-900">Messages</h1>
    <div class="bg-white rounded-xl shadow-soft overflow-hidden h-[calc(100vh-12rem)]">
      <ChatRoom />
    </div>
  </div>
</template>