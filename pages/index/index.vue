<template>
	<view class="container">
		<uni-icons class="search" type="search" size="22" @click="goSearch"></uni-icons>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType"
				:active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view v-if="current === 0">
				<find></find>
			</view>
			<view v-if="current === 1">
				<hot></hot>
			</view>
			<view v-if="current === 2">
				<focus></focus>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				items: ['发现', '热门', '关注'],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 2,
				activeColor: '#007aff',
				styleType: 'text',	
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			goSearch(){
				console.log("来到搜索")
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		font-size: 14px;
		line-height: 24px;
		position: relative;
		
		.search{
			position: absolute;
			right: 20rpx;
			top: 10rpx;
		}
		
		
		/deep/ .segmented-control {
			width: 90%;
		}
	}
</style>
