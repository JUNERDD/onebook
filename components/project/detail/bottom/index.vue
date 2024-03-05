<script setup lang="ts">
import type { IBottomInfo } from '~/types/project/detail'

defineProps<IBottomInfo>()
</script>

<template>
  <div flex="~ col" gap-3>
    <p font-bold>
      {{ label }}
    </p>

    <ul flex="~ col" gap-3>
      <template v-for="item in text" :key="item">
        <li class="ul-li" flex gap-4 text="black-2 dark:white-2 lt-sm:sm">{{ item }}</li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.ul-li {
  &:before {
    content: '';
    display: inline-flex;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: $BGREY;
    flex-shrink: 0;
    margin-top: 0.5rem;
  }
}
</style>
