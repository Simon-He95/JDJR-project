<template>
    <Panel :title="'公司信息'" :class="['panel', cname]">
        <ul class="content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </li>
            <li class="flex">
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <p>客户端</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <p>触屏版</p>
                </div>
                <div>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "Footer",
        props: {
            cname: {
                type: String,
                default: ''
            }
        },
        components: {
            Panel
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        background: #f5f5f5;
        margin-bottom: 100px;
        /deep/ h4{
            display: none;
        }
        .content{
            @include flex;
            li{
                width: 100%;
                color: #999;
                font-size: 24px;
                text-align: center;
                padding: 0.6rem 0;
                line-height: 0.95rem;
                border-bottom: 1px solid #ddd;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                &:first-child{
                    border: none;
                }
                &:last-child{
                    border: none;
                }
                img{
                    width: 100%;
                }
            }
            .flex{
                @include flex(row);
                justify-content: space-around;
                padding-top: 20px;
                div{
                    img{
                        width: 90px;
                        height: 90px;
                    }
                    p{
                        font-size: 26px;
                        text-align: center;
                        display: block;
                        color: #999;
                        margin-top: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }

</style>