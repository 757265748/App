/**
 * 针对阿里百川插件封装
 * import tbApi from '@/common/app-plus/simple-tbapi.js'
 */
const tkApiplatform = uni.getSystemInfoSync().platform
var baichuan;
var appke = "27788224"; // 登录百川获取27798607 26019807

if (tkApiplatform == "android") {
    baichuan = uni.requireNativePlugin('taobaologin'); // 安卓百川插件
}
if (tkApiplatform == "ios") {
    baichuan = uni.requireNativePlugin('baichuanplugin'); // IOS百川插件
    // IOS的需要初始化
    baichuan.BCSDKInitWithAppkey(appke, result => {
        console.log(JSON.stringify(result));
    });
}


const taobaoApi = {
    login: function(callback) {
        // 淘宝登录
        if (tkApiplatform == "android") {
            baichuan.login(result => {
                if (result.type == "success") {
                    if (result.type == "success") {
                        callback({
                            code: 0,
                            data: result
                        });
                    } else {
                        callback({
                            code: 1,
                            data: result
                        });
                    }

                } else {
                    // 1 就是未登录 0是已登录 
                    callback({
                        code: 1,
                        message: result
                    });
                }
            });
        } else {
            baichuan.BCAuth(result => {
                if (result && result.code == 0) {
                    callback({
                        code: 0,
                        message: "登录成功",
                        data: result.userInfo
                    });
                } else {
                    callback({
                        code: 1,
                        message: result.message ? result.message : "登录失败"
                    });
                }

            });
        }
    },
    logout: function(callback) {
        // 退出登录
        if (tkApiplatform == "android") {
            baichuan.logout(result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }

            });
        } else {
            baichuan.BCUserLogout(result => {
                callback(result);
            });
        }
    },
    isLogin: function(callback) {
        // 是否登录淘宝
        if (tkApiplatform == "android") {
            baichuan.checkSession(result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {
            baichuan.BCIsUserLogin(result => {
                callback(result);
            })
        }
    },
    session: function(callback) {
        // 获取登录的session 
        if (tkApiplatform == "android") {
            baichuan.getSession(result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {
            baichuan.BCAuth(result => {
                if (result && result.code == 1) {
                    callback({
                        code: 0,
                        message: "登录成功",
                        data: result.userInfo
                    });
                } else {
                    callback({
                        code: 1,
                        message: result.message ? result.message : "登录失败"
                    });
                }
            })
        }
    },
    cart: function(callback) {
        // 打开购物车
        if (tkApiplatform == "android") {
            baichuan.OpenMyCart(result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {
            baichuan.BCJumpMyCart(result => {
                callback(result);
            });
        }
    },
    order: function(callback) {
        // 打开我购买的订单
        if (tkApiplatform == "android") {
            baichuan.OpenMyOrders(result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {
            baichuan.BCJumpMyOrder(result => {
                callback(result);
            });
        }
    },
    detail: function(url, callback) {
        // 打开 商品详情 / 优惠券
        if (tkApiplatform == "android") {
            baichuan.url({
                url: url
            }, result => {
                callback(result);
            })
        } else {
            baichuan.BCGetCoupons(url, result => {
                callback(result);
            });
        }
    },
    openUrl: function(url, callback) {
        // 使用百川内置浏览器打开H5 
        if (tkApiplatform == "android") {
            baichuan.url({
                url: url,
                OpenType: "H5",
            }, result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {
            baichuan.BCGetCoupons(url, result => {
                callback(result);
            });
        }
    },
    shop: function(shopId, callback) {
        // 打开店铺
        if (tkApiplatform == "android") {
            baichuan.shopPage({
                shopId: shopId
            }, result => {
                if (result.type == "success") {
                    callback({
                        code: 0,
                        data: result
                    });
                } else {
                    callback({
                        code: 1,
                        data: result
                    });
                }
            })
        } else {

        }
    }
}

export default taobaoApi
