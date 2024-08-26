/******************************

脚本功能：muses-缪思记——解锁订阅
下载地址：https://apps.apple.com/cn/app/id6514303889
脚本作者: iFantasticsgame
电报频道：https://t.me/iFantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！

*******************************


[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/muses.js

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/muses.js

[mitm]

hostname = api.revenuecat.com

*******************************/

const a01 = {};
const a02 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pro";
const appid = "PRO_AI_ANNUAL";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];

  a01.headers = $request.headers;
} else if (a02 && a02.subscriber) {
  data = {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-12-23T02:33:33Z",
    "purchase_date": "2023-12-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  a02.subscriber.subscriptions[(appid)] = data
  a02.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  a02.subscriber.entitlements[(name)].product_identifier = (appid);
  a01.body = JSON.stringify(a02);
}

$done(a01);