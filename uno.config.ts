import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import shortcuts from './assets/shortcuts'
import theme from './assets/theme'

export default defineConfig({
  /* 主题 */
  theme,
  /* 快捷方式 */
  shortcuts,
  /* 预设 */
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        panchang: 'Panchang'
      }
    }),
    presetIcons({
      collections: {
        game: () => import('@iconify-json/game-icons').then((i) => i.icons),
        // 从本地文件加载自己的图标
        ob: FileSystemIconLoader('./assets/img/icons', (svg) => svg.replace('#fff', 'currentColor'))
      }
    })
  ]
})
