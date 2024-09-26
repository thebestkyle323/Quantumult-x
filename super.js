/*
 * 超级应用锁
 * https://t.me/iSharesubcribe

[rewrite_local]
^https:\/\/api\.safeapp\.studio\/super-app-lock\/member\/info url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/super.js

[mitm]
hostname = api.safeapp.studio
*/
let obj = {
  "code": "0",
  "message": "ok",
  "result": {
    "vipType": 211,
    "vipTypeName": "Lifetime",
    "isExpired": false,
    "expiredIn": 4092595200000
  },
  "requestId": "",
  "success": true
};

$done({ body: JSON.stringify(obj) });
