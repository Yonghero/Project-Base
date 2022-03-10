import type { Api, TemplateConfiguration } from '../types'
import { BarModelProvide, PagingModelProvide, QueryModelProvide, RequestModelProvide, TableModelProvide } from '../types'
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

  // 获取当前页面配置
  const getTmpl = catchTmpl(config)

  watchEffect(() => {
    const getFieldOfTempl = getTmpl(barModel.activeIndex.value)

    requestFuzzyRef.value = new RequestFuzzy(getFieldOfTempl)

    pagingModel.value = new PagingModel(getFieldOfTempl, tableModel)
    tableModel.value = new TableModel(getFieldOfTempl, requestFuzzyRef)
    queryModel.value = new QueryModel(getFieldOfTempl, tableModel)
  })

  provide(BarModelProvide, barModel)
  provide(QueryModelProvide, queryModel)
  provide(TableModelProvide, tableModel)
  provide(PagingModelProvide, pagingModel)
  provide(RequestModelProvide, requestFuzzyRef)
}

export {
  initialzeFuzzy,
}

/**
 * 获取当前页面配置
 * @param config
 * @returns
 */
function catchTmpl(config: any) {
  const catchConfig = config
  return (index: number) => {
    return (fields: string[] | string): keyof TemplateConfiguration => {
      return Array.isArray(fields)
        ? fields.map(field => (index !== undefined && catchConfig[field])
          ? catchConfig[field][index]
          : catchConfig[field],
        )
        : Array.isArray(catchConfig[fields])
          ? catchConfig[fields][index]
          : catchConfig[fields]
    }
  }
}

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
