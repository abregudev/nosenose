<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/vue/24/outline'

const router = useRouter()
const route = useRoute()

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, route: 'dashboard' },
  { name: 'Messages', icon: ChatBubbleLeftRightIcon, route: 'messages' },
  { name: 'Analytics', icon: ChartBarIcon, route: 'analytics' },
  { name: 'Settings', icon: Cog6ToothIcon, route: 'settings' },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 w-64 bg-white border-r border-neutral-200">
      <div class="flex h-16 items-center gap-2 px-6 border-b border-neutral-200">
        <div class="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center">
          <span class="text-white font-semibold">C</span>
        </div>
        <span class="text-lg font-semibold text-neutral-900">ChatDash</span>
      </div>
      
      <nav class="p-4 space-y-1">
        <button
          v-for="item in navigation"
          :key="item.name"
          @click="router.push({ name: item.route })"
          :class="[
            'w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            route.name === item.route
              ? 'text-brand-600 bg-brand-50'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
          ]"
        >
          <component :is="item.icon" class="h-5 w-5" />
          {{ item.name }}
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="pl-64">
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template>