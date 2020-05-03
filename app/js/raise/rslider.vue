<template>
    <Panel :title="'金融头条'" class="panel">
        <section class="content">
            <swiper :options="options">
                <swiper-slide> 签到领流量，1元500M！<em>&gt;</em></swiper-slide>
                <swiper-slide> 百万白条券免费送，速来领取！！ <em>&gt;</em></swiper-slide>
                <swiper-slide> 签到领流量，1元500M！ <em>&gt;</em></swiper-slide>
                <swiper-slide> 百万白条券免费送，速来领取！！ <em>&gt;</em></swiper-slide>
            </swiper>

        </section>

    </Panel>
</template>

<script>
    import Panel from '../core/panel.vue'
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "rslider",
        data() {
            return {
                options: {
                    autoplay: true,
                    loop: true,
                    direction: 'vertical'
                }
            }
        },
        components: {
            Panel,
            Swiper,
            SwiperSlide
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/element.scss";

    .panel {
        @include panel;
        /deep/ > h4 {
            display: none;
        }
        margin-top: 120px !important;
        .content {
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 120px;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
            background-size: 100px 100%;
            .swiper-container-vertical {
                height: 72px;
                .swiper-slide{
                    font-family: "PingFang SC-Medium",serif;
                    font-size: 28px;
                    color: #333;
                    em{
                        color: #ddd;
                        float: right;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
</style>