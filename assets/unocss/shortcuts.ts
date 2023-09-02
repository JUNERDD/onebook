import { UserShortcuts } from '@unocss/core'

/* 快捷方式 */
const shortcuts: UserShortcuts = [
  {
    'full-box': 'w-full h-full',
    // 'full-page': 'h-[calc(100vh-6.25rem)]',
    'full-page': 'h-100vh',
    'bou-line': 'bg-dgrey w1 h7 rd',
    btn: 'hover:bg-lgrey active:bg-lagrey active:scale-90 dark:hover:bg-lagrey-6 py4 px3 rd-1 cursor-pointer select-none'
  },
  [
    // 弹性盒子居中快捷方式
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
  ],
  [
    // 颜色模式快捷方式
    /^auto-(\w+)(-\w)?/,
    ([, ct, m]) => {
      // 映射函数
      const map: any = {
        color: ['text-black dark:text-white-2', 'text-white-2 dark:text-black'],
        bg: ['bg-black dark:bg-white', 'bg-white dark:bg-black']
      }
      return map[ct][m === '-d' ? 1 : 0]
    }
  ]
]

export default shortcuts
