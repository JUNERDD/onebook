<script setup lang="ts">
import type { ICustomCardV2Props } from '~/types/custom'

defineProps<ICustomCardV2Props>()
</script>

<template>
  <NuxtLink
    aspect="4/3"
    flex="~ col"
    class="card-v2"
    cursor-pointer
    overflow-hidden
    rounded-2
    bg-dgrey-6
    respon-card
    auto-color
    :to="`projects/detail/${id}`"
    target="_blank"
  >
    <div lt-sm="min-h-2/3" flex-1 shrink-0 overflow-hidden>
      <custom-load-img :src="img" :alt="title" />
    </div>
    <div
      border="1 solid dgrey-5 dark:white-6"
      flex="~ col"
      rounded="2 t-none"
      h="25 lt-xl:22 lt-sm:20"
      lt-sm="max-h-1/3"
      justify-between
      b-t-none
      p3
    >
      <h4>{{ title }}</h4>
      <div flex items-end justify-between>
        <span text-sm>{{ desc }}</span>
        <custom-tip :text="tag" circular small />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card-v2:hover {
  :deep(.custom-load-img) {
    transform: scale(1.05);
  }
}
</style>
