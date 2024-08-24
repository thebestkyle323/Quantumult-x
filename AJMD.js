/*******************************
项目名称：阿基米德
脚本功能：登录解锁VIP
下载工具：https://apps.apple.com/cn/app/id920700920
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
▎脚本功能：解锁vip
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️



𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] 

^https?:\/\/a\.ajmide\.com\/(v21|v29)\/get_user_(detail|home)\.php$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/AJMD.js

[MITM]
hostname = a.ajmide.com


*/

var body = $response.body.replace(/isPurchased":\d/g,'isPurchased":1')
.replace(/nick":".*?"/g,'nick":"iOS社区"')
$done({ body });
