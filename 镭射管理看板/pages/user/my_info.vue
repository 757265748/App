<template>
	<view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in lists" :key="key" @click="goDetailPage(item)">
			<view class="uni-list-cell-navigate" :class="item.switch!=undefined?'':'uni-navigate-right'"> {{item.name ? item.name : item}}
				<view v-html="item.center"></view>
				<view style="position: relative;left:0" :style="{left: item.switch!=undefined?'0':'-1rem'}" v-html="item.content"></view>
				<image style="width: 2rem;height: 2rem;border-radius: 1rem;position: relative;left:-1rem" v-show="item.img" :src="headImg"
				 mode=""></image>
			</view>
		</view>
		<view class="exitLogin uni-flex">
			<view class="uni-btn" @tap="exitLogin">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// userName: 'stone',
				// 修改邀请码: 'aaaa',
				// ganden: 'sex',
				// chatNum: '',
				// chatRemove: '',
				// phoneNum: '13008847296',
				// tbAccredit: '',
				// messagePush: ''
				user: null,
				headImg: '../../static/logo.png',
				lists: {
					userName: {
						name: '用户名',
						content: uni.getStorageSync("emplid")
					},
				}
			}
		},
		onShow(e) {
			// this.existUser();
			this.getUser();
		},
		onLoad(options) {
			this.user=uni.getStorageSync("user");
		},
		methods: {
			goDetailPage(item) {
				switch (item.name) {
					case '头像':
						this.chooseImg(this.lists.phoneNum.content);
						break;
				}
			},
			exitLogin() {
				uni.removeStorageSync('emplid');
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			chooseImg(phone) {
				console.log(phone);
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						console.log('chooseImage success, temp path is', res.tempFilePaths[0])
						var imageSrc = res.tempFilePaths[0]
						var self = this;
						uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: imageSrc,
							fileType: 'image',
							name: 'data',
							success: (res) => {
								console.log('uploadImage success, res is:', res)
								uni.showToast({
									title: '上传成功',
									icon: 'success',
									duration: 1000
								})
								self.headImg = imageSrc;
								uploadHeadImg(phone, imageSrc).then(res => {
									console.log(res);
								});
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			}

		}
	}
</script>

<style>
	.exitLogin{
		margin: 40upx;
		justify-content: center;
	}
	.exitLogin view{
		width: 50%;
	}
</style>
