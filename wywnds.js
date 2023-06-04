/*************************************

项目名称：网易蜗牛读书
下载地址：https://t.cn/A6NBBLeU
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
▎脚本功能：解锁会员

▎特别说明：非一次性解锁，每次使用需要开启，先开启规则，在进入软件即可！

**************************************

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info url script-response-body https://github.com/thebestkyle323/Quantumult-x/blob/main/wywnds.js

[mitm]
hostname = p.du.163.com

*************************************/


var body=$response.body;

chxm1023 = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(chxm1023);
