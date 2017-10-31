const Main = () => import(/* webpackChunkName: "main" */'../apps/main')
const Login = () => import(/* webpackChunkName: "login" */ '../apps/login')

const Home = () => import(/* webpackChunkName: "home" */'../apps/home/index')
/**项目模块*/
const ProjectHome = () => import('../apps/project/index')
const ProjectMember = () => import('../apps/project/member')

/**团队模块*/
const OrgHome = () => import('../apps/org/index');
const OrgDetails = () => import('../apps/org/details');
const OrgCreate = () => import('../apps/org/createOrg')
const Orgs = () => import('../apps/org/orgs')

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
    },
    {
      path: "/create/org",
      title: '创建组织',
      name: 'org_create',
      meta: {title: '创建组织'},
      component: OrgCreate
    },
    {
      path: "/org/info/:id",
      title: '组织信息',
      name: 'org_info',
      meta: {title: '组织信息'},
      component: OrgDetails
    }
  ]
};
// 菜单
export const appMenuRouter = [
  {
    path: '/org',
    name: 'org',
    title: '组织',
    component: Main,
    children: [
      {
        path: '/',
        title: '组织',
        icon: 'arrow-graph-up-right',
        name: 'orgs',
        meta: {title: '组织列表'},
        component: Orgs
      },
      {
        path: ':uid',
        orgMenu: true,
        name: 'org-home',
        meta: {title: '首页'},
        redirect: '/org/:uid/outline',
        component: OrgHome,
        children: [
          {
            path: 'workbench',
            title: '工作台',
            icon: 'home',
            meta: {title: '工作台'},
            component: ProjectHome
          },
          {
            path: 'outline',
            title: '概要',
            icon: 'navicon-round',
            meta: {title: '概要'},
            component: ProjectHome
          },
          {
            path: 'issues',
            title: '问题',
            icon: 'document-text',
            meta: {title: '问题列表'},
            component: ProjectHome
          },
          {
            path: 'statistics',
            title: '统计',
            icon: 'stats-bars',
            meta: {title: '统计列表'},
            component: ProjectHome
          },
          {
            path: 'setting',
            title: '设置',
            icon: 'gear-b',
            meta: {title: '设置'},
            component: ProjectHome
          },
          {
            path: 'add_project',
            title: '添加项目',
            icon: 'plus-circled',
            right:true,
            meta: {title: '项目'},
            component: ProjectHome
          },
          {
            path: 'add_user',
            title: '邀请好友',
            icon: 'person-add',
            right:true,
            meta: {title: '邀请好友'},
            component: ProjectHome
          }
        ]
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

