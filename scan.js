/*******************************
脚本功能：Scanner Pro-一次性解锁订阅
注意事项：开启脚本再进入，无效点击恢复购买
频道地址：https://t.me/iFantasticsgame
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/scan.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/scan.js
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
    const name = "plus";
    const appid = "com.readdle.Scanner.subscription.year25";
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
