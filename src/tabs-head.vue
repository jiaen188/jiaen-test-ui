<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
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
$tab-height: 40px;
.tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid red;
    > .action-wrapper {
        margin-left: auto;
    }
}
</style>

