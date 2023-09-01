<script setup lang="ts">
const handleDrowon = () => {
  console.log(1)
}
</script>

<template>
  <div
    ml4
    cursor-pointer
    rd-1
    p4
    bg="black dark:white-2"
    text="white dark:black"
    @click="handleDrowon"
  >
    <div i-game-icons-hamburger-menu></div>
  </div>
</template>

<style lang="scss" scoped></style>
