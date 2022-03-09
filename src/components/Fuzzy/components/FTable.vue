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
      >
        <template
          v-if="item.value === 'serialNumber'"
          #default="scope"
        >
          {{ scope.$index + 1 + (pagingModel.model.currentSize - 1) * pagingModel.model.size }}
        </template>
        <template
          v-else-if="item.render"
          #default="scope"
        >
          <component :is="item.render(scope)" />
        </template>
      </el-table-column>
      <el-table-column
        v-if="tableModel.tableOperation?.show !== false"
        align="center"
        label="操作"
        width="160"
      >
        <template
          v-if="!tableModel.tableOperation"
          #default="scope"
        >
          <el-button
            type="text"
            size="small"
            @click="handleOperator(OperatorCmd.detail, scope)"
          >
            详情
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="handleOperator(OperatorCmd.update, scope)"
          >
            修改
          </el-button>
          <el-button
            type="text"
            size="small"
            style="color: #F64F42"
            @click="handleOperator(OperatorCmd.delete, scope)"
          >
            删除
          </el-button>
        </template>

        <template
          v-else
          #default="scope"
        >
          <el-button
            v-for="(operator, index) in tableModel.tableOperation.operator"
            :key="index"
            type="text"
            size="small"
            @click="operator.onClick(scope)"
          >
            {{ operator.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang='ts'>
import type { Action } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { OperatorCmd, PagingModelProvide, RequestModelProvide, TableModelProvide } from '../types'

const tableModel = inject(TableModelProvide)
const pagingModel = inject(PagingModelProvide)
const requestFuzzy = inject(RequestModelProvide)

console.log(tableModel.value.data, '----')

const handleOperator = (cmd: OperatorCmd, row: any) => {
  const handler = {
    [OperatorCmd.detail]: (row: any) => {
      console.log('click tab detail')
    },
    [OperatorCmd.delete]: (row: any) => {
      console.log('click tab delete', row)

      ElMessageBox.confirm(
        '此操作将永久删除数据,是否继续',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        },
      )
        .then(() => {
          requestFuzzy.value.delete(row.$index).then(() => {
            ElMessage({
              type: 'success',
              message: '已成功删除数据',
            })
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已经取消删除',
          })
        })
    },
    [OperatorCmd.update]: (row: any) => {
      console.log('click tab update')
    },
  }

  handler[cmd](row)
}
watchEffect(() => {
  console.log(tableModel, 'watch')
})

</script>
<style lang='scss' scoped>
</style>
