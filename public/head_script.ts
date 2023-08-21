// 在加载nuxt.js之间就进行主题切换
const auto = localStorage.getItem('vueuse-color-scheme') === 'auto'
const dark = localStorage.getItem('vueuse-color-scheme') === 'dark'
const windowDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (auto && windowDark || dark) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
