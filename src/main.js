// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Indicator,Button,Tabbar, TabItem,Lazyload} from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.use(Lazyload);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
