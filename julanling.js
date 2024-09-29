/*******************************

脚本功能：安心记加班——解锁VIP
TG频道群：https://t.me/iSharesubcribe
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/market-gateway.julanling.com/member/api2/vip/getFunctionVipStatus url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/julanling.js


[mitm]&nbsp;

hostname = market-gateway.julanling.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "errorCode" : 0,
  "results" : {
    "functionVipStatusMap" : {
      "VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      },
      "ADVERT_VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      }
    }
  },
  "errorStr" : null,
  "token" : null
}

$done({body : JSON.stringify(objc)});
