/*******************************

脚本功能：舒尔特方格——解锁VIP
TG频道群：https://t.me/iSharesubcribe
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/app.rongfeng.work\/member\/shureIndex url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/rongfeng.js

[mitm] 

hostname = app.rongfeng.work

*******************************/

var body = $response.body.replace(/isForever":\d+/g,'isForever":1')
.replace(/isVIP":\d+/g,'isVIP":1')
$done({ body });
