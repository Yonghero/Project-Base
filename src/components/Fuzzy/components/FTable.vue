<template>
  <div class="flex flex-wrap px-6">
    <el-table
      :data="tableModel.model"
      border style="width: 100%"
    >
      <el-table-column
        v-for="item in tableModel.data"
        :key="item.value"
        :prop="item.value"
        :label="item.label"
        :width="item.width"
        align="center"
      />
      <el-table-column
        v-if="tableModel.tableOperation.show !== false"
        align="center"
        label="操作"
        width="160"
      >
        <template #default>
          <el-button
            type="text"
            size="small"
            @click="handleOperator(OperatorCmd.detail)"
          >
            详情
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="handleOperator(OperatorCmd.update)"
          >
            修改
          </el-button>
          <el-button
            type="text"
            size="small"
            style="color: #F64F42"
            @click="handleOperator(OperatorCmd.delete)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import { TableModelProvide } from '../types'

enum OperatorCmd {
  detail = 1,
  delete = 2,
  update = 3,
}

const tableModel = inject(TableModelProvide)
const handleOperator = (cmd: OperatorCmd) => {
  const handler = {
    [OperatorCmd.detail]: () => {
      console.log('click tab detail')
    },
    [OperatorCmd.delete]: () => {
      console.log('click tab delete')
    },
    [OperatorCmd.update]: () => {
      console.log('click tab update')
    },
  }

  handler[cmd]()
}
watchEffect(() => {
  console.log(tableModel, 'watch')
})

</script>
<style lang='scss' scoped>
</style>
