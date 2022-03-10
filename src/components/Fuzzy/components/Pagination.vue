<template>
  <div class="flex justify-center align-middle mt-8 mb-8">
    <el-pagination
      background
      :layout="layout"
      :total="pagingModel.model.total"
      :hide-on-single-page="true"
      @current-change="handleEvent"
    />
  </div>
</template>

<script setup lang='ts'>
import { PagingModelProvide } from '../types'

const pagingModel = inject(PagingModelProvide)
const layout = computed(() => {
  const { total ,size} = pagingModel.value.model
  console.log(total,size)
  if(total / size >= 20){
    return 'prev, pager, next, jumper'
  }
  return 'prev, pager, next'
})
const handleEvent = (e: number) => {
  pagingModel.value.handleEvent(e)
}

</script>
<style lang='scss' scoped>
</style>
