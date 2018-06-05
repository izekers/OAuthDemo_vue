// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from './config/config.js'
import token from './util/token.js'
import login from './util/loginUtil.js'
import querystring from 'querystring'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
Vue.prototype.$config = config;
Vue.prototype.$token = token;
Vue.prototype.$login = login;
Vue.prototype.$querystring = querystring;

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

/* eslint-disable no-new */
new Vue({
  el: '#sso',
  router,
  components: { App },
  template: '<App/>'
})
