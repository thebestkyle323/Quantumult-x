/******************************
脚本功能：ServerBee——解锁订阅
TG频道群：https://t.me/iFantasticsgame
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ServerBee.js

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ServerBee.js

[mitm] 

hostname = api.revenuecat.com
*******************************/
const A01={};const A02=JSON['\x70\x61\x72\x73\x65'](typeof $response!="\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"&&$response['\x62\x6f\x64\x79']||null);const name="\x50\x72\x6f";const appid="\x70\x72\x6f\x5f\x34\x35\x5f\x6c\x69\x66\x65\x74\x69\x6d\x65";if(typeof $response=="\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"){delete $request['\x68\x65\x61\x64\x65\x72\x73']["\x78\x2d\x72\x65\x76\x65\x6e\x75\x65\x63\x61\x74\x2d\x65\x74\x61\x67"];delete $request['\x68\x65\x61\x64\x65\x72\x73']["\x58\x2d\x52\x65\x76\x65\x6e\x75\x65\x43\x61\x74\x2d\x45\x54\x61\x67"];A01['\x68\x65\x61\x64\x65\x72\x73']=$request['\x68\x65\x61\x64\x65\x72\x73']}else if(A02&&A02['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72']){data={"\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65":"\x39\x39\x39\x39\x2d\x30\x39\x2d\x30\x39\x54\x30\x39\x3a\x30\x39\x3a\x30\x39\x5a","\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65":"\x32\x30\x32\x33\x2d\x30\x32\x2d\x32\x33\x54\x30\x32\x3a\x33\x33\x3a\x33\x33\x5a","\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65":"\x32\x30\x32\x33\x2d\x30\x32\x2d\x32\x33\x54\x30\x32\x3a\x33\x33\x3a\x33\x33\x5a","\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65":"\x50\x55\x52\x43\x48\x41\x53\x45\x44","\x73\x74\x6f\x72\x65":"\x61\x70\x70\x5f\x73\x74\x6f\x72\x65"};A02['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72']['\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73'][(appid)]=data A02['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72']['\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73'][(name)]=JSON['\x70\x61\x72\x73\x65'](JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](data));A02['\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72']['\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73'][(name)]['\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72']=(appid);A01['\x62\x6f\x64\x79']=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](A02)}$done(A01);
