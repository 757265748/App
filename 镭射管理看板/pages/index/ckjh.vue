<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
		</view>
		<view class="btn-group">
		</view>
		<view class="body">
			<z-table  :tableData="tableData" @onClick="rowClick" :columns="tableColumns" textAlign="center" titleTextAlign="center"></z-table>
			<uni-pagination :current="current" :total="total" title="分页" :show-icon="true" @change="change" />
		</view>
		<view class="foot uni-flex">
		</view>
	</view>
</template>

<script>
	import zTable from '@/components/z-table/z-table_v1.vue';
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
	import {
		getGridTitleCK,
		getDataPR20,
		getDataHMS, //枚举
		ckjh,
		// InsertMC02D1,
		getMC02D1ByMclist,
		getBarnoInfo,
		getDataByElcode
	} from '@/api/api.js';
	export default {
		props: {
			title: {
				type: String,
				default: "出库计划列表"
			}
		},
		components: {
			zTable,
			uniPagination
		},
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight,
				tableData: [],
				tableColumns: [],
				tableKey: [],
				statusArr: [],
				current: 1,
				total: 100,
				pageSize: 10,
				nowType: 0,
				singleSelect: false,
				host:''
			}
		},
		onLoad() {
			this.host=uni.getStorageSync("host");
			console.log(uni.getStorageSync("host"));
			getBarnoInfo({
				host:this.host
			}).then(res=>{
				console.log(res);
			});
			getMC02D1ByMclist({
				host:this.host
			}).then(res=>{
				console.log(res);
			});
			// InsertMC02D1().then(res=>{
			// 	console.log(res);
			// });
			ckjh({
				host:this.host
			}).then(res=>{
				console.log(res);
			})
			// this.getData();
			uni.setNavigationBarTitle({
				title: this.title
			})
			this.getGridTitleCK();
			this.initData();
		},
		methods: {
			rowClick(item) {
				uni.showToast({
					title: `${JSON.stringify(item)}数据被点击`,
					icon: 'none'
				})
				console.log(JSON.stringify(item))
				uni.navigateTo({
					url:`blmx?data=${JSON.stringify(item)}`
				})
			},
			change(e) {
				console.log(e)
				this.current = e.current;
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				this.ckjh(pages);
			},
			getGridTitleCK() {
				var no = {
					title: "NO",
					width: 80,
					key: "no"
				}
				getGridTitleCK({
					host:this.host
				}).then(res => {
					this.tableColumns.push(no);
					for (var item in res.data) {
						this.tableKey.push(res.data[item].FieldCode);
						var column = {
							title: res.data[item].DefaultLanguage,
							width: 180,
							key: res.data[item].FieldCode,
							listenerClick: true
						}
						this.tableColumns.push(column);
					}
				})
			},
			initData() {
				getDataHMS().then(res => {
					console.log(res);
					for (var item in res.Data) {
						var status = new Object();
						status.Enmcode = res.Data[item].Enmcode;
						status.Enmvalue = res.Data[item].Enmvalue;
						this.statusArr.push(status);
					}
					console.log(this.statusArr);
				})
				this.ckjh();
			},
			ckjh() {
				this.tableData = [];
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				ckjh().then(res => {
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
		}
	}
</script>

<style>
	.z-table-title-item{
		background-color: #fff;
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

	.uni-form-item {
		width: 50%;
	}

	.uni-input {
		text-indent: 10px;
		padding: 0;
		font-size: 20px;
	}

	.foot {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
