<template>
    <Panel :title="'白条轮播图'" class="panel">
        <section class="content">
            <Slider :items="items" :cname="'slider'"></Slider>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    import Slider from '../core/slider.vue'
    export default {
        name: "islider",
        data() {
            return {
                items: [
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
                    },
                    {
                        href: 'home',
                        src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
                    },
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
        /deep/>h4{
            display: none;
        }
        .slider{
            margin-top: 120px;
            /deep/ .img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>