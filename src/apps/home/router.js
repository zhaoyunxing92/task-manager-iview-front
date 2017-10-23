/**
 * @author :  sunny
 * @date : 2017.10.23 10:31
 * @description :
 */
const index = () => import(/* webpackChunkName: "group-foo" */ './index')

const projectList = () => import(/* webpackChunkName: "project" */'../project/project')

export const name = {
  path: '/task',
  name: 'task-task',
  component: index,
  redirect: '/projects',
  meta: {title: ''},
  children: [
    {
      path: '/projects',
      name: 'task-projects',
      component: projectList,
      meta: {title: '项目中心'},
    },

  ]
}
