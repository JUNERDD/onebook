<script setup lang="ts">
definePageMeta({
  title: '项目'
})

const stack = useProjectStack()
const projectStore = useProjectStore()

// 发送列表请求
projectStore.fetchProjectListAction()
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <!-- 标题 -->
    <project-info :stack="stack" />

    <!-- 加载盒子 -->
    <custom-loading :show="projectStore.isLoading">
      <!-- 项目列表 -->
      <project-list :project-list="projectStore.projectList" />
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
