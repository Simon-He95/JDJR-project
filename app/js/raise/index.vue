<template lang="html">
    <div>
        <HeaderComponent></HeaderComponent>
        <Slider></Slider>
        <Day></Day>
        <Recommend></Recommend>
        <Welfare></Welfare>
        <FooterComponent :cname="'mfooter'"></FooterComponent>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import HeaderComponent from '../public/header.vue'
    import Slider from './rslider.vue'
    import FooterComponent from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'
    import Day from './day.vue'
    import Recommend from './recommend.vue'
    import Welfare from './welfare.vue'

    export default {
        name: 'raise',
        components: {
            HeaderComponent,
            Slider,
            FooterComponent,
            Navbar,
            Day,
            Recommend,
            Welfare
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../css/reset.scss';
    /deep/ .mfooter{
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>
