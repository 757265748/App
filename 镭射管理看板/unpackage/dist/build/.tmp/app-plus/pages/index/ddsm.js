(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/ddsm"],{"1c27":function(t,e,s){"use strict";(function(t){s("393a"),s("921b");n(s("66fd"));var e=n(s("ea83"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},"20e4":function(t,e,s){},"2ea3":function(t,e,s){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s("12fe"),i=function(){return s.e("components/uni-segmented-control/uni-segmented-control").then(s.bind(null,"0d15"))},c={components:{uniSegmentedControl:i},data:function(){return{result:"",result1:"",result2:"",result3:"",result4:"",result5:"",result6:"",result7:"",pt_no:"",pt_name:"",sc_odno:"",el_no:"",el_name:"",sc_qty:"",sc_odno1:"",el_no1:"",el_name1:"",sc_qty1:"",sc_odno2:"",el_no2:"",el_name2:"",sc_qty2:"",wm_name:"",vc_no:"",items:["站点备流程单","流程单入库位","流程单入料车"],styles:[{value:"button",text:"按钮",checked:!0},{value:"text",text:"文字"}],colors:["#007aff","#4cd964","#dd524d"],current:0,colorIndex:0,activeColor:"#333",styleType:"button"}},onLoad:function(){},methods:{scan:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.url="http://39.108.215.49:8009/html/2.html?res="+s.result,e.result=s.result;var n={USERID:t.getStorageSync("username"),sc_stno:e.result};(0,o.getPB01D1ByScstno)(n).then(function(s){s.IsSuccess?(e.pt_name=s.DicResult["pt_name"],e.pt_no=s.DicResult["pt_no"]):(e.result="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan1:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result1=s.result;var n={USERID:t.getStorageSync("username"),vc_no:e.result1};(0,o.getSpnoPB20H)(n).then(function(s){s.IsSuccess?e.vc_no=s.DicResult["vc_no"]:(e.result1="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan2:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result2=s.result;var n={USERID:t.getStorageSync("username"),sc_rcno:e.result2};(0,o.getPR02WIQTYByPtno1)(n).then(function(s){s.IsSuccess?(e.sc_odno=s.DicResult["sc_odno"],e.el_no=s.DicResult["el_no"],e.el_name=s.DicResult["r_size"]+s.DicResult["el_size"],e.sc_qty=s.DicResult["sc_qty"]):(e.result2="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan3:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result3=s.result;var n={USERID:t.getStorageSync("username"),mt_area:e.result3};(0,o.getPB08HByMtarea1)(n).then(function(s){s.IsSuccess?e.wm_name=s.DicResult["wm_name"]:(e.result3="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan4:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result4=s.result;var n={USERID:t.getStorageSync("username"),vc_no:e.result4};(0,o.getSpnoPB20H)(n).then(function(s){s.IsSuccess?e.vc_no=s.DicResult["vc_no"]:(e.result4="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan5:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result5=s.result;var n={USERID:t.getStorageSync("username"),sc_rcno:e.result5};(0,o.getPR02WIQTYByPtno1)(n).then(function(s){s.IsSuccess?(e.sc_odno1=s.DicResult["sc_odno"],e.el_no1=s.DicResult["el_no"],e.el_name1=s.DicResult["r_size"]+s.DicResult["el_size"],e.sc_qty1=s.DicResult["sc_qty"]):(e.result5="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan6:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result6=s.result;var n={USERID:t.getStorageSync("username"),vc_no:e.result6};(0,o.getSpnoPB20H)(n).then(function(s){s.IsSuccess?e.vc_no=s.DicResult["vc_no"]:(e.result6="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},scan7:function(){var e=this;t.scanCode({success:function(s){e.view=!0,e.result7=s.result;var n={USERID:t.getStorageSync("username"),sc_rcno:e.result7};(0,o.getPR02WIQTYByPtno1)(n).then(function(s){s.IsSuccess?(e.sc_odno2=s.DicResult["sc_odno"],e.el_no2=s.DicResult["el_no"],e.el_name2=s.DicResult["r_size"]+s.DicResult["el_size"],e.sc_qty2=s.DicResult["sc_qty"]):(e.result7="",t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3}))})}})},Submission1:function(){var e=this;if(""==this.result)t.showToast({icon:"none",title:"作业站点不能为空",duration:3e3});else if(""==this.result1&&""==this.result2)t.showToast({icon:"none",title:"料车和流程单不能同时为空",duration:3e3});else{var s={USERID:t.getStorageSync("username"),sc_rcno:this.result2,pt_no:this.pt_no,vc_no:this.result1,sc_stno:this.result,sc_status:"0"};(0,o.crossingStationByScrcno)(s).then(function(s){s.IsSuccess?(e.result1="",e.result2="",e.sc_odno="",e.el_no="",e.el_name="",e.sc_qty="",t.showToast({icon:"none",title:s.Messager,duration:3e3})):t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3})})}},Submission2:function(){var e=this;if(""==this.result3)t.showToast({icon:"none",title:"库位代号不能为空",duration:3e3});else if(""==this.result5&&""==this.result4)t.showToast({icon:"none",title:"料车和流程单不能同时为空",duration:3e3});else{var s={USERID:t.getStorageSync("username"),mt_area:this.result3,sc_rcno:this.result5,vc_no:this.result4};(0,o.getScrcnoMtareaIn1)(s).then(function(s){n("log",s," at pages\\index\\ddsm.vue:545"),s.IsSuccess?(e.result4="",e.result5="",e.sc_odno1="",e.el_no1="",e.el_name1="",e.sc_qty1="",t.showToast({icon:"none",title:s.Messager,duration:3e3})):t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3})})}},Submission3:function(){var e=this;if(""==this.result6)t.showToast({icon:"none",title:"流程单不能为空",duration:3e3});else if(""==this.result7)t.showToast({icon:"none",title:"料车不能为空",duration:3e3});else{var s={USERID:t.getStorageSync("username"),vc_no:this.result6,sc_rcno:this.result7};(0,o.scrcnoVcnoIn)(s).then(function(s){s.IsSuccess?(e.result7="",e.sc_odno2="",e.el_no2="",e.el_name2="",e.sc_qty2="",t.showToast({icon:"none",title:s.Messager,duration:3e3})):t.showToast({icon:"none",title:s.ErrorMsg,duration:3e3})})}},Eliminate1:function(){this.result="",this.pt_name="",this.result1="",this.result2="",this.sc_odno="",this.el_no="",this.el_name="",this.sc_qty=""},Eliminate2:function(){this.result3="",this.wm_name="",this.result4="",this.result5="",this.sc_odno1="",this.el_no1="",this.el_name1="",this.sc_qty1=""},Eliminate3:function(){this.result6="",this.result7="",this.sc_odno2="",this.el_no2="",this.el_name2="",this.sc_qty2=""},onClickItem:function(t){this.current!==t&&(this.current=t,0==t?(this.result3="",this.wm_name="",this.result4="",this.result5="",this.sc_odno1="",this.el_no1="",this.el_name1="",this.sc_qty1="",this.result6="",this.result7="",this.sc_odno2="",this.el_no2="",this.el_name2="",this.sc_qty2=""):1==t?(this.result="",this.pt_name="",this.result1="",this.result2="",this.sc_odno="",this.el_no="",this.el_name="",this.sc_qty="",this.result6="",this.result7="",this.sc_odno2="",this.el_no2="",this.el_name2="",this.sc_qty2=""):2==t&&(this.result="",this.pt_name="",this.result1="",this.result2="",this.sc_odno="",this.el_no="",this.el_name="",this.sc_qty="",this.result3="",this.wm_name="",this.result4="",this.result5="",this.sc_odno1="",this.el_no1="",this.el_name1="",this.sc_qty1=""))},styleChange:function(t){this.styleType!==t.target.value&&(this.styleType=t.target.value)},colorChange:function(t){this.styleType!==t.target.value&&(this.activeColor=t.target.value)}}};e.default=c}).call(this,s("6e42")["default"],s("0de9")["default"])},"6dbf":function(t,e,s){"use strict";var n={"uni-segmented-control":()=>s.e("components/uni-segmented-control/uni-segmented-control").then(s.bind(null,"0d15"))},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"b",function(){return o}),s.d(e,"c",function(){return i}),s.d(e,"a",function(){return n})},"7bd3":function(t,e,s){"use strict";var n=s("20e4"),o=s.n(n);o.a},ea83:function(t,e,s){"use strict";s.r(e);var n=s("6dbf"),o=s("fca8");for(var i in o)"default"!==i&&function(t){s.d(e,t,function(){return o[t]})}(i);s("7bd3");var c,u=s("f0c5"),r=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=r.exports},fca8:function(t,e,s){"use strict";s.r(e);var n=s("2ea3"),o=s.n(n);for(var i in n)"default"!==i&&function(t){s.d(e,t,function(){return n[t]})}(i);e["default"]=o.a}},[["1c27","common/runtime","common/vendor"]]]);