<template>
  <div class="header-content">
    <div class="back">
      <img src="/images/1.png" class="logo-image" />
      <el-menu default-active="/" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/">首页</el-menu-item>

        <el-menu-item index="algorithm">算法框架</el-menu-item>
        <el-menu-item index="contactus">关于我们</el-menu-item>
      </el-menu>
      <div class="right-side"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>



<style >

.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover{
  background-color: rgba(255, 255, 255, 0.00000001) !important;
  border-bottom: 0px rgba(255, 255, 255, 0.00000001) !important;

}
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
  background-color: rgba(255, 255, 255, 0.00000001) !important;
  border-bottom: 0px rgba(255, 255, 255, 0.00000001) !important;

}


.header-content {
  display: flex;
  justify-content: space-between;
  height: 100%;

  overflow: hidden;
}
.back {
  width: 100%; /* 可根据实际需要设置容器的宽度 */

  background: url(/images/3.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo-image {
  float: left;
  padding: 15px 0 0 30px;
  height: 65px;
  user-select: none;
  -webkit-user-drag: none;
}
.el-menu-demo {
  padding: 20px 0 0 30px;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.00000001) !important;
  border: 0 !important;
}
.el-menu
{
  background-color:rgba(255, 255, 255, 0.00000001) !important;
}
.el-popper
{
  background-color:rgba(255, 255, 255, 0.00000001) !important;
  inset: 70px 20px auto auto!important;

}

.el-menu-item {
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.00000001) !important;
  border: 0 !important;
  display:flex!important;
  justify-content: center
  
}


.right-side {
  margin-right: 40px;
}

.circle {
  position: relative;
  width: 38px;
  height: 38px;
  border: 2px solid #ffffff;

  border-radius: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.el-sub-menu__title:hover{
  background-color: rgba(255, 255, 255, 0.00000001) !important;
}



</style>
