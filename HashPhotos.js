/*

HashPhotos：https://apps.apple.com/app/id685784609
脚本功能：解锁VIP
交流频道：https://t.me/Ifantasticsgame
使用声明：⚠️仅供学习交流，🈲️商业用途

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/HashPhotos.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = JSON.parse($response.body);
guding = {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "com.kobaltlab.HashPhotos.iap.allinone.free",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "com.kobaltlab.HashPhotos.iap.allinone.free",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
}
$done({ body: JSON.stringify(guding) });
