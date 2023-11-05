<script lang="ts" setup>
definePageMeta({
  title: '主页'
  // alias: '/'
})

const stackList = useHomeStack()
</script>

<template>
  <div full-page-sub flex flex-col gap-9xl px-2>
    <!--    <div animate-zoom-in-down text="lt-sm:4xl sm:7xl" font="bold" select-none>Welcome.</div>-->

    <!-- 标题 -->
    <div mt-9xl flex flex-col gap-2 lt-sm="mt1">
      <h1 text="lt-sm:5xl sm:7xl" leading="tight!">欢迎光临我的博客</h1>
      <p>
        嘿！你知道<custom-link
          link="https://music.163.com/#/artist?id=11074"
          text="落日飞车"
        />吗，要不去听听？或许你还可以听听
        <custom-link link="https://music.163.com/#/artist?id=1024309" text="fcyco" />!!
      </p>
    </div>

    <!-- 技术栈 -->
    <div flex flex-col gap-2>
      <h1 text="lt-sm:2xl sm:4xl">博客技术栈</h1>
      <div flex flex-wrap gap-3>
        <template v-for="stack in stackList" :key="stack.label">
          <custom-card v-bind="stack" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
