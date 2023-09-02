<script setup lang="ts">
const menuList = useMenuList().reverse()
</script>

<template>
  <template v-for="{ to, desc } in menuList" :key="desc">
    <NuxtLink :to="to">
      <div font="bold panchang" flex justify-between b="1 solid l-none b-none r-none dgrey-5" p2 text-9 auto-color-d>
        {{ desc }}
      </div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
