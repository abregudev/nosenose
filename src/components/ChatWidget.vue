<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useChatStore } from '../stores/chat'
import ChatLogin from './ChatLogin.vue'
import ChatRoom from './ChatRoom.vue'
import { TransitionRoot } from '@headlessui/vue'
import Button from './ui/Button.vue'

defineProps<{
  minimized: boolean
}>()

const isOpen = ref(false)
const authStore = useAuthStore()
const chatStore = useChatStore()
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Toggle Button -->
    <Button
      @click="isOpen = !isOpen"
      class="rounded-full w-14 h-14 shadow-soft"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </Button>

    <!-- Chat Widget -->
    <TransitionRoot
      appear
      :show="isOpen"
      as="template"
      enter="transition ease-out duration-300"
      enter-from="opacity-0 translate-y-4 scale-95"
      enter-to="opacity-100 translate-y-0 scale-100"
      leave="transition ease-in duration-200"
      leave-from="opacity-100 translate-y-0 scale-100"
      leave-to="opacity-0 translate-y-4 scale-95"
    >
      <div class="absolute bottom-20 right-0 w-[400px] bg-white rounded-2xl shadow-soft overflow-hidden">
        <div class="h-[600px] flex flex-col">
          <template v-if="!authStore.isAuthenticated">
            <ChatLogin />
          </template>
          <template v-else>
            <ChatRoom />
          </template>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>