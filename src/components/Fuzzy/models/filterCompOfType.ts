import type { Component } from 'vue'
import { markRaw } from 'vue'
import { ElDatePicker, ElInput, ElRadio, ElSwitch } from 'element-plus'
import { FormItemEnum } from '~/components/Fuzzy/types'

const Components: Record<string, Component> = {
  [FormItemEnum.input]: ElInput,
  [FormItemEnum.switch]: ElSwitch,
  [FormItemEnum.radio]: ElRadio,
  [FormItemEnum.datePicker]: ElDatePicker,
}
function filterCompOfType(type: FormItemEnum): Component {
  return markRaw(Components[type])
}

export {
  filterCompOfType,
}
