<script setup lang="ts">
import { skills } from '../data/skills'
</script>

<template>
  <section id="about" class="py-24 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span class="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
          关于我
        </span>
      </h2>

      <div class="mb-16">
        <p class="text-lg text-muted leading-relaxed text-center max-w-2xl mx-auto">
          我是一名全栈开发者，拥有丰富的 Web 开发经验。热爱开源社区，喜欢探索新技术，
          致力于打造高性能、用户体验优秀的应用程序。
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-8 text-center">技术栈</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="skill in skills"
            :key="skill.name"
            class="px-5 py-2.5 bg-surface rounded-lg text-muted hover:text-accent hover:border-accent/50 border border-border transition-all duration-300 cursor-default"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
