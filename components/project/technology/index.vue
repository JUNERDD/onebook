<script setup lang="ts">
defineProps<{
  technologyStack: string[]
}>()
</script>

<template>
  <div flex="~ col" gap-4>
    <h4>技术栈</h4>
    <div ml--1 flex flex-wrap gap-4>
      <template v-for="item in technologyStack" :key="item">
        <custom-tip :text="item" circular small />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
