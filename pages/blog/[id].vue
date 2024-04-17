<script setup lang="ts">
const md = `
# 你好世界
这是什么
> Block quote
**我是加粗字体.**
`
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <MDC :value="md" />
  </div>
</template>

<style lang="scss" scoped></style>
