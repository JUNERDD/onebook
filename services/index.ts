// 数据库实例
const db = useSupabaseClient

// 获取表
export const getTable = (table: string) => db().from(table)

// 获取列表数据
export const getList = <T = any>(table: string, condition = '*') => getTable(table).select<any, T>(condition)

// 指定字段获取列表
export const getListByFild = <T = any>(table: string, key: string, value: any, condition = '*') =>
  getList<T>(table, condition).eq(key, value)
