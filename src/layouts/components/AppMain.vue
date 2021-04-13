<template>
  <el-main>
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{ Component }" :key="key">
      <component :is="Component" />
    </router-view>
  </el-main>

  <section class="app-main">

  </section>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: "AppMain",
  setup(){
    const { path: key } = useRoute()
    return { key }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
