/******************************
脚本功能：抖抖去水印-登陆后解锁会员
脚本功能：登录解锁VIP
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
*******************************
[rewrite_local]
^^https:\/\/kkyun\.com\/api\/(accounts\/user|apps\/start_task)(.?)+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ddqsy.js
[mitm] 
hostname = kkyun.com
*******************************/

let obj=JSON['\x70\x61\x72\x73\x65']($response['\x62\x6f\x64\x79']);let data=obj['\x75\x73\x65\x72']?obj['\x75\x73\x65\x72']:obj;let vipInfo={"\x69\x73\x5f\x76\x69\x70":true,"\x73\x74\x61\x74\x75\x73":1,"\x76\x69\x70\x5f\x6e\x61\x6d\x65":"\u5df2\u89e3\u9501\u9ad8\u7ea7\u529f\u80fd"}for(let key in data){if(vipInfo['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79'](key)){data[key]=vipInfo[key]}}$done({body:JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](obj)});
