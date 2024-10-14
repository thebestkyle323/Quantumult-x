/*******************************
脚本功能：每日减脂-解锁会员
频道地址：https://t.me/iSharesubcribe
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fastdiet\.incmoon\.com\/dailyFastDiet\/user\/info url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/mrjz.js
[mitm] 
hostname = fastdiet.incmoon.com
*******************************/

let obj =  JSON.parse($response.body);

let data = obj.data;

obj.data = {
   ...data,
   "vipInfo": {
      ...data.vipInfo,
      "vipExpDay" : 99999,
      "vipRole" : "vip",
   },
   "activityInfo": {
      ...data.activityInfo,
      "showRedBookActivity" : false
   }
}

$done({body: JSON.stringify(obj)});
