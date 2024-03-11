import type { ICustomCardV3Props } from '~/types/custom'

// 筛选多选框类型
export type ICheckChildren = [string, string]

export interface IBlogCheck {
  title: string
  name: string
  children: ICheckChildren[]
}

// 搜索表单
export interface ISearchForm {
  input: string
  keys: string[]
}

// 选中数目类型
export type IcheckNum = Record<string, number>

// 博客列表组件参数
export interface IBlogListProp {
  blogList: ICustomCardV3Props[]
}
