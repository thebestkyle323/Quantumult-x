/*************************************

项目名称：歌歌AI写歌
下载地址：https://t.cn/A6nZnbJH
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/apiv2\.somuseai\.com\/userinfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/aixiege.js

[mitm]
hostname = apiv2.somuseai.com

*************************************/


var iSharesubcribe = JSON.parse($response.body);

chxm1023.data.userinfo.status = {
  ...chxm1023.data.userinfo.status,
  "is_vip" : 1,
  "vip_expired_date" : 4092599349,
  "vip_name" : "大师会员",
  "vip" : 2
};

$done({body : JSON.stringify(iSharesubcribe)});
