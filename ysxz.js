/*************************************
项目名称：云上写作
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.yunshangxiezuo\.com\/api\/getAuthenticate url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ysxz.js

[mitm]
hostname = www.yunshangxiezuo.com

*************************************/


var iSharesubcribe = JSON.parse($response.body);

iSharesubcribe.data.user = {
  ...iSharesubcribe.data.user,
  "vip" : 1,
  "vip_forever" : 1,
  "vip_last" : "2099-09-09 09:09:09"
};

$done({body : JSON.stringify(iSharesubcribe)});
