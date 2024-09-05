/*******************************

脚本功能：魔法消除笔——解锁VIP
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosqsy.lmzjz.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/iosqsy.js

[mitm] 

hostname = iosqsy.lmzjz.sanwubeixin.cn

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":8888888888')
.replace(/vip_type":\d+/g,'vip_type":1')
.replace(/username":".*?"/g,'username":"iOS社区"')
$done({ body });
