import { debounce } from 'lodash-es'
import { useLoadingRef } from '~/composables/common'
import type { IBlogCheck, IcheckNum, ISearchForm } from '~/types/blog'

// 博客store
export const defaultSearchForm: ISearchForm = {
  input: '',
  keys: []
}
export const useBlogStore = defineStore('blog', () => {
  // 关键字搜索框
  const searchInput = ref<string>()

  // 搜索表单
  const searchForm = ref(defaultSearchForm)

  // 选中数目（key为BlogCheck的name值）
  const checkNum = reactive<IcheckNum>({})
  useBlogCheck().map((item) => (checkNum[item.name] = 0))

  // 博客列表
  const blogList = ref([])

  const { isLoading, composeAction } = useLoadingRef()

  // 请求列表
  const fetchBlogListAction = composeAction((form: ISearchForm) => {
    // console.log(form)
  })

  // 清除搜索
  const clearAction = () => {
    searchInput.value = ''
    searchForm.value = { ...defaultSearchForm }
    useBlogCheck().map((item) => (checkNum[item.name] = 0))
  }

  // 节流监听输入框变化
  watch(
    searchInput,
    debounce((val) => (searchForm.value.input = val), 1000, { leading: true })
  )

  // 监听表单变化发送网络请求
  watch(searchForm, (val) => fetchBlogListAction(val), { deep: true })

  return { searchInput, checkNum, blogList, searchForm, isLoading, clearAction, fetchBlogListAction }
})

// 获取博客多选框
export const useBlogCheck = (): IBlogCheck[] => [
  {
    title: 'HTML CSS',
    name: '1',
    children: [
      ['标签', '标签'],
      ['布局', '布局'],
      ['动画', '动画'],
      ['性能优化', '性能优化']
    ]
  },
  {
    title: 'JavaScript',
    name: '2',
    children: [
      ['基础', '基础'],
      ['高级', '高级'],
      ['其他', '其他']
    ]
  },
  {
    title: '前端框架',
    name: '3',
    children: [
      ['vue', 'vue'],
      ['react', 'react']
    ]
  },
  {
    title: '工程化',
    name: '4',
    children: [
      ['webpack', 'webpack'],
      ['git', 'git']
    ]
  }
]
