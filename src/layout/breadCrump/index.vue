<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="tab in tabs"
      :key="tab.name"
    >
      {{ tab.meta.name || '-' }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang='ts' setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const tabs = ref([])

watch(route, () => {
  tabs.value = route.matched
})
</script>
<style lang='scss' scope>
.el-breadcrumb{
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    .el-breadcrumb__item{
        .el-breadcrumb__separator{
            font-weight: normal;
            color: #2D2D2D;
        }
        .el-breadcrumb__inner{
             color: rgb(182, 171, 171);
            font-weight: normal;
        }
    }
    .el-breadcrumb__item:nth-last-child(1){
        .el-breadcrumb__inner{
            color: #2D2D2D;
        }
    }
}
</style>
