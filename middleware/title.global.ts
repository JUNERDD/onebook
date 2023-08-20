export default defineNuxtRouteMiddleware((to) => {
  useHead({
    title: to.meta.title as string
  })
})
