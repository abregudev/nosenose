<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import Button from './ui/Button.vue'

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const authStore = useAuthStore()

const handleSubmit = async () => {
  if (isSignUp.value) {
    // TODO: Implement sign up
  } else {
    await authStore.login(email.value, password.value)
  }
}
</script>

<template>
  <div class="flex flex-col h-full p-8">
    <div class="text-center mb-8">
      <div class="h-12 w-12 rounded-xl bg-brand-600 flex items-center justify-center mx-auto mb-4">
        <span class="text-white text-xl font-bold">C</span>
      </div>
      <h2 class="text-2xl font-bold text-neutral-900 mb-2">
        {{ isSignUp ? 'Create Account' : 'Welcome Back' }}
      </h2>
      <p class="text-neutral-600">
        {{ isSignUp ? 'Sign up to start chatting' : 'Sign in to continue chatting' }}
      </p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-brand-500 transition-colors"
          placeholder="you@example.com"
        />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1.5">Password</label>
        <input
          v-model="password"
          type="password"
          required
          class="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-brand-500 focus:ring-brand-500 transition-colors"
          placeholder="Enter your password"
        />
      </div>
      
      <Button
        type="submit"
        class="w-full"
        size="lg"
      >
        {{ isSignUp ? 'Sign up' : 'Sign in' }}
      </Button>
    </form>

    <p class="mt-6 text-center text-sm text-neutral-600">
      {{ isSignUp ? 'Already have an account?' : "Don't have an account?" }}
      <button
        @click="isSignUp = !isSignUp"
        class="text-brand-600 hover:text-brand-700 font-medium"
      >
        {{ isSignUp ? 'Sign in' : 'Create one' }}
      </button>
    </p>
  </div>
</template>