import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Message {
  id: string
  text: string
  userId: string
  timestamp: Date
  userName: string
}

interface Room {
  id: string
  name: string
  description: string
}

export const useChatStore = defineStore('chat', () => {
  const messages = ref<Message[]>([])
  const rooms = ref<Room[]>([])
  const currentRoom = ref<Room | null>(null)

  const sendMessage = (text: string, userId: string, userName: string) => {
    messages.value.push({
      id: Date.now().toString(),
      text,
      userId,
      userName,
      timestamp: new Date()
    })
  }

  const joinRoom = (room: Room) => {
    currentRoom.value = room
    messages.value = []
  }

  return {
    messages,
    rooms,
    currentRoom,
    sendMessage,
    joinRoom
  }
})