<script setup lang="ts">
definePageMeta({
  title: '博客'
})

const blogStore = useBlogStore()
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <!-- 标题 -->
    <blog-title />

    <!-- 内容区域 -->
    <div flex gap-1 lt-sm:flex-col>
      <!-- 筛选列表 -->
      <blog-filter />

      <!-- 博客列表 -->
      <custom-loading :show="blogStore.isLoading" loading-class="items-start sm:pt30">
        <blog-list />
      </custom-loading>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
