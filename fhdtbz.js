/******************************
脚本功能：飞火动态壁纸-解锁会员
脚本频道：https://t.me/iSharesubcribe
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/bizhi\.hfnuola\.com\/app\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/fhdtbz.js
[mitm] 
hostname = bizhi.hfnuola.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "is_vip" : 1,
   "vip_end_time" : 32472115200,
   "vip_end_date" : "2999-01-01",
   
}

$done({body: JSON.stringify(obj)});
