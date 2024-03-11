// 格式化时间
import dayjs from 'dayjs'

export function formatTime(time: string | number, format = 'YYYY-MM-DD') {
  return dayjs(time).format(format)
}
