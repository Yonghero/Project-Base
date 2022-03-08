import type { Ref } from 'vue'
import type { FuzzyBaseModel, Templates } from '../types'
import { FormItemEnum } from '../types'
import { filterCompOfType } from './filterCompOfType'

class QueryModel implements FuzzyBaseModel<Templates> {
  data = ref()
  model: Ref<Record<string, any>> = ref({})
  config!: Templates[]
  tableModel: any

  constructor(config: Templates[], tableModel: any) {
    this.config = config
    this.tableModel = tableModel
    this.mapDataAccordConfig()
    this.initModel()
  }

  handleEvent() {
    console.log(this.model, 'query_condition')
    // 触发表格数据更新
    this.tableModel.handleEvent(this.model)
  }

  /**
   * 根据配置映射query区域的展示项
   */
  mapDataAccordConfig() {
    this.data.value = this.config
      .filter(item => item.visible?.query)
      .map((item) => {
        const _item: any = { ...item }
        _item.component = filterCompOfType(
          item.type && item.type !== FormItemEnum.select
            ? item.type
            : FormItemEnum.input,
        )
        return _item
      })
  }

  /**
   * 初始化query_form的模型
   */
  initModel() {
    this.data.value.forEach((tempItem: Templates) => {
      const key = tempItem.value
      if (tempItem?.defaultQueryValue)
        this.model.value[key] = tempItem.defaultQueryValue

      else
        this.model.value[key] = ''
    })
  }
}

export {
  QueryModel,
}
