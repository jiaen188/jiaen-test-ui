<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>

            <span class="line" ref="line"></span>
            <span v-if="closeButton" class="close" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: { // 转化html 是个危险的操作，默认关闭
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator (value) {
                return ['top', 'bottom', 'middle'].indexOf(value) >= 0
            }
        }
    },
    computed: {
        toastClasses () {
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    mounted () {
        this.updateStyle()
        this.execAutoClose()
    },
    methods: {
        updateStyle () {
            this.$nextTick(() => { // 我们在plugin中，是先$mount, 再appendChild中body
                this.$refs.line.style.height = 
                    `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        execAutoClose () {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000);
            }
        },
        close () {
            this.$el.remove()
            this.$emit('beforeClose')
            this.$destroy()
        },
        log () {
            console.log('测试调用组件toast 的方法')
        },
        onClickClose () {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this) // this === toast实例
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);
@keyframes slide-up {
    0% { opacity: 0; transform: translateY(100%); }
    100% { opacity: 1; transform: translateY(0%); }
}
@keyframes slide-down {
    0% { opacity: 0; transform: translateY(-100%); }
    100% { opacity: 1; transform: translateY(0%); }
}
@keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
.wrapper {
    position: fixed; 
    left: 50%;
    transform: translateX(-50%);
    $animation-duration: 1s;
    &.position-top {
        top: 0;
        .toast {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: slide-down $animation-duration;
        }
    }
    &.position-bottom {
        bottom: 0;
        .toast {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: slide-up $animation-duration;
        }
    }
    &.position-middle {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        .toast {
            animation: fade-in $animation-duration;
        }
    }
}
.toast { 
    font-size: $font-size; line-height: 1.8; min-height: $toast-min-height;
    display: flex; 
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5); padding: 0 16px;
    .message {
        padding: 8px 0;
    }
    .close {
        padding-left: 16px;
        flex-shrink: 0;
    }
    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
}

</style>
