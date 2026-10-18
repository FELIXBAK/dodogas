
var SITE = {
  name: "dodogas",

  sample: true,

  contacts: { discord: "https://discord.gg/BZ4kRyAuhT" }
};




var SERVICES = [
  { name: "Discord", short: "社区·实时交流", icon: "../img/sv/discord.png", tag: "社区", access: "", desc: "dodogas 的 Discord 社区。", link: "https://discord.gg/BZ4kRyAuhT" },
  { name: "YouTube", short: "dodogas 视频频道", icon: "youtube", tag: "视频", access: "", desc: "dodogas 的 YouTube 频道。", link: "https://www.youtube.com/@dodogas" },
  { name: "Naver Cafe", short: "社区·资料汇总", icon: "cafe", tag: "社区", access: "", desc: "dodogas 的 Naver Cafe。", link: "https://cafe.naver.com/liquidation" },
  { name: "Boomboom Lite", short: "Telegram·全员公开", icon: "telegram", tag: "Telegram", access: "全员公开", desc: "通过 Telegram 频道提供的 Boomboom Lite。任何人都可以免费查看。", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "KingFisher", short: "付款时享 20% 折扣", icon: "../img/sv/kingfisher.png", tag: "分析服务", access: "付款时享 20% 折扣", desc: "KingFisher(金钓鱼者)服务。通过下方链接付款可享 20% 折扣。", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];


var EXCHANGES = [
  { id: "binance", icon: "../img/ex/binance.png", name: "Binance", benefit: "手续费 20% 折扣", code: "361097924", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx", icon: "../img/ex/okx.png",     name: "OKX",     benefit: "手续费 20% 返佣", code: "67654160", link: "https://okx.com/join/67654160" },
  { id: "bybit", icon: "../img/ex/bybit.png",   name: "Bybit",   benefit: "手续费 20% 折扣", code: "37560", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget", icon: "../img/ex/bitget.png",  name: "Bitget",  benefit: "手续费 50% 折扣", code: "wfx8", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", icon: "../img/ex/tethermax.png", name: "TetherMax", benefit: "最高返还 90% 以上(请查看官网)", code: "3032", link: "https://tethermax.io/en/signup?inviteCode=3032" }
];


var EVENTS = [

];



var GUIDES = [
  { "id": "binance", "name": "Binance", "sections": [
    { "id":"signup","title":"注册会员","time":"约 3 分钟", "steps": [
      {"title":"通过注册链接进入","do":["点击上方的 [打开注册链接] 按钮进入。","点击 [Sign Up](注册)。"],"tip":"请务必确认是官方 Binance 应用或网站的地址。","screen":{"k":"tap","title":"欢迎来到 Binance!","btn":"Sign Up","alt":"Log In"}},
      {"title":"账户信息 + 推荐码","do":["输入邮箱(或手机号)和密码。","确认推荐码一栏中已有 {CODE}。如果是空的,请自行输入。","勾选服务条款,点击 [Next]。"],"warn":"注册之后很难再填写推荐码。请务必在这一步确认。","screen":{"title":"创建账户","rows":[{"l":"邮箱","v":"example@email.com"},{"l":"密码","v":"••••••••"},{"l":"推荐码(选填)","v":"{CODE}","hl":true}],"btn":"下一步"}},
      {"title":"邮箱验证","do":["输入邮件中收到的 6 位验证码,点击 [Submit]。"],"tip":"如果没有看到邮件,请查看垃圾邮件箱,或重新获取验证码。","screen":{"k":"otp","title":"邮箱验证","btn":"提交"}},
      {"title":"开启两步验证(2FA)","do":["在安全设置中绑定 Google Authenticator 等 OTP 应用。"],"warn":"请将 OTP 备份密钥另行妥善保管,避免丢失。","screen":{"k":"menu","title":"安全设置","items":["Google Authenticator","短信验证","邮箱验证"],"hl":0}}
    ]},
    { "id":"kyc","title":"KYC 实名认证","time":"约 5 分钟", "steps": [
      {"title":"开始认证","do":["在主界面点击 [Verify Now]。"],"tip":"交易和充提币都需要完成 KYC 认证。","screen":{"k":"tap","title":"Verify Identity","btn":"Verify Now"}},
      {"title":"填写个人信息","do":["居住国家·签发国家:您所在的国家","证件:建议使用驾照或护照","英文姓名需与证件上的拼写和顺序完全一致"],"warn":"请确认姓(Last Name)和名(First Name)栏没有填反。","screen":{"title":"Personal Information","rows":[{"l":"Country/Region of Residence","v":"South Korea"},{"l":"ID Type","v":"Driver's License"},{"l":"First Name / Last Name","v":"GILDONG / HONG","hl":true}],"btn":"Continue"}},
      {"title":"人脸认证","do":["在明亮的地方,避免逆光。","摘下帽子、眼镜、口罩,将整张脸对准取景框。","按照屏幕提示转头或眨眼。"],"screen":{"k":"face","title":"Face Verification"}},
      {"title":"审核通过","do":["通过后即可进行交易和充提币。"],"screen":{"k":"done","title":"认证完成"}}
    ]}
  ]},
  { "id": "okx", "name": "OKX", "sections": [
    { "id":"signup","title":"注册会员","time":"约 3 分钟", "steps": [
      {"title":"邮箱 + 推荐码","do":["通过注册链接进入并输入邮箱。","确认 Referral code 一栏已填入 {CODE}。","点击 [Sign up]。"],"warn":"通过 Google、Apple、Telegram 快捷注册不适用推荐福利。请务必使用邮箱注册。","screen":{"title":"What's your email?","rows":[{"l":"Email address","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Sign up"}},
      {"title":"邮箱验证","do":["输入注册邮箱收到的 6 位验证码。"],"screen":{"k":"otp","title":"Enter the 6-digit code"}},
      {"title":"手机验证","do":["输入手机号,点击 [Verify now]。","输入短信收到的 6 位验证码。"],"screen":{"k":"form","title":"What's your phone number?","rows":[{"l":"Phone number","v":"+82  010-0000-0000","hl":true}],"btn":"Verify now"}},
      {"title":"设置密码","do":["8~32 位,须各包含至少 1 个小写字母、大写字母、数字和特殊字符。","点击 [Confirm] 即完成注册。"],"screen":{"k":"pw","title":"Create password","btn":"Confirm"}}
    ]},
    { "id":"check","title":"KYC 之前:确认推荐码是否生效", "steps": [
      {"title":"打开菜单","do":["点击应用主界面左上角的 9 点菜单。"],"screen":{"k":"tap","title":"主界面","btn":"⋮⋮⋮  菜单(左上角)"}},
      {"title":"账户设置","do":["进入 [Account settings]。"],"screen":{"k":"tap","title":"我的资料","btn":"Account settings"}},
      {"title":"Invite perks","do":["在 Account information 中点击 [Invite perks]。"],"screen":{"k":"menu","title":"User Center","items":["UID","Identity verification","Trading fee tier","Invite perks"],"hl":3}},
      {"title":"确认代码","do":["如果 Invite code 显示 {CODE},即表示已正常生效。"],"tip":"根据应用版本,菜单名称或位置可能略有不同。","screen":{"title":"Your invite perks","rows":[{"l":"Invite code","v":"{CODE}","hl":true}]}}
    ]},
    { "id":"kyc","title":"KYC 实名认证","time":"约 5 分钟", "steps": [
      {"title":"开始认证","do":["使用注册邮箱登录应用。","在个人资料中点击 [Get verified]。"],"screen":{"k":"tap","title":"Verify your identity","btn":"Get verified"}},
      {"title":"选择地区·证件","do":["居住地区:您所在的国家","从驾照·身份证·护照中选择一种,然后点击 [Next]"],"screen":{"title":"Select ID type","rows":[{"l":"Country/region of residence","v":"South Korea"},{"l":"ID type","v":"Driver's license","hl":true}],"btn":"Next"}},
      {"title":"拍摄证件","do":["按正面 → 背面的顺序拍摄。"],"tip":"避免反光和阴影,确保所有文字清晰可见。","screen":{"k":"id","title":"Check the photo"}},
      {"title":"自拍认证","do":["摘下口罩·眼镜·帽子,面向正前方。","按提示完成人脸认证。"],"screen":{"k":"face","title":"Take a selfie"}},
      {"title":"审核完成","do":["审核通常需要约 2 分钟,完成后会收到通知。","看到 'Identity verified' 即表示完成。"],"screen":{"k":"done","title":"Identity verified"}}
    ]},
    { "id":"refchange","title":"已注册:申请更改推荐码","warn":"无需删除账户,只更改推荐码的方法。满足以下任意一项条件即可更改,请在删除账户之前先确认。", "steps": [
      {"title":"确认可更改条件","do":["注册后 7 天以内","注册后 7~30 天,总交易量 ≤ 400,000","注册后 30~90 天,总交易量 ≤ 500,000","注册后超过 90 天,最近 90 天交易量 ≤ 5,000,000"],"tip":"满足 4 项中的任意一项即可。如果都不符合,请按下面的“删除账户后重新注册”进行。"},
      {"title":"打开更改申请页面","do":["在已登录 OKX 的状态下,点击下方按钮打开申请页面。代码不会自动填入,提交申请后经 OKX 审核才会通过。"],"link":{"label":"打开 OKX 邀请码更改页面","href":"https://www.okx.com/bind-channel"}},
      {"title":"输入邀请码·理由","do":["在 Invite Code 一栏输入 {CODE}。","在 Reason for joining 一栏用英语填写更改理由。"],"copy":"Change referral code","screen":{"k":"form","title":"Change invite code","rows":[{"l":"Invite Code","v":"{CODE}","hl":true},{"l":"Reason for joining","v":"Change referral code"}],"btn":"Submit"}},
      {"title":"确认已生效","do":["处理完成后,请按上面“确认推荐码是否生效”的步骤,确认 Invite perks 中显示 {CODE}。"],"tip":"在转移资产、注销账户或变更 KYC 之前,请再次确认交易所的最新政策。"}
    ]},
    { "id":"change","title":"无法更改时:删除账户后重新注册","warn":"删除账户是永久性的,无法恢复。请先转出全部余额再进行。请先确认是否可以申请更改推荐码。", "steps": [
      {"title":"确认余额","do":["确认总资产为 0,且没有剩余的币。"],"screen":{"k":"form","title":"总资产","rows":[{"l":"Total assets","v":"0 USDT","hl":true}]}},
      {"title":"删除菜单","do":["人像图标 → [Security] → [Close Account]"],"screen":{"k":"menu","title":"Assets","items":["Overview","Security","Verification","Close Account"],"hl":3}},
      {"title":"设置 OTP","do":["如果出现 'Complete the following before closing account',请先设置 Authenticator 应用(OTP)。"],"screen":{"k":"tap","title":"Complete the following before closing account","btn":"Turn on authenticator app"}},
      {"title":"进行删除","do":["选择删除原因","输入 OTP·邮箱验证码","选择 [Continue to close]"],"warn":"必须点击 [Continue to close],而不是 [Freeze instead]。","screen":{"k":"tap","title":"Are you sure?","btn":"Continue to close","alt":"Freeze instead"}},
      {"title":"注册新账户","do":["删除完成后,按上面“注册会员”的步骤重新注册。","请务必确认推荐码 {CODE}。"],"screen":{"k":"form","title":"注册会员","rows":[{"l":"推荐码","v":"{CODE}","hl":true}],"btn":"去注册"}}
    ]}
  ]},
  { "id": "bybit", "name": "Bybit", "sections": [
    { "id":"signup","title":"注册会员","time":"约 3 分钟", "steps": [
      {"title":"开始注册","do":["通过注册链接进入,点击 [Sign Up]。","准确选择您的居住国家。"],"screen":{"k":"tap","title":"Welcome to Bybit!","btn":"Sign Up","alt":"Log In"}},
      {"title":"填写账户信息","do":["输入长期使用的邮箱或手机号。","同意条款并点击 [Next]"],"screen":{"k":"form","title":"Create Account","rows":[{"l":"Email","v":"example@email.com"}],"btn":"Next"}},
      {"title":"确认推荐码","do":["在 Referral Code 一栏输入 {CODE}。"],"warn":"推荐码在注册后无法更改。","screen":{"title":"Referral Code (Optional)","rows":[{"l":"Enter referral code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"输入验证码","do":["输入通过邮件或短信收到的 6 位数字。"],"tip":"如果没有看到邮件,也请查看垃圾邮件箱。","screen":{"k":"otp","title":"Email Verification"}},
      {"title":"设置密码","do":["8~30 位,须各包含至少 1 个英文大写字母、小写字母和数字"],"tip":"建议使用与其他网站不同的专用密码。","screen":{"k":"pw","title":"Set Your Password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC 实名认证","time":"约 5 分钟", "steps": [
      {"title":"认证菜单","do":["个人资料 → [Identity Verification] → [Verify Now]","从 Standard 认证开始。"],"screen":{"k":"menu","title":"Account & Security","items":["Account & Security","Identity Verification","Payment","My Rewards"],"hl":1}},
      {"title":"选择国家·证件","do":["签发国家:您所在的国家","从 ID Card·Driver's License·Passport 中选择一种"],"screen":{"k":"menu","title":"Select ID type","items":["ID Card","Driver's License","Passport"],"hl":0}},
      {"title":"拍摄证件","do":["将证件原件放在纯色背景上,在明亮的地方拍摄。"],"tip":"姓名、出生日期和照片必须清晰,不能有反光、模糊或被裁切。","screen":{"k":"id","title":"Proof of Identity"}},
      {"title":"人脸认证","do":["将整张脸对准取景框,并摘下帽子和口罩。"],"screen":{"k":"face","title":"Facial Recognition"}},
      {"title":"审核完成","do":["Identity Verification 状态变为 Verified 即表示完成。"],"screen":{"k":"done","title":"Verified"}}
    ]},
    { "id":"check","title":"已注册:申请登记推荐人","warn":"仅当当前账户没有登记推荐人时才能申请。", "steps": [
      {"title":"撰写邮件","do":["收件人:support@bybit.com","主题:Bybit 推荐人变更申请"],"screen":{"k":"mail","to":"support@bybit.com","subj":"Bybit 推荐人变更申请"}},
      {"title":"粘贴内容","do":["复制并粘贴以下内容,然后填写空白处。"],"copy":"我同意登记推荐码。\n注册邮箱或手机号: \nUID: \n希望分配的推荐码: {CODE}"},
      {"title":"确认后发送","do":["确认邮箱、手机号、UID 和推荐码无误后发送。"],"screen":{"k":"tap","title":"新邮件","btn":"发送"}}
    ]},
    { "id":"change","title":"已注册:将 KYC 迁移到新账户", "steps": [
      {"title":"创建新账户","do":["使用以前没用过的邮箱和手机号创建新账户。","输入推荐码 {CODE}。"],"screen":{"k":"form","title":"注册新账户","rows":[{"l":"Referral Code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"原账户菜单","do":["在原账户中:人像图标 → [Account & Security]"],"screen":{"k":"menu","title":"我的账户","items":["Account & Security","My Fee Rates","My Rewards"],"hl":0}},
      {"title":"开始迁移 KYC","do":["在 Identity Verification 中点击 [Verify Now]","[Identity Transfer] → [Facial Verification]"],"screen":{"k":"tap","title":"Identity Verification","btn":"Identity Transfer"}},
      {"title":"人脸认证","do":["按提示转动面部完成认证,然后点击 [Continue]"],"screen":{"k":"face","title":"Facial Verification"}},
      {"title":"输入新账户","do":["输入新账户的邮箱或手机号,然后点击 [Continue]"],"screen":{"k":"form","title":"KYC 迁移","rows":[{"l":"新账户邮箱或手机号","v":"new@email.com","hl":true}],"btn":"Continue"}}
    ]}
  ]},
  { "id": "bitget", "name": "Bitget", "sections": [
    { "id":"signup","title":"注册会员","time":"约 3 分钟", "steps": [
      {"title":"注册信息 + 推荐码","do":["通过注册链接进入,输入邮箱或手机号。","确认 Referral code 一栏中有 {CODE}。","勾选年满 18 周岁选项,点击 [Next]"],"screen":{"title":"Welcome to Bitget","rows":[{"l":"Email/Mobile","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"输入验证码","do":["邮箱注册 → 输入邮件收到的验证码;手机号注册 → 输入短信收到的验证码,然后点击 [Confirm]"],"screen":{"k":"otp","title":"Security verification","btn":"Confirm"}},
      {"title":"设置密码","do":["8~32 位,须各包含至少 1 个数字、英文大写字母和特殊字符"],"screen":{"k":"pw","title":"Set password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC 实名认证","time":"约 5 分钟", "steps": [
      {"title":"开始认证","do":["左上角人像图标 → [Verify] → [Verify now]"],"screen":{"k":"tap","title":"Complete identity verification","btn":"Verify now"}},
      {"title":"选择证件类型","do":["居住·签发国家:您所在的国家","ID type:建议选择 ID card(驾照·护照也可以)"],"screen":{"k":"menu","title":"Select ID type","items":["ID card","Driver's license","Passport"],"hl":0}},
      {"title":"拍摄证件","do":["按正面 → 背面的顺序拍摄。"],"tip":"请拍到完整的证件,不要抖动或反光。","screen":{"k":"id","title":"Verify ID card"}},
      {"title":"人脸认证","do":["在明亮的地方摘下帽子、口罩、墨镜,面向正前方。","按指示缓慢移动。"],"screen":{"k":"face","title":"Face verification"}},
      {"title":"审核通过","do":["审核结束后账户即被激活。"],"screen":{"k":"done","title":"KYC 认证完成"}}
    ]},
    { "id":"change","title":"已注册:解除 KYC 后使用新账户","warn":"手机号注册每个人仅限使用本人名义的 1 个账户。", "steps": [
      {"title":"准备信息","do":["原账户 UID、注册邮箱、注册手机号、证件原件"],"screen":{"k":"check","title":"所需物品","items":["原账户 UID","注册邮箱","注册手机号","证件原件"]}},
      {"title":"拍摄证明材料","do":["将证件和写有 'KYC removal request' 的纸一起拍进同一画面","截图持有币种数量界面和账户资产界面"],"screen":{"k":"id","title":"证件 + 申请纸条","paper":"KYC removal request"}},
      {"title":"发送邮件","do":["附上准备好的信息和照片,发送至 support@bitget.com。"],"tip":"通常 3 天内解除。","screen":{"k":"mail","to":"support@bitget.com","subj":"KYC removal request","attach":true}},
      {"title":"确认解除","do":["登录原账户,点击人像图标。","unverified = 已解除 / verified = 仍在处理中"],"screen":{"k":"form","title":"我的信息","rows":[{"l":"认证状态","v":"unverified","hl":true}]}},
      {"title":"创建新账户","do":["使用与原来不同的邮箱创建新账户,并输入推荐码 {CODE}。","在新账户中进行 KYC 实名认证。"],"screen":{"k":"form","title":"注册新账户","rows":[{"l":"Email","v":"new@email.com"},{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Next"}}
    ]}
  ]}
];



var REFCHECK = [
  { id: "okx", summary: "在应用中 1 分钟就能自行确认。",
    steps: ["打开 OKX 应用主界面左上角的 9 点菜单。", "点击 Account settings(账户设置)。", "在 Account information 列表中点击 Invite perks。", "查看 Invite code 一栏中的代码。"],
    ok: "如果 Invite code 是 {CODE},说明该账户已通过 dodogas 推荐正常登记。",
    note: "应用更新后,菜单名称或位置可能略有变化。" },
  { id: "bybit", summary: "在账户信息界面可以看到已绑定的推荐码。",
    steps: ["登录 Bybit。", "进入 Profile → Account 界面。", "在 Account Info 标签页中打开 Affiliate Code 项目。", "确认已绑定的 Affiliate ID。"],
    note: "根据推荐人一侧的公开设置,ID 可能会被隐藏。如果不确定,请把 UID 发给我们,我们会代为确认。" },
  { id: "binance", summary: "很难直接在界面上确认。只需把 UID 发给我们,dodogas 会代为确认。",
    ask: ["交易所名称(Binance)", "我的 UID(从个人资料界面复制)", "注册日期(大概即可)"] },
  { id: "bitget", summary: "很难直接在界面上确认。只需把 UID 发给我们,dodogas 会代为确认。",
    ask: ["交易所名称(Bitget)", "我的 UID(从左上角人像图标复制)", "注册日期(大概即可)"] }
];


var FAQ = [
  { q: "返佣什么时候到账?", a: "各交易所的发放时间不同。",
    list: ["OKX:约每 1 小时发放一次", "TetherMax:请参考官网"],
    note: "※ 实际发放时间可能因交易所处理情况和会员各自的条件而有所不同。" },
  { q: "已经注册的账户也能获得福利吗?", a: "可以。即使是已经注册的账户,也可以根据各交易所的方法,换成已应用 dodogas 推荐码的账户。各交易所的方法不同,请在下方选择您使用的交易所,并按顺序操作。",
    links: [
      { label: "OKX · 申请更改推荐码", href: "guides.html#okx-refchange" },
      { label: "OKX · 删除账户后重新注册", href: "guides.html#okx-change" },
      { label: "Bitget · 解除 KYC 后使用新账户", href: "guides.html#bitget-change" },
      { label: "Bybit · 将 KYC 迁移到新账户", href: "guides.html#bybit-change" }
    ] },
  { q: "会员等级如何变化?", a: "会员等级由订阅等级和交易量标准决定。详细内容可在下方的 VIP 升级标准中查看。",
    links: [
      { label: "查看 VIP 升级标准", href: "vip.html" },
      { label: "查看各会员等级的板块", href: "membership.html" }
    ] }
];



var HIDDEN_EXCHANGES = [];

var EXCHANGE_ORDER = ["binance", "okx", "bitget", "bybit", "tethermax"];
var ALL_EXCHANGES = EXCHANGES, ALL_GUIDES = GUIDES, ALL_REFCHECK = REFCHECK;
(function () {
  function keep(x) { return HIDDEN_EXCHANGES.indexOf(x.id) < 0; }
  function byOrder(a, b) {
    var i = EXCHANGE_ORDER.indexOf(a.id), j = EXCHANGE_ORDER.indexOf(b.id);
    return (i < 0 ? 99 : i) - (j < 0 ? 99 : j);
  }
  EXCHANGES = EXCHANGES.filter(keep).sort(byOrder);
  GUIDES = GUIDES.filter(keep).sort(byOrder);
  REFCHECK = REFCHECK.filter(keep).sort(byOrder);
})();
