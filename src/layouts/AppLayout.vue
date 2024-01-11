<template>
  <div class="common-layout">
    <el-container>
      <el-header> <app-header /> </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.el-header{
  padding: 0px;
}
.el-header {
  height: 75px;
  overflow: hidden;
  position: relative;
  padding: 0;

}
</style>
