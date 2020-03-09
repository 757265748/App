<template>
	<!-- 看板管理 -->
	<uni-list>
		<uni-list-item v-for="(item,index) in kbList" :show-arrow="false" @click="clickList($event)" :title="item.KbName" style="text-align: center;font-size: 12px;" />
	</uni-list>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import {
		getPB35D1ByBoano,
		getPB34HByKbno
	} from '@/api/api.js'
	export default{
		components:{
			uniList,
			uniListItem
		},
		data(){
			return {
				title:'看板管理',
				kbList:new Object()
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:this.title
			})
			this.initData();
		},
		methods:{
			clickList(e){
				console.log(e);
				uni.navigateTo({
					url:'new1'
				})
			},
			initData(){
				getPB34HByKbno().then(res=>{
					this.kbList=res.Data;
					console.log(res);
				});
			}
		}
	}
</script>

<style>
</style>
