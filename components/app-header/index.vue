<script lang="ts" setup></script>

<template>
  <div fixed h25 w100% flex-center-i justify-between px2>
    <div h="sm:16 lt-sm:12" w="sm:16 lt-sm:12">
      <app-logo />
    </div>

    <!-- pc端 -->
    <app-header-pc lt-sm:hidden />

    <!-- 移动端 -->
    <app-header-mb sm:hidden />
  </div>

  <!-- 菜单栏 -->
  <app-header-menu sm:hidden />
</template>

<style lang="scss" scoped></style>
