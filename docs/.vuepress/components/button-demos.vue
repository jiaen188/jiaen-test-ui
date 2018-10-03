<template>
    <div>
        <p><strong>预览</strong></p>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">icon按钮</g-button>
        <g-button :loading="true">loading按钮</g-button>
        <g-button disabled>disabled按钮</g-button>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Button from '../../../src/button.vue'

export default {
    components: {
        'g-button': Button
    },
    data () {
        return {
            content: `
                <g-button>默认按钮</g-button>
                <g-button icon="settings">icon按钮</g-button>
                <g-button :loading="true">loading按钮</g-button>
                <g-button disabled>disabled按钮</g-button>
            `.replace(/\t+| +/g, '').trim()
        }
    }
}
</script>