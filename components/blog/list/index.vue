<script setup lang="ts">
import type { IBlogListProp } from '~/types/blog'

defineProps<IBlogListProp>()
</script>

<template>
  <div flex flex-1 flex-wrap gap-3>
    <template v-for="item in blogList" :key="item.id">
      <custom-card-v3 v-bind="item" />
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
