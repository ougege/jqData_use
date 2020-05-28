import Vue from 'vue'
import Router from 'vue-router'

// const Layout = () => import('../views/Layout.vue')
const _Index = () =>import('../views/index/index.vue')
const _LoginWelcome = () =>import('../views/LoginWelcome.vue')

Vue.use(Router)

let webRoutes = [
  {
    path: '/',
    name: '欢迎登录运营系统',
    meta: {
      AllowAnonymous: true // 添加该字段，表示进入这个路由是不需要登录的
    },
    component: _LoginWelcome
  },
  { // 默认目录
    path: '/',
    name: '1',
    component: _Index,
    children: []
  }
]

const createRouter = function () {
  return new Router({
    mode: 'history', // 不显示Url中的#/
    scrollBehavior (to, from, savedPosition) { // 打开滚动到顶部
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    },
    routes: webRoutes
  })
}
export default createRouter
