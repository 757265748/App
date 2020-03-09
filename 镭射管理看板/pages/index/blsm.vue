<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
		</view>
		<view class="body">
			<view class="uni-form-item uni-row">
				<view class="title">从库位：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan1" :value="result1" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料条码：</view>
				<view class="with-fun">
					<input class="uni-input" placeholder="扫一扫" disabled="" @click="scan2" :value="result2" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料批号：</view>
				<view class="with-fun">
					<input class="uni-input" :value="scanData.lot_no"/>
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">物料编号：</view>
				<view class="with-fun">
					<input class="uni-input" :value="option.ElNo" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">型号规则：</view>
				<view class="with-fun">
					<input class="uni-input" :value="option.el_name_size" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">配送数量：</view>
				<view class="with-fun">
					<input class="uni-input" :value="scanData.mt_qty1" />
				</view>
			</view>
			<view class="uni-form-item uni-row">
				<view class="title">至库位：</view>
				<view class="with-fun">
					<input class="uni-input" :value="option.MtRarea" />
				</view>
			</view>
			<view class="btn_group uni-row uni-flex">
				<button>返回</button>
				<button @tap="commit" :disabled="commitFlag">提交</button>
			</view>
		</view>
		<view class="foot"></view>
	</view>
</template>

<script>
	import {
		getBarnoInfo,
		InsertMC02D1
	} from '@/api/api.js'
	export default {
		props: {
			title: {
				type: String,
				default: "出库扫描"
			}
		},
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight,
				result: "",
				result1: "",
				result2: "",
				option: new Object(),
				scanData:new Object(),
				scanData2:new Object(),
				zkw:"",
				psNum:0,//配送数量
				commitFlag:true
			}
		},
		onLoad(option) {
			getBarnoInfo().then(res=>{
				console.log(res);
			});
			this.option = JSON.parse(option.data);
			console.log(JSON.parse(option.data))
			uni.setNavigationBarTitle({
				title: this.title
			})
		},
		methods: {
			scan: function() {
				uni.scanCode({
					success: (res) => {
						console.log(JSON.stringify(res))
						this.url = "http://39.108.215.49:8009/html/2.html?res=" + res.result;
						this.result = res.result
					}
				});
			},
			scan1: function() {
				uni.scanCode({
					success: (res) => {
						this.result1 = res.result
						console.log(res.result,this.option.MtArea);
						if(res.result!=this.option.MtArea){
							uni.showToast({
								title:'库位不一致',
								icon:"none"
							})
						}
					}
				});
			},
			scan2: function() {
				uni.scanCode({
					success: (res) => {
						this.result2 = res.result
						getBarnoInfo({
							el_barno:res.result
						}).then(res => {
							this.scanData2=res.DicResult;
							this.commitFlag=false;
							console.log(res.DicResult);
							this.psNum=res.DicResult.mt_qty1;
							if(res.DicResult.el_no!=this.option.ElNo){
								uni.showToast({
									title:'该批号对应料号与出库计划不一致',
									icon:"none"
								})
							}
							console.log(res);
							this.scanData=res.DicResult;
							console.log(this.scanData)
						})
					}
				});
			},
			commit() {
				let xqNum=this.option.McQty1-this.option.McAqty1;
				console.log(xqNum,this.psNum);
				console.log(this.scanData.mt_qty1);
				if(this.scanData.mt_qty1>xqNum||this.scanData.mt_qty1>this.psNum){
					uni.showToast({
						title:'备料数量过多',
						icon:'none'
					})
				}else if(this.scanData.mt_qty1<=0){
					uni.showToast({
						title:'备料数量不能为0',
						icon:'none'
					})
				}
				console.log(this.option);
				console.log(this.option.McList);
				let d = {
					mc_list:this.option.McList,//出库计划单号
					Qty:this.scanData2.mt_qty1,//配送数量
					mt_area:this.result1,//从库位
					el_no:this.scanData2.el_no,
					pk_list:this.scanData2.pk_list,
					el_barno: this.result2,
					el_sno:this.scanData2.el_sno,
					lot_no:this.scanData2.lot_no,//批号
				}
				console.log(d);
				InsertMC02D1(d).then(res=>{
					console.log(res)
				});
			}
		}
	}
</script>

<style scoped>
	.main {
	}

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
