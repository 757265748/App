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
				serverName:'正式服务器',
				serverValue:'zs',
			}
		},
		onLoad() {
			if(uni.getStorageSync("server_current")){
				console.log(1);
				this.current=uni.getStorageSync("server_current");
				this.serverName=uni.getStorageSync("server_name");
				console.log(this.current);
				console.log(this.serverName);
			}
		},
		methods: {
			ip_dispose(ip){
				console.log(ip);
				let host=ip;
				return host;
			},
			ok(){
				let serverValue=uni.getStorageSync("server_value")?uni.getStorageSync("server_value"):'zs';
				console.log(serverValue);
				switch(serverValue){
					case 'zs':
						uni.setStorageSync("server_name",'正式服务器')
						uni.setStorageSync("host",database.ip_zs);
						break;
					case 'cs':
						uni.setStorageSync("server_name",'测试服务器')
						uni.setStorageSync("host",database.ip_cs);
						break;
				}
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			radioChange(evt) {
				console.log(evt);
				this.serverValue=evt.detail.value;
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.server=this.items[i].name;
						this.current = i;
						uni.setStorageSync("server_current",i);
						uni.setStorageSync("server_value",this.items[i].value);
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
