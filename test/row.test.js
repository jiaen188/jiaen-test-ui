const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row.vue'
import Col from '../src/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.be.ok
    })

    it('接收 gutter 属性', (done) => {
      Vue.component('g-row', Row)
      Vue.component('g-col', Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <g-row :gutter="20">
          <g-col :span="12"></g-col>
          <g-col :span="12"></g-col>
        </g-row>
      `
      const vm = new Vue({
        el: div
      })
      // 因为在row.vue , gutter是要在mounted时，传给子组件 col.vue，
      // 是一个异步过程，所以要放到setTimeout
      setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')
        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        const cols = vm.$el.querySelectorAll('.col') 
        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })

    it('接收 align 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Row)
      const vm = new Constructor({
        propsData: {
          align: 'right'
        }
      }).$mount(div)
      const element = vm.$el
      expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
      div.remove()
      vm.$destroy()
    })

})