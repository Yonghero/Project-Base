<template>
  <div class="w-full zinc shadow-gray-500 rounded-sm h-full bg-gray-50">
    <Bar />
    <Query />
  </div>
</template>

<script setup lang='ts'>
import type { TemplateConfiguration } from './types'
import { UpdateModelProvide } from './types'
import { Bar, Query } from './components'
import { initialzeFuzzy } from './utils'

const props = defineProps({
  config: Object,
})

// 初始化
initialzeFuzzy(props.config as TemplateConfiguration)

</script>
<style lang='scss' scoped>
</style>
