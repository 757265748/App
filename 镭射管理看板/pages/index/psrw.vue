<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head"></view>
		<view class="body" @tap="rowClick()">
			<zTable :tableData="tableData" :columns="tableColumns" textAlign="center" titleTextAlign="center"></zTable>
			<uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
		</view>
		<view class="foot uni-flex">
			<button @tap="bottomJump('menu')">菜单</button>
			<button @tap="bottomJump('ckjh')">出库计划</button>
			<button @tap="bottomJump('blmx')">备料明细</button>
			<button @tap="bottomJump('blsm')">配料</button>
			<button @tap="bottomJump('xlsm')">下料</button>
			<button @tap="bottomJump('login')">登出</button>
		</view>
	</view>
</template>

<script>
	import zTable from '../../components/z-table/z-table_v1.vue'
	import uniPagination from '@/components/uni-pagination/uni-pagination.vue'
	import {
		getGridTitle,
		getDataPR20,
		getDataHMS //枚举
	} from '@/api/api.js';
	export default{
		props:{
			title:{
				type:String,
				default:"配送任务"
			}
		},
		components:{
			zTable,
			uniPagination
		},
		data(){
			return{
				heightH: uni.getSystemInfoSync().windowHeight,
				tableData: [],
				tableColumns: [],
				tableKey: [],
				statusArr: [],
				current:1,
				total: 100,
				pageSize: 10
			}
		},
		onLoad() {
			this.getGridTitle();
			this.initData();
			uni.setNavigationBarTitle({
				title:this.title
			})
		},
		methods:{
			rowClick(item){
				console.log(item);
			},
			change(e) {
				console.log(e)
				this.current = e.current;
				var pages={pageIndex:this.current,pageSum:"10"};
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
			initData(){
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
				this.tableData=[];
				var pages={pageIndex:this.current,pageSum:"10"};
				getDataPR20(pages).then(res => {
					this.total=res.pageSum;
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
								}else{
									data[item] = res.data[i][item];
								}
							}
						}
						this.tableData.push(data);
					}
					console.log(this.tableData);
				});
			},
			bottomJump(pageName){
				if(pageName=='login'){
					uni.removeStorageSync("user")
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					uni.navigateTo({
						url:pageName
					})
				}
			},
		}
	}
</script>

<style>
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	button{
		height: 100upx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
