/*******************************
脚本功能：朝暮计划-解锁永久会员
注意事项：需登录⚠
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^^https:\/\/app\.zomoplan\.com\/zhaoMuPlan\/user\/info url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/zmjh.js
[mitm] 
hostname = app.zomoplan.com
*******************************/
var obj =  JSON.parse($response.body);
obj.data.vipInfo = [
   {
    "vipStatus" : "1",
    "vipType" : "1"
  }
];
$done({body: JSON.stringify(obj)});



