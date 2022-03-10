import type { Api } from '../types'

interface Requset<g, p, d> {
  api: string | Api
  get: () => g
  post: () => p
  delete: (param: any) => d
}

export class RequestFuzzy implements Requset<any, any, any> {
  api: string | Api
  getResponse = reactive({})
  postResponse: any
  deleteRespose: any

  // 缓存请求参数
  requestParams = reactive({})

  constructor(getFieldOfTempl: any) {
    this.api = getFieldOfTempl('api')
    // getData
    this.get()
  }

  get(params: any = { size: 10 }) {
    this.requestParams = { ...this.requestParams, ...params }
    console.log('get_params: ', this.requestParams)
    this.getResponse = reactive({
      total: 100,
      data: Array.from({ length: 10 }).map(() => ({ age: Math.random(), name: Math.random() })),
    })
  }

  post() {
    this.postResponse = {
      code: 1000,
      message: 'success',
    }
  }

  async delete(params: any) {
    console.log(params, 'delete')

    return this.deleteRespose = {
      code: 1000,
      message: 'success',
    }
  }
}
