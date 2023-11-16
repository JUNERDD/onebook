<script setup lang="ts">
defineProps<{
  imgs: string[]
}>()
</script>

<template>
  <el-carousel direction="vertical" aspect-video overflow-hidden rd-3 trigger="click">
    <el-carousel-item v-for="item in imgs" :key="item" w-full>
      <img :src="item" alt="项目图片" h-full w-full />
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss" scoped>
:deep(.el-carousel__container) {
  height: 100% !important;
}
</style>
