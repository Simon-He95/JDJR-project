<template lang="html">
  <div>
    <HeaderComponent></HeaderComponent>
    <Slider></Slider>
    <Novice></Novice>
    <Borrow></Borrow>
    <Money></Money>
    <Product></Product>
    <Life></Life>
    <FooterComponent></FooterComponent>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import HeaderComponent from '../public/header.vue'
  import Slider from './hslider.vue'
  import Novice from './novice.vue'
  import Borrow from './borrow.vue'
  import Money from './money.vue'
  import Product from './product.vue'
  import Life from './life.vue'
  import FooterComponent from '../public/footer.vue'
  import Navbar from '../public/navbar.vue'


  export default {
  name: 'Home',
  components: {
    HeaderComponent,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    FooterComponent,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
  @import '../../css/reset.scss';

</style>
