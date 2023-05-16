/*************************************

项目名称：小睡眠
下载地址：https://apps.apple.com/app/id1194338569
TG群：https://t.me/ifantasticsgame
脚本功能：解锁会员
特别说明：一次性解锁，先开启规则，在进入软件即可！如果没效果多恢复购买几次！

使用声明：⚠️仅供参考，🈲转载与售卖！


**************************************

[rewrite_local]
^https?:\/\/snailsleep\.net\/snail\/v\d\/profile\/get.+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/xiaoshuimian.js

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
    "links" : [

    ],
    "dreamsUsed" : 0
  },
  "links" : [

  ]
};

$done({body : JSON.stringify(chxm1023)});
