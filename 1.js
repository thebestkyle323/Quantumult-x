/*******************************

脚本功能：照片格式转换——解锁VIP
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/tgz.jiaofei8.cn\/api\/user\/my url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/2jiaofei8.js

[mitm] 

hostname = tgz.jiaofei8.cn

*******************************/

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01 08:00:00到期"')
.replace(/free_num":\d+/g,'free_num":8888888888')
.replace(/score":\d/g,'score":1')
.replace(/type":\d/g,'type":2')
.replace(/mobile":".*?"/g,'mobile":"iOS社区"')
.replace(/nickname":".*?"/g,'nickname":"iOS社区"')
$done({ body });
