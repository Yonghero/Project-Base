<template>
  <div
    v-if="isRender"
    class="w-full zinc rounded-sm h-full"
  >
    <Bar />
    <Query />
    <FTable />
    <Pagination />
  </div>
</template>

<script setup lang='ts'>
import type { TemplateConfiguration } from './types'
import { Bar, FTable, Pagination, Query } from './components'
import { initialzeFuzzy } from './utils'

const props = defineProps({
  config: Object,
})

const isRender = ref(false)
watchEffect(() => {

})
// 初始化
if (props.config && Object.keys(props.config).length > 0) {
  console.log('props.config : ', props.config)
  isRender.value = true
  initialzeFuzzy(props.config as TemplateConfiguration)
}

</script>
<style lang='scss' scoped>
</style>
