<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggle } = useTheme()

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系方式', href: '#contact' },
]

const isOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-border">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-xl font-bold bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
        Portfolio
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="text-muted hover:text-dark-text transition-colors duration-300"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <!-- Theme toggle -->
        <button
          class="relative w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-dark-text hover:border-accent/30 transition-all duration-300"
          @click="toggle"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        >
          <!-- Sun icon (shown in dark mode, switch to light) -->
          <svg
            v-if="theme === 'dark'"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon (shown in light mode, switch to dark) -->
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- Mobile menu toggle -->
        <button
          class="md:hidden text-dark-text"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-show="isOpen"
      class="md:hidden bg-surface border-t border-border"
    >
      <ul class="px-6 py-4 space-y-4">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="block text-muted hover:text-dark-text transition-colors duration-300"
            @click="isOpen = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
