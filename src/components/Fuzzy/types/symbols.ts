import type { InjectionKey } from 'vue'
import type { TemplateConfiguration } from '.'
const ConfigProvide: InjectionKey<TemplateConfiguration> = Symbol('ConfigProvide')

export {
  ConfigProvide,
}
