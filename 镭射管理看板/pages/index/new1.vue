<template>
	<view class="page" :style="{'height':bodyW+'px'}" style="background: url(../../static/bj1.png) repeat-y 100% top/100%;">
		<view class="head">
			<view class="title" :style="{'height':headH+'px'}">
				<img src="../../static/logo.png" alt="">
				<text :style="{'font-size':itemW/fontS+'px'}">弘信电子调度看板</text><text style="font-size: .2rem;" :style="{'font-size':itemW/fontS+'px'}">-- 工序</text>
			</view>
		</view>
		<view class="body uni-flex uni-row">
			<!-- <view class="b_1" :style="{'width':b_1W+'px'}" style="background: url(../../static/b1.png) repeat-y 100% top/100%;"> -->
			<view class="b_1" :style="{'width':b_1W+'px'}">
				<view class="list">
					<view class="b_1_list_head" :style="{'height':headH*headS+'px'}">
						<view class="pageCount">{{data.all.dt3.length}}</view>
						<view class="list_title">调度池</view>
						<view class="title uni-flex uni-row">
							<view :style="{'font-size':itemW/fontS+'px'}">型号</view>
							<view :style="{'font-size':itemW/fontS+'px'}">工单</view>
							<view :style="{'font-size':itemW/fontS+'px'}">批次</view>
							<!-- <view :style="{'font-size':itemW/fontS+'px'}">位置</view>
							<view :style="{'font-size':itemW/fontS+'px'}">停滞</view> -->
						</view>
					</view>
					<view class="content">
						<view class="item uni-flex uni-row" v-for="(item,index) in data.list3" :style="{'height':itemW+'px','font-size':itemW/fontS+'px'}">
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.el_no}}</view>
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_odno}}</view>
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno}}</view>
<!-- 							<view :style="{'font-size':itemW/fontS+'px'}">{{item.location}}</view>
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno.toFixed()}}</view> -->
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="b_2 uni-flex uni-column" style="background: url(../../static/b2.png) repeat-y 100% top/100%;" :style="{'width':b_2W+'px'}"> -->
			<view class="b_2 uni-flex uni-column" :style="{'width':b_2W+'px'}">
				<view class="list uni-flex uni-row">
					<view class="jt">
						<!-- 机台 -->
						<view class="jt_head" :style="{'height':headH*headS+'px','font-size':itemW/fontS+'px'}">机台</view>
						<view v-for="(item,index) in data.list2">
							<view class="item" v-if="item.wi_status==0" :style="{'height':itemW+'px','width':itemW+20+'px','font-size':itemW/fontS+'px'}" style="background: url(../../static/jt_bj.png) no-repeat 100% top/100%;">{{item.dev_jno}}</view>
							<view class="item" v-if="item.wi_status==1" :style="{'height':itemW+'px','width':itemW+20+'px','font-size':itemW/fontS+'px'}" style="background: url(../../static/jt_bj2.png) no-repeat 100% top/100%;">{{item.dev_jno}}</view>
							<view class="item" v-if="item.wi_status==2":style="{'height':itemW+'px','width':itemW+20+'px','font-size':itemW/fontS+'px'}" style="background: url(../../static/jt_bj3.png) no-repeat 100% top/100%;">{{item.dev_jno}}</view>
						</view>
					</view>
					<view class="dz">
						<view class="dz_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj.png) no-repeat 100% top/100%;">{{data.all.ka}}</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">待制</view>
						</view>
						<view class="list_dz item uni-flex uni-column" v-for="(item,index) in data.list2" :style="{'height':itemW+'px','font-size':itemW/fontS+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}" class="">{{item.el_no1||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_odno1||''}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno1||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.time}}</view>
							</view>
						</view>
					</view>
					<view class="zz">
						<view class="zz_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj2.png) no-repeat 100% top/100%;">{{data.all.kb}}</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">在制</view>
						</view>
						<view class="list_zz item uni-flex uni-column" v-for="(item,index) in data.list2" :style="{'height':itemW+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.el_no2||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_odno2||''}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno2||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.time}}</view>
							</view>
						</view>
					</view>
					<view class="ywg">
						<view class="ywg_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj3.png) no-repeat 100%/100%;">{{data.all.kc}}</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">已完工</view>
						</view>
						<view class="list_ywg item uni-flex uni-column" v-for="(item,index) in data.list2" :style="{'height':itemW+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.el_no3||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_odno3||''}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno3||''}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.time}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="b_3" :style="{'width':b_3W+'px'}" style="background: url(../../static/b1.png) repeat-y 100% top/100%;"> -->
			<view class="b_3" :style="{'width':b_3W+'px'}">
				<view class="b_3_head" :style="{'height':headH*headS+'px'}">
					<view class="pageCount">{{data.all.dt1.length}}</view>
					<view class="title" :style="{'font-size':itemW/fontS+'px'}">待处理</view>
				</view>
				<view class="list">
					<view class="item uni-flex uni-row" v-for="(item,index) in data.list1" :style="{'height':itemW+'px'}">
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.el_no}}</view>
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_odno}}</view>
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.sc_rcno}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {DW04WebService} from '@/api/api.js'
	export default {
		data() {
			return {
				jtList:[1,2,3,4,5,6,7,8],
				bodyW:0,
				b_1W: 0,
				b_2W: 0,
				b_3W: 0,
				itemW:0,
				fontS:2,
				headS:2,//头部高度比率
				headH:0,
				pageCount: 20,//当页显示数量
				pageSum:40,
				data: {
					all:[],
					list1: [],
					list2: [],
					list3: []
				}
			}
		},
		onResize(e) {
			console.log(e);
			this.auto();
		},
		onShow() {
		},
		onLoad() {
			uni.showLoading({
				title:'正在加载...'
			})
			this.auto();
			DW04WebService().then(res=>{
				var data = res.split('<?xml version="1.0" encoding="utf-8"?>')
				data = data[1].split('<string xmlns="http://tempuri.org/">');
				data = data[1].split('</string>');
				data = JSON.parse(data[0])
				// let data=res;
				this.data.all=data.DicResult;
				let d1=data.DicResult.dt1;
				let d2=data.DicResult.dt2;
				let d3=data.DicResult.dt3;
				// let count1=data.length/20;
				var pageNum =20;
				var pageIndex1=1;
				var pageIndex2=1;
				var pageIndex3=1;
				var maxNum=0;
				if(d1.length>d2.length){
					maxNum=d1.length;
					if(d1.length<d3.length){
						maxNum=d3.length;
					}
				}else{
					maxNum=d2.length;
					if(d2.length<d3.length){
						maxNum=d3.length;
					}
				}
				var maxPage=Math.floor(maxNum/pageNum);
				if(d3.length>pageIndex1*pageNum){
					this.data.list3=d3.slice((pageIndex1)*pageNum,pageIndex1*pageNum);
					
				}else{
					this.data.list3=d3.slice((pageIndex1-1)*pageNum,d3.length);
				}
				if(d2.length>pageIndex2*pageNum){
					this.data.list2=d2.slice((pageIndex2-1)*pageNum,pageIndex2*pageNum);
					
				}else{
					this.data.list2=d2.slice((pageIndex2-1)*pageNum,d2.length);
				}
				if(d1.length>pageIndex3*pageNum){
					this.data.list1=d1.slice((pageIndex3-1)*pageNum,pageIndex3*pageNum);
					
				}else{
					this.data.list1=d1.slice((pageIndex3-1)*pageNum,d1.length);
				}
				console.log(this.data.list2.length);
				uni.hideLoading()
				setInterval(()=>{
					pageIndex1+=1;
					pageIndex2+=1;
					pageIndex3+=1;
					console.log(d3.length);
					console.log(pageNum);
					if(d3.length>pageIndex1*pageNum){
						this.data.list3=d3.slice((pageIndex1-1)*pageNum,pageIndex1*pageNum);
						
					}else{
						this.data.list3=d3.slice((pageIndex1-1)*pageNum,d3.length);
					}
					if(d2.length>pageIndex2*pageNum){
						this.data.list2=d2.slice((pageIndex2-1)*pageNum,pageIndex2*pageNum);
					}else{
						this.data.list2=d2.slice((pageIndex2-1)*pageNum,d2.length);
					}
					if(d1.length>pageIndex3*pageNum){
						this.data.list1=d1.slice((pageIndex3-1)*pageNum,pageIndex3*pageNum);
						
					}else{
						this.data.list1=d1.slice((pageIndex3-1)*pageNum,d1.length);
					}
					
					if(pageIndex1>d3.length/pageNum){
						pageIndex1=0;
					}
					if(pageIndex2>d2.length/pageNum){
						pageIndex2=0;
					}
					if(pageIndex3>d1.length/pageNum){
						pageIndex3=0;
					}
					// if(d1.length>20){
					// 	this.data.list1=d1.slice((pageIndex-1)*pageNum+1,pageIndex*pageNum);
					// }
					// if(d2.length>20){
					// 	this.data.list2=d1.slice(pageIndex,pageIndex*pageNum);
					// }
					// if(d3.length>20){
					// 	this.data.list3=d1.slice(pageIndex,pageIndex*pageNum);
					// }
					
				},1000)
				console.log(data);
				console.log(data.ka);
				console.log(data.kb);
				console.log(data.kc);
			})
			
			let newData=[];
			let oldData=[];
			let flag=true;
			// for (let i = 0; i < this.pageSum; i++) {
			// 	let d = {
			// 		'xh': '6035AA',
			// 		'gd': '000021',
			// 		'pc': '001'
			// 	}
			// 	let d1 = {
			// 		'xh': 'AAAAAA',
			// 		'gd': 'AAAAAA',
			// 		'pc': 'AAAAAA'
			// 	}
			// 	// console.log(i+'-'+this.pageCount+"-"+this.pageCount*2);
			// 	if(i>=this.pageCount&&i<this.pageCount*2){
			// 		newData.push(d1);
			// 		// console.log(newData);
			// 	}else{
			// 		oldData.push(d);
			// 	}
			// }
			// this.data.list1=oldData;
			// setInterval(()=>{
			// 	if(flag){
			// 		this.data.list1=newData;
			// 		flag=false;
			// 	}else{
			// 		this.data.list1=oldData;
			// 		flag=true;
			// 	}
			// 	try {
			// 		const res = uni.getSystemInfoSync();
			// 		console.log(res.model);
			// 		console.log(res.pixelRatio);
			// 		console.log(res.windowWidth);
			// 		console.log(res.windowHeight);
			// 		console.log(res.language);
			// 		console.log(res.version);
			// 		console.log(res.platform);
			// 		console.log(res.windowWidth);
			// 		// uni.showModal({
			// 		// 	title:res.model+"-"+res.pixelRatio+"-"+res.platform+"-"+res.brand
			// 		// })
			// 		// uni.showToast({
			// 		// 	title:res.model+"-"+res.pixelRatio+"-"+res.platform+"-"+res.brand,
			// 		// 	icon:"none"
			// 		// })
			// 	} catch (e) {
			// 		// error
			// 		console.log(e)
			// 	}
			// },5200)
			// console.log(this.data.list1)
		},
		methods:{
			auto(){
				try {
					const res = uni.getSystemInfoSync();
					console.log(res.model);
					console.log(res.pixelRatio);
					console.log(res.windowWidth);
					console.log(res.windowHeight);
					console.log(res.language);
					console.log(res.version);
					console.log(res.platform);
					console.log(res.windowWidth);
					// uni.showModal({
					// 	title:res.model+"-"+res.pixelRatio+"-"+res.platform+"-"+res.brand
					// })
					// uni.showToast({
					// 	title:res.model+"-"+res.pixelRatio+"-"+res.platform+"-"+res.brand,
					// 	icon:"none"
					// })
					let oW=res.windowHeight/this.pageCount*3;//其他元素占用的高度
					this.bodyW=res.windowHeight;
					this.b_1W = res.windowWidth / 4;
					this.b_2W = res.windowWidth / 2;
					this.b_3W = res.windowWidth / 4;
					let headH=res.windowHeight/(this.pageCount);
					let that =this;
					if(res.model=="TC20"){
						// that.headS=1;
						headH=res.windowHeight/(that.pageCount)+10;
					}
					this.headH=headH;
					console.log(res.windowHeight-oW)
					console.log(res.windowHeight+"-"+oW)
					let itemW=(res.windowHeight-oW)/(this.pageCount);
					this.itemW=(res.windowHeight-oW)/(this.pageCount+2.8);//list列表内包含了两行的宽度
				} catch (e) {
					// error
					console.log(e)
				}
			}
		}
	}
