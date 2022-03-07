<template>
  <div class="w-full zinc shadow-gray-500 rounded-sm h-full bg-gray-50">
    <Top />
    <Query />
  </div>
</template>

<script setup lang='ts'>
import { ConfigProvide } from './types'
import { Query, Top } from './components'

const props = defineProps({
  config: Object,
})

provide(ConfigProvide, props.config)

</script>
<style lang='scss' scoped>
</style>
