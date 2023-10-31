<script setup lang="ts">
import MeImg from '@/assets/img/main/me.jpg'

definePageMeta({
  title: '介绍'
})

const findList = useFineMe()
</script>

<template>
  <div flex flex-col gap-1 py-20>
    <div lt-sm="flex-col px-1" sm="w-5/7" mx-a flex gap-1>
      <!-- 照片 -->
      <div>
        <img :src="MeImg" alt="我的照片" w="lt-sm:full sm:md" rd-2 />
      </div>

      <!-- 描述 -->
      <div flex-center flex-1>
        <div p-box>
          <!-- 名字 -->
          <div flex-center-i gap-4>
            <h1>邱君儿</h1>
            <custom-tip text="JUNER" text-xs />
          </div>

          <!-- 介绍 -->
          <div p-text>
            <p>哈喽呀！我是邱君儿，一名热爱摄影和前端的大学生。</p>
            <p>
              目前就读于
              <custom-link link="https://www.gcc.edu.cn/" text="Guangzhou College of Commerce" />
              ，正在找实习（然而找不到） 。
            </p>
          </div>

          <!-- 其他 -->
          <div p-text>
            <custom-tip text="为什么选择前端" icon="i-game-icons-white-book" />
            <p>
              前端开发是数字世界中的美学雕刻匠，以色彩、布局、字体和动画等美学元素，将网页、应用或界面打造成富有吸引力的数字风景。
            </p>
            <p>
              其独特之处在于将美感与互动性相融合，通过交互设计，用户与计算机系统相互沟通，呈现出令人陶醉的数字体验。
            </p>
            <p>这是计算机领域中的一门数字艺术，将美学和技术完美结合，创造出引人入胜的数字界面。</p>
          </div>

          <!-- 找到我 -->
          <div p-text>
            <custom-tip text="如何找到我" icon="i-game-icons-cctv-camera" />
            <div flex-center-i gap-4>
              <template v-for="{ link, text, icon } in findList" :key="link">
                <custom-link :link="link" :text="text" :icon="icon" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
