<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        span: {
            type: [Number, String]
        }
    }
}
</script>


<style lang="scss" scoped>
.col {
    height: 100px;
    width: 50%;
    background: grey;
    border: 1px solid red;

    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
}
</style>
