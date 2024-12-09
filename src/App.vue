<script setup lang="ts">
import { ref } from 'vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import ChatWidget from './components/ChatWidget.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showFullChat = ref(route.name === 'messages')
</script>

<template>
  <DashboardLayout>
    <router-view />
  </DashboardLayout>
  <ChatWidget :minimized="route.name !== 'messages'" />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>