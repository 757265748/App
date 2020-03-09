<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
			<view class="uni-form-item uni-row">
				<view class="title">库位代号：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan" :value="result" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">库位名称：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData.wm_name" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">流程单号：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan1" :value="result1" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">生产单号：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData1.sc_odno" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料编号：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData1.el_no" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">品名规格：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData1.r_size" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">数量：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData1.wi_qty" />
				</view>
			</view>
		</view>
		<view class="btn_group uni-row uni-flex">
			<button>返回</button>
			<button @tap="commit" :disabled="commitFlag">提交</button>
		</view>
	</view>
</template>

<script>
	import {
		getPB08HByMtarea,
		GetPR02WIQTYByPtno,
		getScrcnoMtareaIn
	} from '@/api/api.js'
	export default {
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight,
				result: "",
				result1: "",
				scanData: new Object(),
				scanData1: new Object(),
				commitFlag: true
			}
		},
		methods: {
			scan: function() {
				uni.scanCode({
					success: (res) => {
						console.log(JSON.stringify(res))
						this.result = res.result;
						getPB08HByMtarea({
							mt_area: res.result
						}).then(res => {
							this.commitFlag=false;
							this.scanData=res.DicResult;
							console.log(res);
						});
					}
				});
			},
			scan1: function() {
				uni.scanCode({
					success: (res) => {
						GetPR02WIQTYByPtno({
							sc_rcno: res.result
						}).then(res => {
							this.scanData1=res.DicResult;
							console.log(res);
						});
						console.log(JSON.stringify(res))
						this.result1 = res.result
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.btn_group {
		margin-top: 20upx;
	}

	.title {
		font-weight: bold;
		padding: 10upx 25upx;
		flex: 3;
	}

	.uni-form-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		box-sizing: border-box;
		padding-right: 10px;
	}

	.with-fun {
		flex: 8;
	}

	.btn-group {
		padding-right: 60px;
		height: 60px;
	}

	.btn-group .selectBtn {
		float: right;
	}

	.head {
		display: flex;
		flex-wrap: wrap;
	}

	/* .uni-form-item {
		width: 50%;
	} */

	.uni-input {
		text-indent: 10px;
		padding: 0;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
