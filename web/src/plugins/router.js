import Vue from 'vue';
import Router from 'vue-router';
import { constantRouterMap } from 'Routes';
import { transformFilePathToRoute } from 'Utils/router';
import {
  ROUTER_DEFAULT_CONFIG
} from 'Config/index'
import {
  routerBeforeEachFunc
} from 'Config/interceptors/router'
import {
  routerAfterEachFunc
} from 'Config/interceptors/router'
Vue.use(Router)

// 注入默认配置和路由表
let routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes: transformFilePathToRoute(constantRouterMap)
})
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance
