
var SITE = {
  name: "dodogas",

  sample: true,

  contacts: { discord: "https://discord.gg/BZ4kRyAuhT" }
};




var SERVICES = [
  { name: "Discord", short: "مجتمع · تواصل مباشر", icon: "../img/sv/discord.png", tag: "المجتمع", access: "", desc: "مجتمع dodogas على Discord.", link: "https://discord.gg/BZ4kRyAuhT" },
  { name: "YouTube", short: "قناة فيديو dodogas", icon: "youtube", tag: "فيديو", access: "", desc: "قناة dodogas على YouTube.", link: "https://www.youtube.com/@dodogas" },
  { name: "مقهى Naver", short: "مجتمع · مجموعة مواد", icon: "cafe", tag: "المجتمع", access: "", desc: "مقهى dodogas على Naver.", link: "https://cafe.naver.com/liquidation" },
  { name: "Boomboom Lite", short: "تيليجرام · متاح للجميع", icon: "telegram", tag: "تيليجرام", access: "متاح للجميع", desc: "Boomboom Lite المقدَّم عبر قناة تيليجرام. يمكن لأي شخص مشاهدته مجانًا.", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "KingFisher", short: "خصم 20% عند الدفع", icon: "../img/sv/kingfisher.png", tag: "خدمة التحليل", access: "خصم 20% عند الدفع", desc: "خدمة KingFisher. الدفع عبر الرابط أدناه يمنحك خصم 20%.", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];


var EXCHANGES = [
  { id: "binance", icon: "../img/ex/binance.png", name: "Binance", benefit: "خصم 20% على الرسوم", code: "361097924", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx", icon: "../img/ex/okx.png",     name: "OKX",     benefit: "استرداد 20% من الرسوم", code: "67654160", link: "https://okx.com/join/67654160" },
  { id: "bybit", icon: "../img/ex/bybit.png",   name: "Bybit",   benefit: "خصم 20% على الرسوم", code: "37560", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget", icon: "../img/ex/bitget.png",  name: "Bitget",  benefit: "خصم 50% على الرسوم", code: "wfx8", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", icon: "../img/ex/tethermax.png", name: "TetherMax", benefit: "استرداد يصل إلى 90% أو أكثر (راجع الموقع)", code: "3032", link: "https://tethermax.io/en/signup?inviteCode=3032" }
];


var EVENTS = [

];



var GUIDES = [
  { "id": "binance", "name": "Binance", "sections": [
    { "id":"signup","title":"التسجيل","time":"حوالي 3 دقائق", "steps": [
      {"title":"الدخول عبر رابط التسجيل","do":["ادخل عبر زر [فتح رابط التسجيل] أعلاه.","اضغط [Sign Up] (التسجيل)."],"tip":"تأكد دائمًا من أن العنوان هو تطبيق Binance أو موقعه الرسمي.","screen":{"k":"tap","title":"أهلًا بك في Binance!","btn":"Sign Up","alt":"Log In"}},
      {"title":"بيانات الحساب + رمز الإحالة","do":["أدخل بريدك الإلكتروني (أو رقم هاتفك) وكلمة المرور.","تأكد من وجود {CODE} في خانة رمز الإحالة. إذا كانت فارغة فأدخله بنفسك.","حدد الموافقة على الشروط واضغط [Next]."],"warn":"يصعب إدخال رمز الإحالة بعد التسجيل. تأكد منه في هذه الخطوة.","screen":{"title":"إنشاء حساب","rows":[{"l":"البريد الإلكتروني","v":"example@email.com"},{"l":"كلمة المرور","v":"••••••••"},{"l":"رمز الإحالة (اختياري)","v":"{CODE}","hl":true}],"btn":"التالي"}},
      {"title":"توثيق البريد الإلكتروني","do":["أدخل رمز التحقق المكوّن من 6 أرقام الذي وصلك بالبريد واضغط [Submit]."],"tip":"إذا لم تجد الرسالة فتحقق من مجلد البريد المزعج أو اطلب الرمز مرة أخرى.","screen":{"k":"otp","title":"توثيق البريد الإلكتروني","btn":"إرسال"}},
      {"title":"تفعيل التحقق بخطوتين (2FA)","do":["اربط في إعدادات الأمان تطبيق OTP مثل Google Authenticator."],"warn":"احتفظ بمفتاح النسخ الاحتياطي لـ OTP في مكان آمن منفصل حتى لا تفقده.","screen":{"k":"menu","title":"إعدادات الأمان","items":["Google Authenticator","التحقق عبر SMS","توثيق البريد الإلكتروني"],"hl":0}}
    ]},
    { "id":"kyc","title":"توثيق الهوية KYC","time":"حوالي 5 دقائق", "steps": [
      {"title":"بدء التوثيق","do":["اضغط [Verify Now] في الشاشة الرئيسية."],"tip":"يلزم توثيق KYC للتداول والإيداع والسحب.","screen":{"k":"tap","title":"Verify Identity","btn":"Verify Now"}},
      {"title":"إدخال البيانات الشخصية","do":["بلد الإقامة · بلد الإصدار: بلدك","الهوية: يُفضَّل رخصة القيادة أو جواز السفر","أدخل اسمك بالإنجليزية مطابقًا للهوية تمامًا في الإملاء والترتيب"],"warn":"تأكد من عدم عكس خانتي اسم العائلة (Last Name) والاسم الأول (First Name).","screen":{"title":"Personal Information","rows":[{"l":"Country/Region of Residence","v":"South Korea"},{"l":"ID Type","v":"Driver's License"},{"l":"First Name / Last Name","v":"GILDONG / HONG","hl":true}],"btn":"Continue"}},
      {"title":"التحقق من الوجه","do":["كن في مكان مضيء وتجنب الإضاءة الخلفية.","اخلع القبعة والنظارة والكمامة وضع وجهك كاملًا داخل الإطار.","أدِر رأسك أو أغمض عينيك حسب تعليمات الشاشة."],"screen":{"k":"face","title":"Face Verification"}},
      {"title":"تمت الموافقة","do":["بعد الموافقة يمكنك التداول والإيداع والسحب."],"screen":{"k":"done","title":"اكتمل التوثيق"}}
    ]}
  ]},
  { "id": "okx", "name": "OKX", "sections": [
    { "id":"signup","title":"التسجيل","time":"حوالي 3 دقائق", "steps": [
      {"title":"البريد الإلكتروني + رمز الإحالة","do":["ادخل عبر رابط التسجيل وأدخل بريدك الإلكتروني.","تأكد من إدخال {CODE} في خانة Referral code.","اضغط [Sign up]."],"warn":"التسجيل السريع عبر Google أو Apple أو Telegram لا يحصل على مزايا الإحالة. سجّل دائمًا بالبريد الإلكتروني.","screen":{"title":"What's your email?","rows":[{"l":"Email address","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Sign up"}},
      {"title":"توثيق البريد الإلكتروني","do":["أدخل الرمز المكوّن من 6 أرقام الذي وصل إلى البريد الذي سجّلت به."],"screen":{"k":"otp","title":"Enter the 6-digit code"}},
      {"title":"التحقق من الهاتف","do":["أدخل رقم هاتفك واضغط [Verify now].","أدخل الرمز المكوّن من 6 أرقام الذي وصلك برسالة SMS."],"screen":{"k":"form","title":"What's your phone number?","rows":[{"l":"Phone number","v":"+82  010-0000-0000","hl":true}],"btn":"Verify now"}},
      {"title":"تعيين كلمة المرور","do":["من 8 إلى 32 حرفًا، تتضمن حرفًا صغيرًا وحرفًا كبيرًا ورقمًا ورمزًا خاصًا على الأقل لكل منها.","اضغط [Confirm] لإتمام التسجيل."],"screen":{"k":"pw","title":"Create password","btn":"Confirm"}}
    ]},
    { "id":"check","title":"قبل KYC: تحقق من الإحالة", "steps": [
      {"title":"افتح القائمة","do":["اضغط على قائمة النقاط التسع في أعلى يسار الشاشة الرئيسية للتطبيق."],"screen":{"k":"tap","title":"الشاشة الرئيسية","btn":"⋮⋮⋮  القائمة (أعلى اليسار)"}},
      {"title":"إعدادات الحساب","do":["ادخل إلى [Account settings]."],"screen":{"k":"tap","title":"ملفي الشخصي","btn":"Account settings"}},
      {"title":"Invite perks","do":["في Account information اضغط [Invite perks]."],"screen":{"k":"menu","title":"User Center","items":["UID","Identity verification","Trading fee tier","Invite perks"],"hl":3}},
      {"title":"تحقق من الرمز","do":["إذا ظهر {CODE} في Invite code فقد طُبّق بشكل صحيح."],"tip":"قد تختلف أسماء القوائم أو أماكنها قليلًا بحسب إصدار التطبيق.","screen":{"title":"Your invite perks","rows":[{"l":"Invite code","v":"{CODE}","hl":true}]}}
    ]},
    { "id":"kyc","title":"توثيق الهوية KYC","time":"حوالي 5 دقائق", "steps": [
      {"title":"بدء التوثيق","do":["سجّل الدخول إلى التطبيق بالبريد الذي سجّلت به.","اضغط [Get verified] في الملف الشخصي."],"screen":{"k":"tap","title":"Verify your identity","btn":"Get verified"}},
      {"title":"اختيار المنطقة والهوية","do":["منطقة الإقامة: بلدك","اختر رخصة القيادة أو بطاقة الهوية أو جواز السفر ثم اضغط [Next]"],"screen":{"title":"Select ID type","rows":[{"l":"Country/region of residence","v":"South Korea"},{"l":"ID type","v":"Driver's license","hl":true}],"btn":"Next"}},
      {"title":"تصوير الهوية","do":["صوّر الوجه الأمامي ثم الخلفي."],"tip":"تجنب انعكاس الضوء والظلال بحيث تظهر كل الأحرف بوضوح.","screen":{"k":"id","title":"Check the photo"}},
      {"title":"توثيق السيلفي","do":["اخلع الكمامة والنظارة والقبعة وانظر للأمام.","وثّق وجهك حسب التعليمات."],"screen":{"k":"face","title":"Take a selfie"}},
      {"title":"اكتملت المراجعة","do":["تستغرق المراجعة عادةً حوالي دقيقتين، وسيصلك إشعار عند انتهائها.","يكتمل التوثيق عند ظهور 'Identity verified'."],"screen":{"k":"done","title":"Identity verified"}}
    ]},
    { "id":"refchange","title":"مسجّل بالفعل: طلب تغيير رمز الإحالة","warn":"طريقة تتيح تغيير رمز الإحالة فقط دون حذف الحساب. يُسمح بالتغيير باستيفاء أحد الشروط أدناه، فتحقق منها قبل حذف الحساب.", "steps": [
      {"title":"التحقق من شروط التغيير","do":["خلال 7 أيام من التسجيل","بعد 7~30 يومًا من التسجيل، إجمالي حجم التداول ≤ 400,000","بعد 30~90 يومًا من التسجيل، إجمالي حجم التداول ≤ 500,000","بعد أكثر من 90 يومًا من التسجيل، حجم التداول في آخر 90 يومًا ≤ 5,000,000"],"tip":"يكفي استيفاء واحد من الشروط الأربعة. وإن لم ينطبق أي منها فتابع بخيار 'حذف الحساب ثم إعادة التسجيل' أدناه."},
      {"title":"افتح صفحة طلب التغيير","do":["بعد تسجيل الدخول إلى OKX، افتح صفحة الطلب بالزر أدناه. لا يُدخل الرمز تلقائيًا، وتتم الموافقة بعد مراجعة OKX للطلب."],"link":{"label":"افتح صفحة تغيير رمز الدعوة في OKX","href":"https://www.okx.com/bind-channel"}},
      {"title":"إدخال رمز الدعوة والسبب","do":["أدخل {CODE} في خانة Invite Code.","اكتب سبب التغيير بالإنجليزية في خانة Reason for joining."],"copy":"Change referral code","screen":{"k":"form","title":"Change invite code","rows":[{"l":"Invite Code","v":"{CODE}","hl":true},{"l":"Reason for joining","v":"Change referral code"}],"btn":"Submit"}},
      {"title":"تأكد من التطبيق","do":["عند انتهاء المعالجة، اتبع خطوات 'التحقق من تطبيق الإحالة' أعلاه وتأكد من ظهور {CODE} في Invite perks."],"tip":"قبل نقل الأصول أو إغلاق الحساب أو تغيير KYC، راجع أحدث سياسات المنصة مرة أخرى."}
    ]},
    { "id":"change","title":"إذا تعذّر التغيير: حذف الحساب ثم إعادة التسجيل","warn":"حذف الحساب نهائي ولا يمكن التراجع عنه. انقل كل رصيدك أولًا ثم تابع. تحقق أولًا من إمكانية تقديم طلب تغيير رمز الإحالة.", "steps": [
      {"title":"تحقق من الرصيد","do":["تأكد من أن إجمالي الأصول 0 وأنه لا توجد عملات متبقية."],"screen":{"k":"form","title":"إجمالي الأصول","rows":[{"l":"Total assets","v":"0 USDT","hl":true}]}},
      {"title":"قائمة الحذف","do":["أيقونة الشخص ← [Security] ← [Close Account]"],"screen":{"k":"menu","title":"Assets","items":["Overview","Security","Verification","Close Account"],"hl":3}},
      {"title":"إعداد OTP","do":["إذا ظهرت رسالة 'Complete the following before closing account' فاضبط تطبيق Authenticator (OTP) أولًا."],"screen":{"k":"tap","title":"Complete the following before closing account","btn":"Turn on authenticator app"}},
      {"title":"متابعة الحذف","do":["اختر سبب الحذف","أدخل رمزي التحقق OTP والبريد الإلكتروني","اختر [Continue to close]"],"warn":"يجب الضغط على [Continue to close] وليس [Freeze instead].","screen":{"k":"tap","title":"Are you sure?","btn":"Continue to close","alt":"Freeze instead"}},
      {"title":"التسجيل بحساب جديد","do":["بعد الحذف، سجّل من جديد باتباع خطوات 'التسجيل' أعلاه.","تأكد من رمز الإحالة {CODE}."],"screen":{"k":"form","title":"التسجيل","rows":[{"l":"رمز الإحالة","v":"{CODE}","hl":true}],"btn":"سجّل الآن"}}
    ]}
  ]},
  { "id": "bybit", "name": "Bybit", "sections": [
    { "id":"signup","title":"التسجيل","time":"حوالي 3 دقائق", "steps": [
      {"title":"بدء التسجيل","do":["ادخل عبر رابط التسجيل واضغط [Sign Up].","اختر بلد إقامتك بدقة."],"screen":{"k":"tap","title":"Welcome to Bybit!","btn":"Sign Up","alt":"Log In"}},
      {"title":"إدخال بيانات الحساب","do":["أدخل بريدًا إلكترونيًا أو رقم هاتف ستستخدمه طويلًا.","وافق على الشروط واضغط [Next]"],"screen":{"k":"form","title":"Create Account","rows":[{"l":"Email","v":"example@email.com"}],"btn":"Next"}},
      {"title":"تأكيد رمز الإحالة","do":["أدخل {CODE} في خانة Referral Code."],"warn":"لا يمكن تغيير رمز الإحالة بعد التسجيل.","screen":{"title":"Referral Code (Optional)","rows":[{"l":"Enter referral code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"إدخال رمز التحقق","do":["أدخل الرقم المكوّن من 6 أرقام الذي وصلك عبر البريد أو SMS."],"tip":"إذا لم تجد الرسالة فتحقق من مجلد البريد المزعج أيضًا.","screen":{"k":"otp","title":"Email Verification"}},
      {"title":"تعيين كلمة المرور","do":["من 8 إلى 30 حرفًا، تتضمن حرفًا إنجليزيًا كبيرًا وحرفًا صغيرًا ورقمًا على الأقل لكل منها"],"tip":"يُنصح بكلمة مرور خاصة تختلف عن المواقع الأخرى.","screen":{"k":"pw","title":"Set Your Password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"توثيق الهوية KYC","time":"حوالي 5 دقائق", "steps": [
      {"title":"قائمة التوثيق","do":["الملف الشخصي ← [Identity Verification] ← [Verify Now]","ابدأ بتوثيق Standard."],"screen":{"k":"menu","title":"Account & Security","items":["Account & Security","Identity Verification","Payment","My Rewards"],"hl":1}},
      {"title":"اختيار البلد والهوية","do":["بلد الإصدار: بلدك","اختر واحدًا من ID Card أو Driver's License أو Passport"],"screen":{"k":"menu","title":"Select ID type","items":["ID Card","Driver's License","Passport"],"hl":0}},
      {"title":"تصوير الهوية","do":["ضع الأصل على خلفية بلون واحد وصوّره في مكان مضيء."],"tip":"يجب أن تكون صورة الاسم وتاريخ الميلاد واضحة، دون انعكاس أو ضبابية أو قص.","screen":{"k":"id","title":"Proof of Identity"}},
      {"title":"التحقق من الوجه","do":["ضع وجهك كاملًا داخل الإطار واخلع القبعة والكمامة."],"screen":{"k":"face","title":"Facial Recognition"}},
      {"title":"اكتملت المراجعة","do":["يكتمل التوثيق عندما تتغير حالة Identity Verification إلى Verified."],"screen":{"k":"done","title":"Verified"}}
    ]},
    { "id":"check","title":"مسجّل بالفعل: طلب تسجيل المُحيل","warn":"يمكن التقديم فقط إذا لم يكن في حسابك الحالي مُحيل مسجّل.", "steps": [
      {"title":"اكتب البريد الإلكتروني","do":["إلى: support@bybit.com","الموضوع: طلب تغيير مُحيل Bybit"],"screen":{"k":"mail","to":"support@bybit.com","subj":"طلب تغيير مُحيل Bybit"}},
      {"title":"الصق المحتوى","do":["انسخ المحتوى أدناه والصقه، ثم املأ الفراغات."],"copy":"أوافق على تسجيل رمز الإحالة.\nبريد التسجيل أو رقم الهاتف: \nUID: \nرمز الإحالة المطلوب تعيينه: {CODE}"},
      {"title":"تحقق ثم أرسل","do":["تأكد من صحة البريد الإلكتروني ورقم الهاتف وUID ورمز الإحالة ثم أرسل."],"screen":{"k":"tap","title":"رسالة جديدة","btn":"إرسال"}}
    ]},
    { "id":"change","title":"مسجّل بالفعل: نقل KYC إلى حساب جديد", "steps": [
      {"title":"إنشاء حساب جديد","do":["أنشئ حسابًا جديدًا ببريد إلكتروني ورقم هاتف لم تستخدمهما من قبل.","أدخل رمز الإحالة {CODE}."],"screen":{"k":"form","title":"التسجيل بحساب جديد","rows":[{"l":"Referral Code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"قائمة الحساب الحالي","do":["من الحساب الحالي: أيقونة الشخص ← [Account & Security]"],"screen":{"k":"menu","title":"حسابي","items":["Account & Security","My Fee Rates","My Rewards"],"hl":0}},
      {"title":"بدء نقل KYC","do":["في Identity Verification اضغط [Verify Now]","[Identity Transfer] → [Facial Verification]"],"screen":{"k":"tap","title":"Identity Verification","btn":"Identity Transfer"}},
      {"title":"التحقق من الوجه","do":["أدِر وجهك حسب التعليمات للتوثيق ثم اضغط [Continue]"],"screen":{"k":"face","title":"Facial Verification"}},
      {"title":"إدخال الحساب الجديد","do":["أدخل البريد الإلكتروني أو رقم هاتف الحساب الجديد واضغط [Continue]"],"screen":{"k":"form","title":"نقل KYC","rows":[{"l":"البريد الإلكتروني أو رقم هاتف الحساب الجديد","v":"new@email.com","hl":true}],"btn":"Continue"}}
    ]}
  ]},
  { "id": "bitget", "name": "Bitget", "sections": [
    { "id":"signup","title":"التسجيل","time":"حوالي 3 دقائق", "steps": [
      {"title":"بيانات التسجيل + رمز الإحالة","do":["ادخل عبر رابط التسجيل وأدخل بريدك الإلكتروني أو رقم هاتفك.","تأكد من وجود {CODE} في خانة Referral code.","حدد خانة بلوغ 18 عامًا فأكثر واضغط [Next]"],"screen":{"title":"Welcome to Bitget","rows":[{"l":"Email/Mobile","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"إدخال رمز التحقق","do":["التسجيل بالبريد ← الرمز يصل بالبريد، والتسجيل بالهاتف ← الرمز يصل برسالة نصية. أدخله واضغط [Confirm]"],"screen":{"k":"otp","title":"Security verification","btn":"Confirm"}},
      {"title":"تعيين كلمة المرور","do":["من 8 إلى 32 حرفًا، تتضمن رقمًا وحرفًا إنجليزيًا كبيرًا ورمزًا خاصًا على الأقل لكل منها"],"screen":{"k":"pw","title":"Set password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"توثيق الهوية KYC","time":"حوالي 5 دقائق", "steps": [
      {"title":"بدء التوثيق","do":["أيقونة الشخص أعلى اليسار ← [Verify] ← [Verify now]"],"screen":{"k":"tap","title":"Complete identity verification","btn":"Verify now"}},
      {"title":"اختيار نوع الهوية","do":["بلد الإقامة · بلد الإصدار: بلدك","ID type: يُفضَّل ID card (ويمكن رخصة القيادة أو جواز السفر)"],"screen":{"k":"menu","title":"Select ID type","items":["ID card","Driver's license","Passport"],"hl":0}},
      {"title":"تصوير الهوية","do":["صوّر الوجه الأمامي ثم الخلفي."],"tip":"صوّر الهوية كاملة دون اهتزاز أو انعكاس ضوء.","screen":{"k":"id","title":"Verify ID card"}},
      {"title":"التحقق من الوجه","do":["في مكان مضيء، اخلع القبعة والكمامة والنظارة الشمسية وانظر للأمام.","تحرّك ببطء حسب التعليمات."],"screen":{"k":"face","title":"Face verification"}},
      {"title":"تمت الموافقة","do":["يُفعَّل الحساب عند انتهاء المراجعة."],"screen":{"k":"done","title":"اكتمل توثيق KYC"}}
    ]},
    { "id":"change","title":"مسجّل بالفعل: إلغاء KYC ثم حساب جديد","warn":"التسجيل برقم الهاتف مسموح بحساب واحد فقط باسمك الشخصي.", "steps": [
      {"title":"تجهيز المعلومات","do":["UID الحساب الحالي، والبريد المسجّل، ورقم الهاتف المسجّل، وأصل الهوية"],"screen":{"k":"check","title":"المطلوب تجهيزه","items":["UID الحساب الحالي","البريد الإلكتروني المسجّل","رقم الهاتف المسجّل","أصل الهوية"]}},
      {"title":"تصوير مستندات الإثبات","do":["صوّر الهوية مع ورقة مكتوب عليها 'KYC removal request' في شاشة واحدة","التقط لقطة لشاشة كميات العملات التي تملكها وشاشة أصول الحساب"],"screen":{"k":"id","title":"الهوية + ورقة الطلب","paper":"KYC removal request"}},
      {"title":"إرسال البريد","do":["أرفق المعلومات والصور المجهّزة وأرسلها إلى support@bitget.com."],"tip":"يتم الإلغاء عادةً خلال 3 أيام.","screen":{"k":"mail","to":"support@bitget.com","subj":"KYC removal request","attach":true}},
      {"title":"تأكيد الإلغاء","do":["سجّل الدخول إلى الحساب الحالي واضغط على أيقونة الشخص.","unverified = تم الإلغاء / verified = ما زال قيد المعالجة"],"screen":{"k":"form","title":"معلوماتي","rows":[{"l":"حالة التوثيق","v":"unverified","hl":true}]}},
      {"title":"إنشاء حساب جديد","do":["أنشئ حسابًا جديدًا ببريد إلكتروني مختلف وأدخل رمز الإحالة {CODE}.","أجرِ توثيق هوية KYC في الحساب الجديد."],"screen":{"k":"form","title":"التسجيل بحساب جديد","rows":[{"l":"Email","v":"new@email.com"},{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Next"}}
    ]}
  ]}
];



var REFCHECK = [
  { id: "okx", summary: "يمكنك التحقق بنفسك في التطبيق خلال دقيقة.",
    steps: ["افتح قائمة النقاط التسع في أعلى يسار الشاشة الرئيسية لتطبيق OKX.", "اضغط Account settings (إعدادات الحساب).", "في قائمة Account information اضغط Invite perks.", "اطّلع على الرمز المكتوب في خانة Invite code."],
    ok: "إذا كان Invite code هو {CODE} فالحساب مسجّل بشكل صحيح عبر إحالة dodogas.",
    note: "قد تتغير أسماء القوائم أو أماكنها قليلًا مع تحديثات التطبيق." },
  { id: "bybit", summary: "يمكنك رؤية رمز الإحالة المرتبط في شاشة معلومات حسابك.",
    steps: ["سجّل الدخول إلى Bybit.", "ادخل إلى Profile ← Account.", "في تبويب Account Info افتح بند Affiliate Code.", "تحقق من Affiliate ID المرتبط."],
    note: "بحسب إعدادات الخصوصية لدى المُحيل، قد يظهر الـ ID مخفيًا. إن التبس عليك الأمر فأرسل لنا UID وسنتحقق نيابةً عنك." },
  { id: "binance", summary: "يصعب التحقق مباشرة من الشاشة. أرسل UID فقط وسيتحقق dodogas نيابةً عنك.",
    ask: ["اسم المنصة (Binance)", "UID الخاص بي (انسخه من شاشة الملف الشخصي)", "تاريخ التسجيل (تقريبي يكفي)"] },
  { id: "bitget", summary: "يصعب التحقق مباشرة من الشاشة. أرسل UID فقط وسيتحقق dodogas نيابةً عنك.",
    ask: ["اسم المنصة (Bitget)", "UID الخاص بي (انسخه من أيقونة الشخص أعلى اليسار)", "تاريخ التسجيل (تقريبي يكفي)"] }
];


var FAQ = [
  { q: "متى يصل الاسترداد؟", a: "يختلف موعد الصرف من منصة إلى أخرى.",
    list: ["OKX: يُصرف تقريبًا كل ساعة", "TetherMax: راجع الموقع الرسمي"],
    note: "※ قد يختلف وقت الصرف الفعلي بحسب حالة معالجة المنصة وشروط كل عضو." },
  { q: "هل يمكن للحسابات المسجَّلة بالفعل الحصول على المزايا؟", a: "نعم، ممكن. حتى الحساب المسجَّل بالفعل يمكن تحويله إلى حساب مطبَّق عليه رمز إحالة dodogas بحسب طريقة كل منصة. تختلف الطريقة من منصة إلى أخرى، فاختر منصتك أدناه واتبع الخطوات بالترتيب.",
    links: [
      { label: "OKX · طلب تغيير رمز الإحالة", href: "guides.html#okx-refchange" },
      { label: "OKX · حذف الحساب ثم إعادة التسجيل", href: "guides.html#okx-change" },
      { label: "Bitget · إلغاء KYC ثم حساب جديد", href: "guides.html#bitget-change" },
      { label: "Bybit · نقل KYC إلى حساب جديد", href: "guides.html#bybit-change" }
    ] },
  { q: "كيف يتغير مستوى العضوية؟", a: "يتحدد مستوى العضوية بحسب مستوى الاشتراك ومعايير حجم التداول. يمكنك الاطلاع على التفاصيل في معايير الترقية إلى VIP أدناه.",
    links: [
      { label: "عرض معايير الترقية إلى VIP", href: "vip.html" },
      { label: "عرض اللوحات حسب العضوية", href: "membership.html" }
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
