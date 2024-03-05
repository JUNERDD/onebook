import { useLoadingRef } from '~/composables/common'

export const useBlogStore = defineStore('blog', () => {
  // 博客列表
  const blogList = ref([])

  const { isLoading, composeAction } = useLoadingRef()

  // 请求列表
  const fetchBlogListAction = composeAction((value: string) => {
    console.log(value)
  })

  return { blogList, isLoading, fetchBlogListAction }
})
