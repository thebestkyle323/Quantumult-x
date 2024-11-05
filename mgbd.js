/*************************************

项目名称：木工宝典
下载地址：https://t.cn/A6nSLzkO
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api-wood\.kaying\.cc\/rest\/user url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/mgbd.js

[mitm]
hostname = api-wood.kaying.cc

*************************************/


var iSharesubcribe = JSON.parse($response.body);

iSharesubcribe.data = {
  ...iSharesubcribe.data,
  "remainDay" : "999",
  "vip" : {
    "desc" : "年会员",
    "value" : "YES",
    "code" : "YES"
  }
};

$done({body : JSON.stringify(iSharesubcribe)});
