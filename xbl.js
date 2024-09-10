/*
脚本功能：解锁会员
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


小伴龙
[rewrite_local]
^https:\/\/xbl(?:pay|math|satellite)\.youban\.com user script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/xbl.js
[mitm]

hostname = *.youban.fun
*/

let body = $response.body;
let modifiedBody = body
    .replace(/"vipEndTime":-?\d+/g, '"vipEndTime":4092595200000')  
    .replace(/"vipdesc":"[^"]+"/g, '"vipdesc":"member"')  
    .replace(/"vip":\d+/g, '"vip":1');  
$done({ body: modifiedBody });
