/* 菜单列表 */
export const useMenuList = () => [
  {
    to: '/blog',
    label: '博客',
    desc: 'Blog'
  },
  {
    to: '/projects',
    label: '项目',
    desc: 'Projects'
  },
  {
    to: '/introduction',
    label: '介绍',
    desc: 'Introduction'
  }
]

/* 菜单个人信息列表 */
export const useMenuInfo = () => [
  {
    icon: 'i-game-icons-phone',
    label: '你可以通过邮箱联系我'
  },
  {
    icon: 'i-game-icons-envelope',
    label: 'juneruse@foxmail.com'
  }
]

/* main pinia store */
export const useMainStore = defineStore('main', () => {
  // 深色模式
  const isDark = useDark()

  // 切换深色、浅色模式
  const handleMode = useToggle(isDark)

  // 切换菜单显示
  const showMenu = ref(false)

  return { handleMode, showMenu, isDark }
})
