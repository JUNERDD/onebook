<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'img/x-icon', href: '/logo_white.ico' }],
  // 标题模板（只有在vue文件中才生效）
  titleTemplate: (title) => (title ? `${title} - One Book` : 'One Book')
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
