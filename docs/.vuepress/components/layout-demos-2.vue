<template>
    <div>
        <h2>布局</h2>
        <p><strong>预览</strong></p>

        <g-layout style="color: white;overflow: hidden; margin-bottom: 50px;">
            <g-header style="height: 50px; background: lightskyblue;">
                header
            </g-header>
             <g-layout>
                <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </g-sider>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
            </g-layout>
            <g-footer style="height: 50px; background: lightskyblue;">
                footer
            </g-footer>
        </g-layout>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import layout from '../../../src/layout.vue' 
import header from '../../../src/header.vue' 
import content from '../../../src/content.vue' 
import footer from '../../../src/footer.vue' 
import sider from '../../../src/sider.vue' 

export default {
    components: {
        'g-layout': layout,
        'g-header': header,
        'g-content': content,
        'g-footer': footer,
        'g-sider': sider
    },
    data () {
        return {
            content: `
            <g-layout style="color: white;overflow: hidden; margin-bottom: 50px;">
                <g-header style="height: 50px; background: lightskyblue;">
                    header
                </g-header>
                <g-layout>
                    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                        sider
                    </g-sider>
                    <g-content style="height: 100px; background:deepskyblue;">
                        content
                    </g-content>
                </g-layout>
                <g-footer style="height: 50px; background: lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
</style>
