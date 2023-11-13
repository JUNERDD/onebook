<script setup lang="ts">
definePageMeta({
  title: '项目'
})

const stack = useProjectStack()
</script>

<template>
  <div full-page-sub flex flex-col gap-5xl px-2 pb-1>
    <!-- 标题 -->
    <div mt-5xl flex flex-col gap-4 lt-sm="mt1 flex-center-i">
      <h1 leading="tight!">个人项目</h1>
      <p>学学习，练练手，写写作业</p>
      <div flex flex-wrap gap-4 lt-sm="flex-center-j">
        <template v-for="item in stack" :key="item">
          <custom-tip :text="item" circular small />
        </template>
      </div>
    </div>

    <!-- 内容 -->
    <div w-full flex-center-i flex-wrap>
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
        lt-sm:w-full
        sm:h-60
      >
        <div flex-1 shrink-0 bg-amber-4 lt-sm="min-h-1/2"></div>
        <div h-25 flex flex-col justify-between p3>
          <h4>ApiBear</h4>
          <div flex items-end justify-between>
            <span text-xs>企业级接口测试工具</span>
            <custom-tip text="Next.js" circular small />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
