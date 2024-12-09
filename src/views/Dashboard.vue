<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-semibold text-neutral-900">Dashboard</h1>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl shadow-soft">
        <h3 class="text-lg font-medium text-neutral-900 mb-2">Active Chats</h3>
        <p class="text-3xl font-semibold text-brand-600">24</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-soft">
        <h3 class="text-lg font-medium text-neutral-900 mb-2">Total Messages</h3>
        <p class="text-3xl font-semibold text-brand-600">1,234</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-soft">
        <h3 class="text-lg font-medium text-neutral-900 mb-2">Response Time</h3>
        <p class="text-3xl font-semibold text-brand-600">2.4m</p>
      </div>
    </div>
  </div>
</template>