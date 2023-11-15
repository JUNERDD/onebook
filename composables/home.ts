/* 首页技术栈列表 */
import type { ICustomCardProps } from '~/types/custom'

export const useHomeStack = (): ICustomCardProps[] => [
  {
    link: 'https://nuxt.com.cn/',
    label: 'Nuxt Architecture',
    text: '充分发挥 Nuxt 3 及其模块生态系统的全部潜力',
    icon: 'i-simple-icons-nuxtdotjs'
  },
  {
    link: 'https://cn.vuejs.org/',
    label: 'Vue Components',
    text: '组件化开发，运用 Vue 组件的强大功能',
    icon: 'i-simple-icons-vuedotjs'
  },
  {
    link: 'https://www.typescriptlang.org/',
    label: 'TypeScript',
    text: '完整的 TypeScript 类型检查',
    icon: 'i-simple-icons-typescript'
  },
  {
    link: 'https://alfred-skyblue.github.io/unocss-docs-cn/',
    label: 'UnoCSS Engine',
    text: '极致的原子化 CSS 引擎 UnoCSS',
    icon: 'i-simple-icons-unocss'
  },
  {
    link: 'https://supabase.com/',
    label: 'Supabase',
    text: '提供无服务器后端，实时数据库和身份验证',
    icon: 'i-simple-icons-supabase'
  },
  {
    link: 'https://www.postgresql.org/',
    label: 'Postgresql Database',
    text: 'PostgreSQL 使用先进的数据库解决方案',
    icon: 'i-ob-postgresql'
  },
  {
    link: 'https://vercel.com/',
    label: 'Vercel Deploy',
    text: '利用 Vercel 进行快速部署和优化的前端体验',
    icon: 'i-simple-icons-vercel'
  }
]
