<script setup lang="ts">
const menuList = useMenuList()
</script>

<template>
  <template v-for="{ to, label } in menuList" :key="label">
    <NuxtLink :to="to">
      <div auto-color btn>{{ label }}</div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
