<template>
    <section :class="['inital',cname]">
        <swiper class="swiper" :options="options">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name: item.href}" class="link">
                    <img class="img" :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
	name: 'slider',
	props:{
		options: {
			type: Object,
			default() {
				return {
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					},
					notNextTick: false

				};
			}
		},
		items: {
			type: Array,
			default () {
				return [];
			}
		},
		cname: {
			type: String,
			default: ''
		}
	},
	components: {
		Swiper,
		SwiperSlide
	}
};
</script>

<style lang="scss" scoped>
@import "~swiper/css/swiper.css";

</style>