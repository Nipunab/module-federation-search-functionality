import Vue from 'vue';
import App from './App.vue';
import 'core-js/stable';
import './index.scss';

import RouterPlugin, { router } from './router';

Vue.use(RouterPlugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
