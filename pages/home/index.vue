<script lang="ts" setup>
import useHomeStore from '~/stores/home'

definePageMeta({
  title: '首页',
  alias: '/'
})
const value1 = ref('')
const handleClick = () => {
  ElNotification.success('你好世界')
}
const homeStore = useHomeStore()
</script>

<template>
  <div>
    <el-button type="primary" @click="handleClick">{{ homeStore.name }}</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
  </div>
</template>

<style scoped></style>
