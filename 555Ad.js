/**********************************************

应用名称：555去广告脚本
更新时间：2023-04-30
下载地址：https://t.me/Ifantasticsgame
脚本说明：去除首页轮播图广告、首页信息流广告、我的页面推广


[rewrite_local]

^https?:\/\/run\.api\.qyfxgd\.cn:\d+\/api\/v\d\/movie\/index_recommend url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/555Ad.js
^https?:\/\/run\.api\.qyfxgd\.cn:\d+\/api\/v\d\/advert url reject

[mitm]

hostname = run.api.qyfxgd.cn

**********************************************/



















let obj=JSON.parse($response.body);obj.data=obj.data.filter(t=>"advert_self"!==t.layout),obj.data.forEach(t=>{t.list=t.list.filter(t=>3!==t.type)}),$done({body:JSON.stringify(obj)});
