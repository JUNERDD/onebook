<script setup lang="ts">
const menuList = useMenuList()
</script>

<template>
  <template v-for="{ to, desc } in menuList" :key="desc">
    <NuxtLink :to="to">
      <div font="bold panchang" flex justify-between b-t="1 solid" b-dgrey-5 p2 text-9 auto-color-d>
        {{ desc }}
      </div>
    </NuxtLink>
  </template>
</template>

<style lang="scss" scoped></style>
