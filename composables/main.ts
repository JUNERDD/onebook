/* 菜单列表 */
export const useMenuList = () => [
  {
    to: '/blog',
    label: 'Blog',
    desc: 'Blog'
  },
  {
    to: '/projects',
    label: 'Projects',
    desc: 'Projects'
  },
  {
    to: '/introduction',
    label: 'Introduction',
    desc: 'Introduction'
  }
]

/* 菜单个人信息列表 */
export const useMenuInfo = () => [
  {
    icon: 'i-game-icons-phone',
    label: '13553984605'
  },
  {
    icon: 'i-game-icons-envelope',
    label: '53842108@qq.com'
  }
]

/* main pinia store */
export const useMainStore = defineStore('main', () => {
  // 切换深色、浅色模式
  const handleMode = useToggle(useDark())

  // 切换菜单显示
  const showMenu = ref(false)

  return { handleMode, showMenu }
})
