import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import JwPagination from 'jw-vue-pagination';

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false


let vueRoute = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
export default vueRoute