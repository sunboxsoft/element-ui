// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vform from '../lib/vform/VFormDesigner.umd.min.js'
import '../lib/vform/VFormDesigner.css'

Vue.config.productionTip = false
Vue.prototype.getChildTableList = () => {
    return new Date()
}
Vue.use(ElementUI) //全局注册element-ui
Vue.use(vform) //同时注册了v-form-designer、v-form-render等组件
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})