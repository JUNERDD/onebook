<script setup lang="ts">
const tabList = useMenuList()
</script>

<template>
  <template v-for="{ to, label } in tabList" :key="label">
    <NuxtLink :to="to">
      <div auto-color btn>{{ label }}</div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
