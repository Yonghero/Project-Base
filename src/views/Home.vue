<template>
  <h3>Home</h3>
  <Counter />
  <div class="wrap">
    <span>1</span>
  </div>
  <el-row class="mb-4">
    <el-button />
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<script setup lang="ts">
import Counter from '~/components/Counter.vue'
import { $rest } from '~/utils/request'

(async() => {
  const response = await $rest.v1.users.get()
})()

</script>

<style lang="scss">
.wrap {
  span {
    font-size: 49px;
  }
}
</style>
