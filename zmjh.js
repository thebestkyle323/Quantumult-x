/*******************************
脚本功能：朝暮计划-解锁永久会员
注意事项：需登录⚠
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^^https:\/\/app\.zomoplan\.com\/zhaoMuPlan\/user\/info url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/zmjh.js
[mitm] 
hostname = app.zomoplan.com
*******************************/

var obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u0049\u006e\u0066\u006f"]["\u0076\u0069\u0070\u0053\u0074\u0061\u0074\u0075\u0073"]=obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u0049\u006e\u0066\u006f"]["\u0076\u0069\u0070\u0054\u0079\u0070\u0065"]=0x9aafb^0x9aafa;$done({"\u0062\u006f\u0064\u0079":JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj)});



