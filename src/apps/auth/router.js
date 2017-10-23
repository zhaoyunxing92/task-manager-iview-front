/**
 * @author :  sunny
 * @date : 2017.10.23 10:37
 * @description :
 */
const Login = () => import(/* webpackChunkName: "auth" */ './login.vue')
const Register = () => import(/* webpackChunkName: "auth" */ './register.vue')
const RestPwd = () => import(/*webpackChunkName: "auth"*/'./forgetPwd.vue')

export const name = {
  path: '/auth',
  name: 'task-welcome',
  component: {template: '<router-view></router-view>'},
  redirect: '/login',
  meta: {title: '登陆'},
  children: [
    {
      path: '/login',
      name: 'task-login',
      component: Login,
      meta: {title: '登陆'}
    },
    {
      path: '/reg',
      name: 'task-reg',
      component: Register,
      meta: {title: '注册账号'}
    },
    {
      path: '/forgetpwd',
      name: 'task-resetpwd',
      component: RestPwd,
      meta: {title: '忘记密码'}
    },
  ]
}
