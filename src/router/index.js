const Main = () => import(/* webpackChunkName: "main" */'../apps/main')
const Login = () => import(/* webpackChunkName: "login" */ '../apps/login')

const Home = () => import(/* webpackChunkName: "home" */'../apps/home/index')
/**项目模块*/
const ProjectHome = () => import('../apps/project/index')
const ProjectMember = () => import('../apps/project/member')

/**团队模块*/
const OrgHome = () => import('../apps/org/index');
const OrgDetails = () => import('../apps/org/details');

const Message = () => import('../apps/msg/index')

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'task - 登录'
  },
  component: Login
};
//
// export const page404 = {
//   path: '/*',
//   name: 'error_404',
//   meta: {
//     title: '404-页面不存在'
//   },
//   component: resolve => {
//     require(['./views/error_page/404.vue'], resolve);
//   }
// };

// export const page401 = {
//   path: '/401',
//   meta: {
//     title: '401-权限不足'
//   },
//   name: 'error_401',
//   component: resolve => {
//     require(['./views/error_page/401.vue'], resolve);
//   }
// };

// export const page500 = {
//   path: '/500',
//   meta: {
//     title: '500-服务端错误'
//   },
//   name: 'error_500',
//   component: resolve => {
//     require(['./views/error_page/500.vue'], resolve);
//   }
// };

// export const preview = {
//   path: '/preview',
//   name: 'preview',
//   component: resolve => {
//     require(['./views/form/article-publish/preview.vue'], resolve);
//   }
// };
//
// export const locking = {
//   path: '/locking',
//   name: 'locking',
//   component: resolve => {
//     require(['./views/main_components/locking-page.vue'], resolve);
//   }
// };
//<Icon type="person-stalker"></Icon>
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/task',
  name: 'otherRouter',
  component: Main,
  redirect: '/home',
  children: [
    {
      path: '/home',
      title: '首页',
      name: 'home_index',
      meta: {title: '首页'},
      component: Home
    },
    {
      path: "/message",
      title: '消息',
      name: 'msg_index',
      meta: {title: '消息'},
      component: Message
    }
  ]
};
// 菜单
export const appMenuRouter = [
  {
    path: '/org',
    icon: 'person-stalker',
    name: 'org',
    title: '组织',
    component: Main,
    children: [
      {
        path: 'index',
        title: '组织统计',
        icon: 'arrow-graph-up-right',
        name: 'org_index',
        meta: {title: '团队'},
        component: OrgHome
      },
      {
        path: 'details',
        title: '组织成员',
        icon: 'person',
        name: 'org_details',
        meta: {title: '详情'},
        component: OrgDetails
      }

    ]
  },
  {
    path: '/project',
    icon: 'android-bookmark',
    name: 'project',
    title: '项目',
    component: Main,
    children: [
      {
        path: 'index',
        title: '项目统计',
        icon: 'arrow-graph-up-right',
        name: 'project_index',
        meta: {title: '项目'},
        component: ProjectHome
      },
      {
        path: 'member',
        title: '项目成员',
        icon: 'person',
        name: 'project_member',
        meta: {title: '成员'},
        component: ProjectMember
      }

    ]
  }

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  // preview,
  // locking,
  ...appMenuRouter,
  // page500,
  // page401,
  // page404
];

