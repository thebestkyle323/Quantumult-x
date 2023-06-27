/**********************************************
网易有道词典 解锁超级会员
使用说明：开始规则再进入软件自动解锁，后续使用需要一直开启规则
使用声明：⚠️仅供学习交流，🈲️商业用途


[rewrite_local]
^https:\/\/dict\.youdao\.com\/vip\/user\/status url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/wyydcd.js
 

[MITM]
hostname = dict.youdao.com
**********************************************/


let obj = JSON.parse($response.body);
   
    obj = {
    "vip" : true,
    "svip" : true,
    "expire" : 253402196161000,
    "permissions" : [
      "ONE_MONTH",
      "AUTO_SUBSCRIPTION"
    ],
    "tag" : "TAG_RENEW_EXPECTED",
    "auto" : true,
    "open" : true,
    "planIds" : [
      "22"
    ],
    "svipExpire" : 253402196161000,
    "purchasedPlanIds" : [
      "22"
    ],
    "firstAuto" : false,
    "copyWritings" : [
      "DouDou",
      "是豆豆呀"
    ]
}

$done({body : JSON.stringify(obj)});
