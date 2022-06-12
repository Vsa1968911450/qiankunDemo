import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from '@/config/router.config'

Vue.use(Router)
console.log(window.__POWERED_BY_QIANKUN__)
export default new Router({
  base: window.__POWERED_BY_QIANKUN__ ? '/antgo' : '/',
  mode: 'history',
  routes: constantRouterMap.concat(asyncRouterMap)
})
