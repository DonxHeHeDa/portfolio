<script setup lang="ts">
import { projects } from '../data/projects'
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-surface/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span class="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
          项目展示
        </span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.name"
          class="group bg-surface rounded-xl border border-border overflow-hidden hover:border-accent/30 transition-all duration-500"
        >
          <div class="aspect-video bg-dark-bg flex items-center justify-center overflow-hidden">
            <span class="text-4xl opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              {{ project.icon }}
            </span>
          </div>

          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
              {{ project.name }}
            </h3>
            <p class="text-muted text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center gap-4">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                查看项目 →
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
