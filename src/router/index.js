
import Vue from 'vue'
import Router from 'vue-router'
import ssoIndex from  '@/components/ssoIndex';
import ssologin from  '@/components/ssologin';
import user from  '@/components/userIndex';
import ssologout from  '@/components/ssologout';
import res from  '@/components/getInfoFromRes';

import iView from 'iview';
// import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: ssoIndex
    },
    {
      path: '/login',
      name: 'login',
      component: ssologin
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/logout',
      name: 'ssologout',
      component: ssologout
    },
    {
      path: '/res',
      name: 'res',
      component: res
    }
  ]
})
