<script setup lang="ts">
const blogStore = useBlogStore()
</script>

<template>
  <div w50 flex shrink-0 flex-col gap-2 lt-sm:w-full>
    <!-- 筛选输入框 -->
    <div flex flex-col gap-3>
      <div flex-center-i justify-between>
        <h3 lt-sm:hidden>筛选文章</h3>

        <!-- 清除搜索图标 -->
        <el-icon
          v-show="blogStore.searchInput?.length || blogStore.searchForm.keys.length"
          size="1.2rem"
          cursor-pointer
          @click="blogStore.clearAction"
        >
          <el-icon-circle-close-filled />
        </el-icon>
      </div>
      <el-input v-model="blogStore.searchInput" placeholder="请输入关键字" clearable :prefix-icon="ElIconSearch" />
    </div>

    <!-- 筛选option -->
    <blog-filter-collapse />
  </div>
</template>

<style lang="scss" scoped></style>
