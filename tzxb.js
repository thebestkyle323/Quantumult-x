/*******************************
脚本功能：体重小本-解锁小本会员
TG频道群：https://t.me/iFantasticsgame
下载软件：https://apps.apple.com/app/id1030653122
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.jitizhong\.com\/weightnote\/ios\/(user\/get|vip\/getVipInfo|usercentre\/userInfo)\.json(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/tzxb.js
[mitm] 
hostname = api.jitizhong.com
*******************************/

var obj =  JSON.parse($response.body);
let data = obj.data.vipInfo ? obj.data.vipInfo : obj.data;
data.status = 0;
$done({body: JSON.stringify(obj)});
