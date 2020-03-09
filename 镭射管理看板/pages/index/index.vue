<template>
	<view class="main" :style="{height:heightH+'px'}">
		<view class="head">
			<view class="titleL">厦门弘信电子科技股份有限公司</view>
			<view class="titleC">镭射设备管理看板</view>
			<view class="titleR">
				<view v-for="(item,index) in titleR.tags" :class="index">
					<b :style="{background:item.color}"></b>
					<span>{{item.name}}</span>
				</view>
			</view>
		</view>
		<view class="body" style="position: relative;">
			<image src="../../static/kb_bj.png" style="width: 100%;height: 110%; z-index: 1;position: absolute;	" mode=""></image>
			<z-table :columns="tableColumns" :tableData="tableData" :textAlign="tableProps.textAlign" :titleTextAlign="tableProps.titleAlign"></z-table>
		</view>
		<view class="foot">
			<button class="back" @tap="back">返回</button>
		</view>
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	import zTable from '@/components/z-table/z-table.vue'
	import {
		login,
		getPB35D1ByBoano,
		getPB34D1ByKbno,
		getPB34HByKbno,
		getGetDW01
	} from '@/api/api.js'
	export default {
		components: {
			zTable,
			cmdProgress
		},
		data() {
			return {
				data: [{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park',
					id: "1",

				}],
				columns: [{
						title: "ID",
						key: "id"
					},
					{
						title: 'Name',
						key: 'name'
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					}
				],
				titleR: {
					tags: {
						zz: {
							name: "在制",
							color: "green"
						},
						dl: {
							name: "待料",
							color: "yellow"
						},
						gz: {
							name: "故障",
							color: "red"
						},
						wqy: {
							name: "未启用",
							color: "white"
						}
					}
				},
				heightH: uni.getSystemInfoSync().windowHeight + 0,
				tableProps: {
					textAlign: "center",
					titleAlign: "center"
				},
				tableColumns: [{
						title: "NO",
						width: 80,
						key: "no"
					}, {
						title: "简号",
						width: 150,
						key: "jh"
					}, {
						title: "生产型号",
						width: 150,
						key: "rwjd"
					}, {
						title: "设备状态",
						width: 150,
						key: "wlph"
					}, {
						title: "订单号",
						width: 150,
						key: "ckw"
					},
					{
						title: "任务进度",
						width: 150,
						key: "sbzt"
					},
					{
						title: "库位余料",
						width: 150,
						key: "zkw"
					}, {
						title: "机台余料",
						width: 150,
						key: "num"
					}, {
						title: "异常原因",
						width: 150,
						key: "ycyy"
					}
				],
				tableData: [],
			}
		},
		onLoad() {
			getPB35D1ByBoano().then(res => {
				console.log(res);
			});
			getPB34D1ByKbno().then(res => {
				console.log(res);
			});
			getPB34HByKbno().then(res => {
				console.log(res);
			});
			getGetDW01().then(res => {
				console.log(res);
			});
			this.getData();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1 //返回的页面数
				})
			},
			getData() {
				var w = "5px";
				var h = "6px";
				var t = "3px";
				getGetDW01().then(res => {
					for (var i = 0, length = res.Data.length; i < length; i++) {
						var data = {};
						data.no = i;
						// console.log(res.Data[i]);
						data.jh = res.Data[i].dev_jno;
						data.wlph = "GUAG001";
						data.sbzt = "<b style='display:block;margin:auto;width:30px;height:30px;background:red'></b>";
						// data.rwjd = '<cmd-progress :percent="30"></cmd-progress>';
						data.rwjd = '<div class="task" style="display:flex;width:100px;justify-content:center">' +
							'<div class="finish" style="width: 20%;height:10px;background: red;"></div>' +
							'<div class="progress" style="width: 10%;height:10px;background: green;"></div>' +
							'<div class="residue" style="width: 30%;height:10px;background: blue;"></div>' +
							'</div>';
						data.ckw = "TB01#";
						data.zkw = '<view class="jtyl">' +
							'<view class="title" style="position:relative;top:5px;">11:31</view>' +
							'<view style="position: relative;left:0;top: -5px;display: flex;justify-content: center;border-bottom: 1px solid blue;">' +
							'<view style="width: ' + w + ';height: ' + h +
							';border-radius: 10px;background-color: green;margin-left: 10px;position: relative;top:' + t +
							';left:-5px"></view>' +
							'<view style="width: ' + w + ';height: ' + h +
							';border-radius: 10px;background-color: green;margin-left: 10px;position: relative;top:' + t +
							';left:-5px"></view>' +
							'<view style="width: ' + w + ';height: ' + h +
							';border-radius: 10px;background-color: green;margin-left: 10px;position: relative;top:' + t +
							';left:-5px"></view>' +
							'<view style="width: ' + w + ';height: ' + h +
							';border-radius: 10px;background-color: yellow;margin-left: 10px;position: relative;top:' + t +
							';left:-5px"></view>' +
							'</view>' +
							'<view class="value" style="position:relative;right:0;top:-5px;float:right">108PNL</view>' +
							'</view>';
						data.num = 100;
						data.ycyy='异常原因';
						this.tableData.push(data);
					}
				});
			}
		}
	}
</script>

<style>
	.foot {
		position: fixed;
		bottom: 0;
	}

	button[class=back] {
		background-color: #16151A;
		border: 1px solid #ccc;
		width: 100rpx;
	}

	.task {
		display: flex;
		width: 100%;
	}

	.z-table {
		z-index: 9;
		margin-top: 20px;
		font-size: 12px;
	}

	.z-table,
	.z-table-title-item {
		background-color: transparent;
	}

	.body {
		height: 200px;
		width: 100%;
		/* background: url(../../static/kb_bj.jpg) no-repeat; */
		background-size: 100% 100%;
		background-color: #15151A;
		margin-top: 20px;
	}

	.titleL {
		font-size: .4rem;
	}

	.titleC {
		font-size: .6rem;
		display: flex;
		align-self: center;
		justify-content: center;
	}

	.titleR>view span {}

	.titleR>view b {
		width: 15upx;
		height: 40%;
		border: 1px solid #666;
	}

	.titleR>view {
		display: flex;
		font-size: .4rem;
	}

	.titleR {
		display: flex;
	}

	.titleC {
		flex: 4;
	}

	.titleL,
	.titleR {
		flex: 3;
	}

	.head {
		display: flex;
		background: url(../../static/top.jpg);
		background-size: 100% 100%;
		width: 100%;
		height: 1.2rem;
	}

	.main {
		display: flex;
		flex-direction: column;
		font-size: 10upx;
		background-color: #15151A;
	}

	* {
		color: white;
	}
</style>
