<script setup lang="ts">
const menuInfo = useMenuInfo()
</script>

<template>
  <template v-for="{ icon, label } in menuInfo" :key="label">
    <div flex-center-i font="panchang" pb3>
      <div :class="icon"></div>
      <span px3>{{ label }}</span>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
