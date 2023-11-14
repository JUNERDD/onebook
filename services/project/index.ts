import type { ICustomCardV2Props } from '~/components/custom/card-v2/_type'

// 获取项目列表
export const getProjectList = () => obFetch.get<ICustomCardV2Props[]>('/project')
