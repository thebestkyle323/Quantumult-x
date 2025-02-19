/*******************************
脚本功能：脚本解锁订阅

频道地址：https://t.me/iSharesubcribe

使用声明：️仅供学习交流, 🈲️商业用途

********************************
[rewrite_local]

https://rdp.duetdisplay.com/v1/users/validateReceipt url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/DuetDisplay.js

[mitm]
hostname = rdp.duetdisplay.com
*******************************/
 $done({
  body: JSON.stringify({
    success: true,
    products: [{
      vendor: "apple",
      product: "DuetAirAnnual",
      subscriptionId: 391961,
      purchaseDate: "2023-11-14T19:47:25Z",
      cancelled: false,
      expiresDate: "9999-09-09T19:47:22Z",
      inTrial: true
    }],
    hasStripeAccount: false
  })
});
