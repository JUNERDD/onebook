<script setup lang="ts">
const menuList = useMenuList()
const mainStore = useMainStore()
const hClass = computed(() => (mainStore.showMenu ? 'h60vh' : 'h0'))
</script>

<template>
  <div transition="height duration-action" overflow-hidden auto-bg auto-color-d :class="hClass">
    <div pt24>
      <template v-for="item in menuList" :key="item.label">
        {{ item }}
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
