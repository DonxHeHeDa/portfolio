<script setup lang="ts">
import { useTheme } from './composables/useTheme'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

useTheme()
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-dark-text">
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
