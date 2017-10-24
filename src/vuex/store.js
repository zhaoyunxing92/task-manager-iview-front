/**
 * @author :  sunny
 * @date : 2017.10.24 10:40
 * @description :
 */
import Vue from "vue";
import Vuex from "vuex";
import ObjecUtils from "../utils/ObjectUtils";
import {appMenuRouter, otherRouter} from "../router/index";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
    routers: [
      otherRouter,
      ...appMenuRouter
    ],
    currentOrgId:'',//当前组织
    tagsList: [...otherRouter.children],
    menuTheme: '', // 菜单主题
    menuList: [],
    pageOpenedList: [],   //默认打开页面],  // 面包屑数组
    currentPageName: '',//当前展开的菜单名称
    openedSubmenuArr: [],  // 要展开的菜单数组
  },
  actions: {},
  mutations: {
    //主题设置
    changeMenuTheme (state, theme) {
      state.menuTheme = theme;
    },
    //设置当前打开页面
    setCurrentPageName (state, name) {
      state.currentPageName = name;
    },
    //默认首页
    setOpenedList (state) {
      state.pageOpenedList = [otherRouter.children[0]];
    },
    addOpendList(state, to){
      let newOpen = state.pageOpenedList.push(to);
      state.pageOpenedList = ObjecUtils.ArrayUnique(newOpen);
      // let oldPageList = state.pageOpenedList,
      //   oldPageLength = oldPageList.length;
      //
      // let newPageList = oldPageList.push(to),
      //   newPageLength = newPageList.length;
      //
      // for (let i = 0; i < oldPageLength; i++) {
      //   for (let j = 0; j < newPageLength; j++) {
      //     if (oldPageLength[i].path === newPageLength[j].path&&oldPageLength[i].path!='/home') {
      //       newPageLength.splice(j, 1, newPageLength[j])
      //     }
      //   }
      // }
      // state.pageOpenedList= newPageList;


      // state.pageOpenedList.forEach((item, index) => {
      //   console.log('--', item.path)
      //   console.log('--', to.path)
      //   console.log(item.path !== to.path)
      //   if (item.path !== to.path) {
      //     state.pageOpenedList.push(to)
      //   }
      // if (item.path !== to.path) {
      //   state.pageOpenedList.push(to)
      // } else {
      //   state.pageOpenedList.splice(index, 1)
      // }

      //state.pageOpenedList.push(to)
      //})

      console.log('-----', state.pageOpenedList)

    },

    clearAllTags (state) {
      // state.pageOpenedList.splice(1);
      // router.push({
      //   name: 'home_index'
      // });
      // state.cachePage = [];
      // localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
    },
    clearOtherTags (state, vm) {
      // let currentName = vm.$route.name;
      // let currentIndex = 0;
      // state.pageOpenedList.forEach((item, index) => {
      //   if (item.name === currentName) {
      //     currentIndex = index;
      //   }
      // });
      // if (currentIndex === 0) {
      //   state.pageOpenedList.splice(1);
      // } else {
      //   state.pageOpenedList.splice(currentIndex + 1);
      //   state.pageOpenedList.splice(1, currentIndex - 1);
      // }
      // let newCachepage = state.cachePage.filter(item => {
      //   return item === currentName;
      // });
      // state.cachePage = newCachepage;
      // localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
    },
    updateMenulist (state){
      // let accessCode = parseInt(Cookies.get('access'));
      let menuList = [];
      appMenuRouter.forEach((item, index) => {
        //   console.log(item)
        menuList.push(item);
        // if (item.existChildren) {
        //   menuList.push(item);
        // }

      });
      state.menuList = menuList;
    }
  },
  getters: {},
  modules: {}
})
export default store
