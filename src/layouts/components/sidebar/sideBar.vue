<template>
  <el-aside :width="variables.sideBarWidth" class="sidebar" :class="{hideSidebar: opened}">
    <el-menu
      class="w-100 h-100"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :router="true"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
    >
      <side-bar-item
        v-for="route in routes"
        :item="route"
        :key="route.path"
        :base-path="route.path"
      />
    </el-menu>
  </el-aside>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import SideBarItem from "./sideBarItem.vue";
import routes from "@/router/routes";
import variables from "styles/variables.module.scss";
import { useStore } from "vuex";

export default defineComponent({
  name: "SideBar",
  components: {
    SideBarItem,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const opened = computed(() => store.state.app.sidebarOpened);
    const activeMenu = computed(() => route.meta?.activeMenu || route.path);

    return {
      opened,
      variables,
      isCollapse: false,
      routes,
      activeMenu,
    };
  },
});
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}

.sidebar {
  transition: width .28s ease-in-out;

  &.hideSidebar {
    width: 54px !important;
  }
}

</style>
