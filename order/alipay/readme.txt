
            ╭───────────────────────╮
    ────┤           支付宝代码示例结构说明             ├────
            ╰───────────────────────╯ 
　                                                                  
　       接口名称：支付宝即时到账交易接口（create_direct_pay_by_user）
　 　    代码版本：3.3
         开发语言：ASP
         版    权：支付宝（中国）网络技术有限公司
　       制 作 者：支付宝商户事业部技术支持组
         联系方式：商户服务电话0571-88158090

    ─────────────────────────────────


───────
 代码文件结构
───────

create_direct_pay_by_user-CSHARP-GBK
  │
  ├class┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈类文件夹
  │  │
  │  ├alipay_core.asp┈┈┈┈┈┈┈┈┈┈┈┈支付宝接口公用函数文件
  │  │
  │  ├alipay_md5.asp ┈┈┈┈┈┈┈┈┈┈┈┈MD5签名函数文件
  │  │
  │  ├alipay_notify.asp┈┈┈┈┈┈┈┈┈┈┈支付宝通知处理类文件
  │  │
  │  ├alipay_submit.asp┈┈┈┈┈┈┈┈┈┈┈支付宝各接口请求提交类文件
  │  │
  │  └alipay_config.asp┈┈┈┈┈┈┈┈┈┈┈基础配置文件
  │
  ├log┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈日志文件夹
  │
  ├alipayapi.asp┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈支付宝接口入口文件
  │
  ├index.asp┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈支付宝调试入口页面
  │
  ├notify_url.asp ┈┈┈┈┈┈┈┈┈┈┈┈┈┈服务器异步通知页面文件
  │
  ├return_url.asp ┈┈┈┈┈┈┈┈┈┈┈┈┈┈页面跳转同步通知文件  │
  └readme.txt ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈使用说明文本

※注意※
需要配置的文件是：
alipay_config.asp
alipayapi.asp
notify_url.asp
return_url.asp



─────────
 类文件函数结构
─────────

alipay_core.asp

Function CreateLinkstring(sPara)
功能：把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串
输入：Array  sPara 需要拼接的数组
输出：String 拼接完成以后的字符串

Function CreateLinkstringUrlEncode(sPara)
功能：把数组所有元素，按照“参数=参数值”的模式用“&”字符拼接成字符串，并且对其做URLENCODE编码
输入：Array  sPara 需要拼接的数组
输出：String 拼接完成以后的字符串

Function FilterPara(sPara)
功能：除去数组中的空值和签名参数
输入：Array  sPara 签名参数组
输出：Array  去掉空值与签名参数后的新签名参数组

Function SortPara(sPara)
功能：对数组排序
输入：Array  sPara 排序前的数组
输出：Array  排序后的数组

Function Md5Sign(prestr, key, input_charset)
功能：MD5签名
输入：String prestr 需要签名的字符串
      String key 私钥
      String input_charset 编码格式
输出：String 签名结果

Function Md5Verify(prestr, sign, key, input_charset)
功能：MD5签名
输入：String prestr 需要签名的字符串
      String sign 签名结果
      String key 私钥
      String input_charset 编码格式
输出：String 签名结果

Function LogResult(sWord)
功能：写日志，方便测试（看网站需求，也可以改