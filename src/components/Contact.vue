<script setup lang="ts">
const contacts = [
  {
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/username',
    href: 'https://github.com/username',
    icon: '🐙',
  },
  {
    label: 'Twitter / X',
    value: '@username',
    href: 'https://twitter.com/username',
    icon: '🐦',
  },
]
</script>

<template>
  <section id="contact" class="py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
          联系方式
        </span>
      </h2>
      <p class="text-muted mb-12 max-w-xl mx-auto">
        如果你对我的项目感兴趣，或者有任何问题，欢迎随时联系我。
      </p>

      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 px-6 py-4 bg-surface rounded-xl border border-border hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
        >
          <span class="text-2xl">{{ contact.icon }}</span>
          <div class="text-left">
            <div class="text-sm text-muted">{{ contact.label }}</div>
            <div class="text-dark-text font-medium">{{ contact.value }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
