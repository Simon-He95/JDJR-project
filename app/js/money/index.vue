<template lang="html">
    <div>
        <HeaderComponent></HeaderComponent>
        <Slider></Slider>
        <Ada></Ada>
        <Moneya></Moneya>
        <Adb></Adb>
        <Moneyb></Moneyb>
        <Adc></Adc>
        <FooterComponent :cname="'mfooter'"></FooterComponent>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import HeaderComponent from '../public/header.vue'
    import Slider from './mslider.vue'
    import FooterComponent from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'
    import Ada from './ada.vue'
    import Moneya from './moneya.vue'
    import Adb from './adb.vue'
    import Moneyb from './moneyb.vue'
    import Adc from './adc.vue'

    export default {
        name: 'money',
        components: {
            HeaderComponent,
            Slider,
            FooterComponent,
            Navbar,
            Ada,
            Moneya,
            Adb,
            Moneyb,
            Adc
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
