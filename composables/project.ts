import type { ICustomCardV2Props } from '~/components/custom/card-v2/_type'
import { getProjectList } from '~/services/project'

/* 项目技术栈标签列表 */
export const useProjectStack = () => [
  'Vue 3',
  'React 18',
  'Nuxt 3',
  'Next 13',
  'Koa 2',
  'MongoDB',
  'MySQL',
  'UnoCSS',
  'TailwindCSS'
]

/* project pinia store */
export const useProjectStore = defineStore('project', () => {
  // 项目列表
  const projectList = ref<ICustomCardV2Props[]>([])

  // 加载状态
  const isLoading = ref(true)

  // 请求项目列表
  const fetchProjectListAction = async () => {
    isLoading.value = true
    const res = await getProjectList()
    if (!res) return
    projectList.value = res.data.value
    isLoading.value = false
  }

  return { projectList, fetchProjectListAction, isLoading }
})