</script>

<style>
	.list_dz view{
		/* color: #20E8B4; */
	}
	.list_zz view{
		color: #20E8B4;
	}
	.list_ywg view{
		color: #FF1F24;
	}
	.b_3 .list .item view,
	.b_3 .list .item,
	.b_1 .list .content .item,
	.b_1 .list .content .item view,
	.b_2 .list .ywg .list_ywg,
	.b_2 .list .zz .list_zz,
	.b_2 .list .dz .list_dz {
		margin: 2upx;
		font-size: 24px;
		text-align: center;
	}
	.b_2 .list .jt .jt_head{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.b_2 .list .jt .item{
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		margin: 2upx auto;
		border-bottom: 1px solid #666;
	}
	.b_2 .list .ywg .list_ywg,
	.b_2 .list .dz .list_dz,
	.b_2 .list .zz .list_zz{
		box-sizing: border-box;
	}
	.b_2 .list .jt{
		flex: .3;
		
	}
	.b_1 .list .content>view,
	.b_3 .list .item view,
	.b_2 .list .zz .list_zz .item_1 view,
	.b_2 .list .ywg .list_ywg .item_1 view,
	.b_2 .list .dz .list_dz .item_1 view,
	.b_2 .list .dz,
	.b_2 .list_title view,
	.b_2 .list .zz,
	.b_2 .list .ywg,
	.b_2 .list .dz .list .item_1 view {
		flex: 1 1 0%;
	}
	
	.b_2 .list .dz .list_dz,
	.b_2 .list .zz .list_zz,
	.b_2 .list .ywg .list_ywg,
	.b_3 .list .item,
	.b_1 .list .content>view {
		border-bottom: 1px solid #666;
		box-sizing: border-box;
	}

	.b_2 .list .title view,
	.b_2 .list .content view,
	.b_2 .list_title,
	.b_2 .pageCount {
		text-align: center;
	}

	.b_3 .list .title view,
	.b_3 .list .content view,
	.b_3 .list_title,
	.b_3 .pageCount,
	.b_1 .list .title view,
	.b_1 .list .content view,
	.b_1 .list_title,
	.b_1 .pageCount {
		text-align: center;
		flex: 1;
	}
	.b_1 .pageCount,
	.b_3 .pageCount{
		border: 2px solid #ccc;
		border-radius: 5upx;
		box-sizing: border-box;
	}
	.b_1,.b_2,.b_3{
		overflow: hidden;
	}
	.body>view {
		border: 1px solid #666;
		overflow-y: scroll;
	}

	.body view {
		font-size: 0.1rem;
	}

	.body {
		font-size: 24px;
	}

	.head .title {
		text-align: center;
		/* font-size: .3rem; */
		height: 20upx;
	}
	.head .title text{
		position: relative;
		top: -2upx;
	}
	.head .title img{
		width: .4rem;
		height: .4rem;
		position: relative;
		/* vertical-align: middle; */
		top: 4upx;
		margin-right: 5upx;
	}
	/* 单独元素样式 */
	view{
		line-height: 1.5;
		color: white;
		font-size: 24px;
	}
	.item{
		/* min-height: .8rem; */
		/* border-radius: 5upx; */
		text-align: center;
	}
	.title {
		text-align: center;
	}
	.jt .item,
	.dz .dz_head .pageCount,
	.zz .zz_head .pageCount,
	.ywg .ywg_head .pageCount{
		text-shadow: 0 0 3px #FF0000;
	}
	.head{
		line-height: 0.5;
	}
	.pageCount{
		width: .5rem;
		height: .5rem;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
