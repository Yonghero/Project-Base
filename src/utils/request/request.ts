import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { CONTEXT_PATH } from './config'

const axiosIntance = axios.create({
  baseURL: CONTEXT_PATH, // api的base_url
  timeout: 300000, // 请求超时时间
})

axiosIntance.defaults.withCredentials = true

// 添加请求拦截器
axiosIntance.interceptors.request.use((config: AxiosRequestConfig) => {
  // 在发送请求之前做些什么
  if (config.headers)
    config.headers.Authorization = 'Bearer'

  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axiosIntance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export {
  axiosIntance,
}
