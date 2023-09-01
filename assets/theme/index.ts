// 动画持续时间
const Action = 500

const theme = {
  // 颜色
  colors: {
    color: '#C81010',
    black: '#212121',
    grey: '#F9F9F9',
    lgrey: '#F1F1F1',
    lagrey: '#ECEAEA',
    dgrey: '#CCCCCC',
    white: '#FFFFFF',
    green: '#719847'
  },
  // 间距
  spacing: {
    '1': '3.125rem', // 50px
    '2': '1.875rem', // 30px
    '3': '1.25rem', // 20px
    '4': '0.625rem', // 10px
    '5': '0.3125rem' // 5px
  },
  // 圆角
  borderRadius: {
    '1': '1.875rem', // 30px
    '2': '1.25rem', // 20px
    '3': '0.625rem', // 10px
    '4': '0.375rem' // 6px
  },
  // 字体大小
  fontSize: {
    '1': '1.5rem', // 24px
    '2': '1.25rem', // 20px
    '3': '1rem', // 16px
    '4': '0.875rem', // 14px
    '5': '0.75rem' // 12px
  },
  // 动画时间
  duration: {
    action: `${Action}ms`,
    'out-in': `${Action / 2}ms`,
    short: `${Action / 3}ms`,
    long: `${Action * 2}ms`,
    slow: `${Action * 4}ms`
  }
}

export default theme
