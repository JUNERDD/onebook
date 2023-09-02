export default defineNuxtRouteMiddleware((to) => {
  // 当路由切换时关闭menu
  const mainStore = useMainStore()
  mainStore.showMenu = false
})
