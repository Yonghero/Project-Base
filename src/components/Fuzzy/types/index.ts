import type { Ref, VNode } from 'vue'

interface TemplateConfiguration {
  title?: string | { text: string; icon: string }
  tabList?: Array<{ label: string; value: any }>
  api: string | Api | Array<string> | Array<Api>
  feature: Feature | Array<Feature>
  tableOperation?: tableOperation | Array<tableOperation>
  pagination?: Pagination
  templates: Templates[] | Array<Array<Templates>>
}
interface Feature {
  create?: boolean
  update?: boolean
  delete?: boolean
}
interface Templates {
  label?: string
  value: string
  type?: FormItemEnum
  datePickerType?: string
  rangeSeparator?: string
  startPlaceholder?: string
  EndPlaceholder?: string
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
  fetchQuery?: () => any
  render?(param: unknown): VNode
}

interface tableOperation {
  show?: boolean
  operator?: Array<{ label: string; value: string; color?: string; onClick: (param: any) => void }>
}
interface Pagination {
  total?: number
  size?: number
}
interface FuzzyBaseModel<T> {
  config: TemplateConfiguration | Templates[] | Pagination
  data?: Ref<Array<T>>
  mapDataAccordConfig?: () => void
  handleEvent: (param?: any) => void
}

interface Api {
  create: string
  update: string
  delete: string
  query: string
}

enum FormItemEnum {
  select = 1,
  input = 2,
  switch = 3,
  radio = 4,
  datePicker = 5,
}

enum OperatorCmd {
  detail = 1,
  delete = 2,
  update = 3,
}

export {
  TemplateConfiguration,
  Templates,
  FuzzyBaseModel,
  FormItemEnum,
  tableOperation,
  Pagination,
  OperatorCmd,
  Api,
  Feature,
}

export * from './symbols'
export * from '../components/Dialog/types'
