/*******************************

脚本功能：地震预警——解锁VIP
TG频道群：https://t.me/iSharesubcribe
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/mobile-new.chinaeew.cn\/v1\/order\/apple\/vip url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/chinaeew.js

[mitm] 

hostname = mobile-new.chinaeew.cn

*******************************/

var body = $response.body.replace(/endTime":\d+/g,'endTime":8888888888000')
$done({ body });
