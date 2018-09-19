<template>
    <div class="toast">
        <slot></slot>
        <span class="line"></span>
        <span v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </span>
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
            default: 50
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        }
    },
    mounted () {
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000);
        }
    },
    methods: {
        close () {
            this.$el.remove()
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
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, .75);
.toast { font-size: $font-size; line-height: 1.8; height: $toast-height;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex; 
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5); padding: 0 16px;
}
.close {
    padding-left: 16px;
}
.line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
}
</style>
