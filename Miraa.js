/*******************************
脚本功能：脚本解锁订阅

频道地址：https://t.me/iSharesubcribe

使用声明：️仅供学习交流, 🈲️商业用途

********************************
[rewrite_local]
https:\/\/(api|pay)\.myoland\.com url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/Miraa.js


*******************************/

let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/\"quota\":\w+/g, '"quota":9999999999')
        .replace(/\"exp\":\"[^\"]+\"/g, '"exp":"2222-02-22T22:22:22Z"')
    )
  : $response.body;

$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
}

