import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: false,
    }
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

try {
    {
        // 测试按钮含有 icon
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div') // 创建一个div， 用来渲染 button，才会有样式 
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(order).to.eq('1') // css 所有的属性都是字符串
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div') // 创建一个div， 用来渲染 button，才会有样式 
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const button = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        button.$mount(div)
        const svg = button.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(order).to.eq('2') // css 所有的属性都是字符串
        button.$el.remove()
        button.$destroy()
    }

    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let spy = chai.spy(function() {})

        // 希望这个函数被执行
        vm.$on('click', spy)
        const button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}
