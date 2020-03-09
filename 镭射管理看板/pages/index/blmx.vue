<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="uni-padding-wrap">
			<uni-segmented-control :current="tabCurrent" :values="items" @clickItem="onClickItem" styleType="text" activeColor="" />
		</view>
		<view class="content">
			<view v-show="tabCurrent === 0">
				<view class="head">
					<view class="uni-form-item uni-row">
						<view class="title">物料编码：</view>
						<view class="with-fun">
							<input class="uni-input" v-model="option.ElNo" />
						</view>
					</view>
					<view class="uni-form-item uni-row">
						<view class="title">品名规格：</view>
						<view class="with-fun">
							<input class="uni-input" v-model="option.el_name_size" />
						</view>
					</view>
					<view class="uni-form-item uni-row">
						<view class="title">需求库位：</view>
						<view class="with-fun">
							<input class="uni-input" v-model="option.MtRarea" />
						</view>
					</view>
					<view class="uni-form-item uni-row">
						<view class="title">需求数量：</view>
						<view class="with-fun">
							<input class="uni-input" v-model="xqsl" />
						</view>
					</view>
					<view class="uni-form-item uni-row">
						<view class="title">从库位：</view>
						<view class="with-fun">
							<input class="uni-input" v-model="option.MtArea" />
						</view>
					</view>
				</view>
				<view class="btn-group">
				</view>
				<view class="body">
					<z-table :tableData="tableData" @onClick="rowClick" :columns="tableColumns" textAlign="center" titleTextAlign="center"></z-table>
					<uni-pagination :current="current" :total="total" title="分页" :show-icon="true" @change="change" />
				</view>
				<view class="foot uni-flex">
				</view>
			</view>
			<view v-show="tabCurrent === 1">
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
							<input class="uni-input" :value="scanData.lot_no" />
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
			</view>
		</view>
	</view>
</template>

<script>
	import zTable from '@/components/z-table/z-table_v1.vue';
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue';
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	import {
		getGridTitleBlmx,
		getMC02D1ByMclist,
		getBarnoInfo,
		InsertMC02D1
	} from '@/api/api.js';
	export default {
		props: {
			title: {
				type: String,
				default: "扫描明细"
			}
		},
		components: {
			zTable,
			uniPagination,
			uniSegmentedControl
		},
		computed: {
			//需求数量
			xqsl() {
				let num = this.option.McQty1 - this.option.McAqty1;
				return num;
			}
		},
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight,
				items: [
					'扫描明细',
					'备料扫描'
				],
				tabCurrent: 0,
				tableData: [],
				tableColumns: [],
				tableKey: [],
				statusArr: [],
				current: 1,
				total: 100,
				pageSize: 10,
				nowType: 0,
				singleSelect: false,
				option: new Object(),
				
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
			console.log(JSON.parse(option.data))
			this.option = JSON.parse(option.data);
			getMC02D1ByMclist().then(res => {
				console.log(res);
			});
			// this.getData();
			uni.setNavigationBarTitle({
				title: this.title
			})
			this.getGridTitleBlmx();
			this.blmx();
		},
		methods: {
			onClickItem(index) {
				if (this.tabCurrent !== index) {
					this.tabCurrent = index
				}
			},
			rowClick(item) {
				uni.showToast({
					title: `${JSON.stringify(item)}数据被点击`,
					icon: 'none'
				})
				console.log(JSON.stringify(item))
				uni.navigateTo({
					url: `blsm?data=${JSON.stringify(item)}`
				})
			},
			change(e) {
				console.log(e)
				this.current = e.current;
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				this.blmx(pages);
			},
			getGridTitleBlmx() {
				var no = {
					title: "NO",
					width: 80,
					key: "no"
				}
				getGridTitleBlmx().then(res => {
					this.tableColumns.push(no);
					for (var item in res.data) {
						this.tableKey.push(res.data[item].FieldCode);
						var column = {
							title: res.data[item].DefaultLanguage,
							width: 250,
							key: res.data[item].FieldCode,
							listenerClick: true
						}
						this.tableColumns.push(column);
					}
				})
			},
			initData() {},
			blmx() {
				this.tableData = [];
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				getMC02D1ByMclist().then(res => {
					this.total = res.pageSum;
					console.log(res);
					for (var i = 0, length = res.Data.length; i < length; i++) {
						// console.log(res.data[i]);
						var data = {};
						data.no = i;
						for (var item in res.Data[i]) {
							if (this.tableKey.indexOf(item) != -1) {
								if (item == "ScStatus") {
									for (var item1 in this.statusArr) {
										if (res.Data[i][item] == this.statusArr[item1].Enmcode) {
											data[item] = this.statusArr[item1].Enmvalue
										}
									}
								} else {
									data[item] = res.Data[i][item];
								}
							}
						}
						this.tableData.push(data);
					}
					console.log(this.tableData);
				});
			},
			bottomJump(pageName) {
				if (pageName == 'login') {
					uni.removeStorageSync("user")
					uni.navigateTo({
						url: '../login/login'
					})
				} else {
					uni.navigateTo({
						url: pageName
					})
				}
			},
			
			
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

<style>
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
		font-size: 12upx;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
