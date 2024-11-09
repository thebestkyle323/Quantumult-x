/*************************************
项目名称：AdGuard-Safari浏览器扩展
脚本作者：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/AdGuard.js

[mitm]
hostname = mobile-api.adguard.org

*************************************/


var iSharesubcribe = JSON.parse($response.body);

chxm1023 = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}

$done({body : JSON.stringify(iSharesubcribe)});
