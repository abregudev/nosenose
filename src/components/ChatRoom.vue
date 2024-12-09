<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useChatStore } from '../stores/chat'
import Button from './ui/Button.vue'
import MessageBubble from './chat/MessageBubble.vue'
import Avatar from './ui/Avatar.vue'
import RoomList from './chat/RoomList.vue'

const message = ref('')
const messagesContainer = ref<HTMLElement | null>(null)
const showRoomList = ref(false)
const chatStore = useChatStore()
const authStore = useAuthStore()

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!message.value.trim()) return
  
  chatStore.sendMessage(
    message.value,
    authStore.user?.id,
    authStore.user?.email
  )
  message.value = ''
  await scrollToBottom()
}

onMounted(scrollToBottom)
</script>

<template>
  <div class="flex h-full">
    <!-- Room List Sidebar -->
    <div
      :class="[
        'w-80 border-r border-neutral-200 transition-all duration-300 ease-in-out',
        showRoomList ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <RoomList />
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-neutral-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <button
              @click="showRoomList = !showRoomList"
              class="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            <Avatar
              :name="chatStore.currentRoom?.name || 'General'"
              size="md"
            />
            <div>
              <h3 class="font-semibold text-neutral-900">
                {{ chatStore.currentRoom?.name || 'General Chat' }}
              </h3>
              <p class="text-sm text-neutral-500">
                {{ chatStore.messages.length }} messages
              </p>
            </div>
          </div>
          <Button
            @click="authStore.logout"
            variant="ghost"
            size="sm"
          >
            Sign out
          </Button>
        </div>
      </div>

      <!-- Messages -->
      <div
        ref="messagesContainer"
        class="flex-1 overflow-y-auto p-6 space-y-4"
      >
        <MessageBubble
          v-for="msg in chatStore.messages"
          :key="msg.id"
          :message="{
            text: msg.text,
            userName: msg.userName,
            timestamp: msg.timestamp,
            isOwn: msg.userId === authStore.user?.id
          }"
        />
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-neutral-200 bg-neutral-50">
        <form @submit.prevent="sendMessage" class="flex gap-3">
          <input
            v-model="message"
            type="text"
            placeholder="Type your message..."
            class="flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-brand-500 bg-white transition-colors"
          />
          <Button type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>