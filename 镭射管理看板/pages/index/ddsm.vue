<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
			 @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view v-show="current === 0">
				<view class="main">
					<view class="head">
					</view>
					<view class="body">
						<view class="uni-form-item uni-row">
							<view class="title">作业站点</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan' :value="result" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">工序名称</view>
							<view class="with-fun">
								<input class="uni-input" v-model="pt_name" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">料车</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan1' :value="result1" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">流程单号</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan2' :value="result2" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">生产工单</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_odno" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">物料编号</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_no" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">品名规格</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_name" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">数量</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_qty" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="btn_group uni-row uni-flex">
							<button class="return" @tap="Eliminate1">清除</button>
							<button class="submission" @tap="Submission1">提交</button>
						</view>
					</view>
					<view class="foot"></view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="main">
					<view class="head">
					</view>
					<view class="body">
						<view class="uni-form-item uni-row">
							<view class="title">库位代号</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan3' :value="result3" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">库位名称</view>
							<view class="with-fun">
								<input class="uni-input" v-model="wm_name" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">料车</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan4' :value="result4" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">流程单号</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan5' :value="result5" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">生产工单</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_odno1" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">物料编号</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_no1" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">品名规格</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_name1" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">数量</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_qty1" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="btn_group uni-row uni-flex">
							<button class="return" @tap="Eliminate2">清除</button>
							<button class="submission" @tap="Submission2">提交</button>
						</view>
					</view>
					<view class="foot"></view>
				</view>
			</view>
			<view v-show="current === 2">
				<view class="main">
					<view class="head">
					</view>
					<view class="body">
						<view class="uni-form-item uni-row">
							<view class="title">料车</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan6' :value="result6" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">流程单号</view>
							<view class="with-fun">
								<input class="uni-input" @confirm='scan7' :value="result7" />
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">生产工单</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_odno2" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">物料编号</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_no2" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">品名规格</view>
							<view class="with-fun">
								<input class="uni-input" v-model="el_name2" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="uni-form-item uni-row">
							<view class="title">数量</view>
							<view class="with-fun">
								<input class="uni-input" v-model="sc_qty2" disabled="" style="background-color: #BBBBBB;"/>
							</view>
						</view>
						<view class="btn_group uni-row uni-flex">
							<button class="return" @tap="Eliminate3">清除</button>
							<button class="submission" @tap="Submission3">提交</button>
						</view>
					</view>
					<view class="foot"></view>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	import {
		getPB01D1ByScstno,
		getPR02WIQTYByPtno1,
		getPB08HByMtarea1,
		getSpnoPB20H,
		crossingStationByScrcno,
		getScrcnoMtareaIn1,
		scrcnoVcnoIn
	} from '@/api/api.js'
	export default {
		components: {
			uniSegmentedControl,
		},
		data() {
			return {
				result: '',
				result1: '',
				result2: '',
				result3: '',
				result4: '',
				result5: '',
				result6: '',
				result7: '',
				pt_no: '',
				pt_name: '',
				sc_odno: '',
				el_no: '',
				el_name: '',
				sc_qty: '',
				sc_odno1: '',
				el_no1: '',
				el_name1: '',
				sc_qty1: '',
				sc_odno2: '',
				el_no2: '',
				el_name2: '',
				sc_qty2: '',
				wm_name: '',
				vc_no: '',
				items: ['站点备流程单', '流程单入库位', '流程单入料车'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#333',
				styleType: 'button',
			}
		},
		onLoad() {
			/* var pages2 = {
				USERID:uni.getStorageSync("username"),
				sc_rcno: "L1900047268002"
			};
			console.log(pages2)
			getPR02WIQTYByPtno1(pages2).then(res => {
				console.log(res)
				console.log(res.IsSuccess)
				console.log(res.DicResult["sc_odno"])
				console.log(res.DicResult["el_no"])
				if (res.IsSuccess) {
					this.result2 = "L1900047268002";
					this.sc_odno = res.DicResult["sc_odno"];
					this.el_no = res.DicResult["el_no"];
					this.el_name = res.DicResult["r_size"] + res.DicResult["el_size"];
					this.sc_qty = res.DicResult["sc_qty"];
				} else {
					this.result2 = "";
					uni.showToast({
						icon: "none",
						title: res.ErrorMsg,
						duration: 3000
					})
				}
			}) */
		},
		methods: {
			scan: function(e) {
				this.result = e.detail.value;
				var pages1 = {
					USERID: uni.getStorageSync("username"),
					sc_stno: this.result,
				};
				getPB01D1ByScstno(pages1).then(res => {
					if (res.IsSuccess) {
						this.pt_name = res.DicResult["pt_name"];
						this.pt_no = res.DicResult["pt_no"];
					} else {
						this.result = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan1: function(e) {
				this.result1 = e.detail.value;
				var pages5 = {
					USERID: uni.getStorageSync("username"),
					vc_no: this.result1
				};
				getSpnoPB20H(pages5).then(res => {
					if (res.IsSuccess) {
						this.vc_no = res.DicResult["vc_no"];
					} else {
						this.result1 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan2: function(e) {
				this.result2 = e.detail.value;
				var pages2 = {
					USERID: uni.getStorageSync("username"),
					sc_rcno: this.result2
				};
				getPR02WIQTYByPtno1(pages2).then(res => {
					if (res.IsSuccess) {
						this.sc_odno = res.DicResult["sc_odno"];
						this.el_no = res.DicResult["el_no"];
						this.el_name = res.DicResult["r_size"] + res.DicResult["el_size"];
						this.sc_qty = res.DicResult["sc_qty"];
					} else {
						this.result2 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan3: function(e) {
				this.result3 = e.detail.value;
				var pages4 = {
					USERID: uni.getStorageSync("username"),
					mt_area: this.result3
				};
				getPB08HByMtarea1(pages4).then(res => {
					if (res.IsSuccess) {
						this.wm_name = res.DicResult["wm_name"];
					} else {
						this.result3 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan4: function(e) {
				this.result4 = e.detail.value;
				var pages5 = {
					USERID: uni.getStorageSync("username"),
					vc_no: this.result4
				};
				getSpnoPB20H(pages5).then(res => {
					if (res.IsSuccess) {
						this.vc_no = res.DicResult["vc_no"];
					} else {
						this.result4 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan5: function(e) {
				this.result5 = e.detail.value;
				var pages2 = {
					USERID: uni.getStorageSync("username"),
					sc_rcno: this.result5
				};
				getPR02WIQTYByPtno1(pages2).then(res => {
					if (res.IsSuccess) {
						this.sc_odno1 = res.DicResult["sc_odno"];
						this.el_no1 = res.DicResult["el_no"];
						this.el_name1 = res.DicResult["r_size"] + res.DicResult["el_size"];
						this.sc_qty1 = res.DicResult["sc_qty"];
					} else {
						this.result5 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan6: function(e) {
				this.result6 = e.detail.value;
				var pages5 = {
					USERID: uni.getStorageSync("username"),
					vc_no: this.result6
				};
				getSpnoPB20H(pages5).then(res => {
					if (res.IsSuccess) {
						this.vc_no = res.DicResult["vc_no"];
					} else {
						this.result6 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			scan7: function(e) {
				this.result7 = e.detail.value;
				var pages2 = {
					USERID: uni.getStorageSync("username"),
					sc_rcno: this.result7
				};
				getPR02WIQTYByPtno1(pages2).then(res => {
					if (res.IsSuccess) {
						this.sc_odno2 = res.DicResult["sc_odno"];
						this.el_no2 = res.DicResult["el_no"];
						this.el_name2 = res.DicResult["r_size"] + res.DicResult["el_size"];
						this.sc_qty2 = res.DicResult["sc_qty"];
					} else {
						this.result7 = "";
						uni.showToast({
							icon: "none",
							title: res.ErrorMsg,
							duration: 3000
						})
					}
				})
			},
			Submission1: function() {
				if (this.result == "") {
					uni.showToast({
						icon: "none",
						title: "作业站点不能为空",
						duration: 3000
					})
				} else {
					if (this.result1 == "" && this.result2 == "") {
						uni.showToast({
							icon: "none",
							title: "料车和流程单不能同时为空",
							duration: 3000
						})
					} else {
						var pages6 = {
							USERID: uni.getStorageSync("username"),
							sc_rcno: this.result2,
							pt_no: this.pt_no,
							vc_no: this.result1,
							sc_stno: this.result,
							sc_status: "0"
						};
						crossingStationByScrcno(pages6).then(res => {
							if (res.IsSuccess) {
								this.result1 = "";
								this.result2 = "";
								this.sc_odno = "";
								this.el_no = "";
								this.el_name = "";
								this.sc_qty = "";
								uni.showToast({
									icon: "none",
									title: res.Messager,
									duration: 3000
								})
							} else {
								uni.showToast({
									icon: "none",
									title: res.ErrorMsg,
									duration: 3000
								})
							}
						})
					}
				}
			},
			Submission2: function() {
				if (this.result3 == "") {
					uni.showToast({
						icon: "none",
						title: "库位代号不能为空",
						duration: 3000
					})
				} else {
					if (this.result5 == "" && this.result4 == "") {
						uni.showToast({
							icon: "none",
							title: "料车和流程单不能同时为空",
							duration: 3000
						})
					} else {
						var pages7 = {
							USERID: uni.getStorageSync("username"),
							mt_area: this.result3,
							sc_rcno: this.result5,
							vc_no: this.result4,
						};
						getScrcnoMtareaIn1(pages7).then(res => {
							console.log(res)
							if (res.IsSuccess) {
								this.result4 = "";
								this.result5 = "";
								this.sc_odno1 = "";
								this.el_no1 = "";
								this.el_name1 = "";
								this.sc_qty1 = "";
								uni.showToast({
									icon: "none",
									title: res.Messager,
									duration: 3000
								})
							} else {
								uni.showToast({
									icon: "none",
									title: res.ErrorMsg,
									duration: 3000
								})
							}
						})
					}
				}
			},
			Submission3: function() {
				if (this.result6 == "") {
					uni.showToast({
						icon: "none",
						title: "料车不能为空",
						duration: 3000
					})
				} else {
					if (this.result7 == "") {
						uni.showToast({
							icon: "none",
							title: "流程单不能为空",
							duration: 3000
						})
					} else {
						var pages8 = {
							USERID: uni.getStorageSync("username"),
							vc_no: this.result6,
							sc_rcno: this.result7,
						};
						scrcnoVcnoIn(pages8).then(res => {
							if (res.IsSuccess) {
								this.result7 = "";
								this.sc_odno2 = "";
								this.el_no2 = "";
								this.el_name2 = "";
								this.sc_qty2 = "";
								uni.showToast({
									icon: "none",
									title: res.Messager,
									duration: 3000
								})
							} else {
								uni.showToast({
									icon: "none",
									title: res.ErrorMsg,
									duration: 3000
								})
							}
						})
					}

				}
			},
			Eliminate1: function() {
				this.result ="";
				this.pt_name ="";
				this.result1 = "";
				this.result2 = "";
				this.sc_odno = "";
				this.el_no = "";
				this.el_name = "";
				this.sc_qty = "";
			},
			Eliminate2: function() {
				this.result3 = "";
				this.wm_name="";
				this.result4 = "";
				this.result5 = "";
				this.sc_odno1 = "";
				this.el_no1 = "";
				this.el_name1 = "";
				this.sc_qty1 = "";
			},
			Eliminate3: function() {
				this.result6 = "";
				this.result7 = "";
				this.sc_odno2 = "";
				this.el_no2 = "";
				this.el_name2 = "";
				this.sc_qty2 = "";
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
					if(index == 0){
						this.result3 = "";
						this.wm_name="";
						this.result4 = "";
						this.result5 = "";
						this.sc_odno1 = "";
						this.el_no1 = "";
						this.el_name1 = "";
						this.sc_qty1 = "";
						this.result6 = "";
						this.result7 = "";
						this.sc_odno2 = "";
						this.el_no2 = "";
						this.el_name2 = "";
						this.sc_qty2 = "";
					}
					else if(index == 1){
						this.result ="";
						this.pt_name ="";
						this.result1 = "";
						this.result2 = "";
						this.sc_odno = "";
						this.el_no = "";
						this.el_name = "";
						this.sc_qty = "";
						this.result6 = "";
						this.result7 = "";
						this.sc_odno2 = "";
						this.el_no2 = "";
						this.el_name2 = "";
						this.sc_qty2 = "";
					}
					else if(index == 2){
						this.result ="";
						this.pt_name ="";
						this.result1 = "";
						this.result2 = "";
						this.sc_odno = "";
						this.el_no = "";
						this.el_name = "";
						this.sc_qty = "";
						this.result3 = "";
						this.wm_name="";
						this.result4 = "";
						this.result5 = "";
						this.sc_odno1 = "";
						this.el_no1 = "";
						this.el_name1 = "";
						this.sc_qty1 = "";
					}
				}
			},
			styleChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.styleType = evt.target.value
				}
			},
			colorChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.activeColor = evt.target.value
				}
			}
		}
	}
</script>

<style>
	.uni-input {
		color: black;
	}

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		/* background-color: #efeff4 */
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.uni-common-mt {
		/* background-color: #dfdfdf; */
		margin-top: 20upx;
	}

	.content {
		justify-content: center;
		height: 900upx;
		text-align: center;
	}

	.main {
		/* background-color: #DAE3F3; */
	}

	uni-input {
		background-color: #fff;
	}

	button {
		margin-top: 10upx;
		margin-bottom: 10upx;
	}

	.return {
		margin-right: -70upx;
	}

	.submission {
		margin-right: 20upx;
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
		padding: 2upx 50upx;
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
