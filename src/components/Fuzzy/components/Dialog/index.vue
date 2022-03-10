<template>
  <el-dialog v-model="visible">
    <template #title>
      <div class="flex items-center">
        <div class="w-1 h-4.5 rounded-sm bg-primary-100 mr-2" />
        <h1>{{ props.title }}</h1>
      </div>
    </template>
    <div class="">
      <slot />
    </div>
    <template #footer>
      <span
        v-if="isCustomFooter"
        class="dialog-footer"
      >
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
      <slot v-else name="footer" />
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import type { PropType } from 'vue'
import type { FuzzyDialogHandler } from './types'

const props = defineProps({
  title: String,
  isCustomFooter: {
    prop: Boolean,
    default: true,
  },
  handler: Object as PropType<FuzzyDialogHandler>,
})

// 弹出框展示控制
const visible = ref(false)
const setVisible = (isVisible: boolean) => visible.value = isVisible

// 确定 & 取消事件
const cancel = () => {
  props.handler && props.handler.onCancel()
}
const confirm = () => {
  props.handler && props.handler.onConfirm()
}

defineExpose({
  setVisible,
})

</script>
<style lang='scss' scoped>
</style>
