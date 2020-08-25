<template>
    <section style="margn-top:0px;">
        <myheader></myheader>
        <!-- 轮播图 -->
        <carousel></carousel>
        <myfooter></myfooter>
    </section>
</template>
<script>
import carousel from "../components/Carousel.vue"
import MyHeader from "../components/MyHeader.vue"
import MyFooter from "../components/MyFooter.vue"
export default {
    components:{ carousel,
        "myheader":MyHeader,
        "myfooter":MyFooter,
    },
}
</script>
<style scoped>
    body{
        background-color:#F8F8F8;
    }
</style>