import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ 
        Vue, 
        message, 
        propsData:toastOptions,
        onClose: () => {
          currentToast = null
        }
       })
    }
  }
}

/* helper */
function createToast({Vue, message, propsData, onClose}) {
  let Contructor = Vue.extend(Toast)
  let toast = new Contructor({
    propsData
  })
  // 给toast加一个默认的插槽
  toast.$slots.default = [message]
  // 挂载
  toast.$mount()
  // 我们手动关闭 toast时，currentToast还存在，但是toast组件已经销毁了，所以要emit,然后接收将currentToast设null
  toast.$on('beforeClose', onClose)
  // 插入到 body中
  document.body.appendChild(toast.$el)
  return toast
}
