<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    text?: string
  }>(),
  {
    text: '描述文字'
  }
)
</script>

<template>
  <div flex="~ col" gap-4>
    <custom-title :title="title" />
    <div ml--1 flex flex-wrap gap-4>
      <slot>
        <span>{{ text }}</span>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
