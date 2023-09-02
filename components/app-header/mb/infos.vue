<script setup lang="ts">
const menuInfo = useMenuInfo()
</script>

<template>
  <div b="1 solid l-none b-none r-none dgrey-5" h100% p2>
    <template v-for="{ icon, label } in menuInfo" :key="label">
      <div flex-center-i font="panchang" pb3>
        <div :class="icon"></div>
        <span px3>{{ label }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
