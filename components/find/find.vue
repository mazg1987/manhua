<template>
	<view class="find">
		<view class="faxian">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
				:circular="true">
				<swiper-item v-for="item in banners" :key="item.image_url">
					<view class="swiper-item">
						<image :src="item.image_url" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		requestGet
	} from '../../utils/http.js'
	export default {
		name: "find",
		data() {
			return {
				//轮播图数据
				banners: []
			};
		},
		created() {
			this.getHomeData();
		},
		methods: {
			async getHomeData() {
				const result = await requestGet("/v2/pweb/home");
				if (result.code === 200) {
					this.banners = result.data.banners
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.faxian {
		.swiper {
			height: 300rpx;

			image {
				width: 100%;
			}
		}
	}
</style>
