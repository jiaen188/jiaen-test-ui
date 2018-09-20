import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData:toastOptions })
    }
  }
}

/* helper */
function createToast({Vue, message, propsData}) {
  let Contructor = Vue.extend(Toast)
  let toast = new Contructor({
    propsData
  })
  // 给toast加一个默认的插槽
  toast.$slots.default = [message]
  // 挂载
  toast.$mount()
  // 插入到 body中
  document.body.appendChild(toast.$el)
  return toast
}
