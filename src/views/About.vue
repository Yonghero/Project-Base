<template>
  <div class="test_table">
    <el-table
      :data="tableData"
      style="width: 100%;text-align: center;"
      border
    >
      <el-table-column
        v-for="(table,tableIndex) in tableHeader"
        :key="tableIndex"
        prop="date"
        :label="table.label"
        :width="table.width"
      >
        <template #default="scope">
          <div @dblclick="changeType(scope.row)">
            <p v-if="scope.row.type === 'text'">
              {{ scope.row[table.value] }}
            </p>
            <div v-else>
              <el-input v-if="table.type === 'text' || table.type === 'number' " v-model="scope.row[table.value]" :type="table.type" @blur="over" />
              <el-date-picker v-else-if="table.type === 'date'" v-model="scope.row[table.value]" type="date" placeholder="Pick a day" @blur="over" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary">
      Primary
    </el-button>
  </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from 'vue'
const tableHeader = [
  { label: '安全负责人', value: 'person', type: 'text', width: '' },
  { label: '联系方式', value: 'phone', type: 'number', width: '' },
  { label: '负责时间', value: 'time', type: 'date', width: '' },
  { label: '变动原因', value: 'reason', type: 'text', width: '' },
]
const tableData = reactive([
  { person: '张宇轩', phone: '123456789102', time: '2022-3-8', reason: '测试', type: 'text' },
  { person: '张宇轩', phone: '123456789102', time: '2022-3-8', reason: '测试', type: 'text' },
  { person: '张宇轩', phone: '123456789102', time: '2022-3-8', reason: '测试', type: 'text' },
  { person: '张宇轩', phone: '123456789102', time: '2022-3-8', reason: '测试', type: 'text' },
])
const changeType = (item: any) => {
  if (item.type === 'text')
    item.type = 'input'
}
const over = () => {
  tableData.forEach((e) => {
    e.type = 'text'
  })
}
</script>
<style lang='scss' scope>
// .test_table{
//   .cell{
//     text-align: center;
//   }
// }
</style>
