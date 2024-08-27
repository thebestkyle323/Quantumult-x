/******************************
脚本功能：抖抖去水印-登陆后解锁会员
使用声明：️仅供学习交流, 🈲️商业用途
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
