<script setup lang="ts"></script>

<template>
  <!-- 圆圈1 -->
  <div class="app-back" right--150 top--150 w-300 lt-sm="w-120 top--60 right--60" animate="spin duration-4000" />

  <!-- 圆圈2 -->
  <div class="app-back" bottom--100 left--100 w-200 lt-sm="w-60 left--30 bottom--30" animate="spin duration-4000" />
</template>

<style lang="scss" scoped>
.app-back {
  position: absolute;
  pointer-events: none;
  aspect-ratio: 1/1;
  filter: blur(5rem);
  border-radius: 40%;
}

html .app-back {
  background: linear-gradient(
    97.62deg,
    rgba($BLUE, 0.15) 2.27%,
    rgba($BLUE, 0.15) 20%,
    rgba($BLUE, 0.15) 50.88%,
    rgba($BLUE, 0.15) 80%,
    rgba($BLUE, 0.15) 98.48%
  );
}

html.dark .app-back {
  background: linear-gradient(
    97.62deg,
    rgba($DGREY, 0.1) 2.27%,
    rgba($DGREY, 0.1) 20%,
    rgba($DGREY, 0.1) 50.88%,
    rgba($DGREY, 0.1) 80%,
    rgba($DGREY, 0.1) 98.48%
  );
}
</style>
