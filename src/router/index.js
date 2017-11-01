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


/**工作台*/
const workbenchPrefix = '../apps/workbench/';
const WorkbenchIndex = () => import('../apps/workbench/index');
const AssignedToMe = () => import('../apps/workbench/assigned_to_me');

//
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'task - 登录'
  },
  component: Login
};
//
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
            name: 'main-workbench',
            workbenchMenu: true,
            meta: {title: '工作台', icon: 'home', menuName: '工作台'},
            redirect: '/org/:uid/workbench/assigned',
            component: WorkbenchIndex,
            children: [
              {
                path: 'assigned',
                name: 'workbench-assigned',
                meta: {title: '指给我的', icon: 'at', menuName: '指给我的'},
                component: AssignedToMe,
              },
              {
                path: 'create',
                name: 'workbench-me-create',
                meta: {title: '我提出的', icon: 'document-text', menuName: '我提出的'},
                component: AssignedToMe,
              },
              {
                path: 'follow',
                name: 'workbench-me-follow',
                meta: {title: '我关注的', icon: 'star', menuName: '我关注的'},
                component: AssignedToMe,
              },
              {
                path: 'finish',
                name: 'workbench-me-finish',
                meta: {title: '我完成的', icon: 'document-text', menuName: '我完成的'},
                component: AssignedToMe,
              }
            ]
          },
          {
            path: 'outline',
            name: 'main-outline',
            meta: {title: '概览', icon: 'navicon-round', menuName: '概览'},
            component: ProjectHome
          },
          {
            path: 'issues',
            name: 'main-issues',
            meta: {title: '问题列表', icon: 'document-text', menuName: '问题'},
            component: ProjectHome
          },
          {
            path: 'statistics',
            name: 'main-statistics',
            meta: {title: '统计列表', icon: 'stats-bars', menuName: '统计'},
            component: ProjectHome
          },
          {
            path: 'setting',
            name: 'main-setting',
            meta: {title: '设置', icon: 'gear-b', menuName: '设置'},
            component: ProjectHome
          },
          {
            path: 'add_project',
            name: 'main-add-project',
            meta: {title: '添加项目', icon: 'plus-circled', menuName: '添加项目', right: true},
            component: ProjectHome
          },
          {
            path: 'add_user',
            name: 'main-add-user',
            meta: {title: '邀请好友', icon: 'person-add', menuName: '邀请好友', right: true},
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
  ...appMenuRouter,

];

