/******************************

脚本功能：Notability——解锁订阅
下载地址：https://t.cn/A6Cgjtei
特别说明：老版本解锁，然后同步新版本，
软件版本：14.0.2
TG反馈群：https://t.me/fantasticsgame
TG频道群：https://t.me/Ifantasticsgame
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************


[mitm]&nbsp;

hostname = notability.com



[rewrite_local]


^https?:\/\/notability\.com\/global url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ycdz/notability1.js

^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/ycdz/Notability.js
