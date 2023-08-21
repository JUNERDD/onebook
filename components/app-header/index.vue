<script lang="ts" setup>
import HeaderTab from '~/components/app-header/c-cpns/header-tab.vue'
</script>

<template>
  <div h25 flex-center-i justify-between px2>
    <div w16>
      <app-logo />
    </div>
    <div flex-center-i text-1>
      <!-- tab栏 -->
      <header-tab />

      <div mx3 line></div>

      <!-- 切换主题 -->
      <div grey-hover px4 ml4>
        <div i-game-barbed-sun></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
