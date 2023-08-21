<script setup lang="ts">
const isDark = useDark()
const handleChange = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div
    p4
    ml4
    rd-1
    cursor-pointer
    bg="black dark:white-2"
    text="white dark:black"
    animate="spin duration-4000"
    @click="handleChange"
  >
    <div i-game-barbed-sun></div>
  </div>
</template>

<style lang="scss" scoped></style>
