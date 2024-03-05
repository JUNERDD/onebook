<script setup lang="ts">
import { debounce } from 'lodash-es'

const searchInput = ref<string>()

// 输入事件
const blogStore = useBlogStore()
watch(
  searchInput,
  debounce((val) => blogStore.fetchBlogListAction(val), 1000, { leading: true })
)
</script>

<template>
  <div w50 shrink-0>
    <!-- 筛选输入框 -->
    <div flex flex-col gap-3>
      <h3>筛选文章</h3>
      <el-input v-model="searchInput" placeholder="请输入关键字" clearable :prefix-icon="ElIconSearch" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
