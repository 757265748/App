<script>
	String.prototype.bool = function() { 
	    return (/^true$/i).test(this); 
	}; 
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(typeof "true".bool()); 
			this.versionCheck().then(res=>{
				console.log(res.version);
				if (res.errorMessage) {
					return;
				}else{
					console.log(res.errorMessage);
					this.versionContent=res.content;
					this.version=res.version;
					this.updateMsg();
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data(){
			return {
				version:"",
				versionContent:""
			}
		},
		methods: {
			versionCheck() {
				console.log(plus.runtime.version);
				return new Promise((resolve,reject)=>{
					uni.request({
						url: 'http://192.168.130.123:8080/equalsVersion.do',
						method: "get",
						data: {
							version: plus.runtime.version
						},
						success(res) {
							try {
								console.log(res);
								resolve(res.data);
							} catch (e) {
								console.log(e);
							}
						},
						fail(err) {
							console.log(err);
						}
					})
				})
			},
			updateMsg() {
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
				console.log(222);
				let that=this;
				dcRichAlert.show({
					position: 'center',
					title: "更新日志",
					titleColor: '#FF0000',
					content: that.versionContent,
					contentAlign: 'left',
					buttons: [{
						title: '确认',
						titleColor: '#3F51B5'
					},{
						title: '取消',
						titleColor: '#333'
					}]
				}, result => {
					console.log(result);
					switch (result.type) {
						case 'button':
							if(result.index==0){
								uni.setStorageSync("version", this.version);
								console.log("callback---button--" + result.index);
								console.log(that.version);
								plus.runtime.openURL('http://192.168.130.123:81/APP/1.0.2.apk');
								// uni.downloadFile({
								// 	url: "http://192.168.130.123/APP/1.0.2.apk",
								// 	success: (res) => {
								// 		console.log('downloadFile success, res is', res)
								// 		self.imageSrc = res.tempFilePath;
								// 		uni.hideLoading();
								// 	},
								// 	fail: (err) => {
								// 		console.log('downloadFile fail, err is:', err)
								// 	}
								// })
							}
							console.log(JSON.stringify(result));
							break;
					}
				});
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';

	uni-view {
		font-size: .5rem;
	}

	.main {
		background-color: #fff;
		color: #333;
	}
	.flex_1{
		flex: 1;
	}
	.flex_2{
		flex: 2;
	}
	.flex_3{
		flex: 3;
	}
	.flex_4{
		flex: 4;
	}
	.uni-input {
		text-indent: 10px;
		padding: 0;
		/* font-size: 16px; */
		line-height: 20px;
		border: 1px solid #ccc;
		border-radius: 10upx;
	}
	.uni-btn{
		background-color: #333;
		color: #fff;
		font-size: .8rem;
		line-height: 80upx;
		height: 80upx;
		padding: 4upx 10upx;
		border-radius: 10upx;
		text-align: center;
	}
	button {
		background-color: #333;
		color: #fff;
		font-size: .8rem;
		line-height: 80upx;
		height: 80upx;
	}
</style>
