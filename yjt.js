/*
 * 易截图2
 * 解锁会员
 * https://t.me/iSharesubcribe
 
[rewrite_local]
^https?:\/\/1jietu\.com\/apiv2\/(user|ad) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/yjt.js

[mitm]
hostname = 1jietu.com
*/
var obj = JSON.parse($response.body);
const ad = /ad/;
const user = /user/;

if (ad.test($request.url)) {
    obj = {};

} else if (user.test($request.url)) {
    obj.info.vip_datetime = "4092599349000";
    obj.info.vip = 1;
    obj.info.group = "永久会员";

    obj.info.group_id = "3";

}

$done({ body: JSON.stringify(obj) });
