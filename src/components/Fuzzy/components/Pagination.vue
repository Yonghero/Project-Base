<template>
  <div class="flex justify-center align-middle mt-8">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      @current-change="handleEvent"
    />
  </div>
</template>

<script setup lang='ts'>
import { PagingModelProvide } from '../types'

const pagingModel = inject(PagingModelProvide)

const handleEvent = (e: number) => {
  pagingModel.value.handleEvent(e)
}

</script>
<style lang='scss' scoped>
</style>
