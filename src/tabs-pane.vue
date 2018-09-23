<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
    
}
</style>

