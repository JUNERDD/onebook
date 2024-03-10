<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const mainStore = useMainStore()
const mtClass = computed(() => (mainStore.showMenu ? 'mt-0' : `m-t--131`))
</script>

<template>
  <div relative max-w-100vw overflow-hidden>
    <div mxa max-w-1279px>
      <!-- 移动端 -->
      <div sm:hidden>
        <app-header-mb />
        <div transition="all duration-action" relative w-full auto-bg-d :class="mtClass">
          <div full-page>
            <slot />
          </div>
          <app-footer />
        </div>
      </div>

      <!-- PC端 -->
      <div relative z-2 lt-sm:hidden>
        <app-header-pc />
        <div full-page-sub>
          <slot />
        </div>
        <app-footer />
      </div>
    </div>

    <!-- app背景 -->
    <app-back />

    <!-- 统计组件 -->
    <SpeedInsights />
  </div>
</template>

<style lang="scss"></style>
