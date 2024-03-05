<script setup lang="ts">
import type { IProjectList } from '~/types/project'

defineProps<IProjectList>()
</script>

<template>
  <div flex flex-wrap gap-3>
    <template v-for="item in projectList" :key="item.id">
      <custom-card-v2 v-bind="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
