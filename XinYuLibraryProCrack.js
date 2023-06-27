/*
 *
 *
脚本功能：新语听书解锁会员
下载地址：http://t.cn/A6xkFpuX
电报频道：https://t.me/Ifantasticsgame
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# &gt; 新语听书解锁会员
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/XinYuLibraryProCrack.js

[mitm] 

hostname = i.xinyulib.com.cn
*
*
*/


var objc = JSON.parse($response.body);
objc.data["vipstartTime"] = "2020-09-28";
objc.data["vipendtime"] = "2999-09-28";
objc.data["trueName"] = "\u6D65\u8F7B\u5C18\uD835\uDC36\uD835\uDC5F\uD835\uDC4E\uD835\uDC50\uD835\uDC58";
objc.data["headImg"] = "https:\/\/thirdqq.qlogo.cn\/g?b=oidb&amp;k=iaODNibZcQQTN0QPGShfkKIw&amp;s=640";
$done({
    body : JSON.stringify(objc)
});
