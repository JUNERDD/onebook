<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
  link?: string
}>()
</script>

<template>
  <NuxtLink
    :to="link"
    flex-center-i
    cursor-pointer
    select-none
    gap-5
    rd-3
    p4
    lt-sm="text-xs rd-4 p-7px"
    auto-bg
    auto-color-d
    hover:opacity-90
  >
    <div v-if="icon" :class="icon"></div>
    <div v-if="text">{{ text }}</div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
