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
    <div mt-5xl flex flex-col gap-4 lt-sm="mt1 flex-center-i">
      <h1 leading="tight!">个人项目</h1>
      <p>学学习，练练手，写写作业</p>
      <div flex flex-wrap gap-4 lt-sm="flex-center-j">
        <template v-for="item in stack" :key="item">
          <custom-tip :text="item" circular small />
        </template>
      </div>
    </div>

    <!-- 加载盒子 -->
    <custom-loading :show="projectStore.projectList.length < 1">
      <div flex flex-wrap gap-3>
        <template v-for="item in projectStore.projectList" :key="item.id">
          <custom-card-v2 v-bind="item" />
        </template>
      </div>
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
