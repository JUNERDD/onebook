import type { AsyncData, UseFetchOptions } from '#app'
import type { HTTPMethod } from 'h3'

const BASE_URL = '/api'

export type IResultData<T> = T

class ObFetch {
  request<T = IResultData<any>>(
    url: string,
    method: HTTPMethod,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    const newOptions: UseFetchOptions<T> = {
      baseURL: BASE_URL,
      method,
      ...options
    }

    if (method === 'GET') newOptions.query = data
    else if (method === 'POST') newOptions.body = data

    return new Promise((resolve, reject) => {
      useFetch<T>(url, newOptions as any)
        .then((res) => {
          // res => { data, pending, refresh, execute, error... }
          resolve(res as AsyncData<T, Error>)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(url: string, query?: any, options?: UseFetchOptions<IResultData<T>>) {
    return this.request<IResultData<T>>(url, 'GET', query, options)
  }

  post<T = any>(url: string, data?: any, options?: UseFetchOptions<IResultData<T>>) {
    return this.request<IResultData<T>>(url, 'POST', data, options)
  }
}

export default new ObFetch()
