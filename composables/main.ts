export const useMenuList = () => [
  {
    to: '/login',
    label: '介绍'
  },
  {
    to: '/',
    label: '项目'
  },
  {
    to: '/',
    label: '博客'
  }
]

export const useMainStore = defineStore('main', () => {
  // 切换深色、浅色模式
  const handleMode = useToggle(useDark())

  // 切换菜单显示
  const showMenu = ref(false)

  return { handleMode, showMenu }
})
