<script setup lang="ts">
const mainStore = useMainStore()
const colorClass = computed(() => (mainStore.showMenu ? 'auto-color-d' : 'auto-color'))
</script>

<template>
  <NuxtLink to="/">
    <!-- 宽高根据父元素决定 -->
    <div i-ob-logo_white h-full w-full transition="colors duration-action" :class="colorClass"></div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
