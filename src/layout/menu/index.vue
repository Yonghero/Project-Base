<template>
  <div class="el_menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#283450"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <MenuItem :menu-list="menuList.filter(e => !e.meta.hidden)" />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from '../menuItem/menu-item.vue'

import router from '~/router'
const menuList = reactive(router.options.routes)

const route = useRoute()
const activeIndex = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss">
$menuWidth : 120px;
.el_menu{
     height: 100%;
    .el-menu--horizontal{
        border-bottom: none !important;
        .el-sub-menu {
            width: menuWidth;
            .el-sub-menu__icon-arrow{
                display: none !important;
            }
            .el-sub-menu__title{
                border-bottom: none !important;
                 height: 100%;
            }
        }
    }
    .el-sub-menu__title{
        font-size: 18px !important;
    }
    .el-menu-demo{
        height: 100%;
    }

    .el-menu-item{
        width: menuWidth;
        height: 100%;
        font-size: 18px !important;
        background: #283450 !important;
    }
    .is-active{
        position: relative;
        border-bottom: none !important;
        &::after{
            content: '';
            width: calc(100% - 40px);
            height: 4px;
            background-color: #fff;
            border-radius: 4px;
            position: absolute;
            left: 20px;
            bottom: 2px;
        }
    }

}
.el-menu--popup{
    width:initial;
    min-width : 0 !important;
    .item_outBox{
        display: block !important;
    }
    .el-menu-item{
        height: 40px !important;
        padding: 0 20px !important;
        font-size: 18px !important;
    }
}
</style>
