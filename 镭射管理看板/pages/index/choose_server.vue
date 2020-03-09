<template>
	<view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>{{item.name}}</view>
					<radio :value="item.value" color="#333" :checked="index === current" />
				</label>
			</radio-group>
		</view>
		<view class="uni-btn ok" @tap="ok()">确认</view>
	</view>
</template>

<script>
	import {
		database
	} from '@/api/config.js'
	export default {
		data() {
			return {
				title: 'radio 单选框',
				items: [{
						value: 'zs',
						name: '正式服务器'
					},
					{
						value: 'cs',
						name: '测试服务器',
						checked: 'true'
					}
				],
				current: 0,
				serverName:'zs',
				server:'正式服务器',
			}
		},
		onLoad() {
			if(uni.getStorageSync("server_current")){
				console.log(1);
				this.current=uni.getStorageSync("server_current");
			}
		},
		methods: {
			ip_dispose(ip){
				let host=ip.substring(ip.indexOf("/")+2,ip.lastIndexOf("/"));
				return host;
			},
			ok(){
				let serverName=this.serverName;
				uni.setStorageSync("server_name",this.server)
				console.log(serverName);
				switch(serverName){
					case 'zs':
						console.log(this.ip_dispose(database.ip));
						uni.setStorageSync("host",this.ip_dispose(database.ip));
						break;
					case 'cs':
						console.log(this.ip_dispose(database.ip1));
						uni.setStorageSync("host",this.ip_dispose(database.ip1));
						break;
				}
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			radioChange(evt) {
				console.log(evt);
				this.serverName=evt.detail.value;
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.server=this.items[i].name;
						this.current = i;
						uni.setStorageSync("server_current",i);
						uni.setStorageSync("server_name",this.items[i].name);
						break;
					}
				}
			}
		}
	}
</script>

<style>
	.ok{
		margin: 60upx auto;
		width: 50%;
	}
</style>
