<script setup lang="ts">
import type { ICustomCardV2Props } from '~/components/custom/card-v2/_type'

defineProps<ICustomCardV2Props>()
</script>

<template>
  <div aspect="4/3" flex="~ col" cursor-pointer overflow-hidden rounded-2 respon-card class="card-v2">
    <div flex-1 shrink-0 lt-sm="min-h-1/2" overflow-hidden>
      <img w-full :src="img" :alt="title" class="img" transition="transform duration-out-in" />
    </div>
    <div
      border="1 solid dgrey-5 dark:white-6"
      h-25
      flex="~ col"
      justify-between
      rounded="2 t-none"
      b-t-none
      bg-dgrey-6
      p3
    >
      <h4>{{ title }}</h4>
      <div flex items-end justify-between>
        <span text-sm>{{ desc }}</span>
        <custom-tip :text="tag" circular small />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-v2:hover {
  .img {
    transform: scale(1.05);
  }
}
</style>
