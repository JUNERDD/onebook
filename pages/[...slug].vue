<script setup lang="ts">
definePageMeta({
  title: '404'
})
</script>

<template>
  <div h="100%" flex-center flex-col>
    <div flex-center-i>
      <div i-game-icons-linked-rings text="lt-sm:4xl sm:6xl"></div>
      <div font="bold panchang" text="lt-sm:4xl sm:5xl" ml2>404</div>
    </div>
    <NuxtLink to="/" mt40>
      <div btn-p>Go Home</div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
