<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <div mt-5xl flex flex-col gap-4 lt-sm="mt1 flex-center-i">
    <h1 leading="!tight">{{ title }}</h1>
    <p>{{ desc }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
