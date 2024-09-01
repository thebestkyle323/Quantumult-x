/*******************************
脚本功能：迷你小组件-解锁永久会员
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
********************************
[rewrite_local]
^https:\/\/fufei\.haitubangong\.com\/api\/client\/info(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/mnxzj.js
[mitm] 
hostname = fufei.haitubangong.com
*******************************/

let obj =  JSON.parse($response.body);

let vipInfo = {
   "forever" : 1,
   "vipname" : "永久会员",
   "expired_at" : "2999-01-01 00:00:00"
}
obj.data.vip = vipInfo;

$done({body: JSON.stringify(obj)});
