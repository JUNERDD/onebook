<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <div lt-sm="mt-3 flex-col items-start" mt-5xl flex-center-i justify-between gap-4>
    <!-- 标题 -->
    <div flex="~ col">
      <h1 leading="!tight" lt-sm="text-xl">{{ title }}</h1>
      <span>{{ desc }}</span>
    </div>

    <!-- 立即体验 -->
    <custom-button icon="i-game-icons-power-lightning" text="立即体验" />
  </div>
</template>

<style lang="scss" scoped></style>
