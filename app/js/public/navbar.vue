<template>
    <Panel :title="'导航条'" class="panel">
        <ul class="content">
            <li v-for="item in items" :key="item.text" class="item">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" alt="">
                    <p>{{ item.text }}</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    export default {
        name: "navbar",
        components: {
            Panel
        },
        data() {
            return {
                items:[
                    {
                        href: 'home',
                        text: '首页',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66'
                    },
                    {
                        href: 'money',
                        text: '理财',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66'
                    },
                    {
                        href: 'ious',
                        text: '白条',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66'
                    },
                    {
                        href: 'raise',
                        text: '众筹',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66'
                    },
                    {
                        href: 'home',
                        text: '我的',
                        img: '//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66'
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
        position: fixed;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0;
        margin: 0;
        z-index: 99;
        /deep/ >h4{
            display: none;
        }
        .content{
            @include flex(row);
            justify-content: space-around;
            .item{
                text-align: center;
                width: 20%;
                a{
                    text-decoration: none;
                    display: inline-block;
                    width: 100%;
                    font-size: 22px;
                    color: #656565;
                    img{
                        width: 44px;
                        height: 44px;
                        display: inline-block;
                        margin: 12px auto 6px;
                    }

                }
            }
        }
    }

</style>