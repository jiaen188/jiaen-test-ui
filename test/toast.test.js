const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

// BDD 行为驱动测试
describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {
      it('接收 autoClose', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Contructor = Vue.extend(Toast)
        const vm = new Contructor({
          propsData: {
            autoClose: true,
            autoCloseDelay: 1
          }
        }).$mount(div)
        vm.$on('beforeClose', () => {
          expect(document.body.contains(vm.$el)).to.eq(false)
          done()
        })
      })
    })

})