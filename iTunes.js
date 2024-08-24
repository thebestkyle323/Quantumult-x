/*************************************

项目名称：iTunes-系列解锁合集
电报频道：https://t.me/ifantasticsgame
使用声明：⚠️仅供参考，🈲转载与售卖！
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/thebestkyle323/Quantumult-x/main/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var ifantasticsgame = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const bundle_id = ifantasticsgame.receipt["bundle_id"] || ifantasticsgame.receipt["Bundle_Id"];
const yearid = `${bundle_id}.year`;
const yearlyid = `${bundle_id}.yearly`;
const yearlysubscription = `${bundle_id}.yearlysubscription`;

const list = {
  'VDIT': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.videoday.profeaturesYearly", latest: "ifantasticsgame" }, //VDIT-视频转换
  'CodeSnippet': { cm: 'timea', hx: 'hxpda', id: "it.beatcode.codesnippetpro.annualSubscription", latest: "ifantasticsgame" }, //CodeSnippet
  'darkWeb': { cm: 'timea', hx: 'hxpda', id: "dforce_unlock_all_functions", latest: "ifantasticsgame" }, //DForce-Safari扩展
  'BookReader': { cm: 'timea', hx: 'hxpda', id: "com.reader.1year", latest: "ifantasticsgame" }, //阅读器-小说阅读器
  'BeatStation': { cm: 'timea', hx: 'hxpda', id: "BS_Pro_Yearly", latest: "ifantasticsgame" }, //BeatStation-节奏工作站
  'FastPlayer': { cm: 'timea', hx: 'hxpda', id: "VideoPlayer_ProVersion", latest: "ifantasticsgame" }, //万能播放器
  'SimpleNotation': { cm: 'timeb', hx: 'hxpda', id: "com.xinlin.notation.once", latest: "ifantasticsgame" }, //简谱大师
  'ChordMaster': { cm: 'timeb', hx: 'hxpda', id: "com.chordMaster.once", latest: "ifantasticsgame" }, //MusicTotor-识谱大师
  'Xfuse': { cm: 'timeb', hx: 'hxpda', id: "com.xfuse.ProVision", latest: "ifantasticsgame" }, //磁力宅播放器
  'com.BertonYc.ScannerOCR': { cm: 'timeb', hx: 'hxpda', id: "Scanner_Subscibe_Permanent", latest: "ifantasticsgame" }, //万能扫描王
  'HRV': { hx: 'hxpdc', id: "com.stress.test.record.yearly", latest: "ifantasticsgame" },  //解压小橘子(需试用)
  'iVCam': { cm: 'timeb', hx: 'hxpda', id: "ivcam.full", latest: "ifantasticsgame" },//iVCam-电脑摄像头
  'RBrowser': { cm: 'timea', hx: 'hxpda', id: "com.mm.RBroswer.product11", latest: "ifantasticsgame" }, //R浏览器(需试用)
  'VideoLab': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.VideoLab.IAP.PRO7999", latest: "ifantasticsgame" },//VideoLab
  'Filterra': { cm: 'timea', hx: 'hxpda', id: "com.filterra.wtonetimepurchase", latest: "ifantasticsgame" },//Filterra
  'MOLDIV': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.Moldiv.IAP.PRO7999", latest: "ifantasticsgame" },//MOLDIV
  'PICSPLAY': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.PicsPlay2.IAP.PRO5999", latest: "ifantasticsgame" },//PICSPLAY
  'Rookie': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.Rookie.IAP.PRO5999", latest: "ifantasticsgame" },//RKCAM
  'MoneyWiz': { cm: 'timea', hx: 'hxpda', id: "com.moneywiz.personalfinance.1year", latest: "ifantasticsgame" }, //MoneyWiz-个人财务
  'qxzs': { cm: 'timeb', hx: 'hxpda', id: "yongjiu", latest: "ifantasticsgame" },//心率广播
  'Overdrop': { cm: 'timeb', hx: 'hxpda', id: "com.weather.overdrop.forever", latest: "ifantasticsgame" }, //Overdrop-天气预报
  'Boom': { cm: 'timeb', hx: 'hxpda', id: "com.globaldelight.iBoom.LifetimeDiscountPack", latest: "ifantasticsgame" }, //Boom-感受音乐
  'PDFReaderPro%20Free': { cm: 'timeb', hx: 'hxpda', id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001", latest: "ifantasticsgame" }, //PDFReaderProFree
  'VideoHelper': { cm: 'timeb', hx: 'hxpda', id: "vip_service", latest: "ifantasticsgame" }, //媒关系
  'Digital%20Planner': { cm: 'timea', hx: 'hxpda', id: "com.softwings.DigitalPlanner.1year", latest: "ifantasticsgame" }, //电子手帐
  'SuperMandarin': { cm: 'timea', hx: 'hxpda', id: "pth_vip_year", latest: "ifantasticsgame" }, //普通话水平测试
  'SuperQuestion': { cm: 'timea', hx: 'hxpda', id: "qtzs_vip_year", latest: "ifantasticsgame" }, //真题全刷
  'SuperElves': { cm: 'timeb', hx: 'hxpda', id: "com.SuperElves.Answer.Forever", latest: "ifantasticsgame" }, //答案精灵
  'SuperDriving': { cm: 'timeb', hx: 'hxpda', id: "jiakao_vip_forever", latest: "ifantasticsgame" }, //驾考学典
  'Pollykann': { cm: 'timeb', hx: 'hxpda', id: "vip.forever.pollykann", latest: "ifantasticsgame" }, //小鹦看看
  'JCCalendar': { cm: 'timeb', hx: 'hxpda', id: "com.sjc.calendar.vip.lifelong", latest: "ifantasticsgame" }, //简约日历
  'com.yanxia.ChsMedical': { cm: 'timeb', hx: 'hxpda', id: "VIPUser", latest: "ifantasticsgame" }, //中医精华
  'SuperPointer': { cm: 'timeb', hx: 'hxpda', id: "com.SuperPointer.Location.Forever", latest: "ifantasticsgame" }, //海拔指南针
  'SnakeReader': { cm: 'timeb', hx: 'hxpda', id: "com.lyran.snakescanner.premium18", latest: "ifantasticsgame" }, //开卷阅读
  'FourthPPT': { cm: 'timeb', hx: 'hxpda', id: "com.FourthPPT.Mobile.Forever", latest: "ifantasticsgame" }, //PPT制作软件
  'OneExtractor': { cm: 'timeb', hx: 'hxpda', id: "com.OneExtractor.Video.Forever", latest: "ifantasticsgame" }, //视频提取器
  'com.Colin.Colors': { cm: 'timea', hx: 'hxpda', id: "com.colin.colors.annualVIP", latest: "ifantasticsgame" }, //搜图
  'PhotosSorter': { cm: 'timeb', hx: 'hxpda', id: "sorter.pro.ipa", latest: "ifantasticsgame" }, //Sorter-相册整理
  'intolive': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.intolive.proSubYearly", latest: "ifantasticsgame" }, //intolive-实况壁纸制作器
  'MyAlbum': { cm: 'timeb', hx: 'hxpda', id: "com.colin.myalbum.isUpgradeVip", latest: "ifantasticsgame" }, //Cleaner-照片管理
  'VideoEditor': { cm: 'timeb', hx: 'hxpda', id: "com.god.videohand.alwaysowner", latest: "ifantasticsgame" }, //VideoShot
  'PhotoMovie': { cm: 'timea', hx: 'hxpda', id: "com.mediaeditor.photomovie.year", latest: "ifantasticsgame" }, //PhotoMovie-照片视频
  'ShotOn': { cm: 'timeb', hx: 'hxpda', id: "com.colin.shoton.forevervip", latest: "ifantasticsgame" }, //ShotOn
  'PhimCiaj': { cm: 'timeb', hx: 'hxpda', id: "com.jiancent.calligraphymaster.lifetime", latest: "ifantasticsgame" }, //练字大师
  'TimeCut': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.hfrslowmotion.forevervip", latest: "ifantasticsgame" },  //TimeCut
  'com.floatcamellia.motiok': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.motiok.vipforever", latest: "ifantasticsgame" },  //Hype_Text-AE特效片制作
  'POPOLockScreenWidgetable': { cm: 'timea', hx: 'hxpda', id: "com.widget.fightenegery.yearly", latest: "ifantasticsgame" },  //多彩壁纸
  'GreetingScanner': { cm: 'timea', hx: 'hxpda', id: "com.alphaplus.greetingscaner.w.b", latest: "ifantasticsgame" },  //扫描识别王
  'FancyCamPlus': { cm: 'timea', hx: 'hxpda', id: "com.alphaplus.fancycam.year.198", latest: "ifantasticsgame" },  //悦颜相机
  'Again': { cm: 'timeb', hx: 'hxpda', id: "com.owen.again.profession", latest: "ifantasticsgame" },  //Again-稍后阅读器
  'remotelg': { cm: 'timeb', hx: 'hxpda', id: "com.gqp.remotelg.lifetime", latest: "ifantasticsgame" },  //UniversalRemoteTV+ 遥控器
  'Notebook': { cm: 'timea', hx: 'hxpda', id: "com.zoho.notebook.ios.personal.yearly", latest: "ifantasticsgame" },  //Notebook
  'com.damon.dubbing': { cm: 'timea', hx: 'hxpda', id: "com.damon.dubbing.vip12", latest: "ifantasticsgame" },  //有声英语绘本
  'ZHUBEN': { cm: 'timea', hx: 'hxpda', id: "com.xiaoyu.yue", latest: "ifantasticsgame" },  //有声英语绘本
  'XIAOTangHomeParadise': { cm: 'timea', hx: 'hxpda', id: "com.yuee.mo2", latest: "ifantasticsgame" },  //鸿海幼儿启蒙
  'film': { cm: 'timea', hx: 'hxpda', id: "pro_auto_subscribe_year_ovs", latest: "ifantasticsgame" },  //胶卷相机
  'Muza': { cm: 'timea', hx: 'hxpda', id: "com.appmuza.premium_year", latest: "ifantasticsgame" },  //Muza-修图APP
  'StandbyWidget': { cm: 'timed', hx: 'hxpda', id: "com.standby.idream.year.68", ids: "standbyus.nonconsume.missingyou", latest: "ifantasticsgame" },  //StandBy_Us-情侣定位
  'Mango6Minute': { cm: 'timea', hx: 'hxpda', id: "576170870", latest: "ifantasticsgame" },  //6分钟英语
  'Photo%20Cutout': { cm: 'timea', hx: 'hxpda', id: "com.icepine.allyear", latest: "ifantasticsgame" },  //轻松扣图
  'cleanPhone': { cm: 'timea', hx: 'hxpda', id: "com.clean.year", latest: "ifantasticsgame" },  //爱机清理
  'ppt': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.pptios.yearly", latest: "ifantasticsgame" },  //手机PPT制作
  'WasteCat': { cm: 'timeb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip", latest: "ifantasticsgame" },  //垃圾贪吃猫
  'MeowTalk': { cm: 'timea', hx: 'hxpda', id: "meowtalk.month.basic.autorenewable.subscription", latest: "ifantasticsgame" },  //喵说
  'habitdot': { cm: 'timeb', hx: 'hxpda', id: "habitdots_pro_forever", latest: "ifantasticsgame" },  //习惯点点
  'stretchworkout': { cm: 'timea', hx: 'hxpda', id: "com.abishkking.premiumYearStretch", latest: "ifantasticsgame" },  //拉伸运动
  'Planist': { cm: 'timed', hx: 'hxpda', id: "org.zrey.planist.main", ids: "org.zrey.planist.lifetime", latest: "ifantasticsgame" },  //Planist
  'com.uzstudio.avenuecast.ios': { cm: 'timeb', hx: 'hxpda', id: "1001", latest: "ifantasticsgame" },  //凡视知音
  'CongZhenBaZi': { cm: 'timeb', hx: 'hxpda', id: "vip_forever_78", latest: "ifantasticsgame" },  //八字排盘-从真版
  'CongZhenQiMen': { cm: 'timea', hx: 'hxpda', id: "cn.congzhen.CongZhenQiMen.yearlyplan", latest: "ifantasticsgame" },  //奇门遁甲
  'ProFit': { cm: 'timea', hx: 'hxpda', id: "com.maxty.gofitness.yearlyplan", latest: "ifantasticsgame" },  //ProFit锻炼计划
  'FitnessBodybuildingVGFIT': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.fitnessvip.yearly", latest: "ifantasticsgame" },  //fitnessvip
  'Water%20Reminder': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.premiumtracker.year", latest: "ifantasticsgame" },  //WaterReminder水提醒
  '%E7%91%9C%E4%BC%BD': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.yoga.yearly", latest: "ifantasticsgame" },  //瑜伽
  'GPSMaker': { cm: 'timea', hx: 'hxpda', id: "theodolite_vip_year", latest: "ifantasticsgame" },  //指南针定位
  'wrongbook': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.wrongbookios.yearly", latest: "ifantasticsgame" },  //错题宝
  'excel': { cm: 'timea', hx: 'hxpda', id: "com.gamawh.excelerios.yearly", latest: "ifantasticsgame" },  //办公文档
  'Future%20Baby': { cm: 'timea', hx: 'hxpda', id: "com.nilu.faceseer.yearly", latest: "ifantasticsgame" },  //宝宝长相预测
  'Smoke': { cm: 'timea', hx: 'hxpda', id: "smoke19870727", latest: "ifantasticsgame" },  //今日香烟
  'com.wms.hrv': { cm: 'timea', hx: 'hxpda', id: "com.wms.hrv.pro", latest: "ifantasticsgame" },  //ECG+
  'AppAlarmIOS': { cm: 'timea', hx: 'hxpda', id: "alarm.me.vip.year.tier1", latest: "ifantasticsgame" },  //Me+
  'Tinglee': { cm: 'timea', hx: 'hxpdb', id: "vip.forever.tinglee", latest: "ifantasticsgame" },  //英语听听
  'NoteKeys': { cm: 'timea', hx: 'hxpda', id: "notekeys_access_weekly", latest: "ifantasticsgame" },  //五线谱
  'SheetMusicPro': { cm: 'timea', hx: 'hxpda', id: "sheetmusicpro.yearwithtrial", latest: "ifantasticsgame" },  //乐谱吧
  'ProtractorEdge': { cm: 'timea', hx: 'hxpda', id: "ProtracatorEdge.PremiumAccess", latest: "ifantasticsgame" },  //量角器
  'Piano%20Plus': { cm: 'timea', hx: 'hxpda', id: "kn_access_weekly", latest: "ifantasticsgame" },  //Piano Plus
  'Notation%20Pad': { cm: 'timea', hx: 'hxpda', id: "np_access_weekly", latest: "ifantasticsgame" },  //Notation Pad
  'Guitar%20Notation': { cm: 'timea', hx: 'hxpda', id: "gn_access_weekly", latest: "ifantasticsgame" },  //Guitar Notation
  'Piano%20Fantasy': { cm: 'timea', hx: 'hxpda', id: "com.lotuz.PianoFantasy.weekwithtrail", latest: "ifantasticsgame" },  //钢琴幻想
  'Piano%20Rush': { cm: 'timea', hx: 'hxpda', id: "com.lotuz.PianoPro.weekwithtrail", latest: "ifantasticsgame" },  //钢琴大师
  'com.richads.saucyart': { cm: 'timea', hx: 'hxpda', id: "com.richads.saucyart.sub.quarterly_29.99", latest: "ifantasticsgame" },  //Perky
  'SurveyorPro': { cm: 'timea', hx: 'hxpda', id: "com.celiangyuan.SurveyorPro.OneYear", latest: "ifantasticsgame" },  //测量员Pro
  'com.ydatong.dingdone': { cm: 'timeb', hx: 'hxpda', id: "com.ydatong.dingdone.vip.forever", latest: "ifantasticsgame" },  //叮当代办
  'Dial': { cm: 'timea', hx: 'hxpda', id: "2104", latest: "ifantasticsgame" },  //T9拨号
  'qxwp%20copy': { cm: 'timea', hx: 'hxpda', id: "com.chowjoe.wp2free.year.pro", latest: "ifantasticsgame" },  //壁纸
  'LingLongShouZ': { cm: 'timea', hx: 'hxpda', id: "zhenwushouzhangQuarterlyPlus", latest: "ifantasticsgame" },  //Cute手帐软件
  'MediaEditor': { cm: 'timeb', hx: 'hxpda', id: "alwaysowner", latest: "ifantasticsgame" },  //剪影(需试用)
  'UniversTranslate': { cm: 'timea', hx: 'hxpda', id: "com.univers.translator.tool.year", latest: "ifantasticsgame" },  //翻译官(需试用)
  'com.gostraight.smallAccountBook': { cm: 'timeb', hx: 'hxpda', id: "ForeverVIPPayment", latest: "ifantasticsgame" },  //iCost记账(需要购买)
  'ZJTBiaoGe': { cm: 'timea', hx: 'hxpda', id: "zhangjt.biaoge.monthvip", latest: "ifantasticsgame" },  //表格手机版
  'MiniMouse': { cm: 'timea', hx: 'hxpda', id: "minimouse_vip_1year", latest: "ifantasticsgame" },  //MiniMouse
  'Paste%20Keyboard': { cm: 'timea', hx: 'hxpda', id: "com.keyboard.1yetr", latest: "ifantasticsgame" },  //复制和粘贴键盘
  'EWA': { cm: 'timea', hx: 'hxpda', id: "com.ewa.renewable.subscription.year8", latest: "ifantasticsgame" },  //EWA-学习外语
  'BuBuSZ': { cm: 'timea', hx: 'hxpda', id: "quaVersion", latest: "ifantasticsgame" },  //BuBu手帐
  'CapyMood': { cm: 'timea', hx: 'hxpda', id: "com.paha.CapyMood.year", latest: "ifantasticsgame" },  //CapyMood
  'xyz.iofree.lifenotes': { cm: 'timea', hx: 'hxpda', id: "xyz.iofree.lifelog.pro.yearly", latest: "ifantasticsgame" },  //人生笔记(需试用)
  'com.icandiapps.nightsky': { cm: 'timea', hx: 'hxpda', id: "com.icandiapps.ns4.annual", latest: "ifantasticsgame" },  //星空
  'Wallpapers': { cm: 'timea', hx: 'hxpda', id: "wallpaperworld.subscription.yearly.12.notrial", latest: "ifantasticsgame" },  //Wallpaper Tree壁纸
  'com.yumiteam.Kuki.ID': { cm: 'timea', hx: 'hxpda', id: "com.yumiteam.Kuki.ID.2", latest: "ifantasticsgame" },  //PicsLeap-美飞
  'com.quangtm193.picpro': { cm: 'timea', hx: 'hxpda', id: "com.quangtm193.picpro1year", latest: "ifantasticsgame" },  //PicPro-人工智能照片编辑器
  'Storybeat': { cm: 'timea', hx: 'hxpda', id: "yearly_1", latest: "ifantasticsgame" },  //Storybeat
  'com.smartgymapp.smartgym': { cm: 'timea', hx: 'hxpda', id: "com.smartgymapp.smartgym.premiumpersonaltraineryearly", latest: "ifantasticsgame" },  //SmartGym
  'Ptime': { cm: 'timea', hx: 'hxpda', id: "com.subscribe.pro.year", latest: "ifantasticsgame" },  //Ptime-拼图(需试用)
  'Prookie': { cm: 'timea', hx: 'hxpda', id: "prookie.month.withtrial.0615", latest: "ifantasticsgame" },  //AI灵绘
  'BodyTune': { cm: 'timea', hx: 'hxpda', id: "Bodypro1", latest: "ifantasticsgame" },  //BodyTune-瘦身相机
  'com.eleven.chatgpt': { cm: 'timea', hx: 'hxpda', id: "com.eleven.chatgpt.yearly", latest: "ifantasticsgame" },  //ChatAI
  'Caculator': { cm: 'timea', hx: 'hxpda', id: "calc_Unlock_1", latest: "ifantasticsgame" },  //计算器+
  'killer.sudoku.free.brain.puzzle': { cm: 'timea', hx: 'hxpda', id: "ks.i.iap.premium", latest: "ifantasticsgame" },  //杀手数独
  'sudoku.puzzle.free.game.brain': { cm: 'timea', hx: 'hxpda', id: "sudoku.i.sub.vvip.p1y", latest: "ifantasticsgame" },  //数独
  'One%20Markdown': { cm: 'timeb', hx: 'hxpda', id: "10012", latest: "ifantasticsgame" },  //One Markdown
  'MWeb%20iOS': { cm: 'timeb', hx: 'hxpda', id: "10001", latest: "ifantasticsgame" },  //MWeb-编辑器/笔记/发布
  'NYMF': { cm: 'timea', hx: 'hxpda', id: "com.nymf.app.premium_year", latest: "ifantasticsgame" },  //Nymf艺术照片
  'com.lockwidt.cn': { cm: 'timea', hx: 'hxpda', id: "com.lockwidt.cn.member", latest: "ifantasticsgame" },  //壁纸16
  'Utsuki': { cm: 'timea', hx: 'hxpda', id: "KameePro", latest: "ifantasticsgame" },  //梦见账本
  'Processing': { cm: 'timeb', hx: 'hxpda', id: "wtf.riedel.processing.lifetime", latest: "ifantasticsgame" },  //Processing-软件开发工具
  'one%20sec': { cm: 'timea', hx: 'hxpda', id: "wtf.riedel.one_sec.pro.annual.individual", latest: "ifantasticsgame" },  //one sec-番茄钟
  'com.skysoft.pencilsketch': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.pencilsketch.subscription.yearly", latest: "ifantasticsgame" },  //铅笔画(需试用)
  'com.instagridpost.rsigp': { cm: 'timea', hx: 'hxpda', id: "com.GridPost.oneyearplus", latest: "ifantasticsgame" },  //九宫格切图
  'com.skysoft.picsqueen': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.picsqueen.subscription.yearly", latest: "ifantasticsgame" },  //PicsQueen-AI绘图
  'com.skysoft.removalfree': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.removalfree.subscription.yearly3", latest: "ifantasticsgame" },  //神奇消除笔-图片消除
  'com.skysoft.facecartoon': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.facecartoon.subscription.yearly", latest: "ifantasticsgame" },  //卡通头像
  'Jennie%20AI': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.text2img.vip.yearly", latest: "ifantasticsgame" },  //Jennie AI制作图片
  'MGhostLens': { cm: 'timea', hx: 'hxpda', id: "com.ghostlens.premium1month", latest: "ifantasticsgame" },  //魔鬼相机
  'Luminous': { cm: 'timea', hx: 'hxpda', id: "com.spacemushrooms.weekly", latest: "ifantasticsgame" },  //光影修图
  'RitmoVideo': { cm: 'timea', hx: 'hxpda', id: "com.zhk.hidebox.yearly", latest: "ifantasticsgame" },  //RitmoVideo
  'PerfectImage': { cm: 'timea', hx: 'hxpda', id: "Perfect_Image_VIP_Yearly", latest: "ifantasticsgame" },  //完美影像(需试用)
  'moment': { cm: 'timea', hx: 'hxpda', id: "PYJMoment2", latest: "ifantasticsgame" },  //片羽集(需试用)
  'Planner%20Plus': { cm: 'timea', hx: 'hxpda', id: "com.btgs.plannerfree.yearly", latest: "ifantasticsgame" },  //PlannerPro-日程安排
  'HiddenBox': { cm: 'timec', hx: 'hxpdb', version: "1" },//我的书橱
  'Synthesizer': { cm: 'timea', hx: 'hxpda', id: "com.qingxiu.synthesizer.mon", latest: "ifantasticsgame" },  //语音合成
  'ContractMaster': { cm: 'timea', hx: 'hxpda', id: "com.qingxiu.contracts.monthly", latest: "ifantasticsgame" },  //印象全能王
  'MyDiary': { cm: 'timea', hx: 'hxpda', id: "diary.yearly.vip.1029", latest: "ifantasticsgame" },  //我的日记
  'Translator': { cm: 'timea', hx: 'hxpda', id: "trans_sub_week", latest: "ifantasticsgame" },  //翻译家
  'ToDoList': { cm: 'timea', hx: 'hxpda', id: "todolist.subscription.yearly", latest: "ifantasticsgame" },  //ToDoList(需试用)
  'Idea': { cm: 'timea', hx: 'hxpda', id: "top.ideaapp.ideaiOS.membership.oneyear", latest: "ifantasticsgame" },  //灵感(需试用)
  'ZeroTuImg': { cm: 'timea', hx: 'hxpda', id: "ZeroTuImgPlus", latest: "ifantasticsgame" },  //Zero壁纸
  'com.traveltao.ExchangeAssistant': { cm: 'timea', hx: 'hxpda', id: "lxbyplus", latest: "ifantasticsgame" },  //极简汇率(需试用)
  'ServerKit': { cm: 'timea', hx: 'hxpda', id: "com.serverkit.subscription.year.a", latest: "ifantasticsgame" },  //服务器助手
  'RawPlus': { cm: 'timea', hx: 'hxpda', id: "com.dynamicappdesign.rawplus.yearlysubscription", latest: "ifantasticsgame" },  //Raw相机
  'OrderGenerator': { cm: 'timeb', hx: 'hxpda', id: "oder_pay_forever", latest: "ifantasticsgame" },  //订单生成
  'GenerateAllOrdersTool': { cm: 'timea', hx: 'hxpda', id: "Order_Vip_010", latest: "ifantasticsgame" },  //订单生成器(需试用)
  'MoMoShouZhang': { cm: 'timea', hx: 'hxpda', id: "shunchangshouzhangQuarterlyPlus", latest: "ifantasticsgame" },  //卡卡手账(需试用)
  'Mindkit': { cm: 'timeb', hx: 'hxpda', id: "mindkit_permanently", latest: "ifantasticsgame" },  //Mindkit
  'DailySpending': { cm: 'timea', hx: 'hxpda', id: "com.xxtstudio.dailyspending.year", latest: "ifantasticsgame" },  //Daily记账
  'Miary': { cm: 'timeb', hx: 'hxpda', id: "lifetime_sub", latest: "ifantasticsgame" },  //Miary-记录日记
  'Noted': { cm: 'timeb', hx: 'hxpda', id: "com.digitalworkroom.noted.plus.lifetime", latest: "ifantasticsgame" },  //Noted-录音笔记软件
  'BingQiTools': { cm: 'timea', hx: 'hxpda', id: "bingqi_e2", latest: "ifantasticsgame" },  //猫狗翻译
  'AnyDown': { cm: 'timeb', hx: 'hxpda', id: "com.xiaoqi.down.forever", latest: "ifantasticsgame" },  //AnyDown-下载神器
  'Reader': { cm: 'timeb', hx: 'hxpda', id: "com.xiaoqi.reader.forever", latest: "ifantasticsgame" },  //爱阅读-TXT阅读器
  'com.bestmusicvideo.formmaster': { cm: 'timea', hx: 'hxpda', id: "com.form.1yearvip", latest: "ifantasticsgame" },  //表格大师
  'ExcelSpreadSheetsWPS': { cm: 'timea', hx: 'hxpda', id: "com.turbocms.SimpleSpreadSheet.viponeyear", latest: "ifantasticsgame" },  //简易表格(需试用)
  'XinQingRiJi': { cm: 'timea', hx: 'hxpda', id: "zhiwenshouzhangQuarterlyPlus", latest: "ifantasticsgame" },  //猫咪手帐(需试用)
  'Nutrilio': { cm: 'timea', hx: 'hxpda', id: "net.nutrilio.one_year_plus", latest: "ifantasticsgame" },  //Nutrilio
  'Pixiu%E8%AE%B0%E8%B4%A6': { cm: 'timea', hx: 'hxpda', id: "com.RuoG.Pixiu.VIPYear", latest: "ifantasticsgame" },  //貔貅记账
  'AIHeader': { cm: 'timea', hx: 'hxpda', id: "com.ai.avatar.maker.month.3dayfree", latest: "ifantasticsgame" },  //AI头像馆
  'MoodTracker': { cm: 'timeb', hx: 'hxpda', id: "co.vulcanlabs.moodtracker.lifetime2", latest: "ifantasticsgame" },  //ChatSmith(美区)
  'com.dandelion.Routine': { cm: 'timeb', hx: 'hxpda', id: "membership", latest: "ifantasticsgame" },  //小日常
  'YSBrowser': { cm: 'timeb', hx: 'hxpda', id: "com.ys.pro", latest: "ifantasticsgame" },  //亚瑟浏览器
  'org.zrey.metion': { cm: 'timed', hx: 'hxpda', id: "org.zrey.metion.pro", ids: "org.zrey.metion.main", latest: "ifantasticsgame" },  //Metion-基础+Pro
  'ZenJournal': { cm: 'timea', hx: 'hxpda', id: "zen_pro", latest: "ifantasticsgame" },  //禅记
  '%E5%80%92%E6%94%BE%E6%8C%91%E6%88%98': { cm: 'timea', hx: 'hxpda', id: "com.abighead.ReverseChallenge.iap.pro.year", latest: "ifantasticsgame" },  //倒放挑战
  'com.visualmidi.app.perfectpiano.Perfect-Piano': { cm: 'timea', hx: 'hxpda', id: "auto_renew_monthly_subscription", latest: "ifantasticsgame" },  //完美钢琴
  'Straw': { cm: 'timea', hx: 'hxpda', id: "com.1year.eyedropper", latest: "ifantasticsgame" },  //吸管Pro-取色
  'vibee': { cm: 'timea', hx: 'hxpda', id: "com.vibee.year.bigchampagne", latest: "ifantasticsgame" },  //vibee-氛围歌单小组件
  'Lister': { cm: 'timea', hx: 'hxpda', id: "com.productlab.lister.yearly", latest: "ifantasticsgame" },  //Lister-计划清单
  'DrumPads': { cm: 'timeb', hx: 'hxpda', id: "com.gismart.drumpads.pro_lifetime_30", latest: "ifantasticsgame" },  //BeatMakerGo-打碟机/打击垫/DJ鼓机
  'com.photoslab.ai.writerassistant': { cm: 'timea', hx: 'hxpda', id: "com.photoslab.ai.writerassistant.year", latest: "ifantasticsgame" },  //Smart AI
  'WaterMaskCamera': { cm: 'timea', hx: 'hxpda', id: "com.camera.watermark.yearly.3dayfree", latest: "ifantasticsgame" },  //徕卡水印相机
  'ColorPaint': { cm: 'timea', hx: 'hxpda', id: "coloring.app.singingfish.year", latest: "ifantasticsgame" },  //涂色
  'SymbolKeyboard': { cm: 'timeb', hx: 'hxpda', id: "fronts.keyboard.singingfish.one", latest: "ifantasticsgame" },  //Fonts花样字体
  'com.SingingFish.SudokuGame': { cm: 'timea', hx: 'hxpda', id: "com.singingfish.sudokugame.year", latest: "ifantasticsgame" },  //数独
  'com.kuaijiezhilingdashi.appname': { cm: 'timea', hx: 'hxpda', id: "com.othermaster.yearlyvip", latest: "ifantasticsgame" },  //快捷指令库
  'LogInput': { cm: 'timea', hx: 'hxpda', id: "com.logcg.loginput", latest: "ifantasticsgame" },  //落格输入法
  'SoundLab': { cm: 'timea', hx: 'hxpda', id: "8800", latest: "ifantasticsgame" },  //合声
  'Kilonotes': { cm: 'timea', hx: 'hxpda', id: "kipa_kilonotes_quarter_subscription", latest: "ifantasticsgame" },  //千本笔记
  'YiJianKouTu': { cm: 'timea', hx: 'hxpda', id: "XiChaoYiJianKouTuPlus", latest: "ifantasticsgame" },  //一键抠图
  'FileArtifact': { cm: 'timea', hx: 'hxpda', id: "com.shengzhou.fileartifact.year", latest: "ifantasticsgame" },  //文晓生
  'Wext': { cm: 'timeb', hx: 'hxpda', id: "com.lmf.wext.life", latest: "ifantasticsgame" },  //万源阅读
  'ColorCapture': { cm: 'timeb', hx: 'hxpda', id: "10001", latest: "ifantasticsgame" },  //色采
  'xTerminal': { cm: 'timea', hx: 'hxpda', id: "xterminal.pro2", latest: "ifantasticsgame" },  //xTerminal
  'Fotoz': { cm: 'timeb', hx: 'hxpda', id: "com.kiddy.fotoz.ipa.pro", latest: "ifantasticsgame" },  //Fotoz
  'TheLastFilm': { cm: 'timea', hx: 'hxpda', id: "Filmroll_Pro_1Year", latest: "ifantasticsgame" },  //最后一卷胶片(需订阅一次)
  'Motivation': { cm: 'timea', hx: 'hxpda', id: "com.monkeytaps.motivation.premium.year3", latest: "ifantasticsgame" },  //Motivation
  'io.sumi.GridDiary2': { cm: 'timea', hx: 'hxpda', id: "io.sumi.GridDiary.pro.annually", latest: "ifantasticsgame" },  //格志
  'Subscriptions': { cm: 'timea', hx: 'hxpda', id: "com.touchbits.subscriptions.iap.pro.yearly", latest: "ifantasticsgame" },  //订阅通
  'com.leapfitness.fasting': { cm: 'timea', hx: 'hxpda', id: "com.leapfitness.fasting.oneyear1", latest: "ifantasticsgame" },  //168轻断食
  'WidgetBox': { cm: 'timeb', hx: 'hxpda', id: "widgetlab001", latest: "ifantasticsgame" },  //小组件盒子
  'LifeTracker': { cm: 'timea', hx: 'hxpda', id: "com.dk.lifetracker.yearplan", latest: "ifantasticsgame" },  //Becord生活记录
  'imgplay': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.imgplay.subscriptionYearly", latest: "ifantasticsgame" },  //imgPlay
  'WaterMinder': { cm: 'timea', hx: 'hxpda', id: "waterminder.premiumYearly", latest: "ifantasticsgame" },  //WaterMinder喝水APP
  'HashPhotos': { cm: 'timeb', hx: 'hxpda', id: "com.kobaltlab.HashPhotos.iap.allinone.free", latest: "ifantasticsgame" },  //HashPhotos
  'FileBrowser': { cm: 'timea', hx: 'hxpda', id: "com.qingcheng.filex.pro.yearly", latest: "ifantasticsgame" },  //松鼠下载
  'SilProject': { cm: 'timea', hx: 'hxpda', id: "com.sm.Alina.Pro", latest: "ifantasticsgame" },  //Alina米克锁屏—
  'com.chenxi.shanniankapian': { cm: 'timea', hx: 'hxpda', id: "com.chenxi.shannian.superNian", latest: "ifantasticsgame" },  //闪念
  'com.risingcabbage.pro.camera': { cm: 'timea', hx: 'hxpda', id: "com.risingcabbage.pro.camera.yearlysubscription", latest: "ifantasticsgame" },  //ReLens相机
  'co.bazaart.patternator': { cm: 'timea', hx: 'hxpda', id: "Patternator_Lock_Screen_Monthly", latest: "ifantasticsgame" },  //拍特内头
  '%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88': { cm: 'timea', hx: 'hxpda', id: "com.winat.recording.pro.yearly", latest: "ifantasticsgame" },  //录音专业版
  'cn.linfei.SimpleRecorder': { cm: 'timea', hx: 'hxpda', id: "cn.linfei.SimpleRecorder.Plus", latest: "ifantasticsgame" },  //录音机
  'com.maliquankai.appdesign': { cm: 'timec', hx: 'hxpdb', version: "1.5.8" },  //PutApp-应用收集
  'PictureScanner': { cm: 'timea', hx: 'hxpda', id: "om.picturescanner.tool.year", latest: "ifantasticsgame" },  //扫描王
  'BestColor': { cm: 'timea', hx: 'hxpda', id: "com.bestColor.tool.month", latest: "ifantasticsgame" },  //小红图
  'com.decibel.tool': { cm: 'timea', hx: 'hxpda', id: "decibel98free3", latest: "ifantasticsgame" },  //分贝测试仪
  'MeasurementTools': { cm: 'timea', hx: 'hxpda', id: "mesurementyearvip", latest: "ifantasticsgame" },  //测量工具
  'TinyPNGTool': { cm: 'timea', hx: 'hxpda', id: "com.tinypngtool.tool.weekvip", latest: "ifantasticsgame" },  //TinyPNG
  'IconChange': { cm: 'timea', hx: 'hxpda', id: "iconeryearvip", latest: "ifantasticsgame" },  //iconser图标更换
  'life.journal.diary': { cm: 'timeb', hx: 'hxpda', id: "life.journal.diary.lifetime", latest: "ifantasticsgame" },  //Today日记
  'com.floatcamellia.motionninja': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.motionninja.yearlyvip", latest: "ifantasticsgame" },  //MotionNinja
  'com.iuuapp.audiomaker': { cm: 'timea', hx: 'hxpda', id: "com.iuuapp.audiomaker.removeads.year", latest: "ifantasticsgame" },  //音频剪辑
  'com.biggerlens.photoretouch': { cm: 'timeb', hx: 'hxpda', id: "com.photoretouch.SVIP", latest: "ifantasticsgame" },  //PhotoRetouch消除笔P图
  'com.macpaw.iosgemini': { cm: 'timea', hx: 'hxpda', id: "com.macpaw.iosgemini.month.trial", latest: "ifantasticsgame" },  //GeminiPhotos
  'com.mematom.ios': { cm: 'timea', hx: 'hxpda', id: "MMYear", latest: "ifantasticsgame" },  //年轮3
  'com.LuoWei.aDiary': { cm: 'timea', hx: 'hxpda', id: "com.LuoWei.aDiary.yearly0", latest: "ifantasticsgame" },  //aDiary-待办日记本
  'com.zerone.hidesktop': { cm: 'timeb', hx: 'hxpda', id: "com.zerone.hidesktop.forever", latest: "ifantasticsgame" },  //iScreen-桌面小组件主题美化
  'MagicWidget': { cm: 'timea', hx: 'hxpda', id: "com.sm.widget.Pro", latest: "ifantasticsgame" },  //ColorfulWidget—小组件
  'com.tasmanic.capture': { cm: 'timea', hx: 'hxpda', id: "CTPCAPTUREYEARLY", latest: "ifantasticsgame" },  //3DScanner-绘制/测量平面图
  'com.readdle.CalendarsLite': { cm: 'timea', hx: 'hxpda', id: "com.readdle.CalendarsLite.subscription.year20trial7", latest: "ifantasticsgame" },  //Calendars-日历/计划
  'com.readdle.ReaddleDocsIPad': { cm: 'timea', hx: 'hxpda', id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers", latest: "ifantasticsgame" },  //Documents
  'com.1ps.lovetalk': { cm: 'timea', hx: 'hxpda', id: "com.1ps.lovetalk.normal.weekly", latest: "ifantasticsgame" },  //高级恋爱话术
  'tech.miidii.MDClock': { cm: 'timeb', hx: 'hxpda', id: "tech.miidii.MDClock.pro", latest: "ifantasticsgame" },  //谜底时钟
  'com.floatcamellia.prettyup': { cm: 'timeb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onetimepurchase", latest: "ifantasticsgame" },  //PrettyUp视频P图
  'com.zijayrate.analogcam': { cm: 'timea', hx: 'hxpda', id: "com.zijayrate.analogcam.vipforever10", latest: "ifantasticsgame" },  //oldroll复古相机
  'WeeklyNote': { cm: 'timea', hx: 'hxpda', id: "org.zrey.weeklynote.yearly", latest: "ifantasticsgame" },  //WeeklyNote(周周记)
  'DoMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.fastnote.yearly", latest: "ifantasticsgame" },  //DoMemo
  'CostMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.money.yearly", latest: "ifantasticsgame" },  //CostMemo
  'iTimely': { cm: 'timea', hx: 'hxpda', id: "org.zrey.iTimely.yearly", latest: "ifantasticsgame" },  //iTimely
  'net.daylio.Daylio': { cm: 'timea', hx: 'hxpda', id: "net.daylio.one_year_pro.offer_initial", latest: "ifantasticsgame" },  //Daylio-日记
  'com.yengshine.webrecorder': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.webrecorder.yearly", latest: "ifantasticsgame" },  //VlogStar-视频编辑器
  'org.skydomain.foodcamera': { cm: 'timea', hx: 'hxpda', id: "org.skydomain.foodcamera.yearly", latest: "ifantasticsgame" },  //Koloro-滤镜君
  'com.yengshine.proccd': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.proccd.yearly", latest: "ifantasticsgame" },  //ProCCD相机
  'com.palmmob.pdfios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.pdfios.168", latest: "ifantasticsgame" },  //图片PDF转换器
  'com.palmmob.scanner2ios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.scanner2ios.396", latest: "ifantasticsgame" },  //文字扫描
  'com.palmmob.officeios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.officeios.188", latest: "ifantasticsgame" },  //文档表格编辑
  'com.palmmob.recorder': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.recorder.198", latest: "ifantasticsgame" },  //录音转文字
  'com.7color.newclean': { cm: 'timea', hx: 'hxpda', id: "com.cleaner.salesyear", latest: "ifantasticsgame" },  //手机清理
  'Habbit': { cm: 'timea', hx: 'hxpda', id: "HabitUpYearly", latest: "ifantasticsgame" },  //习惯清单
  'com.dbmeterpro.dB-Meter-Free': { cm: 'timea', hx: 'hxpda', id: "com.dbmeterpro.premiumModeSubscriptionWithTrial", latest: "ifantasticsgame" },  //dBMeter-分贝仪(专业版)
  'com.vstudio.newpuzzle': { cm: 'timea', hx: 'hxpda', id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99", latest: "ifantasticsgame" },  //拼图酱
  'com.jianili.Booka': { cm: 'timea', hx: 'hxpda', id: "com.jianili.Booka.pro.yearly", latest: "ifantasticsgame" },  //Booka-极简书房
  'com.ziheng.OneBox': { cm: 'timeb', hx: 'hxpda', id: "com.ziheng.OneBox", latest: "ifantasticsgame" },  //Pandora管理订阅
  'ChickAlarmClock': { cm: 'timea', hx: 'hxpda', id: "com.ChickFocus.ChickFocus.yearly_2023_promo", latest: "ifantasticsgame" },  //小鸡专注
  'MyWorks': { cm: 'timea', hx: 'hxpda', id: "com.MyWorks.Handwritten.Year", latest: "ifantasticsgame" },  //仿手写
  'Instant%20Saver': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "ifantasticsgame" },  //InstantSocialSaver(ins下载)
  'SaveTik': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "ifantasticsgame" },  //SaveTik
  '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.files.yearly", latest: "ifantasticsgame" },  //文件管理器
  'ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.zipfile.yearly", latest: "ifantasticsgame" },  //ZIP压缩解压
  'TPTeleprompter': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "ifantasticsgame" },  //爱提词
  'com.pocket.photo': { cm: 'timea', hx: 'hxpda', id: "com.pocket.photo.yearly", latest: "ifantasticsgame" },  //一寸证件照
  'com.pocket.watermark': { cm: 'timea', hx: 'hxpda', id: "com.pocket.watermark.yearly", latest: "ifantasticsgame" },  //一键水印
  'com.pocket.compress': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "ifantasticsgame" },  //压缩软件
  'com.pocket.format': { cm: 'timea', hx: 'hxpda', id: "com.pocket.format.yearly", latest: "ifantasticsgame" },  //格式转换
  'com.CalculatorForiPad.InternetRocks': { cm: 'timea', hx: 'hxpda', id: "co.airapps.calculator.year", latest: "ifantasticsgame" },  //计算器Air
  'solutions.wzp': { cm: 'timea', hx: 'hxpda', id: yearlysubscription, latest: "ifantasticsgame" },  //airapps
  'co.airapps': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "ifantasticsgame" },  //airapps
  'com.internet-rocks': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "ifantasticsgame" },  //airapps
  'SuperWidget': { cm: 'timea', hx: 'hxpda', id: "com.focoslive", latest: "ifantasticsgame" },  //PandaWidget小组件
  'Picsew': { cm: 'timeb', hx: 'hxpdb', id: "com.sugarmo.ScrollClip.pro"},  //Picsew截长图3.9.4版本(最新版无效)
  'vpn': { cm: 'timea', hx: 'hxpda', id: "yearautorenew", latest: "ifantasticsgame" },  //VPN-unlimited
  'TT': { cm: 'timea', hx: 'hxpda', id: "com.55panda.hicalculator.year_sub", latest: "ifantasticsgame" },  //TT_私密相册管家
  'Focos': { cm: 'timea', hx: 'hxpda', id: "com.focos.1w_t4_1w", latest: "ifantasticsgame" },  //Focos
  'ProKnockOut': { cm: 'timeb', hx: 'hxpda', id: "com.knockout.SVIP.50off", latest: "ifantasticsgame" },  //ProKnockOut
  'com.teadoku.flashnote': { cm: 'timea', hx: 'hxpda', id: "pro_ios_ipad_mac", latest: "ifantasticsgame" },  //AnkiNote
  'com.tapuniverse.texteditor': { cm: 'timea', hx: 'hxpda', id: "com.tapuniverse.texteditor.w", latest: "ifantasticsgame" }  //TextEditor
};

//内购数据变量
const receipt = { "quantity": "1", "purchase_date_ms": "1694250549000", "is_in_intro_offer_period": "false", "transaction_id": "490001314520000", "is_trial_period": "false", "original_transaction_id": "490001314520000", "purchase_date": "2023-09-09 09:09:09 Etc/GMT", "product_id": yearlyid, "original_purchase_date_pst": "2023-09-09 02:09:10 America/Los_Angeles", "in_app_ownership_type": "PURCHASED", "original_purchase_date_ms": "1694250550000", "web_order_line_item_id": "490000123456789", "purchase_date_pst": "2023-09-09 02:09:09 America/Los_Angeles", "original_purchase_date": "2023-09-09 09:09:10 Etc/GMT" };
const expirestime = { "expires_date": "2099-09-09 09:09:09 Etc/GMT", "expires_date_pst": "2099-09-09 06:06:06 America/Los_Angeles", "expires_date_ms": "4092599349000", };
let anchor = false;
let data;

// 核心内容处理
for (const i in list) {
  const regex = new RegExp(`^${i}`, `i`);
  if (regex.test(ua) || regex.test(bundle_id)) {
    const { cm, hx, id, ids, latest, version } = list[i];
    const receiptdata = Object.assign({}, receipt, { "product_id": id });
    //处理数据
    switch (cm) {
      case 'timea':
        data = [ Object.assign({}, receiptdata, expirestime)];
        break;
      case 'timeb':
        data = [receiptdata];
        break;
      case 'timec':
        data = [];
        break;
      case 'timed':
        data = [
          Object.assign({}, receiptdata, { "product_id": ids }),
          Object.assign({}, receiptdata, expirestime, { "product_id": id })
        ];
        break;
    }
    //处理核心收尾
    if (hx.includes('hxpda')) {
      ifantasticsgame["receipt"]["in_app"] = data;
      ifantasticsgame["latest_receipt_info"] = data;
      ifantasticsgame["pending_renewal_info"] = [{ "product_id": id, "original_transaction_id": "490001314520000", "auto_renew_product_id": id, "auto_renew_status": "1" }];
      ifantasticsgame["latest_receipt"] = latest;
    }
    else if (hx.includes('hxpdb')) {
      ifantasticsgame["receipt"]["in_app"] = data;
    }
    else if (hx.includes('hxpdc')) {
      const xreceipt = { "expires_date_formatted" : "2099-09-09 09:09:09 Etc/GMT", "expires_date" : "4092599349000", "expires_date_formatted_pst" : "2099-09-09 06:06:06 America/Los_Angeles", "product_id" : id, };
      ifantasticsgame["receipt"] = Object.assign({}, ifantasticsgame["receipt"], xreceipt);
      ifantasticsgame["latest_receipt_info"] = Object.assign({}, ifantasticsgame["receipt"], xreceipt);
      ifantasticsgame["status"] = 0;
      ifantasticsgame["auto_renew_status"] = 1;
      ifantasticsgame["auto_renew_product_id"] = id;
      delete ifantasticsgame["latest_expired_receipt_info"];
      delete ifantasticsgame["expiration_intent"];
    }
    // 判断是否需要加入版本号
    if (version && version.trim() !== '') { ifantasticsgame["receipt"]["original_application_version"] = version; }
    anchor = true;
    console.log('恭喜您，已操作成功🎉🎉🎉\niOS社区: https://t.me/ifantasticsgame');
    break;
  }
}

// 如果没有匹配到 UA 或 bundle_id 使用备用方案
if (!anchor) {
  data = [ Object.assign({}, receipt, expirestime)];
  ifantasticsgame["receipt"]["in_app"] = data;
  ifantasticsgame["latest_receipt_info"] = data;
  ifantasticsgame["pending_renewal_info"] = [{ "product_id": yearlyid, "original_transaction_id": "490001314520000", "auto_renew_product_id": yearlyid, "auto_renew_status": "1" }];
  ifantasticsgame["latest_receipt"] = "ifantasticsgame";
  console.log('很遗憾未能识别出UA或bundle_id\n但已使用备用方案操作成功🎉🎉🎉\niOS社区: https://t.me/ifantasticsgame');
}

ifantasticsgame["Telegram"] = "https://t.me/ifantasticsgame";
ifantasticsgame["warning"] = "仅供学习，禁止转载或售卖";

$done({ body: JSON.stringify(ifantasticsgame) });
