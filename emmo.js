/*
脚本功能：Emmo日记
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

http://106.54.2.168/emmoDiary/user/getUser url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/emmo.js

*/

let body = $response.body;
body = body.replace(/"isLifeVip"\s*:\s*[^,}]+/g, '"isLifeVip":"1"');
body = body.replace(/"vipEndTime"\s*:\s*[^,}]+/g, '"vipEndTime":"2099-09-09"');
body = body.replace(/"isVip"\s*:\s*[^,}]+/g, '"isVip":"1"');
$done({ body });
