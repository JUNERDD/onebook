<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '我是标题'
  }
)
</script>

<template>
  <div flex-center-i gap-4>
    <div mt-1px h-6 lt-sm="h-4" w-1 rd-1 auto-bg></div>
    <h3>{{ title }}</h3>
  </div>
</template>

<style lang="scss" scoped></style>
