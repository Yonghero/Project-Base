<template>
  <div class="w-full zinc rounded-sm h-full">
    <Bar ref="bar"/>
    <el-scrollbar
        ref="scrollBar"
        class="table-h-scrollbar">
      <Query />
      <FTable />
      <Pagination />
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import type { TemplateConfiguration } from './types'
import { UpdateModelProvide } from './types'
import { Bar, FTable, Pagination, Query } from './components'
import { initialzeFuzzy } from './utils'
const bar = ref()
const scrollBar = ref()
onMounted(() => {
  scrollBar.value.$el.style.height = `calc(100% - ${bar.value.$el.clientHeight + 'px'})`
})
const props = defineProps({
  config: Object,
})

// 初始化
initialzeFuzzy(props.config as TemplateConfiguration)

</script>
<style lang='scss' scoped>
</style>
