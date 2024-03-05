import type { IDetail } from '~/types/project/detail'
import type { ICustomCardV2Props } from '~/types/custom'
import { getList, getListByFild } from '~/services'
import { useLoadingRef } from '~/composables/common'

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

export const useProjectStore = defineStore('project', () => {
  // 项目列表
  const projectList = ref<ICustomCardV2Props[]>([])
  // 项目详情
  const projectDetail = ref<IDetail>()

  // 获取状态和组合函数
  const { isLoading, composeAction } = useLoadingRef()

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
