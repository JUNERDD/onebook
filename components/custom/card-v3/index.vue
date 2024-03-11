<script setup lang="ts">
import type { ICustomCardV3Props } from '~/types/custom'
import { formatTime } from '~/utils/format'

defineProps<ICustomCardV3Props>()
</script>

<template>
  <NuxtLink
    :to="`blog/${id}`"
    border="1 solid dgrey-5 dark:white-6"
    flex="~ col"
    target="_blank"
    bg="dgrey-6 hover:dgrey-5 dark:hover:bgrey-5"
    w="[calc(50%-1.25rem*1/2)] lt-lg:full"
    box-border
    h30
    gap-4
    rounded-2
    p3
    auto-color
  >
    <span text-xs>{{ formatTime(time) }}</span>
    <h3 truncate>{{ title }}</h3>
    <span truncate text-sm>{{ desc }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
