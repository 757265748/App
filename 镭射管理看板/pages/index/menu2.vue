<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="grid-view">
			<uni-grid :options="data2" @click="onClick" :show-border="false" />
		</view>
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
				data2: [{
						image: '/static/menu/menu2_1.png',
					},
					{
						image: '/static/menu/menu2_2.png',
					},
					{
						image: '/static/menu/menu2_3.png',
					},
					{
						image: '/static/menu/menu2_4.png',
					},
					{
						image: '/static/menu/menu2_5.png',
					},
					{
						image: '/static/menu/menu2_6.png',
					}
				],
			}
		},
		onReady() {
			uni.createSelectorQuery().select('.grid-view').boundingClientRect().exec((ret) => {
				this.swiperGridHeight = ret[0].height + 1 + 'px'
				// #ifndef H5
				this.swiperGridWidth = ret[0].width + 1 + 'px'
				// #endif
			})
		},
		methods: {
			onClick(e) {
				console.log('点击grid:' + JSON.stringify(e))
			}
		}
	}
</script>
<style>
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

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.grid-view {
		/* #ifdef H5 */
		padding: 0 0.5px;
		/* #endif */
		box-sizing: border-box;
	}
</style>
