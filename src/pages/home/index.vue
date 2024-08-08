<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />

    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level @getLevel="getLevel" />
        <!--地区 -->
        <Region @getRegion="getRegion" />

        <!-- 展示医院的结构 -->
        <!-- <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
        </div>
        <el-empty v-else description="暂无数据" /> -->
      </el-col>
      <el-col :span="4">
        <Tip />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  //引入首页轮播图组件
  import Carousel from './carousel/index.vue';
  //引入首页搜索的组件
  import Search from './search/index.vue';
  // 引入首页等级的组件
  import Level from './level/index.vue';
  // 引入首页地区选择的组件
  import Region from './region/index.vue';
  //展示医院新的的卡片组件
  import Card from './card/index.vue';
  //引入右侧组件
  import Tip from './tip/index.vue';
</script>

<style scoped lang="scss"></style>
