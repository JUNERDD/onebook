<script setup lang="ts">
definePageMeta({
  title: '博客'
})
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <!-- 标题 -->
    <blog-title />

    <!-- 博客列表 -->
    <blog-list />
  </div>
</template>

<style lang="scss" scoped></style>
