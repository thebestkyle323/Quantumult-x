
/*        
        ➪：阿基米德

        ★：解锁永久🆅🅸🅿



𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] 

^https?:\/\/a\.ajmide\.com\/(v21|v29)\/get_user_(detail|home)\.php$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/AJMD.js

[MITM]
hostname = a.ajmide.com


*/

var body = $response.body.replace(/isPurchased":\d/g,'isPurchased":1')
.replace(/nick":".*?"/g,'nick":"iOS社区"')
$done({ body });
