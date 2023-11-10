// 在加载nuxt.js之间就进行主题切换
const local = localStorage.getItem('vueuse-color-scheme')
const auto = local === 'auto'
const dark = local === 'dark'
const windowDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (!local && windowDark) {
  document.documentElement.classList.add('dark')
} else if (auto && windowDark || dark) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
