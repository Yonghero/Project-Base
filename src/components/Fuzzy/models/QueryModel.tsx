import type { Ref } from 'vue'
import type { FuzzyBaseModel, Templates } from '../types'

class QueryModel implements FuzzyBaseModel<Templates> {
  data = ref()
  model: Ref<Record<string, any>> = ref({})
  config!: Templates[]

  constructor(config: Templates[]) {
    this.config = config
    this.mapDataAccordConfig()
    this.initModel()
  }

  public handleEvent() {
    console.log('handleEvent', this)
  }

  /**
   * 根据配置映射query区域的展示项
   */
  mapDataAccordConfig() {
    this.data.value = this.config.filter(item => item.visible?.query)
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
