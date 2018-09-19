import Toast from './toast.vue'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      let Contructor = Vue.extend(Toast)
      let toast = new Contructor({
        propsData: {
          closeButton: toastOptions.closeButton
        }
      })
      // 给toast加一个默认的插槽
      toast.$slots.default = [message]
      // 挂载
      toast.$mount()
      // 插入到 body中
      document.body.appendChild(toast.$el)
    }
  }
}