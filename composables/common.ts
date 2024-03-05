// 获取公共加载状态和组合函数
export const useLoadingRef = () => {
  // 加载状态
  const isLoading = ref(true)

  // 组合函数
  function composeAction<T extends (...args: any[]) => Promise<any> | void>(action: T) {
    // 返回一个新函数，接受action的参数
    return async (...args: Parameters<T>) => {
      isLoading.value = true
      await action(...args)
      isLoading.value = false
    }
  }

  return { isLoading, composeAction }
}
