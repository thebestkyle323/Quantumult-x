/**********************************************

一木记账
脚本功能：解锁会员。
交流频道：https://t.me/Ifantasticsgame
▎下载地址：http://t-t.ink/26YXW
使用声明：⚠️仅供学习交流，🈲️商业用途


[rewrite_local]
^https:\/\/yimuapp\.com:8082\/bookkeeping\/user\/getUser url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/yimu.js



[MITM]
hostname = yimuapp.com
**********************************************/



let obj = JSON.parse($response.body);
    obj = {
    "result" : {
    "weiboToken" : null,
    "wechatName" : null,
    "qqToken" : null,
    "headImg" : "https://raw.githubusercontent.com/jizhi0520/QX/main/DouDou.JPG",
    "vipTime" : 253402234174000,
    "appleToken" : "null",
    "channel" : "apple",
    "signInfo" : null,
    "name" : "是豆豆呀",
    "vipType" : 1,
    "appleName" : "是豆豆呀",
    "id" : null,
    "registerTime" : 1686029051835,
    "token" : "null",
    "email" : null,
    "lastLoginTime" : 1686029051835,
    "phone" : null,
    "wechatToken" : null,
    "qqName" : null,
    "password" : "",
    "eduStatus" : 0,
    "weiboName" : null
  },
  "code" : 0,
  "msg" : "success",
  "token" : "null"
}

$done({body : JSON.stringify(obj)});
