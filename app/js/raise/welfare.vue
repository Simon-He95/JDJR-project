<template>
    <Panel :title="'更多福利'" class="panel">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
            <router-link :to="{name:'home'}">
                转享福利 >
            </router-link>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "welfare",
        components: {
            Panel
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            @include flex(row);
            justify-content: space-around;
            flex-wrap: nowrap;
            position: relative;
            padding-bottom: 60px;
            img{
                width: 33%;
            }
            a{
                text-decoration: none;
                color: #999;
                position: absolute;
                right: 20px;
                top: -112px;
                height: 112px;
                line-height: 112px;
                font-size: 28px;
                display: inline-block;
            }
        }
    }

</style>