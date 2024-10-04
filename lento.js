/*************************************

项目名称：Lento-壁纸
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/lentoapp\.com:8081\/getUserMemberShipInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/lento.js

[mitm]
hostname = lentoapp.com

*************************************/

var iSharesubcribe = JSON.parse($response.body);
const isQuanX = typeof $task !== "undefined";

iSharesubcribe = {
  "meta" : {
    "message" : "获取作者信息成功",
    "code" : 200
  },
  "data" : {
    "paytype" : 1,
    "expiretime" : "null"
  }
};

$done({status: isQuanX ? "HTTP/1.1 200 OK" : 200, body: JSON.stringify(iSharesubcribe)});
