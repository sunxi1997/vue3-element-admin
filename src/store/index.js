import { createStore } from "vuex";

import app from "@/store/modules/app";

const store = createStore({
  modules: {
    app,
  },
});

export default store;
