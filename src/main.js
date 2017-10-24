import Vue from "vue";
import App from "./App";
import {routers} from "./router";
import VueRouter from "vue-router";
import store from './vuex/store';
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(iView);
// 路由配置
const RouterConfig = {
  //mode: 'history',
  routes: routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  let title = to.meta.title || "task";
  window.document.title = title;
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App},
  mounted () {
    //this.currentPageName = this.$route.name;
   // this.$store.commit('initCachepage');
    // 菜单
    this.$store.commit('updateMenulist');
    //this.$store.commit('setOpenedList');
  },
  watch: {
    '$route' (to) {
     // this.$store.commit('addOpendList', to);
    }
  }
})
