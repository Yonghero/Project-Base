<template>
  <div class="w-full zinc rounded-sm h-full">
    <Bar />
    <Query />
    <FTable />
    <Pagination />
  </div>
</template>

<script setup lang='ts'>
import type { TemplateConfiguration } from './types'
import { UpdateModelProvide } from './types'
import { Bar, FTable, Pagination, Query } from './components'
import { initialzeFuzzy } from './utils'

const props = defineProps({
  config: Object,
})

// 初始化
initialzeFuzzy(props.config as TemplateConfiguration)

</script>
<style lang='scss' scoped>
</style>
