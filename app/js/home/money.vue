<template>
    <Panel :title="'理财精选'">
        <section class="content">
            <dl class="item" v-for="item in items" :key="item.title">
               <div class="container">
                   <dt>{{ item.title }}<span class="red">{{ item.sub }}</span></dt>
                   <dd class="rate">{{ item.rate }}</dd>
                   <dd class="text">{{ item.text }}</dd>
               </div>
            </dl>
        </section>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "money",
        components: {
            Panel
        },
        data() {
            return {
                items:[
                    {
                        title: '定期理财',
                        sub: '理财首选',
                        rate: '5.60%',
                        text: '历史年化回报率'
                    },
                    {
                        title: '小白理财',
                        sub: '理财首选',
                        rate: '4.22%',
                        text: '7日年化回报率'
                    },
                    {
                        title: '月月盈',
                        sub: '养老保障',
                        rate: '5%',
                        text: '7日年化回报率'
                    },
                    {
                        title: '小白基金',
                        sub: '天天赚钱',
                        rate: '4.27%',
                        text: '7日年化回报率'
                    },
                ]
            }
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
                .item{
                    position: relative;
                    width: 50%;
                    box-sizing: border-box;
                    padding: 34px 0;
                    border-bottom: 1px solid #ddd;
                    &:nth-of-type(n+3){
                        border: none;
                    }
                    .container{
                        padding: 0 16px;
                        box-sizing: border-box;
                        &:nth-of-type(2n-1){
                            border-right: 1px solid #ddd;
                        }
                        dt{
                            font-size: 30px;
                            line-height: 42px;
                            color: #333;
                            .red{
                                font-size: 22px;
                                color: #ff5155;
                                border: 1px solid #ff5155;
                                padding: 0 8px;
                                vertical-align: top;
                                margin-left: 2px;
                            }
                        }
                        .rate{
                            font-weight: 700;
                            font-size: 44px;
                            height: 58px;
                            line-height: 58px;
                            color: #FF5155;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .text{
                            font-size: 24px;
                            height: 34px;
                            line-height: 34px;
                            color: #999;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }

                }
            }
        }
    }
</style>