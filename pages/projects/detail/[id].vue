<script setup lang="ts">
definePageMeta({
  title: '项目'
})

const route = useRoute()
const { id } = route.params
const projectStore = useProjectStore()
const { isLoading, projectDetail } = storeToRefs(projectStore)
projectStore.fetchProjectDetailAction(id as string)

const useFineMe = [
  {
    link: 'https://gitee.com/junerdd',
    text: 'Gitee',
    icon: 'i-simple-icons-gitee'
  },
  {
    link: 'https://github.com/JUNERDD',
    text: 'Gitub',
    icon: 'i-simple-icons-github'
  }
]
</script>

<template>
  <div full-page-sub flex="~ col" px-2 pb-1>
    <custom-loading :show="isLoading">
      <!-- 主要内容 -->
      <div flex="~ col" gap-5xl>
        <!-- 标题 -->
        <project-title :title="projectDetail.title" :desc="projectDetail.desc" />

        <div flex gap-1 lt-xl:flex-col>
          <!-- 轮播图 -->
          <project-carousel :imgs="projectDetail.imgs" w="2/3 lt-sm:full" />

          <!-- 描述 -->
          <div flex="~ col" flex-1 gap-2>
            <!-- 名称 -->
            <project-section title="角色" text="全栈开发" />

            <!-- 项目地址 -->
            <project-section title="地址">
              <template v-for="{ link, text, icon } in useFineMe" :key="link">
                <custom-link :link="link" :text="text" :icon="icon" />
              </template>
            </project-section>

            <!-- 技术栈 -->
            <project-section title="技术栈">
              <template v-for="item in projectDetail.technology_stack" :key="item">
                <custom-tip :text="item" circular small />
              </template>
            </project-section>

            <!-- 项目周期 -->
            <project-section title="开发周期" text="2023.02.10 ~ 至今" />

            <!-- 立即体验 -->
            <div flex flex-1 items-end pb-4>
              <custom-button icon="i-game-icons-power-lightning" text="立即体验" />
            </div>
          </div>
        </div>
      </div>
    </custom-loading>
  </div>
</template>

<style lang="scss" scoped></style>
