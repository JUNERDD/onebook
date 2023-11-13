<script setup lang="ts">
import type { ICustomCardV2Props } from '~/components/custom/card-v2/_type'

defineProps<ICustomCardV2Props>()
</script>

<template>
  <div
    border="1 solid"
    aspect="4/3"
    flex
    flex-col
    cursor-pointer
    overflow-hidden
    b-dgrey-5
    dark:b-white-6
    rounded-2
    respon-card
  >
    <div flex-1 shrink-0 bg-amber-4 lt-sm="min-h-1/2"></div>
    <div h-25 flex flex-col justify-between p3>
      <h4>{{ title }}</h4>
      <div flex items-end justify-between>
        <span text-xs>{{ desc }}</span>
        <custom-tip :text="tag" circular small />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
