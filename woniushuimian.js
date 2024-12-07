/*************************************

项目名称：蜗牛睡眠
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/woniushuimian.js

[mitm]
hostname = snailsleep.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : 200,
  "message" : "OK",
  "result" : {
    "points" : 0,
    "updated" : 1684116994159,
    "expired" : false,
    "expiresRAD" : 4092599349000,
    "offerPeriod" : false,
    "expires" : 4092599349000,
    "type" : "SNAIL",
    "dreamsTotal" : 10,
    "level" : 1,
    "unique" : "646195d5bc81021ffed65e71",
    "lifelong" : true,
    "radexpired" : false,
    "dreamsUsed" : 0
  }
};

$done({body : JSON.stringify(chxm1023)});
