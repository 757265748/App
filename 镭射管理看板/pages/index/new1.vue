<template>
	<view class="page" :style="{'height':bodyW+'px'}" style="background: url(../../static/bj1.png) repeat-y 100% top/100%;">
		<view class="head" :style="{'height':headH+'px'}">
			<view class="title">
				<img src="../../static/logo.png" alt="">
				<text :style="{'font-size':itemW/fontS+'px'}">弘信电子调度看板</text><text style="font-size: .2rem;" :style="{'font-size':itemW/fontS+'px'}">-- 工序</text></view>
		</view>
		<view class="body uni-flex uni-row">
			<!-- <view class="b_1" :style="{'width':b_1W+'px'}" style="background: url(../../static/b1.png) repeat-y 100% top/100%;"> -->
			<view class="b_1" :style="{'width':b_1W+'px'}">
				<view class="list">
					<view class="b_1_list_head" :style="{'height':headH*headS+'px'}">
						<view class="pageCount">16</view>
						<view class="list_title">调度池</view>
						<view class="title uni-flex uni-row">
							<view :style="{'font-size':itemW/fontS+'px'}">型号</view>
							<view :style="{'font-size':itemW/fontS+'px'}">工单</view>
							<view :style="{'font-size':itemW/fontS+'px'}">批次</view>
						</view>
					</view>
					<view class="content">
						<view class="item uni-flex uni-row" v-for="(item,index) in data.list1" :style="{'height':itemW+'px','font-size':itemW/fontS+'px'}">
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.xh}}</view>
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.gd}}</view>
							<view :style="{'font-size':itemW/fontS+'px'}">{{item.pc}}</view>
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
						<view class="item" v-for="(item,index) in jtList" :style="{'height':itemW+'px','width':itemW+'px','font-size':itemW/fontS+'px'}" style="background: url(../../static/jt_bj.png) no-repeat 100% top/100%;">{{item}}</view>
					</view>
					<view class="dz">
						<view class="dz_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj.png) no-repeat 100% top/100%;">28</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">待制</view>
						</view>
						<view class="list_dz item uni-flex uni-column" v-for="(item,index) in data.list1" :style="{'height':itemW+'px','font-size':itemW/fontS+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}" class="">{{item.xh}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.gd}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.pc}}</view>
								<view></view>
							</view>
						</view>
					</view>
					<view class="zz">
						<view class="zz_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj2.png) no-repeat 100% top/100%;">6</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">在制</view>
						</view>
						<view class="list_zz item uni-flex uni-column" v-for="(item,index) in data.list1" :style="{'height':itemW+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.xh}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.gd}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.pc}}</view>
								<view></view>
							</view>
						</view>
					</view>
					<view class="ywg">
						<view class="ywg_head" :style="{'height':headH*headS+'px'}">
							<view class="pageCount" style="background: url(../../static/jt_bj3.png) no-repeat 100%/100%;">2</view>
							<view class="title" :style="{'font-size':itemW/fontS+'px'}">已完工</view>
						</view>
						<view class="list_ywg item uni-flex uni-column" v-for="(item,index) in data.list1" :style="{'height':itemW+'px'}">
							<view class="item_1 uni-flex uni-row">
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.xh}}</view>
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.gd}}</view>
							</view>
							<view class="item_2 uni-flex uni-row" style="margin: auto;">
								<view></view>
								<view :style="{'font-size':itemW/fontS+'px'}">{{item.pc}}</view>
								<view></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- <view class="b_3" :style="{'width':b_3W+'px'}" style="background: url(../../static/b1.png) repeat-y 100% top/100%;"> -->
			<view class="b_3" :style="{'width':b_3W+'px'}">
				<view class="b_3_head" :style="{'height':headH*headS+'px'}">
					<view class="pageCount">8</view>
					<view class="title" :style="{'font-size':itemW/fontS+'px'}">待处理</view>
				</view>
				<view class="list">
					<view class="item uni-flex uni-row" v-for="(item,index) in data.list1" :style="{'height':itemW+'px'}">
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.xh}}</view>
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.gd}}</view>
						<view :style="{'font-size':itemW/fontS+'px'}">{{item.pc}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jtList:[1,2,3,4,5,6,7,8],
				bodyW:0,
				b_1W: 0,
				b_2W: 0,
				b_3W: 0,
				itemW:0,
				fontS:4,
				headS:2,//头部高度比率
				headH:0,
				pageCount: 20,//当页显示数量
				pageSum:40,
				data: {
					list1: []
				}
			}
		},
		onResize(e) {
			console.log(e);
			this.auto();
		},
		onLoad() {
			let newData=[];
			let oldData=[];
			let flag=true;
			for (let i = 0; i < this.pageSum; i++) {
				let d = {
					'xh': '6035AA',
					'gd': '000021',
					'pc': '001'
				}
				let d1 = {
					'xh': 'AAAAAA',
					'gd': 'AAAAAA',
					'pc': 'AAAAAA'
				}
				// console.log(i+'-'+this.pageCount+"-"+this.pageCount*2);
				if(i>=this.pageCount&&i<this.pageCount*2){
					newData.push(d1);
					// console.log(newData);
				}else{
					oldData.push(d);
				}
			}
			this.data.list1=oldData;
			setInterval(()=>{
				if(flag){
					this.data.list1=newData;
					flag=false;
				}else{
					this.data.list1=oldData;
					flag=true;
				}
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
				} catch (e) {
					// error
					console.log(e)
				}
			},5200)
			console.log(this.data.list1)
			this.auto();
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
					this.headH=res.windowHeight/(this.pageCount);
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
	.body>view {
		border: 1px solid #666;
		overflow-y: scroll;
	}

	.body view {
		font-size: 0.1rem;
	}

	.body {
		font-size: 12px;
	}

	.head .title {
		text-align: center;
		font-size: .3rem;
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
	}
	.item{
		/* min-height: .8rem; */
		/* border-radius: 5upx; */
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
	.pageCount{
		width: .5rem;
		height: .5rem;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
