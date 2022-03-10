<template>
  <Fuzzy :config="configReactive" />
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  />
</template>
<script lang='ts' setup>
import Fuzzy from '../../components/Fuzzy/index.vue'
import { getFuzzyConfig } from './config'

const dialogVisible = ref(false)
const configReactive = reactive(getFuzzyConfig(dialogVisible))
setTimeout(() => {
  configReactive.templates[0][7].items = [
    { label : '足球' , value : 1},
    { label : '篮球' , value : 2},
    { label : '乒乓球' , value : 3}
  ]
},2000)
const handleClose = () => {

}

</script>
<style lang='scss' scope>
</style>
