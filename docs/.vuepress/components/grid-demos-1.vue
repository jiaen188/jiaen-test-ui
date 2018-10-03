<template>
    <div>
        <h2>24网格</h2>
        <p><strong>预览</strong></p>

        <g-row class="demoRow">
            <g-col span="8" v-for="item in 3" :key="item">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>

        <g-row class="demoRow">
            <g-col span="6" v-for="item in 4" :key="item">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>

        <g-row class="demoRow">
            <g-col span="4" v-for="item in 6" :key="item">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>

        <g-row class="demoRow">
            <g-col span="3" v-for="item in 8" :key="item">
                <div class="demoCol">3</div>
            </g-col>
        </g-row>

        <g-row class="demoRow">
            <g-col span="2" v-for="item in 12" :key="item">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>

        <p><strong>代码</strong></p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
import Row from '../../../src/row.vue'
import Col from '../../../src/col.vue'

export default {
    components: {
        GRow: Row,
        GCol: Col
    },
    data () {
        return {
            content: `
            * { box-sizing: border-box; }
            
            <g-row class="demoRow">
                <g-col span="8" v-for="item in 3" :key="item">
                    <div class="demoCol">8</div>
                </g-col>
            </g-row>

            <g-row class="demoRow">
                <g-col span="6" v-for="item in 4" :key="item">
                    <div class="demoCol">6</div>
                </g-col>
            </g-row>

            <g-row class="demoRow">
                <g-col span="4" v-for="item in 6" :key="item">
                    <div class="demoCol">4</div>
                </g-col>
            </g-row>

            <g-row class="demoRow">
                <g-col span="3" v-for="item in 8" :key="item">
                    <div class="demoCol">3</div>
                </g-col>
            </g-row>

            <g-row class="demoRow">
                <g-col span="2" v-for="item in 12" :key="item">
                    <div class="demoCol">2</div>
                </g-col>
            </g-row>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box
}
.demoRow {
    margin: 10px 0;
}
.demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
