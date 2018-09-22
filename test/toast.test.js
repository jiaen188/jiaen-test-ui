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
      it('接收 autoClose', (done) => { // 测试 延迟关闭，在emit事件beforeClose中， 测试toast不在页面中，则表示被移除
        let div = document.createElement('div')
        document.body.appendChild(div)
        const Contructor = Vue.extend(Toast)
        const vm = new Contructor({
          propsData: {
            autoClose: 1
          }
        }).$mount(div)
        vm.$on('beforeClose', () => {
          expect(document.body.contains(vm.$el)).to.eq(false)
          done()
        })
      })

      it('接收 closeButton', (done) => { // 测试关闭按钮， 1、测试关闭 文字；2、测试 关闭事件触发
        const callback = sinon.fake()
        const Contructor = Vue.extend(Toast)
        const vm = new Contructor({
          propsData: {
            closeButton: {
              text: '我是关闭',
              callback
            }
          }
        }).$mount()
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.eq('我是关闭')

        setTimeout(() => {
          closeButton.click()
          expect(callback).to.have.been.called
          done()
        }, 200)
      })

      it('接收 enableHtml', () => { // 测试 是否有 id=test的标签，如果有，则表明转化为 html
        const Contructor = Vue.extend(Toast)
        const vm = new Contructor({
          propsData: {
            enableHtml: true
          }
        })
        vm.$slots.default = ['<strong id="test">我是html</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
      })

      it('接收 enableHtml', () => {
        const Contructor = Vue.extend(Toast)
        const vm = new Contructor({
          propsData: {
            position: 'middle'
          }
        }).$mount()
        expect(vm.$el.classList.contains('position-middle')).to.eq(true)
      })

    })

})