<script setup lang="ts">
definePageMeta({
  title: '项目'
})

const stack = useProjectStack()
</script>

<template>
  <div full-page-sub flex-center-i flex-col gap-9xl px-2 pb-1>
    <div mt-5xl flex-center-i flex-col gap-4 lt-sm="mt1">
      <h1 text="lt-sm:3xl sm:5xl" leading="tight!">个人项目</h1>
      <p>学学习，练练手，写写作业</p>
      <div flex-center flex-wrap gap-4 sm:max-w="5/7">
        <template v-for="item in stack" :key="item">
          <custom-tip :text="item" circular small />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
