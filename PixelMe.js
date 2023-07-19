/*
PixelMe：https://apps.apple.com/app/id1552314716
脚本功能：解锁VIP
交流频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供学习交流，🈲️商业用途



[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/PixelMe.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "pro": {
    "expires_date": "2333-02-23T02:33:33Z",
    "product_identifier": "pm_jpy2000_7d0",
    "purchase_date": "6666-06-06T06:06:06Z"
  }
};
guding.subscriber.original_purchase_date = "2023-03-13T03:33:33Z";
guding.subscriber.subscriptions = {
  "pm_jpy2000_7d0": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-03-13T03:33:33Z",
    "purchase_date": "2023-02-23T03:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
