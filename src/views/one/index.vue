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

const handleClose = () => {

}

</script>
<style lang='scss' scope>
</style>
