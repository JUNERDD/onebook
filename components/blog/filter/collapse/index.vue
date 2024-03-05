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
      <el-collapse-item v-for="item in defaultArr" :key="item.name" :title="item.title" :name="item.name">
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
          />
        </el-checkbox-group>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-checkbox__inner) {
  @apply rd-4;
}
</style>
