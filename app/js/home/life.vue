<template>
    <Panel :title="'生活服务'" class="panel">
        <ul class="content">
            <li v-for="item in items" :key="item.title" class="item">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" alt="item.title">
                </router-link>
                <p class="text">{{ item.title }}</p>
                <p class="upgrade" v-show="item.text">{{ item.text }}</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "life",
        data() {
            return {
                items:[
                    {
                        title: '惠加油',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
                        href: 'home',
                        text: ''
                    },
                    {
                        title: '小白信用',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
                        href: 'home',
                        text: '全新升级'
                    },
                    {
                        title: '信用卡还款',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
                        href: 'home',
                        text: ''
                    },
                    {
                        title: '卡转让',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135\',',
                        href: 'home',
                        text: ''
                    },
                    {
                        title: '定期还款',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
                        href: 'home',
                        text: ''
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
        .content{
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item{
                width: 20%;
                text-align: center;
                img{
                    width: 90px;
                    height: 90px;
                }
                .text{
                    font-size: 26px;
                    color: #666;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-top: 12px;
                }
                .upgrade{
                    font-size: 26px;
                    color: #FF801A;
                    margin-top: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>