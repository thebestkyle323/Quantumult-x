/*************************************

项目名称：apphud多合一
更新日期：2024-11-24
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/apphud.js

[mitm]
hostname = *.apphud.com

*************************************/


const iSharesubcribe = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

const list = [
  "one.time.prremium",
  "ok.annual.sub",
  "AFMS",
  "com.tm.replica.lifetime",
  "Plant_1w_7.99_3d"
];

const createSubscription = (productId = "one.time.prremium") => {
  return {
    "status": "regular",
    "group_id": "1a2b3c4d",
    "autorenew_enabled": false,
    "introductory_activated": false,
    "cancelled_at": null,
    "kind": "autorenewable",
    "id": "a1234567-b123-c123-d123-e12345678910",
    "next_check_at": "2024-11-11T11:11:11.000Z",
    "product_id": productId,
    "platform": "ios",
    "environment": "production",
    "local": false,
    "retries_count": 0,
    "units_count": 1,
    "unit": "day",
    "in_retry_billing": false,
    "started_at": "2024-11-11T11:11:11.000Z",
    "original_transaction_id": "490001314520000",
    "expires_at": "2099-09-09T09:09:09.000Z",
    "is_consumable": null
  };
};

const processPaywalls = (paywalls) => {
  const subscriptions = [];
  if (!Array.isArray(paywalls)) return subscriptions;
  for (const paywall of paywalls) {
    if (paywall.items) {
      for (const item of paywall.items) {
        const productId = item.product_id || "one.time.prremium";
        subscriptions.push(createSubscription(productId));
      }
    } else {
      subscriptions.push(createSubscription());
    }
  }
  return subscriptions;
};

if (!iSharesubcribe.data) iSharesubcribe.data = {};
if (!iSharesubcribe.data.results) iSharesubcribe.data.results = {};
if (!Array.isArray(iSharesubcribe.data.results.subscriptions)) {
  iSharesubcribe.data.results.subscriptions = [];
}

if (iSharesubcribe.data.results.paywalls) {
  const subscriptions = processPaywalls(iSharesubcribe.data.results.paywalls);
  if (subscriptions.length > 0) {
    iSharesubcribe.data.results.subscriptions.push(...subscriptions);
  }
}

for (const productId of list) {
  iSharesubcribe.data.results.subscriptions.push(createSubscription(productId));
}

$done({ body: JSON.stringify(iSharesubcribe) });
