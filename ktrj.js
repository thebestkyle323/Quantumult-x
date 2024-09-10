/*******************************
脚本功能：抠图软件-解锁终身会员
频道地址：https://t.me/iFantasticsgame
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^http:\/\/kt\.jiaofei8\.cn\/api\/user\/my url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ktrj.js
[mitm] 
hostname = kt.jiaofei8.cn
*******************************/

let obj =  JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "free_num" : 99999,
  "finish_time" : "终身会员",
  "type" : 2
}

$done({body: JSON.stringify(obj)});
