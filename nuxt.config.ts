// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 运行时ts检测
  typescript: {
    strict: true
  },
  // 运行时进行eslint检测
  modules: ['@nuxtjs/eslint-module']
})
