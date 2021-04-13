<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <sidebar />
    <!-- 内容容器 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class="p-0">
        <navbar />
      </el-header>
      <!-- 内容区 -->
      <app-main />

    </el-container>
  </el-container>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import Navbar from "./components/Navbar.vue";
import sidebar from "./components/sidebar/sideBar.vue";

export default {
  components: {
    AppMain,
    Navbar,
    sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
