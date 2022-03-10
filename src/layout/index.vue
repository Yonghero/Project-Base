<template>
  <el-container>
    <el-header>
      <el-row class="header">
        <el-col :span="6">
          <div class="header_title">
            <img class="header_img" src="../assets/logo.png">
            <p>鄂尔多斯大路智慧工业园区安监平台</p>
          </div>
        </el-col>
        <el-col :span="14">
          <Menu />
        </el-col>
        <el-col :span="4">
          <div class="header_right">
            <el-icon :size="20" color="#fff">
              <UserFilled />
            </el-icon>
            <p class="welcome">
              欢迎登陆，{{ user }}
            </p>
            <p class="exit" @click="exit">
              【退出】
            </p>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="contain">
        <BreadCrump />
        <div class="contain_main">
          <router-view />
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script lang='ts' setup>
import { UserFilled } from '@element-plus/icons-vue'
import Menu from './menu/index.vue'
import BreadCrump from './breadCrump/index.vue'
const user = ref(sessionStorage.getItem('user') || '大人')
const exit = () => {
  // session是否清除看情况
  window.sessionStorage.clear()
  window.location.href = `${window.location.protocol}//${window.location.host}`
}
</script>
<style lang='scss' scope>
.el-header {
  height : 56px !important;
  background: #283450;
  padding: 0 26px 0 37px;
}
.header {
  height : 56px;
  .header_title{
    height: 56px;
    display: flex;
    justify-content: left;
    align-items: center;
    .header_img{
      width: 19px;
      height: 22px;
    }
    p {
      font-size: 20px;
      margin-left: 13px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: normal;
    }
  }
  .header_right{
    width: 100%;
    height: 100%;
    display: flex;
    // padding-right: 16px;
    // box-sizing: border-box;
    justify-content: right;
    align-items: center;
    color: #fff;
    .welcome{
      margin: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .exit{
      cursor: pointer;
       white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all .5s;
      &:hover{
        color: rgba(248, 58, 58, 0.993);
      }
    }
  }
}
.el-main{
    width: 100%;
    height: calc(100vh - 64px);
  .contain{
    height: 100%;
    .contain_main{
      width: 100%;
      height: calc(100% - 34px);
      margin-top: 16px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 10px;
      padding:8px 16px;
      box-sizing: border-box;
    }
  }
}
</style>
