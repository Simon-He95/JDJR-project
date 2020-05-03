<template>
    <Panel :title="'理财精选'" class="panel">
        <section class="content">
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 ></em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                <div>
                    <h4>季度理财</h4>
                    <p>历史年化回报率5.50%.50%</p>
                </div>
                <em>去赚钱 ></em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                <div>
                    <h4>一年理财</h4>
                    <p>历史年化回报率5.80%.50%</p>
                </div>
                <em>去赚钱 ></em>
            </div>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "moneyb",
        components: {
            Panel
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        /deep/ >h4{
            border-bottom: 1px solid #ddd;
        }
        .content{
            .item{
                @include flex(row);
                align-items: center;
                height: 140px;
                &:after{
                    content: '';
                    box-sizing: border-box;
                    height: 0;
                    width: 100%;
                    border-bottom: 1px solid #ddd;
                    margin-left: 150px;
                }
                &:last-child:after{
                    border: none;
                }
                >img{
                    width: 88px;
                    height: 88px;
                    display: inline-block;
                    margin: 0 32px;
                }
                >div{
                 font-size: 32px;
                    color: #333;
                    line-height: 1.8;
                    width: 344px;
                    p{
                        color: #ff3232;
                        font-size: 24px;
                        line-height: 1.1;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                >em{
                    color: #FF801A;
                    font-size: 28px;
                }
            }
        }
    }

</style>