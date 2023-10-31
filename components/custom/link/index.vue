<script setup lang="ts">
import type { ICustomProps } from '~/components/custom/link/_type'

withDefaults(defineProps<ICustomProps>(), {
  link: '/'
})
</script>

<template>
  <NuxtLink :to="link" target="_blank">
    <span b-b="1 solid" b-dgrey-3 hover:b-dark-4 pb3px auto-color dark:hover:b-dgrey>
      <i v-if="icon" :class="icon" mr-2px inline-flex text-sm dark:text-lagrey-2 text-dark-2 />
      {{ text }}
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
