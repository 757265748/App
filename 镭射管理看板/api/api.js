import {
	database
} from '@/api/config.js'
const host = uni.getStorageSync("host");
export function login(data, host) {
	//var data='[{"USERID":"","MACIP":"192.168.150.8"},{"emplid":'+data.username+',"password":'+data.password+'}]';
	var host = uni.getStorageSync("host");
	return new Promise((resolve, reject) => {
		uni.request({ //http://58.23.137.151:8081/loginByEmplid.do?USERID=admin&MACIP=&password=123456
			url: `${host}loginByEmplid.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				emplid: data.username,
				password: data.password,
			},
			success(res) {
				console.log(res);
				var msg;
				var flag = res.data.IsSuccess;
				if (res.IsSuccess) {
					msg = res.data.Messager;
				} else {
					msg = res.data.ErrorMsg
				}
				console.log(flag, msg);
				resolve({
					"flag": flag,
					"errMsg": msg
				});
			},
			fail(xhr) {
				console.log(xhr);
				resolve(xhr);
			}
		})
	})
}

//根据看板设备编号获取要显示的看板
export function getPB35D1ByBoano(data, host) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}/getPB35D1ByBoano.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: '',
				MACIP: '',
				boa_no: '001'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
//调度看板
export function DW04WebService(data, host) {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: `${host}/getPB35D1ByBoano.do`,
			// url: `http://192.168.130.123:81/DW04WebService.asmx/getIndexResult`,
			url: `http://192.168.130.198:81/DW04WebService.asmx/getIndexResult`,
			// url: `http://58.23.137.152:8081/getIndexResult.do?USERID=&MACIP=&sc_prns=51`,
			method: "GET",
			header: {
				// 'content-type': 'application/json'
				'content-type': 'text/xml; charset=utf-8'
			},
			data: {
				dataJson: JSON.stringify([{
					"USERID": "admin",
					"MACIP": ""
				}, {
					"sc_prns": 51
				}])
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
//(2)根据看板代号kb_no带出要显示的 (表字段名称)PB34WebService:GetPB34HByKbno(kb_no看板代号)返回pb34h表
export function getPB34D1ByKbno(data) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getPB34D1ByKbno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: '',
				MACIP: '',
				kb_no: 'PB'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
//根据看板代号kb_no带出要显示的 (表字段名称)PB34 WebService:GetPB34D1ByKbno(kb_no看板代号)返回pb34d1表
export function getPB34HByKbno(data) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getPB34HByKbno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: '',
				MACIP: '',
				kb_no: 'PB'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
//看板表身数据
export function getGetDW01(data) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getGetDW01.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: '',
				MACIP: '',
				kb_no: 'MC'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
//看板首页数据
//192.168.150.89:8080/getDataHForPB34.do?USERID=admin&MACIP=&orderBy=&start=1&pageLength=0&ScRcno=&ElNo=&ScStatus=
export function getDataHForPB34(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getDataHForPB34.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: 'admin',
				MACIP: '',
				orderBy: '',
				start: 1,
				pageLength: 0,
				ScRcno: '',
				ElNo: '',
				ScStatus: ''
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function GetPB34D1ByKbno(data) {
	let d = [{
		"USERID": "admin",
		"MACIP": ""
	}, {
		"USERID": "063871"
	}];
	console.log(host);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}GetPB34D1ByKbno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: '',
				MACIP: '',
				kb_no: 'PB'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
/* 出库头部 */
export function getGridTitleCK(data) {
	console.log(`http://${host}getGridTitle.do`);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.150.89:8080/getGridTitle.do?USERID=admin&MACIP=&Userid=admin&MenuCode=PR02&GridCode=honpr02hList
			url: `${host}getGridTitle.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				Userid: "admin",
				MenuCode: "MC02A",
				GridCode: "honmc02hList"
			},
			success(res) {
				console.log(res);
				var msg;
				var flag = res.data.IsSuccess;
				var data = res.data.Data;
				if (res.IsSuccess) {
					msg = res.data.Messager;
				} else {
					msg = res.data.ErrorMsg
				}
				resolve({
					"flag": flag,
					"msg": msg,
					"data": data
				});
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
/* 备料明细头部 */
export function getGridTitleBlmx(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.150.89:8080/getGridTitle.do?USERID=admin&MACIP=&Userid=admin&MenuCode=PR02&GridCode=honpr02hList
			url: `${host}getGridTitle.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				Userid: "admin",
				MenuCode: "MC02AEdit",
				GridCode: "honmc02d1AList"
			},
			success(res) {
				console.log(res);
				var msg;
				var flag = res.data.IsSuccess;
				var data = res.data.Data;
				if (res.IsSuccess) {
					msg = res.data.Messager;
				} else {
					msg = res.data.ErrorMsg
				}
				resolve({
					"flag": flag,
					"msg": msg,
					"data": data
				});
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getGridTitle(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.150.89:8080/getGridTitle.do?USERID=admin&MACIP=&Userid=admin&MenuCode=PR02&GridCode=honpr02hList
			url: `${host}getGridTitle.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				Userid: "admin",
				MenuCode: "PR02",
				GridCode: "honpr02hList"
			},
			success(res) {
				console.log(res);
				var msg;
				var flag = res.data.IsSuccess;
				var data = res.data.Data;
				if (res.IsSuccess) {
					msg = res.data.Messager;
				} else {
					msg = res.data.ErrorMsg
				}
				resolve({
					"flag": flag,
					"msg": msg,
					"data": data
				});
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getDataPR20(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getDataH.do?USERID=admin&MACIP=&ScRcno=191102M010001086&ElNo=&ScStatus=&orderBy=&start=1&pageLength=50
			//http://192.168.150.89:8080/getDataH.do?USERID=admin&MACIP=&ScRcno=191102M010001086&ElNo=&ScStatus=&orderBy=&start=1&pageLength=50
			url: `${host}getDataH.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				ScRcno: "",
				ElNo: "",
				ScStatus: "",
				orderBy: "",
				start: data.pageIndex,
				pageLength: data.pageSum,
				// sc_odno:data.sc_odno||"",
				// el_no:data.el_no||x"",
				// sc_status:data.sc_status||"",
				// inventsizeid:data.inventsizeid||""
			},
			success(res) {
				console.log(res);
				var msg;
				var flag = res.data.IsSuccess;
				var data = res.data.Data;
				var pageSum = res.data.DicResult.totalcount;
				console.log(pageSum);
				if (res.IsSuccess) {
					msg = res.data.Messager;
				} else {
					msg = res.data.ErrorMsg
				}
				console.log(flag, msg);
				resolve({
					"flag": flag,
					"msg": msg,
					"data": data,
					"pageSum": pageSum
				});
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getList(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //58.23.137.151:8081/getDataPR20.do?USERID=admin&MACIP=&sc_odno=PRO1800005583&el_no=3011000010&sc_status=3&inventsizeid=HC
			url: `${host}getDataPR20.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				// sc_odno:data.sc_odno||"",
				// el_no:data.el_no||"",
				// sc_status:data.sc_status||"",
				// inventsizeid:data.inventsizeid||""
			},
			success(res) {
				var list = ["1", "2", "3"]
				resolve(list);
			},
			fail(xhr) {
				//console.log(xhr);
			}
		})
	})
}
/* 出库计划 */
export function ckjh(data) {
	let d = [{
		"USERID": "admin",
		"MACIP": ""
	}, {
		"USERID": "063871"
	}];
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getMC02HByUserid.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				emplid: '063871'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
/* 提交 */
export function InsertMC02D1(data) {
	let d = [{
		"USERID": "admin",
		"MACIP": ""
	}, {
		"USERID": "063871"
	}];
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}InsertMC02D1.do`,
			method: "get",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"mc_list": "MC3512012120161",
				"Qty": "1",
				"mt_area": "WS-51",
				"el_no": "1010100302",
				"lot_no": "1010100302191116-201115",
				"pk_list": "",
				"el_sno": "",
				"mt_qty": "27",
				"emplid": "063871",
				"el_barno": "1010100302|31RLT7TZ|9112617Z|25|2019-11-16|S0939|ChinaZhangzhou"
				// "mc_list": data.mc_list,
				// "Qty": data.Qty,
				// "mt_area": data.mt_area,
				// "el_no": data.el_no,
				// "lot_no": data.lot_no,
				// "pk_list": "",
				// "el_sno": data.el_sno,
				// "mt_qty": data.mt_qty,
				// "emplid": "063871",
				// "el_barno": data.el_barno
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getMC02D1ByMclist(data) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getMC02D1ByMclist.do`,
			method: "get",
			header: {
				'content-type': 'application/json'
			},
			data: {
				mc_list: 'MC3512012120161'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getBarnoInfo(data) {
	console.log(uni.getStorageSync("host"));
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getBarnoInfo.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"USERID": "",
				"MACIP": "",
				// "el_barno":data.el_barno
				"el_barno": '1010100302|31RLT7TZ|9112617Z|25|2019-11-16|S0939|ChinaZhangzhou'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
/* 扫流程单 */
export function GetPR02WIQTYByPtno(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}GetPR02WIQTYByPtno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"USERID": "",
				"MACIP": "",
				"sc_rcno": 'L1900044672005'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getScrcnoMtareaIn(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getScrcnoMtareaIn.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"USERID": "admin",
				"MACIP": "",
				"sc_rcno": data.sc_rcno,
				"mt_area": data.mt_area
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
/* 扫库位 */
export function getPB08HByMtarea(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getPB08HByMtarea.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"USERID": "",
				"MACIP": "",
				'mt_area': 'W1-D01210'
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getMC02D1ByBarcode(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getMC02D1ByBarcode.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"mt_area": data.mt_area, //库位
				"el_barno": '1010100302|31RLT7TZ|9112617Z|25|2019-11-16|S0939|ChinaZhangzhou' //条码
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getMC02_231(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${host}getMC02_231.do`,
			method: "GET",
			dataType: 'json',
			header: {
				'content-type': 'application/json'
			},
			data: {
				"USERID": "",
				"MACIP": "",
				"mc_list": "MC3512012160165",
				"el_no": "1010100302",
				"mt_qty": "1",
				"mt_area": "NA-WMS02",
				"mt_rarea": "TMP_AREA2",
				"lot_no": "1010100302191116-201115",
				"emplid": "063871",
				"ruid": "107"
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
		// "MACIP":"",
		// "USERID":"",
		// "mc_list": "MC3512012160165",
		// "el_no": "1010100302",
		// "mt_qty": "10",
		// "mt_area": "NA-WMS02",
		// "mt_rarea": "TMP_AREA2",
		// "lot_no": "1010100302191116-201115",
		// "emplid": "063871",
		// "ruid": "105"
		// uni.request({
		// 	url: `${database.testIp}getMC02_231.do`,
		// 	data: data,
		// 	method: 'GET',
		// 	dataType: 'json',
		// 	header: {
		// 		'Accept-Language': 'zh-CN,en-US;q=0.8'
		// 	},
		// 	success: (data, statusCode) => {
		// 		console.log('请求成功:' + JSON.stringify(data.data));
		// 	},
		// 	fail: () => {
		// 		console.log('请求失败fail');
		// 		const errordata = {
		// 			"status": false,
		// 			"code": 404,
		// 			"data": null,
		// 			"message": "网络繁忙"
		// 		}
		// 	},
		// 	complete: () => {
		// 	}
		// });
	})
}
let globalPostRequest = function(url, data, callback, isWait = true, isPost = true) {
	if (isWait) {
		uni.showLoading({
			title: '正在加载'
		});
	}
	console.log('正在请求:xxxxxxxxx' + url);
	console.log('参数:' + JSON.stringify(data));
	let requestName = 'requestTask' + JSON.stringify(url);
	let timeout = null;
	requestName = uni.request({
		url: 'xxxxxxxxx' + url,
		data: data,
		method: isPost == true ? 'POST' : 'GET',
		dataType: 'json',
		header: {
			'Accept-Language': 'zh-CN,en-US;q=0.8'
		},
		success: (data, statusCode) => {
			console.log('请求成功:' + JSON.stringify(data.data));
			callback(data.data);
		},
		fail: () => {
			console.log('请求失败fail');
			const errordata = {
				"status": false,
				"code": 404,
				"data": null,
				"message": "网络繁忙"
			}
			callback(errordata);
		},
		complete: () => {
			uni.hideLoading();
			requestName = null;
			if (timeout != null) {
				clearTimeout(timeout);
				timeout = null;
			}
		}
	});
	//timeout  
	timeout = setTimeout(() => {
		if (requestName != null) {
			requestName.abort();
			console.log('请求失败abort');
		}
	}, 20000)
}
export function getDataByElcode(data) {
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.130.198:81/MC02WebService.asmx
			url: `${host}getDataByElcode.do`,
			method: "POST",
			header: {
				'content-type': 'application/json'
			},
			data: {
				"el_barno": "1010100302|31RLT7TZ|9112617Z|25|2019-11-16|S0939|ChinaZhangzhou"
			},
			success(res) {
				resolve(res);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
export function getDataHMS(data) {
	console.log(data);
	var host = uni.getStorageSync("host");
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getDataHMS.do?USERID=admin&MACIP=&orderBy=&start=1&pageLength=50&Enmkey=enmsc_status
			url: `${host}getDataHMS.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: "admin",
				MACIP: "",
				orderBy: "",
				start: "1",
				pageLength: "50",
				Enmkey: "enmsc_status"
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//根据作业站点获取工序和工序名称
export function getPB01D1ByScstno(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //http://192.168.150.89:8080/getPB01D1ByScstno.do?USERID=admin&MACIP=192.168.150.94&sc_stno=47FT010001BSLJDP01
			url: `${host}getPB01D1ByScstno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.94",
				sc_stno: data.sc_stno,
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//判断料车是否存在
export function getSpnoPB20H(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getSpnoPB20H.do?USERID=admin&MACIP=192.168.150.104&vc_no=FQC000000006
			url: `${host}getSpnoPB20H.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.104",
				vc_no: data.vc_no,
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//根据流程单获取生产工单、物料编号、品名规格、数量
export function getPR02WIQTYByPtno1(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getPR02WIQTYByPtno.do?USERID=027684&MACIP=192.168.150.10&sc_rcno=L1900047268002
			url: `${host}getPR02WIQTYByPtno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.10",
				sc_rcno: data.sc_rcno,
			},
			success(res) {
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//根据库位带出库位名
export function getPB08HByMtarea1(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getPB08HByMtarea.do?USERID=027684&MACIP=192.168.150.10&mt_area=W1-D01210
			url: `${host}getPB08HByMtarea.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.10",
				mt_area: data.mt_area,
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//站点备流程单提交按钮
export function crossingStationByScrcno(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080//crossingStationByScrcno.do?USERID=027684&MACIP=192.168.150.10&sc_rcno=L1900047268002&pt_no=02CU&vc_no=FQC000000015&sc_stno=1002010018CZCNC&sc_status=0
			url: `${host}crossingStationByScrcno.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.10",
				sc_rcno: data.sc_rcno,
				pt_no: data.pt_no,
				vc_no: data.vc_no,
				sc_stno: data.sc_stno,
				sc_status: data.sc_status,
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//流程单入库位提交按钮
export function getScrcnoMtareaIn1(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/getScrcnoMtareaIn.do?USERID=027684&MACIP=192.168.150.10&mt_area=MT01&sc_rcno=L2000002322002&vc_no=FQC000000015
			url: `${host}getScrcnoMtareaIn.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.10",
				mt_area: data.mt_area,
				sc_rcno: data.sc_rcno,
				vc_no: data.vc_no,
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}

//流程单入料车提交按钮
export function scrcnoVcnoIn(data) {
	console.log(data);
	return new Promise((resolve, reject) => {
		uni.request({ //192.168.150.89:8080/scrcnoVcnoIn.do?USERID=027684&MACIP=192.168.150.10&vc_no=FQC000000015&sc_rcno=L2000005677007
			url: `${host}scrcnoVcnoIn.do`,
			method: "GET",
			header: {
				'content-type': 'application/json'
			},
			data: {
				USERID: data.USERID,
				MACIP: "192.168.150.10",
				vc_no: data.vc_no,
				sc_rcno: data.sc_rcno
			},
			success(res) {
				console.log(res);
				resolve(res.data);
			},
			fail(xhr) {
				console.log(xhr);
			}
		})
	})
}
