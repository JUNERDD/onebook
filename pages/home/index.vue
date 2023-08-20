<script lang="ts" setup>
import useHomeStore from '~/stores/home'

definePageMeta({
  title: '首页'
})

const homeStore = useHomeStore()
</script>

<template>
  <div>Page: {{ homeStore.name }}</div>
</template>

<style scoped></style>
