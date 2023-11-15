<script setup lang="ts">
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
      <div flex="~ col" gap-5xl>
        <!-- 标题 -->
        <project-title :title="projectDetail.title" :desc="projectDetail.desc" />

        <!-- 轮播图 -->
        <project-carousel :imgs="projectDetail.imgs" />

        <!-- 描述 -->
        <div flex>
          <!-- 技术栈 -->
          <project-technology :technology-stack="projectDetail.technology_stack" />
        </div>
      </div>
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
