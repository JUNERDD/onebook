import type { ICustomCardV2Props } from '~/components/custom/card-v2/_type'
import type { IDetail } from '~/types/project/detail'

// 获取项目列表
export const getProjectList = async () => {
  const client = useSupabaseClient()
  const { data } = await client.from('project').select('*')

  return data as ICustomCardV2Props[]
}

// 获取项目详情
export const getProjectDetail = async (id: string) => {
  const client = useSupabaseClient()

  const { data } = await client.from('detail').select().eq('project_id', id)

  return data as IDetail[]
}
