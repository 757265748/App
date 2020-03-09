<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
		</view>
		<view class="body">
			<view class="uni-form-item uni-row">
				<view class="title">料车条码：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan" :value="result" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">至库位：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan1" :value="result1" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料批号：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData.lot_no" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料编号：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData.el_no" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">型号规则：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData.r_el_no" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">配送数量：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="psNum"/>
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">从库位：</view>
				<view class="with-fun">
					<input class="uni-input" v-model="scanData1.mt_area"/>
				</view>
			</view>
			<view class="btn_group uni-row uni-flex">
				<button>返回</button>
				<button @tap="commit">提交</button>
			</view>
		</view>
		<view class="foot"></view>
	</view>
</template>

<script>
	import {
		getBarnoInfo,
		getMC02D1ByBarcode,
		getPB08HByMtarea,
		getMC02_231
	} from '@/api/api.js'
	export default {
		props: {
			title: {
				type: String,
				default: "车载MES"
			}
		},
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight,
				result: "",
				result1: "",
				scanData: new Object(),
				scanData1: new Object(),
				ckwScanFlag:true,//从库位扫码
				psNum:0
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.title
			})
		},
		methods: {
			scan: function() {
				uni.scanCode({
					success: (res) => {
						this.view = true;
						this.url = "http://39.108.215.49:8009/html/2.html?res=" + res.result;
						this.result = res.result
						getBarnoInfo({
							el_barno: res.result
						}).then(res => {
							this.ckwScanFlag=true;
							console.log(res);
							this.scanData = res.DicResult;
							console.log(this.scanData)
						})
					}
				});
			},
			/* 库位扫码 */
			scan1: function() {
				if(!this.ckwScanFlag){
					uni.showToast({
						title:'请扫码料车条码',
						icon:'none'
					})
					return;
				}
				uni.scanCode({
					success: (res) => {
						this.view = true;
						this.url = "http://39.108.215.49:8009/html/2.html?res=" + res.result;
						this.result1 = res.result
						getPB08HByMtarea({
							mt_area: 'TMP_AREA2'
						}).then(res1 => {
							console.log(res1)
							getMC02D1ByBarcode({
								el_barno: this.result,
								mt_area: 'TMP_AREA2'
							}).then(res2=>{
								this.scanData1 = res2.DicResult;
								this.psNum=res2.DicResult.mc_qty;
								console.log(res2);
							})
							console.log(this.scanData1)
						})
					}
				});
			},
			commit(){
				// if(this.scanData1.mc_qty<this.psNum){
				// 	uni.showToast({
				// 		title:'备料数量过多',
				// 		icon:'none'
				// 	})
				// 	return;
				// }else if(this.psNum<=0){
				// 	uni.showToast({
				// 		title:'备料数量要大于0',
				// 		icon:'none'
				// 	})
				// 	return;
				// }
				getMC02_231({
					"mc_list": this.scanData1.mc_list,
					"el_no": this.scanData.el_no,
					"mt_qty": this.scanData1.mt_qty,
					"mt_area": this.scanData1.mt_area,
					"mt_rarea": this.result1,
					"lot_no": this.scanData.lot_no,
					"emplid": "063871",
					"ruid": this.scanData1.ruid
				}).then(res=>{
					console.log(res);
				});
			}
		}
	}
</script>

<style scoped>
	uni-input {
		background-color: #fff;
		color: #fff;
	}

	button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.uni-form-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		box-sizing: border-box;
		padding-right: 10px;
	}

	.title {
		font-weight: bold;
		padding: 10upx 25upx;
		flex: 3;
	}

	.with-fun {
		flex: 8;
	}

	.login {
		font-weight: bold;
		width: 114px;
		height: 45px;
	}

	.uni-icon-clear,
	.uni-icon-eye {
		color: #999;
	}

	.msg {
		text-align: center;
		color: red;
	}
</style>
