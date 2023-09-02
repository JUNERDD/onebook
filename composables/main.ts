export const useMenuList = () => [
  {
    to: '/login',
    label: '介绍',
    desc: 'Introduction'
  },
  {
    to: '/',
    label: '项目',
    desc: 'Project'
  },
  {
    to: '/',
    label: '博客',
    desc: 'Blog'
  }
]

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

export const useMainStore = defineStore('main', () => {
  // 切换深色、浅色模式
  const handleMode = useToggle(useDark())

  // 切换菜单显示
  const showMenu = ref(false)

  return { handleMode, showMenu }
})
