<script setup lang="ts">
import type { CheckboxValueType } from 'element-plus'

const blogCheck = useBlogCheck()
const blogStore = useBlogStore()

const handleChange = (isCheck: CheckboxValueType, name: string) => {
  isCheck ? blogStore.checkNum[name]++ : blogStore.checkNum[name]--
}
</script>

<template>
  <div class="demo-collapse">
    <el-collapse>
      <el-collapse-item v-for="item in blogCheck" :key="item.name" :name="item.name">
        <template #title>
          <div w-full flex-center-i justify-between>
            <span>{{ item.title }}</span>
            <span
              v-show="blogStore.checkNum[item.name]"
              mr5
              h5
              w5
              flex-center
              scale-80
              rd-1
              text-sm
              auto-bg
              auto-color-d
            >
              {{ blogStore.checkNum[item.name] }}
            </span>
          </div>
        </template>

        <el-checkbox-group v-model="blogStore.searchForm.keys">
          <el-checkbox
            v-for="childItem in item.children"
            :key="childItem"
            :label="childItem[0]"
            :value="childItem[1]"
            bg="dgrey-5 dark:lagrey-6"
            mb4
            box-border
            rd-4
            px4
            sm="w-full"
            lt-sm="!mr4 w-[calc(33%-0.625rem)] min-w26"
            @change="(val) => handleChange(val, item.name)"
          />
        </el-checkbox-group>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-checkbox__inner) {
  @apply rd-4 border-dgrey dark:border-dgrey-4;
}

@media screen and (max-width: 401px) {
  :deep(.el-checkbox) {
    width: calc(50% - 0.625rem);
  }
}

@media screen and (max-width: 287px) {
  :deep(.el-checkbox) {
    width: 100%;
  }
}
</style>
