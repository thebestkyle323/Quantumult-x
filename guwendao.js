/*************************************

项目名称：古文岛
下载地址：https://too.st/aZF
更新日期：2024-11-14
脚本作者：iSharesubcribe
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.guwendao\.net\/(api\/user\/getVip|router\/user\/getUserInfo) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/guwendao.js

[mitm]
hostname = *.guwendao.net

*************************************/


var iSharesubcribe = JSON.parse($response.body);

if(/api\/user\/getVip/.test($request.url)){
  iSharesubcribe.svip = "/Date(4092599349000)/";
}

if(/router\/user\/getUserInfo/.test($request.url)){
  iSharesubcribe.result.user = {
    ...iSharesubcribe.result.user,
    "vipTimeSpan" : 9466560000000,
    "shebeiIsMore" : true,
    "svipTimeSpan" : 9466560000000,
    "vipTime" : "2099-09-09 09:09:09",
    "svipTime" : "2099-09-09 09:09:09"
  };
}

$done({body : JSON.stringify(iSharesubcribe)});
