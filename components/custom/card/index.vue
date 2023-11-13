<script setup lang="ts">
import type { ICustomCardProps } from '~/components/custom/card/_type'

defineProps<ICustomCardProps>()
</script>

<template>
  <div border="1 solid dgrey-5 dark:white-6" h-38 flex="~ col" gap-4 rounded-2 bg-dgrey-6 p2 respon-card>
    <span :class="icon" shrink-0 text-1 />
    <h3>{{ label }}</h3>
    <div auto-color>{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
