<script setup lang="ts">
import type { IProjectInfo } from '~/types/project'

defineProps<IProjectInfo>()
</script>

<template>
  <div mt-5xl flex flex-col gap-4 lt-sm="mt1 flex-center-i">
    <h1 leading="tight!">个人项目</h1>
    <p>学学习，练练手，写写作业</p>
    <div flex flex-wrap gap-4 lt-sm="flex-center-j">
      <template v-for="item in stack" :key="item">
        <custom-tip :text="item" circular small />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
