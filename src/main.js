import { createApp } from "vue";
import App from "./App.vue";

// 全局样式
import "styles/index.scss";
import "sx-common-css/index.scss";

// A modern alternative to CSS resets
import "normalize.css/normalize.css";

// element-plus
import elementPlus from "plugins/element-plus";
// import element3 from "plugins/element3";

// router
import router from "@/router/index";

// 路由权限
import "./permission";

// store
import store from "@/store";

window.app = createApp(App)
.use(elementPlus)
// .use(element3)
.use(router)
.use(store)
.mount("#app");
