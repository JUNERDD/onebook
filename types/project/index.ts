import type { ICustomCardV2Props } from '~/types/custom'
import { useProjectStack } from '~/composables/project'

// 列表信息类型
export interface IProjectList {
  projectList: ICustomCardV2Props[]
}

// 基础信息展示类型
export interface IProjectInfo {
  stack: ReturnType<typeof useProjectStack>
}
