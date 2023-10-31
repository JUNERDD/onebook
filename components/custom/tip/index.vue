<script setup lang="ts">
import type { ITipProps } from '~/components/custom/tip/_type'

defineProps<ITipProps>()
</script>

<template>
  <div p="y5 x4" flex-center-i select-none rd-4 bg-dgrey-5>
    <div v-if="icon" :class="icon" mr5 dark:text-lagrey-2 text-dark-4></div>
    <div>{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
