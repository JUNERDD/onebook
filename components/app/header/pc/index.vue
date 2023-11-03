<script setup lang="ts"></script>

<template>
  <div relative z-1 h25 w100% flex-center-i justify-between px2>
    <div h16 w16>
      <app-logo />
    </div>

    <div flex-center-i text-1>
      <!-- tab栏 -->
      <app-header-pc-tab />

      <div mx3 bou-line></div>

      <!-- 切换主题 -->
      <app-dark />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
