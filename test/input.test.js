const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

// BDD 行为驱动测试
describe('Button', () => {

    it('存在.', () => {
        expect(Input).to.exist
    })

    describe('input props', () => {
      it('接收 value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            value: '1234'
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
      })
  
      it('接收 disabled', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
            disabled: true
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
        vm.$destroy()
      })
  
      // 注意 readOnly  大小写区分，不然测试用例通不过
      it('接收 readonly', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
          readonly: true
        }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        console.log(inputElement.outerHTML)
        expect(inputElement.readOnly).to.equal(true)
        vm.$destroy()
      })
  
      it('接收 error', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
        propsData: {
          error: '输入出错了'
        }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
  
        const errorMessage = vm.$el.querySelector('.error-message')
        expect(errorMessage.innerText).to.equal('输入出错了')
        vm.$destroy()
      })

    })
    
})