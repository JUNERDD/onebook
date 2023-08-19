const useHomeStore = defineStore('main', () => {
  const count = ref(0)

  return { count }
})

export default useHomeStore
