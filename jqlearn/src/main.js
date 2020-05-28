import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
// 引入element的样式
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/style/index.scss'

Vue.use(ElementUI)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 引入百度富文本后端配置
import {endUploadConfig} from './common/endUploadConfig'
window.endUploadConfig = endUploadConfig
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
