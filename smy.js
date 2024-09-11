/*******************************
脚本功能：扫描仪-解锁会员
TG频道群：https://t.me/iFantasticsgame
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/appss\.rhinoxky\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/smy.js
[mitm] 
hostname = appss.rhinoxky.com
*******************************/

let obj =  JSON.parse($response.body);

obj.result.vipExpireTime = "2999-01-01";
obj.result.vipGroupInfos = [
   {
    "groupType" : "TYPE_ONE",
    "vipType" : "VIP"
  }
];

$done({body: JSON.stringify(obj)});
