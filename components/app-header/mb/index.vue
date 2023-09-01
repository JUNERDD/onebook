<script setup lang="ts">
const mainStore = useMainStore()
const colorClass = computed(() =>
  mainStore.showMenu ? 'auto-bg-d auto-color' : 'auto-bg auto-color-d'
)
const handleDrowon = () => {
  mainStore.showMenu = !mainStore.showMenu
}
</script>

<template>
  <div ml4 rd-1 p4 transition="colors duration-action" :class="colorClass" @click="handleDrowon">
    <div i-game-icons-hamburger-menu></div>
  </div>
</template>

<style lang="scss" scoped></style>
