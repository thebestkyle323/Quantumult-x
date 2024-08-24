/*******************************
项目名称：画耽漫画
脚本功能：画耽漫画——解锁VIP
下载工具：https://apps.apple.com/cn/app/id6464368480
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
▎脚本功能：解锁vip
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.shutiaomh.com\/api\/\/getSysUserInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/shutiaomh.js

[mitm] 

hostname = www.shutiaomh.com

*******************************/

var body = $response.body.replace(/vipDays":\d/g,'vipDays":1')
.replace(/nickname":".*?"/g,'nickname":"iOS社区"')
.replace(/inviteCode":".*?"/g,'inviteCode":"244762525"')
.replace(/expireDays":\w+/g,'expireDays":9999')
$done({ body });
