<script setup lang="ts">
definePageMeta({
  title: '博客'
})
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <!-- 标题 -->
    <blog-title />

    <!-- 内容区域 -->
    <div flex gap-1>
      <!-- 筛选列表 -->
      <blog-filter />

      <!-- 博客列表 -->
      <blog-list />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
