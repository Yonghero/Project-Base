<template>
  <div class="absolute bottom-20 left-10/20 transform -translate-x-1/2">
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
