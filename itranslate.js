/*************************************

项目名称：iTranslate 翻译
下载地址：https://t.cn/A6p2IR1g
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
脚本功能：解锁Pro
特别说明：一次性解锁，登录账号，先开启规则，在进入软件即可！如果无效按[恢复购买]进行恢复！

**************************************

[rewrite_local]
^https?:\/\/ssl-api\.itranslateapp\.com\/accounts\/.+\/(subscriptions\/verify|marketing\/consent\/status) url script-response-body https://github.com/thebestkyle323/Quantumult-x/blob/main/itranslate.js

[mitm]
hostname = ssl-api.itranslateapp.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  chxm1023.licenses = [
    {
      "product_id" : "com.itranslate.pro.yearly",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4092599350000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  chxm1023 ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(chxm1023)});
