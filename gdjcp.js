/*******************************
项目名称：滚动截长屏-解锁会员
脚本功能：登录解锁会员
下载工具：https://apps.apple.com/app/id1658935259
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/gdjcp.js
[mitm] 
hostname = appss.rhinoxlab.com

*******************************/
var obj = JSON["parse"]($response["body"]);
obj["result"]["vipExpireTime"] = "10-10-9992".split("").reverse().join("");
obj["result"]["vipGroupInfos"] = [{
    "groupType": "TYPE_ONE",
    "vipType": 'VIP'
}];
$done({
    "body": JSON["stringify"](obj)
});

var body = $response.body
.replace(/nickname":".*?"/g,'nickname":"iOS社区"')
.replace(/inviteCode":".*?"/g,'inviteCode":"244762525"')
$done({ body });
