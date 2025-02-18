/*******************************
脚本功能：脚本解锁订阅集合

频道地址：https://t.me/iSharesubcribe

使用声明：️仅供学习交流, 🈲️商业用途

********************************
[rewrite_local]
^https:\/\/zwpp\.wzbz123\.com\/api\/v1\.1\/user\/getzwvipinfo(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/jzzwds.js
[mitm] 
hostname = zwpp.wzbz123.com

*******************************/

let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "expires" : "2999-01-01 00:00:00",
   "vipLevel" : 1
}

$done({body: JSON.stringify(obj)});
