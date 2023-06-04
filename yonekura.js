/*************************************

项目名称：Icon Killer
下载地址：https://apps.apple.com/app/id1544985651
项目名称：字体册
下载地址：https://apps.apple.com/app/id1524646659
项目名称：充电助手
下载地址：https://apps.apple.com/app/id1495536308
项目名称：声波助手
下载地址：https://apps.apple.com/app/id1500104231
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
特别说明：一次性解锁，登录账号，先开启规则，在进入软件即可！如果无效按[恢复购买]进行恢复，提示恢复失败，划掉App重开App即可！
脚本功能：解锁高级版本

**************************************

[rewrite_local]
^https?:\/\/api\.yonekura\.cn\/.+\/uicommon\/getuser url script-response-body https://github.com/thebestkyle323/Quantumult-x/blob/main/yonekura.js

[mitm]
hostname = api.yonekura.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const vipa = '/3.6.8/uicommon/getuser';
const vipb = '/3.7.0/uicommon/getuser';

if ($request.url.indexOf(vipa) != -1){
  chxm1023.data = {
    "expireTime" : "4092599349",
    "vip" : "1",
    "isVip" : true,
    "lastSignTime" : "1666666666",
    "inviteCode" : "5m48w",
    "nick" : "chxm1023",
    "lastRewardTime" : "1666666666",
    "userId" : "16666666",
    "signDays" : "1",
    "expExpireTime" : "4092599349",
    "times" : "1666666666",
    "lastBuyTime" : "1666666666",
    "score" : "1"
  };
}

if ($request.url.indexOf(vipb) != -1){
  chxm1023 = {
  "errno": 0,
  "errmsg": "OK",
  "data": "QMA+KlsJ1sKVErCjySKlbYKqkDcGKMGxSBRJ4e9EqjehB51pq3hJNjtYDxtRw9GyPWJZ5647p1N8w+ed29LVZOkEG\/m8PbrUy8OgzcOadF7ClOTjUVog3FOISfA74mQMjLgodiX0WKIUHiml4dwfweDxcx+u1ueSXJrybyFfBCb9v9B6xXw5XIRLgBzN1UPzYvCLkDfd8+osUhJXrmjTC6GTNajy1dybs9kSFM9wTRzzqBBhjqcjY5POKrW9OQSI9dF0C8niTT5UPhwV5INmvA2o3LcmUoT9qCXMTJpL+JuFv9DRK\/pN5NpcmCt6cyAbDChUbz1MNkhN+jqGXYBG+cTuOs8+MUVNLkf6g9JwCEQ="};
}

$done({body : JSON.stringify(chxm1023)});
