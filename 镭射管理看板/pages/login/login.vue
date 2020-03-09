<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="head_title">{{host_name}}</view>
		<view class="uni-form-item uni-row">
			<view class="title">用户：</view>
			<view class="with-fun">
				<input class="uni-input" v-model="username" placeholder="请输入工号" />
			</view>
		</view>
		<view class="uni-form-item uni-row">
			<view class="title">密码：</view>
			<view class="with-fun">
				<input class="uni-input" v-model="password" placeholder="请输入密码" />
			</view>
		</view>
		<view class="uni-form-item btn-group" style="display: flex;flex-direction: row; justify-content:flex-end">
			<button class="login" @click="againChoose()" type="" style="">重新选服务器</button>
			<button class="login" @click="login()" type="" style="">登录
				<span>&gt;&gt;</span>
			</button>
		</view>
		<view class="msg">{{msg}}</view>
	</view>
</template>
<script>
	import xflSelect from '@/components/xfl-select/xfl-select.vue';
	import {
		login,
		getList
	} from '@/api/api.js'
	import {
		database
	} from '@/api/config.js'
	import {
		validLogin
	} from '@/api/valid.js'
	export default {
		data() {
			return {
				host: '',
				host_name:'',
				platform: '', //当前设备环境
				currentH: 0,
				username: '',
				password: '',
				msg: '',
				list: [
					// '苹果',
					// {value: '香蕉', disabled: true},
					// '葡萄',
					// '芒果',
					// '大白菜',
				],
				selectIndex: 0
				//requestStr: '[{"USERID":"admin","MACIP":""},{"emplid":"0638721","password":"123456"}]'
			}
		},
		onLoad(e) {
			this.host_name = uni.getStorageSync("server_name");
			this.platform = uni.getSystemInfoSync().platform;
			this.currentH = uni.getSystemInfoSync().windowHeight;
			var webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewButtonStyle(0, {
				text: '版本号:' + plus.runtime.version,
				width: '100px',
				color: '#ccc'
			});
		},
		components: {
			xflSelect
		},
		autoBackButton(e) {
			console.log(e);
		},
		methods: {
			againChoose(){
				uni.navigateTo({
					url:'/pages/index/choose_server'
				})
			},
			getList() {
				getList().then(res => {
					for (var item in res) {
						this.list.push(res[item]);
					}
				})
			},
			selectChange(data) {
				console.log(data);
				this.selectIndex = data.index
			},
			getLogin: function(workId, pwd) {
				uni.setStorageSync("username", workId);
				console.log('https://oa.fpc98.com/SerFile/Service.asmx/h_in');
				return new Promise((resolve, reject) => {
					uni.request({
						//url:'http://10.10.10.8:85/SerFile/Service.asmx',
						url: 'https://oa.fpc98.com/SerFile/Service.asmx/h_in',
						data: {
							emplid: workId,
							addrter: pwd
						},
						success(res) {
							console.log(res.data);
							var data = res.data.split('<?xml version="1.0" encoding="utf-8"?>');
							var data = data[1].split('<boolean xmlns="http://oa.fpc98.com">');
							var data = data[1].split('</boolean>');
							var data = data[0];
							if (data == "true") {
								resolve(data);
							} else {
								var msg = "帐号或密码不正确"
								resolve(msg);
							}
							// var parser = new DOMParser();//不支持app
							// var xmlDoc = parser.parseFromString(res.data, "text/xml");
							// console.log(xmlDoc.getElementsByTagName("boolean"));
							// var bool = xmlDoc.getElementsByTagName("boolean");
							// console.log(bool[0].innerHTML);
							// if (bool[0].innerHTML == "true") {
							// 	uni.navigateTo({
							// 		url: '/pages/main/main'
							// 	})
							// } else {
							// 	console.log("工号或密码错误！");
							// }

						},
						fail(err) {
							console.log(err);
						}
					})
				})
			},
			login() {
				//登录验证
				console.log(database);
				if (this.host == "" || this.host == undefined) {
					if (!uni.getStorageSync("host")) {
						let baseip = database.ip;
						this.host = baseip.substring(baseip.indexOf("/") + 2, baseip.lastIndexOf("/"));
						console.log(this.host);
					}
				}
				let flag = true;
				for (var item in database) {
					console.log(this.host);
					console.log(database[item].indexOf(this.host));
					if (database[item].indexOf(this.host) != -1) {
						console.log("存到本地");
						uni.setStorageSync("host", this.host);
						flag = true;
						break;
					} else {
						console.log("未输入");
						flag = false;
					}
				}
				if (!flag) {
					console.log(flag);
					uni.showToast({
						title: '服务器不存在',
						icon: "none"
					})
				}
				var userData = {
					"username": this.username,
					"password": this.password,
				};
				var valid = validLogin(userData);
				if (!valid.flag) {
					uni.showToast({
						title: valid.msg,
						icon: "none"
					})
					return
				}
				login(userData, this.host + "/").then(res => {
					console.log(res);
					if (res.errMsg == "request:faill") {
						console.log("服务器不存在");
						uni.showToast({
							title: '服务器不存在',
							icon: "none"
						})
						return;
					}
					if (res.flag) {
						uni.setStorageSync("emplid", this.username)
						uni.showToast({
							title: res.errMsg
						})
						uni.navigateTo({
							url: '/pages/index/menu'
						})
					} else {
						if(res.errMsg=='request:fail abort'){
							uni.showToast({
								title: '请求崩溃了~',
								icon: "none"
							})
						}else{
							uni.showToast({
								title: res.errMsg,
								icon: "none"
							})
						}
					}
				})
				// this.getLogin(this.workId, this.pwd).then(res => {
				// 	if (res == "true") {
				// 		uni.navigateTo({
				// 			url: '/pages/main/main'
				// 		})
				// 	} else {
				// 		this.msg = res;
				// 	}
				// })
			}
		},
	}
</script>

<style scoped lang="less">
	.btn-group{
		margin-top: 80upx;
	}
	.head_title{
		text-align: left;
		margin-bottom: 40upx;
		color: #ccc;
	}
	.uni-input {
		text-indent: 10px;
		padding: 0;
		height: 80upx;
	}

	.uni-form-item {
		width: 90%;
		margin: 20upx auto;
	}

	.title {
		font-weight: bold;
		display: flex;
		align-items: center;
		flex: 2;
	}

	.with-fun {
		flex: 8;
	}

	.login {
		font-weight: bold;
	}

	.title {
		padding: 10upx 25upx;
	}

	.uni-icon-clear,
	.uni-icon-eye {
		color: #999;
	}

	.msg {
		text-align: center;
		color: red;
	}
</style>
