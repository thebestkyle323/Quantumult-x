/******************************

脚本功能：Moze解锁永久订阅
发布频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# &gt; Moze解锁永久订阅
^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/Moze.js

[mitm] 
hostname = api.revenuecat.com

*******************************/


let obj = JSON.parse($response.body);
   
    obj = {
    "request_date_ms" : 1668744603950,
    "request_date" : "2022-11-18T04:10:03Z",
    "subscriber" : {
      "non_subscriptions" : {
  
      },
      "first_seen" : "2022-11-18T04:02:28Z",
      "original_application_version" : "10",
      "other_purchases" : {
  
      },
      "management_url" : "https://apps.apple.com/account/subscriptions",
      "subscriptions" : {
        "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC" : {
          "original_purchase_date" : "2022-11-18T03:57:16Z",
          "expires_date" : "9999-12-31T00:00:00Z",
          "is_sandbox" : false,
          "refunded_at" : null,
          "unsubscribe_detected_at" : null,
          "grace_period_expires_date" : null,
          "period_type" : "normal",
          "purchase_date" : "2022-11-18T04:00:12Z",
          "billing_issues_detected_at" : null,
          "ownership_type" : "PURCHASED",
          "store" : "app_store",
          "auto_resume_date" : null
        }
      },
      "entitlements" : {
        "MOZE_PREMIUM_SUBSCRIPTION" : {
          "grace_period_expires_date" : null,
          "purchase_date" : "2022-11-18T04:00:12Z",
          "product_identifier" : "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC",
          "expires_date" : "9999-12-31T00:00:00Z"
        }
      },
      "original_purchase_date" : "2013-08-01T07:00:00Z",
      "original_app_user_id" : "DouDou",
      "last_seen" : "2022-11-18T04:02:28Z"
    }
  }
  
$done({body : JSON.stringify(obj)});
