<template>
  <div class="item_outBox">
    <template
      v-for="item in menuList"
      :key="item.path"
    >
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.path"
      >
        <template #title>
          <img v-if="item.meta.imgKey" class="title_img" :src="transUrl(ImageMap[item.meta.imgKey])">
          <span>{{ item.meta.name }}</span>
        </template>
        <menu-item :menu-list="item.children.filter(e => !e.meta.hidden)" />
      </el-sub-menu>
      <el-menu-item
        v-else
        :index="item.path"
      >
        <template #title>
          <img v-if="item.meta.imgKey" class="title_img" :src="transUrl(ImageMap[item.meta.imgKey])">
          <span>{{ item.meta.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script setup lang="ts">
import ImageMap from '../imageMap'
const transUrl = (url: any) => {
  return new URL(url, import.meta.url).href
}
defineProps(['menuList'])
</script>
<style lang="scss">
.item_outBox{
  text-align: left;
   height: 64px;
  display: flex;
  .title_img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
.icons{
    width: 24px;
    margin-right: 5px;
}
</style>
