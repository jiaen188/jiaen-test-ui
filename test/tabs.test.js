const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

// BDD 行为驱动测试
describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接收 selected 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <g-tabs selected="finance">
        <g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance"> 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
          <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
          <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
      let vm = new Vue({
        el: div
      })

      setTimeout(() => {
        console.log('timeout', vm.$el)
      }, 1000);

      vm.$nextTick(() => {
        console.log(vm.$el)
        let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
        expect(x.classList.contains('active')).to.be.true
        done()
      })
    })

    it('接收 direction 属性', () => {

    })

})