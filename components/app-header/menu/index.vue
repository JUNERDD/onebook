<script setup lang="ts">
const mainStore = useMainStore()
const hClass = computed(() => (mainStore.showMenu ? 'h130' : 'h0'))
</script>

<template>
  <div transition="height duration-action" overflow-hidden auto-bg auto-color-d :class="hClass">
    <div pt24>
      <app-header-menu-options />
    </div>
    <div b="1 solid l-none b-none r-none dgrey-5" h100% p2>
      <app-header-menu-infos />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
