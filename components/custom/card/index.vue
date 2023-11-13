<script setup lang="ts">
import type { ICustomCardProps } from '~/components/custom/card/_type'

defineProps<ICustomCardProps>()
</script>

<template>
  <div border="1 solid" h-40 flex flex-col gap-4 b-dgrey-5 dark:b-white-6 rounded-2 bg-dgrey-6 p2 respon-card>
    <span :class="icon" shrink-0 text-1 />
    <h3>{{ label }}</h3>
    <div auto-color>{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
