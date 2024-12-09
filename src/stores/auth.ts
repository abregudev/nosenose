import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  const login = async (email: string, password: string) => {
    // TODO: Implement Firebase authentication
    isAuthenticated.value = true
    user.value = { email, id: '1' }
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})