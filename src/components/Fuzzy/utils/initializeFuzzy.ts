import type { Api, TemplateConfiguration, Templates } from '../types'
import { BarModelProvide, PagingModelProvide, QueryModelProvide, TableModelProvide } from '../types'
import { BarModel, PagingModel, QueryModel, TableModel } from '../models'

function initialzeFuzzy(config: TemplateConfiguration) {
  console.log('init', config.tableOperation)
  // provide(ConfigProvide, config)

  // 顶栏逻辑
  const barModel = new BarModel(config)
  // 搜索区 数据源
  const queryModel = ref()
  // 表格区 数据源
  const tableModel = ref()
  // 分页器数据源
  const pagingModel = ref()

  // 请求数据
  const requestFuzzyRef = ref()

  watchEffect(() => {
    const templates = config.tabList
      ? config.templates[barModel.activeIndex.value] as Array<Templates>
      : config.templates as Array<Templates>
    const api = Array.isArray(config.api)
      ? config.api[barModel.activeIndex.value]
      : config.api

    requestFuzzyRef.value = new RequestFuzzy(api)

    tableModel.value = new TableModel(templates, config.tableOperation, requestFuzzyRef)
    queryModel.value = new QueryModel(templates, tableModel)
    pagingModel.value = new PagingModel(config.pagination, tableModel, requestFuzzyRef)
  })

  provide(BarModelProvide, barModel)
  provide(QueryModelProvide, queryModel)
  provide(TableModelProvide, tableModel)
  provide(PagingModelProvide, pagingModel)
}

export {
  initialzeFuzzy,
}

interface Requset<g, p, d> {
  api: string | Api
  get: () => g
  post: () => p
  delete: () => d
}
export class RequestFuzzy implements Requset<any, any, any> {
  api: string | Api
  getResponse = reactive({})
  postResponse: any
  deleteRespose: any

  // 缓存请求参数
  requestParams = reactive({})

  constructor(api: string | Api) {
    this.api = api
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

  delete() {
    this.deleteRespose = {
      code: 1000,
      message: 'success',
    }
  }
}