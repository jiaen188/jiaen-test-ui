<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: String
        }
    },
    data () {
        return {
            eventBus: new Vue()
        }
    },
    provide () {
        return {
            eventBus: this.eventBus
        }
    },
    mounted () {
        this.eventBus.$emit('update:selected', this.selected)
        // item触发了toggle切换后，collapse通知外面改变
        this.eventBus.$on('update:selected', (name) => {
            this.$emit('update:selected', name)
        })
    }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$boder-radius: 4px;
.collapse {
    border: 1px solid $grey;
    border-radius: $boder-radius;
}
</style>
