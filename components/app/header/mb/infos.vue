<script setup lang="ts">
const menuInfo = useMenuInfo()
</script>

<template>
  <div b-t="1 solid" b-dgrey-5 p="x2 y3">
    <template v-for="{ icon, label } in menuInfo" :key="label">
      <div flex-center-i py4>
        <div :class="icon"></div>
        <span px4>{{ label }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
