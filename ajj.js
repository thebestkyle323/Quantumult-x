/*************************************

项目名称：爱剪辑
下载地址：https://apps.apple.com/cn/app/%E7%88%B1%E5%89%AA%E8%BE%91-%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91-%E8%A7%86%E9%A2%91%E7%BC%96%E8%BE%91-vlog-%E5%88%B6%E4%BD%9C/id1449230057
脚本功能：解锁永久会员
非一次性解锁
TG群：https://t.me/ifantasticsgame
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https?:\/\/api\.open\.loveclip\.site\/UserInfo\/(UserPersonalCoreAsync|GetUserDetail) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ajj.js

[mitm]

hostname = api.open.loveclip.site

*************************************/


const urla = "/UserInfo/UserPersonalCoreAsync";
const urlb = "/UserInfo/GetUserDetail";
var body = $response.body;

if ($request.url.indexOf(urla) != -1){
let chxm1023 = JSON.parse(body);
chxm1023.data.IsVip = true;
chxm1023.data.VipLevel = "1";
chxm1023.data.VipExpire = "2099-09-09 09:09:09";
body = JSON.stringify(chxm1023);}



if ($request.url.indexOf(urlb) != -1){
let chxm1023 = JSON.parse(body);
chxm1023.data.IsVip = true;
chxm1023.data.VipLevel = "1";
chxm1023.data.VipExpire = "2099-09-09 09:09:09";
body = JSON.stringify(chxm1023);}

$done({body});
