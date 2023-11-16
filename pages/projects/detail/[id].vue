<script setup lang="ts">
import { defaultDetail } from '~/composables/project'

definePageMeta({
  title: '项目'
})

const route = useRoute()
const { id } = route.params
const projectStore = useProjectStore()
const { isLoading, projectDetail } = storeToRefs(projectStore)
projectStore.fetchProjectDetailAction(id as string)
</script>

<template>
  <div full-page-sub flex="~ col" px-2 pb-1>
    <custom-loading :show="isLoading">
      <!-- 主要内容 -->
      <template v-if="projectDetail.id !== defaultDetail.id">
        <div flex="~ col" gap-5xl lt-sm="text-sm gap-3">
          <!-- 标题 -->
          <project-title :title="projectDetail.title" :desc="projectDetail.desc" />

          <!-- 中部 -->
          <div flex flex-wrap gap-1 lt-sm="gap-2">
            <!-- 轮播图 -->
            <project-carousel :imgs="projectDetail.imgs" w-full />

            <!-- 描述 -->
            <div flex="~ col" flex-1 gap-2 w="[calc(50%-3.125rem*1/2)] lt-sm:full">
              <!-- 角色 -->
              <project-section title="角色" :text="projectDetail.role" />

              <!-- 项目地址 -->
              <project-section title="地址">
                <template v-for="{ link, text, icon } in projectDetail.project_link" :key="link">
                  <custom-link :link="link" :text="text" :icon="icon" />
                </template>
              </project-section>

              <!-- 技术栈 -->
              <project-section title="技术栈">
                <template v-for="item in projectDetail.technology_stack" :key="item">
                  <custom-tip :text="item" circular small />
                </template>
              </project-section>

              <!-- 项目周期 -->
              <project-section title="开发周期" :text="projectDetail.time" />
            </div>

            <!-- 底部 -->
            <project-bottom v-bind="projectDetail.bottom_info" w="[calc(50%-3.125rem*1/2)] lt-sm:full" />
          </div>
        </div>
      </template>
      <template v-else>
        <project-not />
      </template>
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
