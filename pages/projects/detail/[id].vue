<script setup lang="ts">
definePageMeta({
  title: '项目'
})

const route = useRoute()
const { id } = route.params
const projectStore = useProjectStore()
projectStore.fetchProjectDetailAction(id as string)
</script>

<template>
  <div full-page-sub flex="~ col">
    <custom-loading :show="projectStore.isLoading">
      {{ projectStore.projectDetail }}
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
