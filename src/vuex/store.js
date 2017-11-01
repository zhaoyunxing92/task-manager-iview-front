/**
 * @author :  sunny
 * @date : 2017.10.24 10:40
 * @description :
 */
import Vue from "vue";
import Vuex from "vuex";
import {appMenuRouter} from "../router/index";
Vue.use(Vuex)
const store = new Vuex.Store({
  state: { //state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。
    // routers: [
    //   otherRouter,
    //   ...appMenuRouter
    // ],
    orgs: [],
    currentOrgId: '',//当前组织
    //tagsList: [...otherRouter.children],
    menuTheme: '', // 菜单主题
    orgMenuList: [], //组织菜单
    workbenchMenu: [], //工作台菜单
    pageOpenedList: [],   //默认打开页面],  // 面包屑数组
    currentPageName: '',//当前展开的菜单名称
    openedSubmenuArr: [],  // 要展开的菜单数组
  },
  actions: {},
  mutations: {
    //添加
    addOrgs(state, obj){
      // console.log(222)
      state.orgs.push(obj);
      // console.log(obj)
    },
    setMenuList (state){
      // let accessCode = parseInt(Cookies.get('access'));
      let orgMenuList = [];
      let workbenchMenu = [];
      appMenuRouter.forEach((item, index) => {

        let itemChildren = item.children;
        itemChildren.forEach((children, index) => {
          if (children.orgMenu && children.children.length > 0) {
            let orgMenus = children.children;
            orgMenus.forEach((orgMenu, index) => {
              if (!orgMenu.hide) {
                orgMenuList.push({
                  'menuName': orgMenu.meta.menuName,
                  'name': orgMenu.name,
                  'icon': orgMenu.meta.icon,
                  'right': orgMenu.meta.right ? true : false
                })
                if (orgMenu.workbenchMenu && orgMenu.children.length > 0) {
                  let workbenchMenus = orgMenu.children;
                  workbenchMenus.forEach((workMenu, index) => {
                    if (!workMenu.hide) {
                      workbenchMenu.push({
                        'name': workMenu.name,
                        'icon': workMenu.meta.icon,
                        'menuName': workMenu.meta.menuName
                      })
                    }
                  })
                }
              }
            })
          }
        })
      });
      state.orgMenuList = orgMenuList;
      state.workbenchMenu = workbenchMenu;
      // state.orgs.push({'name':'test'})
    }
  },
  getters: {},
  modules: {}
})
export default store
