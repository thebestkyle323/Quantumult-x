/*************************************

项目功能：推糖-壁纸头像美图社区
下载地址：https://apps.apple.com/cn/app/%E5%A0%86%E7%B3%96-%E7%88%B1%E8%B1%86%E5%A3%81%E7%BA%B8%E7%BE%8E%E5%9B%BE%E7%A4%BE%E5%8C%BA/id533415763
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
▎脚本功能：解锁SVIP

▎特别说明：非一次性解锁，每次使用需要开启，先开启规则，在进入软件即可！

**************************************

[rewrite_local]
^https:\/\/.*\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/duitang.js

[mitm] 
hostname = *.duitang.com

*************************************/


var body = $response.body;

body = body.replace(/\"vip":\w+/g, '\"vip":true');
body = body.replace(/\"svip_mechanism":\d+/g, '\"svip_mechanism":1');
body = body.replace(/\"is_life_artist":\w+/g, '\"is_life_artist":true');
body = body.replace(/\"isnew":\w+/g, '\"isnew":true');
body = body.replace(/\"vip_end_at":\d+/g, '\"vip_end_at":4092599350');
body = body.replace(/\"vip_end_at_mills":\d+/g, '\"vip_end_at_mills":4092599350000');
body = body.replace(/\"vip_level":\d+/g, '\"vip_level":11');
body = body.replace(/\"latest_vip_level":\d+/g, '\"latest_vip_level":11');
body = body.replace(/\"is_certify_user":\w+/g, '\"is_certify_user":true');
body = body.replace(/\"be_follow_count":\d+/g, '\"be_follow_count":1000000');
body = body.replace(/\"follow_count":\d+/g, '\"follow_count":1000000');
body = body.replace(/\"score":\d+/g, '\"score":1000000');

$done({body});
