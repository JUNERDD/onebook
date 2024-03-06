<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean
    hideTitle?: boolean
    loadingClass?: string | object
  }>(),
  {
    show: true,
    hideTitle: false,
    loadingClass: ''
  }
)
</script>

<template>
  <transition name="el-fade-in-linear" mode="out-in">
    <template v-if="show">
      <custom-loading-ui :hide-title="hideTitle" :class="loadingClass" />
    </template>
    <template v-else>
      <slot />
    </template>
  </transition>
</template>

<style lang="scss" scoped></style>
