/*
 * feelFlow
 * 解锁会员
 * TG频道群：https://t.me/iSharesubcribe
https://feel.wunitu.com/api/User/getUserInfo
[rewrite_local]
^https:\/\/feel\.wunitu\.com\/api\/User\/getUserInfo url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/feelFlow.js

[mitm]
hostname = feel.wunitu.com
*/

let response = {
  body: 'YwEcXuR4NIIgzmcnckN7G6zkcNjH1NE3sDJqA+cW75VFJNq7IQsx30vnn6huQJCtb8UpuxaVk+NREchR5QokZALUHVRm2Zn9mUcLsRPxofJkOyJVsfvzoywoGq4dEOFwXp5iHNh9+Z29UhdK2MhOpaw1gCuP7V3kNBDx3vQ/BxJzUGS8NmB1gFrBGAH0OCKzRbrvEkqWk0sw6X/IUEe6cmPpMPJ0rXChAyMRvJCATo942Wqq7FTL9x1edI8yh9CB7wVgKVBbWzQ50qv47Qz3oX6RiY/AFjU0fdOP7PgKmQ1ltvnWycvV3Hh6s7BM0aLoL/+BB4pRHhx+mWxuruTye4Y/FAGwTOf4S5u+ysaFQ9ft0CNzjKDDu4eTolNVdV4C6mD81euTC0KQS6X10VKajjHmNTgUHYwn9LFr4MEhQjDj1E/+S/qunPqdf9ITa472JwWubFuMTAAscqjkSnHEIcWZlOM6cS57Pgt5z/42OEjS6Vzhh/77rw4ySi5SMcb2tfzxr/Qd6aAOsacs64JBn6cWSMT+/ZrnobsCVRKsYOo/DKJElpDogbldFtwCCNOYJUYyAe8dksbUsF3hA2XFmsyRQsqBxFlDJizHcXl4yWtn7elwfRyM/Z3XL1x+/fUI2+a4WTYefHACOKNxBnO768YmuMncLDTmUmJsTS9ECA3vBhQaaN/DhEZWlI2MU2kir+IqowR3UBdphw0N2SNEsmI1kce6uqZM/UjLHo3iaPoJSX5yBs76lDaBKDd1X9+hZJ2agEpvIR9Ru/5RaLMzMyvha/MTVPbQ5t8qHK04aX6FdZwXBHaaj0bwuGQy0AYzppNnk6s1laAhsyjt+HM4b3P28fMKH3k+zzJwtHbs16ZjMLz3iGyNGiCryjRXFLwnIhmR9EQkvevErIxCm/2u4O2akg50MSa+DSEjIWNExo0x/n9TAQ0I6qdlQcbwI+/aPX0oVRN9todTP1IORcGGv99n9Ada/iqlV1KiLPUsjIKcqX2iQ0AC/LilygXG8Bh5UmlR/YOmPBnUKTm+Y6xAkEjP0PEz9gVMWBumIq8i8ityhP3yT3SqDhnASuuTn0sS',
};

$done({body: response.body});