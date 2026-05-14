import { ref, watch } from 'vue'

type Theme = 'dark' | 'light'

const saved = localStorage.getItem('theme') as Theme | null
const theme = ref<Theme>(saved === 'light' ? 'light' : 'dark')

export function useTheme() {
  function setTheme(t: Theme) {
    theme.value = t
  }

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(theme, (val) => {
    document.documentElement.classList.toggle('light', val === 'light')
    localStorage.setItem('theme', val)
  }, { immediate: true })

  return { theme, toggle, setTheme }
}
