import type { ICustomCardProps } from '~/components/custom/card/_type'

/* 首页技术栈列表 */
export const useHomeStack = (): ICustomCardProps[] => [
  {
    link: 'https://gitee.com/junerdd',
    label: 'Nuxt Architecture',
    text: '充分发挥 Nuxt 3 及其模块生态系统的全部潜力',
    icon: 'i-simple-icons-nuxtdotjs'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'Vue Components',
    text: '组件化开发，运用 Vue 组件的强大功能',
    icon: 'i-simple-icons-vuedotjs'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'TypeScript',
    text: '完整的 TypeScript 类型检查',
    icon: 'i-simple-icons-typescript'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'UnoCSS Engine',
    text: '极致的原子化 CSS 引擎 UnoCSS',
    icon: 'i-simple-icons-unocss'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'Drizzle ORM',
    text: '以 Drizzle ORM 优化数据库交互',
    icon: 'i-ob-drizzle'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'PlanetScale Database',
    text: '使用 PlanetScale 数据库进行无缝扩展',
    icon: 'i-simple-icons-planetscale'
  },
  {
    link: 'https://gitee.com/junerdd',
    label: 'Vercel Deploy',
    text: '利用 Vercel 进行快速部署和优化的前端体验',
    icon: 'i-simple-icons-vercel'
  }
]
