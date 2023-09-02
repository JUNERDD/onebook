<script setup lang="ts">
const mainStore = useMainStore()
const mtClass = computed(() => (mainStore.showMenu ? 'm-t-0' : 'm-t--130'))
</script>

<template>
  <div mxa max-w-2614px>
    <!-- 移动端 -->
    <div sm:hidden>
      <app-header-mb />
      <div transition="all duration-action" relative w100% auto-bg-d :class="mtClass">
        <div full-page>
          <slot />
        </div>
        <app-footer />
      </div>
    </div>

    <!-- PC端 -->
    <div lt-sm:hidden>
      <app-header-pc />
      <div full-page-sub>
        <slot />
      </div>
      <app-footer />
    </div>
  </div>
</template>

<style lang="scss"></style>
