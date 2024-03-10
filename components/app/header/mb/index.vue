<script setup lang="ts">
const boxRef = ref<Element>()
</script>

<template>
  <div ref="boxRef" h156 overflow-hidden auto-bg auto-color-d>
    <app-header-mb-tab />
    <app-header-mb-options />
    <app-header-mb-infos />
  </div>
</template>

<style lang="scss" scoped></style>
