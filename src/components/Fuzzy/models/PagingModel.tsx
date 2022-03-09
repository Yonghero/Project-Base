import type { UnwrapNestedRefs } from 'vue'
import type { Pagination } from '../types'

class PagingModel {
  config: Pagination
  model: UnwrapNestedRefs <Record<string, any>> = reactive({ size: 10, total: 0, currentSize: 1 })
  tableModel: any

  constructor(config: Pagination = { size: 10 }, tableModel: any) {
    this.config = config
    this.tableModel = tableModel
    this.initModel()
  }

  initModel() {
    this.model.value = { ...this.model.value, ...this.config }
  }

  handleEvent(currentSize: number) {
    // 页码加一
    this.model.currentSize++
    // 触发表格数据更新
    this.tableModel.handleEvent({ size: currentSize })
  }
}

export {
  PagingModel,
}
