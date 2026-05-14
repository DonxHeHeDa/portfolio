<script setup lang="ts">
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Ambient background glow -->
    <div
      class="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-accent/5 blur-3xl"
      aria-hidden="true"
    />

    <!-- Decorative grid pattern -->
    <div
      class="pointer-events-none absolute inset-0"
      :style="{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '60px 60px' }"
      aria-hidden="true"
    />

    <div class="relative z-10 text-center px-6 pt-20 pb-24 max-w-4xl mx-auto">
      <!-- Avatar -->
      <div
        class="inline-flex items-center justify-center mb-10 animate-fade-in-up"
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <div class="relative">
          <!-- Pulse ring -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-violet-600 animate-pulse-ring"
          />
          <!-- Gradient ring -->
          <div class="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent via-accent-hover to-violet-600 p-[3px]">
            <div class="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
              <!-- Avatar placeholder - replace src with actual image -->
              <svg
                class="w-14 h-14 md:w-16 md:h-16 text-accent/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium animate-fade-in-up"
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        <span class="relative flex w-2 h-2">
          <span class="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
          <span class="relative inline-flex w-2 h-2 rounded-full bg-accent" />
        </span>
        开放合作中
      </div>

      <!-- Title -->
      <h1
        class="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 animate-fade-in-up"
        style="animation-delay: 0.35s; animation-fill-mode: both;"
      >
        <span class="text-muted font-light block sm:inline">你好，我是</span>
        <span
          class="block sm:inline bg-gradient-to-r from-accent via-accent-hover to-violet-400 bg-clip-text text-transparent"
        >
          开发者
        </span>
      </h1>

      <!-- Description -->
      <p
        class="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
        style="animation-delay: 0.5s; animation-fill-mode: both;"
      >
        热爱编程，专注于构建优秀的 Web 应用。
        <br class="hidden sm:inline" />
        用代码创造价值，用技术解决问题。
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
        style="animation-delay: 0.65s; animation-fill-mode: both;"
      >
        <a
          href="#projects"
          class="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-dark-bg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.4)]"
        >
          <span class="relative z-10">查看项目</span>
          <svg class="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 px-8 py-3.5 border border-border text-dark-text font-semibold rounded-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:scale-105"
        >
          联系我
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up"
        style="animation-delay: 1s; animation-fill-mode: both;"
      >
        <a
          href="#about"
          class="flex flex-col items-center gap-2 text-muted hover:text-dark-text transition-colors duration-300 group"
        >
          <span class="text-xs tracking-widest uppercase font-medium">向下滚动</span>
          <span class="flex flex-col items-center gap-0.5">
            <span class="block w-0.5 h-5 bg-muted/30 rounded-full relative overflow-hidden">
              <span class="absolute top-0 left-0 w-full h-full bg-accent animate-[scroll-down_2s_ease-in-out_infinite] rounded-full" />
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-down {
  0% { transform: translateY(-100%); }
  50% { transform: translateY(100%); }
  100% { transform: translateY(100%); }
}
</style>
