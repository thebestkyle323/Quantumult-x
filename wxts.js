/*************************************

项目名称：微信听书
下载地址：https://t.cn/A6pj4xeR
电报频道：https://t.me/Ifantasticsgame
▎脚本功能：解锁会员
▎特别说明：非一次性解锁，每次使用需要开启，先开启规则，在进入软件【恢复购买】即可！
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/i\.at\.qq\.com\/pay\/memberinfo.+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/wxts.js

[mitm]
hostname = i.at.qq.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "subscriptionPeriod" : 2405400000,
  "memberCount" : 308000,
  "subscriptionPrice" : 99999999,
  "subscriptionButtonLabel" : "立即续费",
  "hasPromoRight" : false,
  "autoRenewableTime" : 0,
  "autoRenewableChannel" : 0,
  "isAutoRenewable" : 1,
  "subscriptionDesc" : "已解锁付费会员",
  "expiresIn" : 2405400000,
  "endTime" : 4092599349,
  "historyAutoRenewable" : true,
  "isMember" : 1,
  "isExperienceMember" : true,
  "startTime" : 1666666666
};

$done({body : JSON.stringify(chxm1023)});
