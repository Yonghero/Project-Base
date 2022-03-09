<template>
  <div class="flex flex-wrap px-6 pt-4">
    <el-form size="default" :inline="true" :model="queryModel.model" class="demo-form-inline">
      <el-form-item
        v-for="{ value,
                 label,
                 width,
                 placeholder,
                 component,
                 items,
                 multiple,
                 type,
                 size,
                 datePickerType,
                 rangeSeparator,
                 startPlaceholder,
                 EndPlaceholder
        } of queryModel.data"
        :key="value"
        :label="label"
        :style="{width: width ? width : 'auto'}"
      >
        <el-select
          v-if="type === FormItemEnum.select"
          v-model="queryModel.model[value]"
          :placeholder="placeholder || '请选择' + label"
          :size="size || 'default'"
        >
          <el-option
            v-for="item in items"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <component
          :is="component"
          v-else
          v-model="queryModel.model[value]"
          :placeholder="placeholder"
          :options="items"
          :multiple="multiple"
          :type="datePickerType"
          :range-separator="rangeSeparator"
          :start-placeholder="startPlaceholder"
          :end-placeholder="EndPlaceholder"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="default"
          @click="handleEvent"
        >
          查询
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { FormItemEnum, QueryModelProvide, TableModelProvide } from '../types'

const queryModel = inject(QueryModelProvide)

console.log(queryModel.value.model)

const handleEvent = () => {
  queryModel.value.handleEvent()
}

</script>
<style lang='scss' scoped>
</style>
