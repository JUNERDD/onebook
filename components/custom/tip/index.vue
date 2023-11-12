<script setup lang="ts">
import type { ITipProps } from '~/components/custom/tip/_type'

defineProps<ITipProps>()
</script>

<template>
  <div p="y5 x4" flex-center-i select-none bg-dgrey-5 dark:bg-lagrey-6 :class="circular ? 'rd-full' : 'rd-4'">
    <div v-if="icon" :class="icon" mr5 dark:text-lagrey-2 text-dark-4></div>
    <div :class="small ? 'text-xs' : ''">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
