<script setup lang="ts">
import MeImg from '@/assets/img/main/me.jpg'

definePageMeta({
  title: '介绍'
})
</script>

<template>
  <div flex-center gap-1 pt-20 lt-sm="flex-col px-1">
    <img :src="MeImg" alt="我的照片" w="lt-sm:full sm:xs" rd-2 />
    <div>
      <h1>邱君儿</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
