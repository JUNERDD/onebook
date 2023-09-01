<script setup lang="ts">
const mainStore = useMainStore()
</script>

<template>
  <div
    bg="black dark:white-2"
    text="white dark:black"
    animate="spin duration-4000"
    ml4
    cursor-pointer
    rd-1
    p4
    @click="mainStore.handleMode()"
  >
    <div i-game-barbed-sun dark:hidden></div>
    <div i-game-icons-moon hidden dark:block></div>
  </div>
</template>

<style lang="scss" scoped></style>
