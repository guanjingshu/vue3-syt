<template>
  <div class="container">
    <HospitalTop />

    <div class="content">
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
