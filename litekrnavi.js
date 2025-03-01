/*******************************
脚本功能：脚本解锁订阅

频道地址：https://t.me/iSharesubcribe

使用声明：️仅供学习交流, 🈲️商业用途

********************************
[rewrite_local]
http:\/\/39\.101\.171\.199:8080\/(liteKrnaviDownloadUserData|liteKrnaviCheckToken) url script-response-body JS/litekrnavi.js


*******************************/



const ddm = JSON.parse($response.body);
const url = $request.url;

const commonData = {
  "service_life": "2099-09-09 09:09:09",
  "is_vip": 1,
  "timestamp": 4092599349
};

if (/liteKrnaviDownloadUserData/.test(url)) {
  Object.assign(ddm.data, commonData, {
    "is_member": true,
    "member_type": 1
  });
} else if (/liteKrnaviCheckToken/.test(url)) {
  Object.assign(ddm.data, commonData);
}

$done({ body: JSON.stringify(ddm) });
