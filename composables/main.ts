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
  const handleMode = useToggle(useDark())

  return { handleMode }
})
