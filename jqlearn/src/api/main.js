import Vue from 'vue'

import '../src/assets/style/base.css';
import ElementUI from 'element-ui';
// 引入element的样式
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/style/index.scss';

import App from './App.vue'
import router from './router'
import store from './store'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(ElementUI);
Vue.use(Viewer);

import filters from '../core/filters';

filters(Vue);

import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
// 引入百度富文本后端配置
import {endUploadConfig} from './common/endUploadConfig'
window.endUploadConfig = endUploadConfig

import ECharts from 'vue-echarts'

// // import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
Vue.component('v-chart', ECharts)


// 引入原生高德地图amap：不用vue-amap是因为没有路径规划，后期不好拓展
import {createAMap} from './common/AMap/create'

import VueQrcode from '@chenfengyuan/vue-qrcode';

Vue.component(VueQrcode.name, VueQrcode);


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
