<script setup lang="ts">
const tabList = [
  {
    to: '/',
    table: '介绍'
  },
  {
    to: '/',
    table: '项目'
  },
  {
    to: '/',
    table: '博客'
  }
]
</script>

<template>
  <template v-for="{ to, table } in tabList" :key="table">
    <NuxtLink :to="to">
      <div grey-hover>{{ table }}</div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
