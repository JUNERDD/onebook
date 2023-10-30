<script setup lang="ts">
const menuList = useMenuList()
</script>

<template>
  <template v-for="{ to, label } in menuList" :key="label">
    <NuxtLink :to="to" mx5 last-of-type:mr0>
      <div text="2 black-3 dark:white-3" font-bold btn>{{ label }}</div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped>
.router-link-active > div {
  color: $BLACK;
}

html.dark .router-link-active > div {
  color: $WHITE;
}
</style>
