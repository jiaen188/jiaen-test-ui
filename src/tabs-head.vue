<template>
    <div class="tabs-header">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
export default {
    inject: ['eventBus'],
    created() {
    }
}
</script>

<style lang="scss" scoped>
.tabs-header {
    
}
</style>

