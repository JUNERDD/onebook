const useHomeStore = defineStore('main', () => {
  const name = ref('你好世界')

  return { name }
})

export default useHomeStore
