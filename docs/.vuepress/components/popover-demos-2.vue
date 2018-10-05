<template>
    <div>
        <h2>hover 弹出</h2>
        <p><strong>预览</strong></p>

        <g-popover trigger="hover">
            <g-button>点击 - 上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>

        <g-popover position="bottom" trigger="hover">
            <g-button>点击 - 下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>

        <g-popover position="left" trigger="hover">
            <g-button>点击 - 左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>

        <g-popover position="right" trigger="hover">
            <g-button>点击 - 右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import popover from '../../../src/popover.vue' 
import button from '../../../src/button.vue' 

export default {
    components: {
        'g-popover': popover,
        'g-button': button
    },
    data () {
        return {
            content: `
            <g-popover trigger="hover">
                <g-button>点击 - 上方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="bottom" trigger="hover">
                <g-button>点击 - 下方弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="left" trigger="hover">
                <g-button>点击 - 左边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>

            <g-popover position="right" trigger="hover">
                <g-button>点击 - 右边弹出</g-button>
                <template slot="content">
                    弹出内容
                </template>
            </g-popover>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>
