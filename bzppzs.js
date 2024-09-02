/*******************************
脚本功能：八字排盘助手-解锁会员
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
下载软件：https://apps.apple.com/app/id6502890871

********************************
[rewrite_local]
^http:\/\/xz1\.mifengzongdongyuan\.com\/horoscope\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/bzppzs.js
[mitm] 
hostname = xz1.mifengzongdongyuan.com
*******************************/

var obj =  JSON.parse($response.body);

let data = obj.result.userInfo;
data.vip = 1;
data.vipHours = 32472115200;
data.vipExpiryDate = "2999-01-01 00:00:00";

$done({body: JSON.stringify(obj)});
