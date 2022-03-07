<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main style="width: 100vw;height:900px;background-color: black;" class="overflow-hidden">
      <Fuzzy :config="config" />
    </el-main>
  </el-container>
</template>
<script lang='ts' setup>
import config from './config'
</script>
<style lang='scss' scope>
</style>
