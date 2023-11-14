<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean
  }>(),
  {
    show: true
  }
)
</script>

<template>
  <!--<transition name="el-fade-in-linear" mode="out-in">-->
  <template v-if="show">
    <custom-loading-ui />
  </template>
  <template v-else>
    <slot />
  </template>
  <!--</transition>-->
</template>

<style lang="scss" scoped></style>
