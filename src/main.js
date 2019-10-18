// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import Vant from 'vant'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import VueTyper from 'vue-typer'
import './assets/icons'
import '!style-loader!css-loader!less-loader!./assets/styles/index.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)
Vue.use(VueRouter)
Vue.use(VueTyper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
