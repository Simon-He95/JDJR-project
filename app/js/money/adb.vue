<template>
    <Panel :title="'理财金'" class="panel">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "adb",
        components: {
            Panel
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
            img{
                width: 100%;
            }
        }
    }
</style>