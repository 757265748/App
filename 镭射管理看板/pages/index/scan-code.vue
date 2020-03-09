<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">扫码结果：</view>
			<view class="uni-list" v-if="result">
				<view class="uni-cell">
					<view class="scan-result">
						{{result}}
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button type="primary" @click="scan">扫一扫</button>
			</view>
			<web-view v-if="view" :src="url" @message="getMessage"></web-view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'scanCode',
				result: '',
				url:'',
				view:false
			}
		},
		methods: {
			scan: function() {
				uni.scanCode({
					success: (res) => {
						this.view=true;
						this.url="http://39.108.215.49:8009/html/2.html?res="+res.result;
						this.result = res.result
					}
				});
			}
		}
	}
</script>

<style>
	.scan-result {
		min-height: 50upx;
		line-height: 50upx;
	}
</style>
