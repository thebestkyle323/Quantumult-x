/*

Falendar：https://apps.apple.com/app/id1670616883
脚本功能：解锁VIP
交流频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供学习交流，🈲️商业用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/Falendar.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Falendar+": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "falendar_68_life",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
guding.subscriber.subscriptions = {
  "falendar_68_life": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
