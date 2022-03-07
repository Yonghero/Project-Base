import type { Ref, VNode } from 'vue'

interface TemplateConfiguration {
  title?: string | { text: string; icon: string }
  tabList?: Array<{ label: string; value: any }>
  api: string | {
    create: string
    update: string
    delete: string
    query: string
  }
  templates: Templates[] | Array<Array<Templates>>
}

interface Templates {
  label?: string
  value: string
  defaultQueryValue?: string
  rules?: []
  require?: boolean
  placeholder?: string
  items?: Array<{ label: {}; value: string }>
  width?: number | string
  visible?: {
    query?: boolean
    table?: boolean
    create?: boolean
    update?: boolean
  }
  render?(param: unknown): VNode
}

interface FuzzyBaseModel<T> {
  config: TemplateConfiguration | Templates[]
  data: Ref<Array<T>>
  mapDataAccordConfig: () => void
  handleEvent: () => any
}

export {
  TemplateConfiguration,
  Templates,
  FuzzyBaseModel,
}

export * from './symbols'
