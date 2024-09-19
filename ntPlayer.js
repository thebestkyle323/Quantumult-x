/*******************************
脚本功能：ntPlayer-解锁订阅
频道地址：https://t.me/iSharesubcribe
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ntPlayer.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ntPlayer.js
[mitm] 
hostname = api.revenuecat.com
*******************************/

let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" &amp;&amp; $response.body || null);
  if(body &amp;&amp; body.subscriber) {
    const name = "\u0063\u006f\u006d\u002e\u006c\u006c\u002e\u0062\u0074\u0070\u006c\u0061\u0079\u0065\u0072\u002e\u0031\u0032";
    const appid = "\u0063\u006f\u006d\u002e\u006c\u006c\u002e\u0062\u0074\u0070\u006c\u0061\u0079\u0065\u0072\u002e\u0031\u0032";
    let data = {
      "expires_date": "2999-01-01T00:00:00Z",
      "original_purchase_date":  "2021-01-01T00:00:00Z",
      "purchase_date": "2021-01-01T00:00:00Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
    let subscriber = body.subscriber;
    subscriber.subscriptions[(appid)] = data;
    subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
    subscriber.entitlements[(name)].product_identifier = (appid);   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
