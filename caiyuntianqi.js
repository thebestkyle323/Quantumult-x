/*************************************

项目名称：彩云天气-净化/解锁SVIP
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[filter_local]
# 禁用上传信息 - 来源: @苍井灰灰
host, gather.colorfulclouds.net ,reject

[rewrite_local]
# 广告净化/弹窗AD/去除亲友卡/去除悬浮模块
^https?:\/\/(ad|biz|wrapper|starplucker)\.cyapi\.cn\/.+\/((activity\?app_name|operation|config|req\?app_name=weather)|v\d\/(trial_card\/info|entries|friend_cards|token\/device)) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/caiyuntianqi.js
# VIP信息
^https?:\/\/(biz|wrapper|starplucker)\.cyapi\.cn\/(v\d\/user\?app_name|.+\/v\d\/(vip_info|user_detail)) url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/caiyuntianqi.js
# SVIP地图-48小时预报
^https?:\/\/(api|wrapper)\.cyapi\.cn\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn

*************************************/


let iSharesubcribe = {}, iSharesubcribe1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const headers = Object.fromEntries(Object.entries($request.headers).map(([k, v]) => [k.toLowerCase(), v]));

if (typeof $response == "undefined") {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
  iSharesubcribe.headers = { ...headers, 'device-token': token };
  if (headers['app-version'] > '7.19.0') { iSharesubcribe.headers['authorization'] = `Bearer ${token}`; }
} else {
  const data = { "is_auto_renewal": true, "expires_time": 4092599349 };
  //净化广告
  if (/banners|entries|friend_cards|trial_card\/info|req\?app_name=weather|conditions/.test(url)) {
    iSharesubcribe1 = {};
  }
  //旧版数据
  if (/user\?app_name/.test(url)) {
    iSharesubcribe1.result = { ...iSharesubcribe1.result, "is_vip": true, "vip_expired_at": 4092599349, "svip_given": 1, "is_xy_vip": true, "xy_svip_expire": 4092599349, "wt": { ...iSharesubcribe1.result.wt, "vip": { ...iSharesubcribe1.result.wt.vip, "expired_at": 0, "enabled": true, "svip_apple_expired_at": 4092599349, "is_auto_renewal": true, "svip_expired_at": 4092599349 }, "svip_given": 1 }, "vip_take_effect": 1, "xy_vip_expire": 4092599349, "svip_expired_at": 4092599349, "svip_take_effect": 1, "vip_type": "s" };
  }
  //新版数据
  if (/user_detail/.test(url)) {
    iSharesubcribe1.vip_info.show_upcoming_renewal = false;
    iSharesubcribe1.vip_info.svip = data;
  }
  //VIP信息
  if (/vip_info/.test(url)) {
    iSharesubcribe1.show_upcoming_renewal = false;
    iSharesubcribe1.svip = data;
  }
 
  if (/features|homefeatures/.test(url)) {
    iSharesubcribe1["data"] = [{  "badge_type" : "",  "title" : "iSharesubcribe",  "url" : "https://t.me/iSharesubcribe",  "feature_type" : "",  "avatar" : "https://raw.githubusercontent.com/iSharesubcribe1/Script_X/main/icon/ddm2.png"  },...iSharesubcribe1.data];
  }
  iSharesubcribe.body = JSON.stringify(iSharesubcribe1);
}

//去除悬浮模块
if (/activity\?app_name/.test(url)) {
  iSharesubcribe.body = headers['app-version'] < '7.20.0'  ? '{"status":"ok","activities":[{"items":[{}]}]}'  : '{"status":"ok","activities":[]}';
}

$done(iSharesubcribe);
