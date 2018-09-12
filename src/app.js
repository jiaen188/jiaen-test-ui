import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
        message: '双向绑定'
    },
    created() {
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
        }
    }
})
