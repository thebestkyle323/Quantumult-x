/*

车票票：https://apps.apple.com/app/id6446212291
脚本功能：解锁VIP
交流频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供学习交流，🈲️商业用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/chepiaopiao.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "vip": {
    "expires_date": null,
    "product_identifier": "eticket_6_life",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-03-13T03:33:33Z";
guding.subscriber.subscriptions = {
  "eticket_6_life": {
    "expires_date": null,
    "original_purchase_date": "2023-03-13T03:33:33Z",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
$done({ body: JSON.stringify(guding) });
