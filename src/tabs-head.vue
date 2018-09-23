<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (item) => {

        })
    }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-header {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid red;
    position: relative;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        width: 100px;
    }
    > .action-wrapper {
        margin-left: auto;
    }
}
</style>

