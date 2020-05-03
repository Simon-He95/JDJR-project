<template>
    <Panel :title="'In货推荐'" class="panel">
            <div v-for="item in items" :key="item.img" class="item">
                <img :src="item.img" alt="">
                <div class="list">
                    <div class="product">
                        <img :src="item.pImg1" alt="">
                        <p class="title">{{ item.pText1 }}</p>
                        <p class="price"><span>￥{{ item.pPrice1 }}.00</span>起</p>
<!--                        进度条-->
                        <article>
                            <div class="wrapper">
                                <div class="inner" :style="{width:item.progress1+'%'}"></div>
                            </div>
                            <p>{{ item.progress1 }}%</p>
                        </article>
                        <div class="special">精选</div>
                    </div>
                    <div class="product">
                        <img :src="item.pImg2" alt="">
                        <p class="title">{{ item.pText2 }}</p>
                        <p class="price"><span>￥{{ item.pPrice2 }}.00</span>起</p>
                        <article>
                            <div class="wrapper">
                                <div class="inner" :style="{width:item.progress2+'%'}"></div>
                            </div>
                            <p>{{ item.progress2 }}%</p>
                        </article>
                        <div class="special">精选</div>
                    </div>
                </div>
            </div>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "recommend",
        data() {
            return {
                items: [
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                        pImg1: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
                        pText1: '双响炮蓝牙音箱',
                        pPrice1: 29.00,
                        progress1: 12,
                        pImg2: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                        pText2: '脑波相机',
                        pPrice2: 998.00,
                        progress2: 20,
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                        pImg1: 'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                        pText1: '智能电动牙刷',
                        pPrice1: 19.00,
                        progress1: 50,
                        pImg2: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                        pText2: '烟草加热电子烟',
                        pPrice2: 258.00,
                        progress2: 90,
                    },
                    {
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                        pImg1: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                        pText1: '赖公高淮封藏老酒',
                        pPrice1: 99.00,
                        progress1: 40,
                        pImg2: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
                        pText2: '泗洪花雕醉蟹',
                        pPrice2: 58.00,
                        progress2: 100,
                    },
                ]
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
        .item{
            margin-bottom: 40px;
            >img{
                width: 100%;
            }
            .list{
                @include flex(row);
                justify-content: space-around;
                background: rgba(0, 0, 0, 0.02);
                font-family: "PingFang SC-Medium",sans-serif;
                .product{
                    width: 50%;
                    text-align: center;
                    position: relative;
                    height: 396px;
                    >img{
                        width: 180px;
                        height: 180px;
                        margin: 44px auto 20px;
                    }
                    .title{
                        color: #444;
                        font-size: 28px;
                    }
                    .price{
                        color: #999;
                        height: 48px;
                        line-height: 48px;
                        font-size: 20px;
                        span{
                            font-size: 36px;
                            color: #FF3232;
                            margin-right: 4px;
                        }
                    }
                    .special{
                        display: inline-block;
                        position: absolute;
                        left: 0;
                        top: 0;
                        color: #ff0000;
                        font-size: 20px;
                        text-align: center;
                        padding: 4px 8px;
                        background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
                    }
                    article{
                        @include flex(row);
                        height: 30px;
                        line-height: 30px;
                        margin-top: 16px;
                        justify-content: space-around;
                        flex-wrap: nowrap;
                        align-items: center;
                        .wrapper{
                            width: 144px;
                            background: #F6E6E6;
                            border-radius: 22px;
                            height: 10px;
                            .inner{
                                height: 10px;
                                max-width: 100%;
                                background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                                border-radius: 22px;
                            }
                        }
                        p{
                            font-size: 24px;
                        }
                    }
                }
            }
        }
    }
</style>