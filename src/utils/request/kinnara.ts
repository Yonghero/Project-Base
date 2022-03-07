import { AxiosHttpAdapter, Kinnara } from '@fatewa/kinnara'
import { axiosIntance } from './request'
import { urls } from './api'

const kinnara = new Kinnara()

const $rest: any = kinnara
// 设置一个 http 请求适配器
// kinnara 提供了一个 axios 的适配器
// 构造器传递的参数为 AxiosInstance
  .setHttpAdapter(new AxiosHttpAdapter(axiosIntance))
// 并返回代理对象
  .proxy(urls)

export {
  $rest,
}
