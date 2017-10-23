/**
 * @author :  sunny
 * @date : 2017.10.23 10:31
 * @description :
 */
const index = () => import(/* webpackChunkName: "group-foo" */ './index')

const projectList = () => import(/* webpackChunkName: "project" */'../project/project')
/**团队*/
const OrgList = () => import(/* webpackChunkName: "org" */'../org/orgs');


export const name = {
  path: '/task',
  name: 'task-task',
  component: index,
  redirect: '/orgs',
  meta: {title: ''},
  children: [
    {
      path: '/orgs/projects',
      name: 'task-projects',
      component: projectList,
      meta: {title: '项目中心'},
    },
    {
      path: '/orgs',
      name: 'task-orgs',
      component: OrgList,
      meta: {title: '团队中心'},
    },

  ]
}
