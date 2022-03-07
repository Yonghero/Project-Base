<template>
  <div class=" px-6 py-4">
    <el-form :inline="true" :model="queryModel.model" class="demo-form-inline">
      <el-form-item
        v-for="{ value, label, placeholder } of queryModel.data"
        :key="value"
        :label="label"
      >
        <el-input v-model="queryModel.model[value]" :placeholder="placeholder" />
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="queryModel.handleEvent"
    >
      查询
    </el-button>
  </div>
</template>

<script setup lang='ts'>
import { QueryModelProvide } from '../types'

const queryModel = inject(QueryModelProvide)
const click = () => console.log(queryModel.value.model)

console.log('queryModel: ', queryModel.value.handleEvent)

</script>
<style lang='scss' scoped>
</style>
