/*******************************
脚本功能：Tiimo每日计划-解锁订阅
频道地址：https://t.me/iSharesubcribe
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/tiimo.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/tiimo.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const product_id = "1.year.withoutTrial";
    const entitlements = ["full_access",
        "learn"];
    let data = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    subscriber.subscriptions[(product_id)] = data;

    for (let entitlement of entitlements) {
       subscriber.entitlements[(entitlement)] = data;        
       subscriber.entitlements[(entitlement)].product_identifier = product_id;   
    }

    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
