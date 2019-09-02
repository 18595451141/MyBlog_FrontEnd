// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // index.html中的id=app的div
  router,
  components: { App }, // 这里的App等于App: App ，名称要和模板名称一样，上面的template中写的App,这里也要是App
  template: '<App/>' // 这里是把'./App'的内容加到这个模板中
})

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8010/';  // 关键步骤–填写后台请求统一的地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false;
Vue.prototype.$addr = axios;
