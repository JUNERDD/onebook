import type { IDetail } from '~/types/project/detail'
import type { ICustomCardV2Props } from '~/types/custom'
import { getList, getListByFild } from '~/services'

/* 项目技术栈标签列表 */
export const useProjectStack = () => [
  'Vue 3',
  'React 18',
  'Nuxt 3',
  'Next 14',
  'Koa 2',
  'MongoDB',
  'MySQL',
  'UnoCSS',
  'TailwindCSS'
]

/* project pinia store */
export const defaultDetail: IDetail = {
  id: 'string',
  project_id: 'string',
  title: 'string',
  desc: 'string',
  technology_stack: [],
  imgs: [],
  project_link: [],
  role: 'string',
  time: 'string',
  bottom_info: { label: 'string', text: [] }
}
export const useProjectStore = defineStore('project', () => {
  // 项目列表
  const projectList = ref<ICustomCardV2Props[]>([])
  // 项目详情
  const projectDetail = ref(defaultDetail)
  // 加载状态
  const isLoading = ref(true)

  // 包装action组合函数
  function composeAction<T extends (...args: any[]) => Promise<any>>(action: T) {
    // 返回一个新函数，接受action的参数
    return async (...args: Parameters<T>) => {
      isLoading.value = true
      await action(...args)
      isLoading.value = false
    }
  }

  // 请求项目列表
  const fetchProjectListAction = composeAction(async () => {
    const res = (await getList<ICustomCardV2Props>('project')).data
    if (res) projectList.value = res
  })

  // 请求项目详情
  const fetchProjectDetailAction = composeAction(async (id: string) => {
    const res = (await getListByFild<IDetail>('detail', 'project_id', id)).data
    if (res && res.length > 0) projectDetail.value = res[0]
  })

  return { projectList, fetchProjectListAction, isLoading, fetchProjectDetailAction, projectDetail }
})
