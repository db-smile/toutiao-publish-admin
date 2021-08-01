import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

// 加载 element 组件库
import ElementUI from 'element-ui'

// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 全局注册 element 组件库
Vue.use(ElementUI)

// 创建vue根实例
// 把router配置到根实例中

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
