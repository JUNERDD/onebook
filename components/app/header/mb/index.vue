<script setup lang="ts">
const boxRef = ref<Element>()
const mainStore = useMainStore()
onMounted(() => {
  // 组件挂载完成时存储高度信息进
  mainStore.menuHeight = boxRef.value!.scrollHeight
})
</script>

<template>
  <div ref="boxRef" h130 overflow-hidden auto-bg auto-color-d>
    <app-header-mb-tab />
    <app-header-mb-options />
    <app-header-mb-infos />
  </div>
</template>

<style lang="scss" scoped></style>
