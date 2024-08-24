/*******************************

脚本功能：画耽漫画——解锁VIP
软件版本：1.1.2

使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.shutiaomh.com\/api\/\/getSysUserInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/shutiaomh.js

[mitm] 

hostname = www.shutiaomh.com

*******************************/

var body = $response.body.replace(/vipDays":\d/g,'vipDays":1')
.replace(/nickname":".*?"/g,'nickname":"iOS社区"')
.replace(/inviteCode":".*?"/g,'inviteCode":"89996462"')
.replace(/expireDays":\w+/g,'expireDays":9999')
$done({ body });
