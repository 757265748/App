<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
			<view class="uni-flex uni-row uni-form-item between">
				<view class="uni-flex">
					<input class="uni-input" placeholder="生产订单" />
				</view>
				<view class="uni-flex">
					<input class="uni-input" placeholder="产品型号" />
				</view>
			</view>
			<view class="uni-flex uni-row uni-form-item between">
				<view class="uni-flex">
					<input class="uni-input" placeholder="物料版本" />
				</view>
				<view class="uni-flex">
					<input class="uni-input" placeholder="单据状态" />
				</view>
			</view>
			<view class="uni-flex uni-row uni-form-item btn-group">
				<view class="uni-btn">查询</view>
			</view>
		</view>
		<view class="body">
			<zTable :tableData="tableData" :columns="tableColumns" textAlign="center" titleTextAlign="center"></zTable>
			<uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
		</view>
		<view class="foot uni-flex">
			<button @tap="bottomJump('menu')">菜单</button>
			<button @tap="bottomJump('login')">登出</button>
		</view>
	</view>
</template>

<script>
	import zTable from '@/components/z-table/z-table_v1.vue';
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
	import {
		getGridTitle,
		getDataPR20,
		getDataHMS //枚举
	} from '@/api/api.js';
	export default {
		props: {
			title: {
				type: String,
				default: "流程单查询"
			}
		},
		components: {
			zTable,
			uniPagination
		},
		data() {
			return {
				heightH: uni.getSystemInfoSync().windowHeight + 50,
				tableData: [],
				tableColumns: [],
				tableKey: [],
				statusArr: [],
				current: 1,
				total: 100,
				pageSize: 10
			}
		},
		onLoad() {
			// this.getData();
			uni.setNavigationBarTitle({
				title: this.title
			})
			this.getGridTitle();
			this.initData();
		},
		methods: {
			change(e) {
				console.log(e)
				this.current = e.current;
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				this.getDataPR20(pages);
			},
			getGridTitle() {
				var no = {
					title: "NO",
					width: 80,
					key: "no"
				}
				getGridTitle().then(res => {
					this.tableColumns.push(no);
					for (var item in res.data) {
						this.tableKey.push(res.data[item].FieldCode);
						var column = {
							title: res.data[item].DefaultLanguage,
							width: 180,
							key: res.data[item].FieldCode
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
				this.getDataPR20();
			},
			getDataPR20() {
				this.tableData = [];
				var pages = {
					pageIndex: this.current,
					pageSum: "10"
				};
				getDataPR20(pages).then(res => {
					this.total = res.pageSum;
					console.log(res.data);
					for (var i = 0, length = res.data.length; i < length; i++) {
						// console.log(res.data[i]);
						var data = {};
						data.no = i;
						for (var item in res.data[i]) {
							if (this.tableKey.indexOf(item) != -1) {
								if (item == "ScStatus") {
									for (var item1 in this.statusArr) {
										if (res.data[i][item] == this.statusArr[item1].Enmcode) {
											data[item] = this.statusArr[item1].Enmvalue
										}
									}
								} else {
									data[item] = res.data[i][item];
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
	.between{
		justify-content: space-between;
	}
	.flex_1 {
		flex: 1;
	}

	.btn-group {
		justify-content: flex-end;
	}

	.head {
		display: flex;
		flex-wrap: wrap;
	}

	.uni-form-item {
		margin: 10upx;
	}

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
