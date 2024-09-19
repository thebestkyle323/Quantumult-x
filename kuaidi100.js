/*************************************

项目名称：快递100收件
电报频道：https://t.me/iSharesubcribe
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.kuaidi100\.com\/(mkt\/courier\/open|open\/test|advertisement) url script-response-body https://raw.githubusercontent.com/cthebestkyle323/Quantumult-x/main/kuaidi100.js

[mitm]
hostname = *.kuaidi100.com

*************************************/


var iFantasticsgame = JSON.parse($response.body);

if(/advertisement/.test($request.url)){
  iFantasticsgame.data = {};
}

if (/getLoginInfo/i.test($request.url)) {
  iFantasticsgame.data = {
   ...iFantasticsgame.data,
    "vipTag": "VIP",
    "vipDeadline": 4092599349000
  };
  iFantasticsgame.vipTag = "VIP";
  iFantasticsgame.vipDeadline = 4092599349000;
}

if (/getMyVip/.test($request.url)) {
  iFantasticsgame.data = {
   ...iFantasticsgame.data,
    "vipTag": "VIP",
    "expired": 0,
    "vipTimeDetail": {
      "VIP": 4092599349000,
      "PAID_WEB": 4092599349000,
      "PAID_APP": 4092599349000
    },
    "vipDeadline": 4092599349000
  };
  if (iFantasticsgame.data.serviceList && Array.isArray(iFantasticsgame.data.serviceList)) {
    iFantasticsgame.data.serviceList.forEach((item) => {
      if ('endTime' in item) {
        item.endTime = 4092599349000;
      }
    });
  }
}

if(/getAllPaidService/.test($request.url)){
  iFantasticsgame.data = {
    "CAINIAOBLUETOOTHPRINTING" : 4092599349000,
    "BATCHADDNEW" : 4092599349000,
    "EXPEXPORT" : 4092599349000,
    "EXCELSPEEDIMPORT" : 4092599349000,
    "HISEXPEXPORT" : 4092599349000,
    "APPEXPORT3MONTH" : 4092599349000,
    "APPLIST3MONTH" : 4092599349000,
    "MULTIELEC" : 4092599349000,
    "DEPUTY" : 4092599349000,
    "MULTISTORE" : 4092599349000,
    "EXCEPTIONNOTICE" : 4092599349000,
    "WORKERLIMIT" : 4092599349000,
    "EXCELSOURCEDOWNLOAD" : 4092599349000
  };
}

$done({body : JSON.stringify(iFantasticsgame)});
