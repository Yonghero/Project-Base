import type { TemplateConfiguration, Templates } from '../types'
import { BarModelProvide, QueryModelProvide } from '../types'
import { BarModel, QueryModel } from '../models'

function initialzeFuzzy(config: TemplateConfiguration) {
  console.log('init', config)
  // provide(ConfigProvide, config)

  const barModel = new BarModel(config)

  const queryModel = ref()

  watchEffect(() => {
    console.log(barModel.activeIndex, '----')
    queryModel.value = new QueryModel(config.tabList ? config.templates[barModel.activeIndex.value] as Array<Templates> : config.templates as Array<Templates>)
  })

  provide(BarModelProvide, barModel)
  provide(QueryModelProvide, queryModel)
}

export {
  initialzeFuzzy,
}
