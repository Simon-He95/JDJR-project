<template>
    <Panel :title="'京东智投'" class="panel">
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "adc",
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
            height: 102px;
            img{
                width: 100%;
            }
        }
    }
</style>