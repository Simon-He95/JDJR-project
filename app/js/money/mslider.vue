<template>
    <Panel :title="'轮播图'" class="panel">
        <section class="content">
            <Slider :items="items" cname="slider"></Slider>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    import Slider from '../core/slider.vue'

    export default {
        name: "mslider",
        data() {
            return {
                items:[
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
                    }
                ]
            }
        },
        components: {
            Panel,
            Slider
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        /deep/>h4{
            display: none;
        }
        .content{
             .slider{
                margin-top: 120px;
                 /deep/ .img{
                     width: 100%;
                     height: 100%;
                }
            }
        }
    }
</style>