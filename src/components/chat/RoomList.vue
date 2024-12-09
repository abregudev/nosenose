<script setup lang="ts">
import { ref } from 'vue'
import { useChatStore } from '../../stores/chat'
import Avatar from '../ui/Avatar.vue'
import Badge from '../ui/Badge.vue'

const chatStore = useChatStore()

const rooms = ref([
  { id: '1', name: 'General', unread: 3, description: 'General discussion' },
  { id: '2', name: 'Support', unread: 0, description: 'Technical support' },
  { id: '3', name: 'Random', unread: 5, description: 'Random chat' },
])
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-4 border-b border-neutral-200">
      <h3 class="text-lg font-semibold text-neutral-900 mb-2">Chat Rooms</h3>
      <input
        type="text"
        placeholder="Search rooms..."
        class="w-full px-3 py-2 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-brand-500 text-sm"
      />
    </div>
    
    <div class="flex-1 overflow-y-auto p-2">
      <button
        v-for="room in rooms"
        :key="room.id"
        @click="chatStore.joinRoom(room)"
        :class="[
          'w-full p-3 rounded-lg mb-2 text-left transition-colors',
          chatStore.currentRoom?.id === room.id
            ? 'bg-brand-50'
            : 'hover:bg-neutral-50'
        ]"
      >
        <div class="flex items-center gap-3">
          <Avatar :name="room.name" size="md" />
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-medium text-neutral-900">{{ room.name }}</span>
              <Badge v-if="room.unread" variant="accent">{{ room.unread }}</Badge>
            </div>
            <p class="text-sm text-neutral-600 truncate">{{ room.description }}</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>