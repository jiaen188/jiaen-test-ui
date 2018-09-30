<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
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
