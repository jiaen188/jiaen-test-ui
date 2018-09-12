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

      const Constructor = Vue.extend(Input)

      let vm
      afterEach(() => {
        vm.$destroy()
      })

      it('接收 value', () => {
        vm = new Constructor({
          propsData: {
              value: '1234'
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
      })
  
      it('接收 disabled', () => {
        vm = new Constructor({
          propsData: {
              disabled: true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
      })
  
      // 注意 readOnly  大小写区分，不然测试用例通不过
      it('接收 readonly', () => {
        vm = new Constructor({
          propsData: {
            readonly: true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        console.log(inputElement.outerHTML)
        expect(inputElement.readOnly).to.equal(true)
      })
  
      it('接收 error', () => {
        vm = new Constructor({
          propsData: {
            error: '输入出错了'
          }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
  
        const errorMessage = vm.$el.querySelector('.error-message')
        expect(errorMessage.innerText).to.equal('输入出错了')
      })

    })

    describe('事件', () => {
      const Constructor = Vue.extend(Input)

      let vm
      afterEach(() => {
        vm.$destroy()
      })

      it('支持 change/ input/ focus/ blur', () => {
        ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
          vm = new Constructor().$mount()
          const callback = sinon.fake()
          vm.$on(eventName, callback)
  
          // 触发input 的change 事件
          let event = new Event(eventName)
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
  
          expect(callback).to.have.been.calledWith(event)
        })
      })

    })
    
})