<template>
    <Panel :title="'每日签到'" class="panel">
        <section class="content">
            <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt=""></div>
            <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt=""></div>
            <router-link :to="{name:'home'}" class="dayLink">
                <p>不抢白不抢</p>
            </router-link>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "day",
        components: {
            Panel
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element";
    .panel{
        @include panel;
        .content{
            @include flex(row);
            justify-content: space-around;
            position: relative;
            div{
                width: 50%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .dayLink{
                position: absolute;
                right: 20px;
                top: -120px;
                text-decoration: none;
                height: 120px;
                line-height: 120px;
                color: #999;
                font-size: 28px;
            }
        }
    }
</style>