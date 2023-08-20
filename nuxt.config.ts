// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 运行时严格的ts检测
  typescript: {
    strict: true
  },
  // 定义app配置
  app: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'OneBook - 个人官网 - 博客'
        },
        {
          name: 'keywords',
          content: 'OneBook, onebook, 书云, 一本书, 博客, 个人官网'
        }
      ],
      // 如果浏览器不支持脚本，显示此内容
      noscript: [{ innerHTML: 'Javascript is required' }]
    }
  },
  // 运行时进行eslint检测
  modules: [
    '@nuxtjs/eslint-module',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore']
        ]
      }
    ]
  ],
  // 实验性特征
  routeRules: {
    // '/': { redirect: '/home' }
  }
})
