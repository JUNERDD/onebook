<script setup lang="ts">
import type { ICustomCardProps } from '~/components/custom/card/_type'

defineProps<ICustomCardProps>()
</script>

<template>
  <div
    border="1 solid"
    w="[calc(33.33333%-1.25rem*2/3)] lt-xl:[calc(50%-1.25rem*1/2)] lt-sm:full"
    h-45
    flex
    flex-col
    gap-4
    b-dgrey-5
    dark:b-white-6
    rounded-2
    p2
  >
    <span text-1 :class="icon" />
    <h3>{{ label }}</h3>
    <div auto-color>{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
