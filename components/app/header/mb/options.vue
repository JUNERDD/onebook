<script setup lang="ts">
const menuList = useMenuList()
</script>

<template>
  <template v-for="{ to, label } in menuList" :key="label">
    <NuxtLink :to="to">
      <div font="bold" flex justify-between b-t="1 solid" b-dgrey-5 p2 text-9 auto-color-d>
        {{ label }}
      </div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
