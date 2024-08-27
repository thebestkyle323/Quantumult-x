/******************************
脚本功能：抖抖去水印-登陆后解锁会员
脚本功能：登录解锁VIP
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
*******************************
[rewrite_local]
^^https:\/\/kkyun\.com\/api\/(accounts\/user|apps\/start_task)(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ddqsy.js
[mitm] 
hostname = kkyun.com
*******************************/
let obj =  JSON.parse($response.body);
let data = obj.user ? obj.user : obj;
let vipInfo = {
   "is_vip" : true,
   "status" : 1,
   "vip_name" : "已解锁高级功能"
}
for (let key in data) {
  if (vipInfo.hasOwnProperty(key)) {
     data[key] = vipInfo[key]
  }
}
$done({body: JSON.stringify(obj)});
