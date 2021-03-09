import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./main.scss";
import './registerServiceWorker'
import VueSmoothScroll from 'vue2-smooth-scroll'
 
Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
})
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
