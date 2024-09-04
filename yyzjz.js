/*******************************
脚本功能：易颜证件照-解锁年度会员
注意事项：需登录
TG频道群：https://t.me/iFantasticsgame
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fufei\.cfcpe\.com\.cn\/api\/client\/info(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/yyzjz.js
[mitm] 
hostname = fufei.cfcpe.com
*******************************/

let obj =  JSON.parse($response.body);

obj.data.vip = {
  "forever" : 1,
  "vip" : 1,
  "expired_at" : "2999-01-01 00:00:00"
}

$done({body: JSON.stringify(obj)});
