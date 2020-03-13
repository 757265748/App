<template>
	<view class="main">
		<!--  :style="{height:currentH+'px'}" -->
		<view class="title">一级菜单</view>
		<view class="grid-view">
			<uni-grid :options="data1" @click="onClick" :columnNum="4" :show-border="false" />
		</view>
		<!-- <view class="title">二级菜单</view>
		<view class="grid-view">
			<uni-grid :options="data1" @click="onClick" :columnNum="4" :show-border="false" />
		</view>
		<view class="title">三级菜单</view>
		<view class="grid-view">
			<uni-grid :options="data1" @click="onClick" :columnNum="4" :show-border="false" />
		</view> -->
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'

	export default {
		components: {
			uniGrid
		},
		data() {
			return {
				currentH: uni.getSystemInfoSync().windowHeight,
				swiperGridHeight: '0px',
				swiperGridWidth: '100%',
				data1: [{
						image: '/static/menu/xtcz.png',
						text: '出库计划'
					},
					{
						image: '/static/menu/bbcx.png',
						text: '流程单'
					},
					{
						image: '/static/menu/ycgl.png',
						text: '异常管理'
					},
					{
						image: '/static/menu/kbcx.png',
						text: '看板管理'
					},
					{
						image: '/static/menu/sbgl.png',
						text: '设备管理'
					},
					{
						image: '/static/menu/sbgl.png',
						text: '流程单转移'
					},
					{
						image: '/static/menu/more.png',
						text: '用户'
					},
				]
			}
		},
		onShow() {
			this.validLogin();
		},
		onReady() {
			uni.createSelectorQuery().select('.grid-view').boundingClientRect().exec((ret) => {
				this.swiperGridHeight = ret[0].height + 1 + 'px'
				// #ifndef H5
				this.swiperGridWidth = ret[0].width + 1 + 'px'
				// #endif
			})
		},
		onLoad() {
			
		},
		methods: {
			validUser(){
				
			},
			validLogin(){
				if(!uni.getStorageSync("emplid")){
					uni.reLaunch({
						url:'/pages/login/login'
					})
				}
			},
			onClick(e) {
				switch (e.index) {
					case 0:
						console.log(1);
						uni.navigateTo({
							url: "ckjh"
						})
						break;
					case 1:
						console.log(1);
						uni.navigateTo({
							url: "lcdrkw"
						})
						break;
					case 2:
						uni.navigateTo({
							url: "blmx"
						})
						break;
					case 3:
						uni.navigateTo({
							url: "kbgl"
						})
						break;
					case 5:
						uni.navigateTo({
							url: "ddsm"
						})
						break;
					case 6:
						uni.navigateTo({
							url: "../user/my_info"
						})
						break;
				}
				// if (e.index == 5) {
				// 	uni.navigateTo({
				// 		url: "menu2"
				// 	})
				// }
			}
		}
	}
</script>
<style>
	.title {
		background-color: #F8F8F8;
		margin-top: 10upx;
		padding: 20upx;
	}

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.grid-view {
		/* #ifdef H5 */
		padding: 0 0.5px;
		/* #endif */
		box-sizing: border-box;
	}
</style>
