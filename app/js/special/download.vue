<template>
    <Panel :title="'下载APP'" class="panel">
        <section class="content" >
            <div></div>
            <p>立即下载</p>
            <span>copyright</span>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "download",
        components: {
            Panel
        }
    }
</script>

<style lang="scss">
    body{
        background: #fff !important;
    }
</style>
<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        margin: 0 !important;
        /deep/ >h4{
            display: none;
        }
        .content{
            @include flex;
            justify-content: center;
            align-items: center;
            >div{
                background: url("//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?") center center no-repeat;
                width: 100%;
                height: 1136px;
                background-size: 100% auto;
                margin-top: -200px;
            }
            >p{
                @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:10px);
                height: 100px;
                line-height: 100px;
                width: 471px;
                background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
                box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
                position: fixed;
                bottom: 130px;
            }
            >span{
                position: fixed;
                bottom: 16px;
                font-size: 24px;
                color: #eee;
            }
        }
    }

</style>