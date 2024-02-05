<script setup lang="ts">
// 定义参数
defineProps<{
  src: string
  alt: string
}>()

// 加载状态
const isImgLoading = ref(true)
</script>

<template>
  <img
    v-show="!isImgLoading"
    w-full
    :src="src"
    :alt="alt"
    class="custom-load-img"
    transition="transform duration-out-in"
    h="120%"
    v-bind="$attrs"
    @load="isImgLoading = false"
  />
  <custom-loading-ui v-show="isImgLoading" h="100%" hide-title />
</template>

<style lang="scss" scoped></style>
