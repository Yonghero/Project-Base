<template>
  <Fuzzy :config="configReactive" />
  <FuzzyDialog
    ref="dialogRef"
    title="这是标题"
    :handler="dialogHandler"
  >
    <template #footer>
      hhhhh
    </template>
    this is content
  </FuzzyDialog>
</template>
<script lang='ts' setup>
import Fuzzy from '../../components/Fuzzy/index.vue'
import { getFuzzyConfig } from './config'
import FuzzyDialog from '~/components/Fuzzy/components/Dialog/index.vue'
import type { FuzzyDialogHandler } from '~/components/Fuzzy/types'

const dialogRef = ref()
const configReactive = reactive(getFuzzyConfig(dialogRef))

const dialogHandler: FuzzyDialogHandler = {
  onCancel() {
    console.log('cancel')
  },
  onConfirm() {
    console.log('confirm')
  },
}

</script>
<style lang='scss' scope>
</style>
