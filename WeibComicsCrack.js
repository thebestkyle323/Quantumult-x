/******************************

脚本功能：微勃视频解锁全部视频
软件版本：3.0.1+49
下载地址：https://bit.ly/41z4QXZ
脚本发布：https://t.me/ifantasticsgame
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
        
▎脚本功能：破解部分至尊卡功能

 • 解锁会员视频
 • 解锁付费视频
 • 解锁会员漫画
 • 未破抖阴板块
 • 更多自行探索
        
*******************************
[rewrite_local]
# > 微勃视频解锁全部视频
^https?:\/\/.*\.com\/api\/app\/user\/info$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/WeibComicsCrack.js
^https?:\/\/.*\.com\/api\/app\/media url script-request-header https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/WeibVideosCrack.js

[mitm] 
hostname = vmbdiwr.ledyqrr.com, bfvph.djqyarm.com, tehvh.cmmsjbu.com, djytmeknk.oenwfkbaamamdq.com, czecp.iomaqzd.com, hpihsdqcy.irkkykyrabxiej.com

*******************************/

var objc = JSON.parse($response.body);
objc.data = "zDrMBCBZLbv7W87ryP67nHVLc+z41gT5iVc\/IqsM8n7J22Uu+exg\/zwlUb6qgWhYejgN9S7y+Gk4fafX56ncfmV8OTn9Dyb6m2nmcUJZKEAhep64gDclkgibGycchsLYSQXxflQkwBEiRkwhuLUGTeXScW2LxnMOkp0PFEgoBtY3T7pyvLOcp\/h+zBey6THS0FtIE1YNeM+vB6uk\/OwuxqnGCzQw13bIJbGzGh4TpbcF3vPQklTKbxKUUjEgDRDsZP5msED\/Wi5Mwg2qwDpiMDhoACI9mF4YZUPJOsB\/FW99rlj0W28is874nVHKj+MXALEFq1u9IW6TfA6IkeZxyswf\/lKymAnM0BuHLqtfzuPXWDksU2JrN0TDXD8c48baA+7unIt5oSu\/y2m60Hj1t9RYeoiLU+xMWP8skMW\/nfxos8Lg+878T4k3xwwSg3vDnwcg2NWnmrnAPzWUG9ymUtjn\/TpbNF6vPCnZQ2lKL5rjPCvqGuP5iisf2NMd8Q8ZNCshF+cHK6vgMe2V3AULQ7yFONyUqE00lfa6m9imfJvntZDKshPTuq0bF72gdKwDqhcGGiI\/iGMBe11DqQqQrUyakBLVtwEvdbsTh8Az3RnTfqVT1azLijbhY2Lu5OJ+mCII860Q5v8yiesFuxwGE0007sRUHqf8ZygmNwhth71pBfmBN8QRxtyOciskxKKf9sVVyXrTpH7HpNc89kkOBo6EpAb38T09uMe7nq2eNQDzNWP4hsvLy7mzGUTlfjXcCHQtBg4tVQhu0KlrbgaOh1X1H\/okszcOjE6FWyTPQUq3YpeB\/uaalhBUDnSjn2oJePbtoUDujyCLsEYihd9cSYEwSlGERnlyciHUjet7kaQI4DmKNxA\/kZewCuQsxLbD6FDxuYSazArG8kqdBFUzHdlimULWaBjmyS5EiaF5rff7w86thDwnmHMLcTDuBzSZalSyCQiV9VSTz9c9PMHt+VYQIMthbzEQg0Z7qAXUSA1gDXiK+3WsaoeAvBJpkWfFXTCV1djFlOedBtDoGIPSS4S22eB5ka9T6ih5gsxtnno2Gbhw1P3KzrCgwwhO47dms7O4cFfcIIOzINWh66VYXh3RO\/8XdjTojcPaI5pGAr5jyj4AEpBytT84wAzMy5kbu9XVXNXe8tvKy92+cohJnLB0rCsl2SXdtXe9nZ8WPu+d8q0IiCLrINtIro1SOyU7NYv++VRnU6sPYdsNkKOZDZeygs\/UfvGqh27RvYnOLn5vt9spV8pSM3s4cnzp9Kj+CgKY5nNlR3s326MZL7FOWb1WuYDOUBb0FA6MfHx184ynP5YXG2hNOSURh7j51uB74asBJjjPf6JHJvYFQJKU4GAlZgIxED7tKV2URxhpP4YnQxJZbP1WAZmOgJPzXjI5WFw4DnfkIT5PhKM1IsPbnJJN5vJ6pGhSZS0uBMq0NUrXJVhp18Y0qa1+zlKA8lu\/O1KiuS5xgGmOF4l\/gHG\/Jr6GFdZQUhXa8CxDGtaztlF9QmgRySFOcFmcZYmk7tvDROecTj7F1CQr+jrNSsGpLZq2ufKOIuNnoMLI4MK\/chyHF7+3ptPcQK1ZaXWkg7nyiWw7MDmSUU7uxfCYIEf1wGHOsu+pTtqg\/BumBrCqiltBXW2dBaYIE6gPEKYR4Y58n0mdTft22JWQ7yRblCSAh2Qi6d7uuRtVT1UHFNLsZs21WcFY0\/iotx6kPuTt2+QOjPkT13pL0tH5Nbc6MZdK+FzI3v4Kv4duw6S6WzZbTU2Ob20wzmDsq2mAJnHMNe65fvojCxY\/\/A+oVjwR8Mi\/CLx9TePDHqwA9HtlbFzPUvBv9jiTx5NSv2NbiVVmP0gOEEeuCq3E7SqWxginbIdHF+jLIrGC1fnfJmak13k0cGX8UTaymA3D38DQIwXFMA0jWT0oS+Rq6KrY4AuZ";
$done({
    body : JSON.stringify(objc)
});

