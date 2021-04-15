<template>
  <div v-if="!isHidden" class="sidebar-item">
    <!--没有子菜单-->
    <template v-if="!isSubMenu">
      <el-menu-item :index="resolvePath(menuRoute.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <template #title>
          <item :icon="menuRoute.meta.icon" :name="menuRoute.meta.title" />
        </template>
      </el-menu-item>
    </template>
    <!--有子菜单-->
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <item :icon="item.meta.icon" :name="item.meta?.title" />
      </template>
      <!--子路由-->
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(item.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import path from "path-browserify";
import { isExternal } from "utils/validate";
import Item from "./item.vue";

export default defineComponent({
  name: "SideBarItem",
  components: {
    Item,
  },
  props: {
    // route 对象
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isHidden = computed(() => props.item.meta?.hidden === true);

    // 可显示的子路由
    const children = computed(() => props.item.children?.filter(item => !item.hidden) || []);

    // 是否显示子菜单
    const isSubMenu = computed(() => children.value.length > 1);

    // 当前菜单的路由
    const menuRoute = computed(() => children.value.length === 0 ? props.item : children.value.slice(-1)[0]);

    function resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    }

    return {
      menuRoute,
      isSubMenu,
      isHidden,
      resolvePath,
    };
  },
});
</script>

<style scoped lang="scss">

@import "src/styles/variables.module.scss";

::v-deep(.sidebar-item) {
  // menu hover
  .submenu-title-noDropdown, .el-submenu__title {
    &:hover {
      background-color: $menuHover !important;
    }
  }

  // submenu菜单激活时文字颜色
  .is-active > .el-submenu__title {
    color: $subMenuActiveText !important;
  }

  .el-menu-item [class^=el-icon-] {
    width: 1em;
    font-size: 14px;
    margin-right: 20px;
  }

  .nest-menu .el-submenu > .el-submenu__title, .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }

}
</style>
