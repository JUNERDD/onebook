<script setup lang="ts">
const route = useRoute()
const title = computed(() => route.meta?.title)
useHead({
  // 标题模板（只有在vue文件中才生效 - 因为不可序列化，所以不能写在nuxt.config.ts中）
  // titleTemplate: (title) => (title ? `${title} - One Book` : 'One Book')
  titleTemplate: () => (title.value ? `${title.value} - One Book` : 'One Book')
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
