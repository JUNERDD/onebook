// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 运行时严格的ts检测
  typescript: {
    strict: true
  },
  css: ['@/assets/css/index.scss'],
  vite: {
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 自动给scss模块添加额外语句
          additionalData: `
           @use "@/assets/css/public/variable" as *;
           @use "@/assets/css/public/elui" as *;
           @use "@/assets/css/public/mixin" as *;
          `
        }
      }
    }
  },
  // 运行时进行eslint检测
  modules: [
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@element-plus/nuxt',
    '@nuxtjs/mdc'
  ],
  // element plus
  elementPlus: {
    importStyle: 'scss'
  },
  // 谷歌字体
  googleFonts: {
    families: {
      'Noto Serif SC': true
    }
  },
  // 数据库
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_ANON_KEY
  },
  // mdc
  mdc: {
    components: {
      map: {
        strong: 'MdcStrong'
      }
    }
  },
  // 定义app配置
  app: {
    head: {
      link: [{ rel: 'icon', type: 'img/x-icon', href: '/logo_white.ico' }],
      // 在加载nuxt.js前就执行的js代码
      script: [{ src: '/head_script.js' }],
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
  }
})
