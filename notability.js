/******************************

脚本功能：Notability——解锁订阅
下载地址：https://t.cn/A6Cgjtei
特别说明：老版本解锁，然后同步新版本，
软件版本：14.0.2
TG反馈群：https://t.me/fantasticsgame
TG频道群：https://t.me/Ifantasticsgame
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************


[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/notability.js

[mitm]
hostname = notability.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
   "data" : {
     "processAppleReceipt" : {
       "error" : 0,
       "subscription" : {
         "productId" : "com.gingerlabs.Notability.premium_subscription",
         "originalTransactionId" : "570001184068302",
         "tier" : "premium",
         "refundedDate" : null,
         "refundedReason" : null,
         "isInBillingRetryPeriod" : false,
         "expirationDate" : "2099-09-09T09:09:09.000Z",
         "gracePeriodExpiresAt" : null,
         "overDeviceLimit" : false,
         "expirationIntent" : null,
         "__typename" : "AppStoreSubscription",
         "user" : null,
         "status" : "canceled",
         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"
       },
       "__typename" : "SubscriptionResult"
    }
  }
};

$done({body : JSON.stringify(chxm1023)});
