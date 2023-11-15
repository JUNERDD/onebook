<script setup lang="ts"></script>

<template>
  <div flex="~ col" gap-3>
    <p font-bold>
      The best place to start your documentation Write pages in Markdown, use Vue components and enjoy the power of
      Nuxt.
    </p>

    <ul flex="~ col" gap-3>
      <li class="ul-li" flex items-center gap-4>+50 Components ready to build rich pages</li>
      <li class="ul-li" flex items-center gap-4>Article, Docs and Page layouts</li>
      <li class="ul-li" flex items-center gap-4>Start from a README, scale to a framework documentation</li>
      <li class="ul-li" flex items-center gap-4>Leverages Typography and Elements</li>
      <li class="ul-li" flex items-center gap-4>Used on Content Documentation</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.ul-li {
  &:before {
    content: '';
    display: inline-flex;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: $BGREY;
  }
}
</style>
