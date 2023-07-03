<template>
    <svg class="icon-svg" :class="className" :style="{ 'width': width, 'height': height, 'color': color }">
        <use :xlink:href="name" />
        </svg>
</template>
<script>

export default {
    // inheritAttrs: false,
    props: {
    name: {
        type: String,
        required: true,
        default: '',
    },
    className: {
        type: String,
        default: '',
    }, 
    width:{
        type: String,
        default: '24px' ,
    },
    height:{
        type: String,
        default: '24px' ,
    },
    color:{
        type: String, 
        default: '',
    }
    },
}
</script>

<style lang="scss">

</style>


<!-- 
    example

    <BaseIcon name="#filter" width="24px" height="24px"  color="red"/>


 -->