/*
 *
 *
脚本功能：嘿锋影视解锁会员
软件版本：2.7.0
官网地址：https://hfys8.vip/app
下载地址：http://t.cn/A6i8ruQR
脚本作者：Hausd0rff
更新时间：2022-02-12
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
脚本说明：注册时填写邀请码：dwpmMe
        可无限延长脚本的使用期限
*******************************

[rewrite_local]

# > 嘿锋影视解锁会员
^https?:\/\/ios\.hfys8\.vip\/sk-api\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/HeiFengMovieVipCrack.js

[mitm] 

hostname = ios.hfys8.vip
*
*
*/


var body = $response.body;
body = "AC936B47568347382DA4C1DCB0FEA7A1723BCEA332573A8258839C3E2C2B61A5588708BD32B51604BB19CB2792103CF5F36E21468735946663E7760E963490E80D7463100BD9768D850446DA99B6010FF6CD96EE63AFA8A7F0358BC044208458CD1833815578898E5332EE3FBB093181D1A6F23A87FD62774D5BBBF8EBE554B045355C4F9A699F0BDE64F620BCCC2145BFCA06EA2970865CB6299579141D088D8137F1351795022C8D466A98A19760585897FA5C78B97454EAB8AAE313D3DED8A3490D2A6A854AB905E5CFCCC72CFEE59AC68775DB7FF7EDE8C6AE11A73B8B8BE3652AD111F4832C9D58E9FDBB0883D99E2E13A1C4682FCDA3C5693F54D17430E3CD6CD9CDB9CB4029171FFAC7C2CF1638E21B863847476715B2DF08E7B2EEF2AC2E78F359EF1388425B105DAD36CF717E4A7D15D9BE01D43A7893C934FE7D03BFA3F5028F27CE86FA847099512D691A2253C3C3301A7639A9FF270D3DBB90741BCFE7BA0BE27E22FE633CC14E87C599";
$done({
    body
});
