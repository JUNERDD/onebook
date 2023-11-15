import type { ICustomLink } from '~/types/custom'

// 底部信息类型
export interface IBottomInfo {
  label: string
  text: string[]
}

// 详情页类型
export interface IDetail {
  id: string
  project_id: string
  title: string
  desc: string
  technology_stack: string[]
  imgs: string[]
  project_link: ICustomLink[]
  role: string
  time: string
  bottom_info: IBottomInfo
}
