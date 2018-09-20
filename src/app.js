import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin.js'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
        message: '双向绑定'
    },
    created() {
        this.showToast()
        setTimeout(() => {
            let event = new Event('change')
            let inputElement = this.$el.querySelector('.input-change').querySelector('input')
            console.log(inputElement)
            inputElement.dispatchEvent(event)
            console.log('用于检测 dispatchEvent的change和正常浏览器触发的change 的$event')
        }, 3000); 
    },
    methods: {
        inputChange(e) {
            console.log('dispatchEvent的 $event，虽然isTrusted: false，不可信，但是存在e.target.value，所以可用')
            console.log(e)
        },
        showToast() {
            this.$toast(`<p>我是消息${parseInt(Math.random() * 100)}号。<strong>加粗</strong><a>qq</a></p>`, {
                position: 'middle',
                enableHtml: true,
                closeButton: {
                  text: '知道了',
                  callback(toast) {
                    toast.log() // 测试调用 toast的 方法
                    console.log('用户已经知道了')
                  }
                },
                autoClose: false,
                autoCloseDelay: 3
            })
        }
    }
})
