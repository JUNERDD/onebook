<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean
    hideTitle?: boolean
  }>(),
  {
    show: true,
    hideTitle: false
  }
)
</script>

<template>
  <transition name="el-fade-in-linear" mode="out-in">
    <template v-if="show">
      <custom-loading-ui :hide-title="hideTitle" v-bind="$attrs" />
    </template>
    <template v-else>
      <slot />
    </template>
  </transition>
</template>

<style lang="scss" scoped></style>
