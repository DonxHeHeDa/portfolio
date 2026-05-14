<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border py-8 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-muted text-sm">
        &copy; {{ year }} Portfolio. All rights reserved.
      </p>
      <p class="text-muted text-sm">
        Built with Vue 3 &amp; Tailwind CSS
      </p>
    </div>
  </footer>
</template>
