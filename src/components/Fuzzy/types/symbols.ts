import type { InjectionKey } from 'vue'
import type { TemplateConfiguration } from '.'
const ConfigProvide: InjectionKey<TemplateConfiguration> = Symbol('ConfigProvide')
const UpdateModelProvide: InjectionKey<(index: number) => void> = Symbol('UpdateModel')
const QueryModelProvide: InjectionKey<any> = Symbol('QueryModel')
const BarModelProvide: InjectionKey<any> = Symbol('BarModel')

export {
  ConfigProvide,
  UpdateModelProvide,
  QueryModelProvide,
  BarModelProvide,
}
