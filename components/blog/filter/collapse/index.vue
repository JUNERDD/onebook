<script setup lang="ts">
const checkList = ref(['Value A'])

const defaultArr = [
  {
    title: 'HTML',
    name: '1',
    children: [
      ['Option A', 'Value A'],
      ['Option B', 'Value B'],
      ['Option C', 'Value C'],
      ['Option D', 'Value D']
    ]
  },
  {
    title: 'JavaScript',
    name: '2',
    children: [
      ['Option E', 'Value E'],
      ['Option F', 'Value F'],
      ['Option G', 'Value G']
    ]
  }
]
</script>

<template>
  <div class="demo-collapse">
    <el-collapse>
      <el-collapse-item v-for="item in defaultArr" :key="item.name" :name="item.name">
        <template #title>
          <div w-full flex-center-i justify-between>
            <span>{{ item.title }}</span>
            <el-badge :value="1" :show-zero="false" right-3 type="primary">
              <!--占位-->
            </el-badge>
          </div>
        </template>

        <el-checkbox-group v-model="checkList">
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
