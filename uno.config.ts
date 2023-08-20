// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import theme from './assets/theme'

export default defineConfig({
  /* 主题 */
  theme,
  /* 预设 */
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        panchang: 'Panchang'
      }
    })
  ],
  /* 快捷方式 */
  shortcuts: [
    {
      'full-box': 'w-full h-full'
    },
    [
      /^flex-center(-\w)?/,
      ([, w]) => {
        switch (true) {
          case !w:
            return 'flex justify-center items-center'
          case w === '-i':
            return 'flex items-center'
          case w === '-j':
            return 'flex justify-center'
        }
      }
    ],
    [
      // 主题色快捷方式
      /^(\w+)-(\w+)-(\d+)$/,
      ([, n, c, d]) => {
        const num = Number(d)
        // 如果数值为1直接返回原色
        if (num === 1) return `${n}-${c}`
        // 低于7返回带透明度的颜色
        else if (num < 7) return `${n}-${c}:${105 - (num - 1) * 20}`
      }
    ]
  ]
})
