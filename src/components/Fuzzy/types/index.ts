import type { VNode } from 'vue'

interface TemplateConfiguration {
  title?: string | { text: string; icon: string }
  tabList?: Array<{ label: string; value: any }>
  api: string | {
    create: string
    update: string
    delete: string
    query: string
  }
  templates: Array<Templates> | Array<Array<Templates>>
}

interface Templates {
  label?: string
  value: string
  rules?: []
  require?: boolean
  placeholder?: string
  items?: Array<{ label: {}; value: string }>
  width?: number | string
  visible: {
    query?: boolean
    table?: boolean
    create?: boolean
    update?: boolean
  }
  render?(param: unknown): VNode
}

export {
  TemplateConfiguration,
  Templates,
}

export * from './symbols'
