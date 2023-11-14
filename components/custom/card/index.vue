<script setup lang="ts">
import type { ICustomCardProps } from '~/components/custom/card/_type'

defineProps<ICustomCardProps>()
</script>

<template>
  <NuxtLink
    :to="link"
    border="1 solid dgrey-5 dark:white-6"
    flex="~ col"
    target="_blank"
    box-border
    h-38
    gap-4
    rounded-2
    bg="dgrey-6 hover:dgrey-5 dark:hover:bgrey-5"
    p2
    respon-card
    auto-color
  >
    <span :class="icon" shrink-0 text-1 />
    <h3>{{ label }}</h3>
    <div auto-color>{{ text }}</div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
