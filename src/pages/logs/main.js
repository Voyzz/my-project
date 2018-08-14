import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

// 小程序中的全局配置（标题，tabbar等）
export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
