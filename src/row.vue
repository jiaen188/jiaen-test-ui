<template>
    <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        gutter: [Number, String]
    },
    created () {
        console.log('row created')
    },
    mounted () {
        console.log('row mounted')
        this.$children.forEach(vm => {
            vm.gutter = this.gutter
        })
    }
}
</script>

<style lang="scss" scoped>
.row {
    display: flex;
}
</style>
