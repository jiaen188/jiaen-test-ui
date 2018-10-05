<template>
    <div>
        <h2>简单用法</h2>
        <p><strong>预览</strong></p>

        <g-tabs :selected="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2">2</g-tabs-item>
                <g-tabs-item name="3">3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">content 1</g-tabs-pane>
                <g-tabs-pane name="2">content 2</g-tabs-pane>
                <g-tabs-pane name="3">content 3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import tabs from '../../../src/tabs.vue' 
import tabsHead from '../../../src/tabs-head.vue' 
import tabsItem from '../../../src/tabs-item.vue' 
import tabsBody from '../../../src/tabs-body.vue' 
import tabsPane from '../../../src/tabs-pane.vue' 

export default {
    components: {
        'g-tabs': tabs,
        'g-tabs-head': tabsHead,
        'g-tabs-item': tabsItem,
        'g-tabs-body': tabsBody,
        'g-tabs-pane': tabsPane,
    },
    data () {
        return {
            selectedTab: '1',
            content: `
            <g-tabs :selected="selectedTab">
                <g-tabs-head>
                    <g-tabs-item name="1">1</g-tabs-item>
                    <g-tabs-item name="2">2</g-tabs-item>
                    <g-tabs-item name="3">3</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="1">content 1</g-tabs-pane>
                    <g-tabs-pane name="2">content 2</g-tabs-pane>
                    <g-tabs-pane name="3">content 3</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>
