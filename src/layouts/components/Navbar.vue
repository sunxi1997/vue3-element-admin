<template>
  <div class="navbar w-100 flex flex-x-between">

    <div class="flex flex-y-center">
      <hamburger :is-active="opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <!-- 面包屑 -->
      <breadcrumb class="breadcrumb-container"></breadcrumb>
    </div>

    <!-- 右侧下拉菜单 -->
    <div class="right-menu">
      <el-dropdown class="h-100">
        <div class="h-100 flex flex-y-center">
          <el-avatar :size="40" src="/src/assets/logo.png"></el-avatar>
          <i class="el-icon-caret-bottom m-r-base" />
        </div>

        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 首页</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/sunxi1997/vue3-element-admin">
            <el-dropdown-item>我的Github</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "./Breadcrumb.vue";
import Hamburger from "layouts/components/Hamburger.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  setup() {
    const store = useStore();
    const opened = computed(() => store.state.app.sidebarOpened);
    const toggleSideBar = () => store.dispatch("app/toggleSideBar");
    return {
      opened, toggleSideBar() {
        console.log("toggle");
        toggleSideBar();
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);


  .right-menu {
    height: 100%;
    line-height: 50px;
  }
}
</style>
