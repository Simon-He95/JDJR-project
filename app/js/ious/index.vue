<template lang="html">
    <div>
        <HeaderComponent></HeaderComponent>
        <Slider></Slider>
        <Money></Money>
        <Services></Services>
        <FooterComponent></FooterComponent>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import HeaderComponent from '../public/header.vue'
    import Slider from './islider.vue'
    import FooterComponent from '../public/footer.vue'
    import Navbar from '../public/navbar.vue'
    import Money from './money.vue'
    import Services from './services.vue'

    export default {
        name: 'money',
        components: {
            HeaderComponent,
            Slider,
            FooterComponent,
            Navbar,
            Money,
            Services
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../css/reset.scss';

</style>
