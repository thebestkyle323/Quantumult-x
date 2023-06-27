/****************************************

项目名称：旺财记账
下载工具：https://t.cn/A6pXpoBZ
电报频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！

*****************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/wangcaijizhang.js

[mitm]
hostname = api.revenuecat.com

****************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "request_date_ms" : 1686552879814,
  "request_date" : "2023-06-12T06:54:39Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-06-12T06:43:45Z",
    "original_application_version" : "31",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "lm_1_1month" : {
        "warning" : "仅供学习，禁止转载或售卖",
        "Telegram" : "https://t.me/chxm1023",
        "purchase_date" : "2022-09-09T09:09:09Z",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "ownership_type" : "PURCHASED",
        "expires_date" : "2099-09-09T09:09:09Z"
      }
    },
    "entitlements" : {
      "VIP" : {
        "Telegram" : "https://t.me/chxm1023",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "lm_1_1month",
        "expires_date" : "2099-09-09T09:09:09Z",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : "2022-12-04T14:53:28Z",
    "original_app_user_id" : "$RCAnonymousID:7121a9a7f594462ea349034cd02e3534",
    "last_seen" : "2023-06-12T06:43:45Z"
  }
};

$done({body : JSON.stringify(chxm1023)});
