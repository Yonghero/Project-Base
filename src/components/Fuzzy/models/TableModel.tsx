import type { Ref } from 'vue'
import type { FuzzyBaseModel, Templates, tableOperation } from '../types'
import type { RequestFuzzy } from '../utils'

class TableModel implements FuzzyBaseModel<any> {
  config: Templates[]
  data: Ref<any[]> = ref([])
  model: any
  tableOperation: any
  requestFuzzy: any

  constructor(config: Templates[], tableOperation: tableOperation | undefined, requestFuzzy: Ref<RequestFuzzy>) {
    this.config = config
    this.tableOperation = tableOperation
    this.requestFuzzy = requestFuzzy
    this.mapDataAccordConfig()
    this.initModel()
  }

  /**
   * 映射表头展示的数据
   */
  mapDataAccordConfig() {
    this.data.value = this.config
      .filter(item => item?.visible?.table)
  }

  /**
   * 初始化表格数据
   */
  initModel() {
    // 模型数据依赖性get请求的数据
    this.model = computed(() => {
      const getResponse = this.requestFuzzy.value.getResponse
      return getResponse.data
    })
  }

  /**
   * 更新表格数据
   * @param params
   */
  handleEvent(params: any) {
    this.requestFuzzy.get(params)
  }
}

export {
  TableModel,
}
