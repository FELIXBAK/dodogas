
var SITE = {
  name: "dodogas",

  sample: true,

  contacts: { discord: "https://discord.gg/FXWPyAvRCh" }
};




var SERVICES = [
  { name: "Discord", short: "コミュニティ・リアルタイム交流", icon: "../img/sv/discord.png", tag: "コミュニティ", access: "", desc: "登録するだけで、ベーシック等級のすべての資料をご覧いただけます。メンバーシップへの登録を完了して、掲示板や資料を思う存分ご覧ください。", link: "https://discord.gg/FXWPyAvRCh" },
  { name: "YouTube", short: "dodogas動画チャンネル", icon: "youtube", tag: "動画", access: "", desc: "メンバーシップへの登録を完了して、掲示板や資料を思う存分ご覧ください。", link: "https://www.youtube.com/@dodogas" },
  { name: "Naverカフェ", short: "コミュニティ・資料集", icon: "cafe", tag: "コミュニティ", access: "", desc: "登録するだけで、ベーシック等級のすべての資料をご覧いただけます。メンバーシップへの登録を完了して、掲示板や資料を思う存分ご覧ください。", link: "https://cafe.naver.com/liquidation" },
  { name: "Boomboom Lite", short: "テレグラム・全体公開", icon: "telegram", tag: "テレグラム", access: "全体公開", desc: "テレグラムチャンネルで提供しているBoomboom Liteです。誰でも無料で見られます。", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "KingFisher", short: "決済時20%割引", icon: "../img/sv/kingfisher.png", tag: "分析サービス", access: "決済時20%割引", desc: "KingFisher(キングフィッシャー)サービスです。下のリンクから決済すると20%割引が適用されます。", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];


var EXCHANGES = [
  { id: "binance", icon: "../img/ex/binance.png", name: "Binance", benefit: "手数料20%割引", code: "361097924", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx", icon: "../img/ex/okx.png",     name: "OKX",     benefit: "手数料20%ペイバック", code: "67654160", link: "https://okx.com/join/67654160" },
  { id: "bybit", icon: "../img/ex/bybit.png",   name: "Bybit",   benefit: "手数料20%割引", code: "37560", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget", icon: "../img/ex/bitget.png",  name: "Bitget",  benefit: "手数料50%割引", code: "wfx8", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", icon: "../img/ex/tethermax.png", name: "TetherMax", benefit: "最大90%以上還元(ホームページで確認)", code: "3032", link: "https://tethermax.io/en/signup?inviteCode=3032" }
];


var EVENTS = [

];



var GUIDES = [
  { "id": "binance", "name": "Binance", "sections": [
    { "id":"signup","title":"会員登録","time":"約3分", "steps": [
      {"title":"登録リンクからアクセス","do":["上の[登録リンクを開く]ボタンからアクセスします。","[Sign Up](会員登録)を押します。"],"tip":"公式のBinanceアプリ・ウェブサイトのアドレスか必ず確認してください。","screen":{"k":"tap","title":"Binanceへようこそ!","btn":"Sign Up","alt":"Log In"}},
      {"title":"アカウント情報 + 紹介コード","do":["メールアドレス(または電話番号)とパスワードを入力します。","紹介コード欄に{CODE}が入っているか確認します。空欄の場合は直接入力してください。","利用規約にチェックして[Next]を押します。"],"warn":"登録後は紹介コードを入れにくくなります。この段階で必ず確認してください。","screen":{"title":"アカウント作成","rows":[{"l":"メール","v":"example@email.com"},{"l":"パスワード","v":"••••••••"},{"l":"紹介コード(任意)","v":"{CODE}","hl":true}],"btn":"次へ"}},
      {"title":"メール認証","do":["メールで届いた6桁の認証コードを入力して[Submit]を押します。"],"tip":"メールが届かない場合は迷惑メールフォルダを確認するか、コードを再送信してください。","screen":{"k":"otp","title":"メール認証","btn":"送信"}},
      {"title":"2段階認証(2FA)をオンにする","do":["セキュリティ設定でGoogle AuthenticatorなどのOTPアプリを連携します。"],"warn":"OTPのバックアップキーは、紛失しないよう別の安全な場所に保管してください。","screen":{"k":"menu","title":"セキュリティ設定","items":["Google Authenticator","SMS認証","メール認証"],"hl":0}}
    ]},
    { "id":"kyc","title":"KYC本人確認","time":"約5分", "steps": [
      {"title":"認証開始","do":["メイン画面で[Verify Now]を押します。"],"tip":"取引と入出金にはKYC認証が必要です。","screen":{"k":"tap","title":"Verify Identity","btn":"Verify Now"}},
      {"title":"個人情報の入力","do":["居住国・発行国:お住まいの国","身分証:運転免許証またはパスポート推奨","英語の氏名を、身分証とスペルや順序まで同じに入力"],"warn":"姓(Last Name)と名(First Name)の欄が入れ替わっていないか確認してください。","screen":{"title":"Personal Information","rows":[{"l":"Country/Region of Residence","v":"South Korea"},{"l":"ID Type","v":"Driver's License"},{"l":"First Name / Last Name","v":"GILDONG / HONG","hl":true}],"btn":"Continue"}},
      {"title":"顔認証","do":["明るい場所で逆光を避けます。","帽子・メガネ・マスクを外し、顔全体をフレームに合わせます。","画面の案内に従って首を回したり、まばたきをします。"],"screen":{"k":"face","title":"Face Verification"}},
      {"title":"承認完了","do":["承認されると取引と入出金を利用できます。"],"screen":{"k":"done","title":"認証完了"}}
    ]}
  ]},
  { "id": "okx", "name": "OKX", "sections": [
    { "id":"signup","title":"会員登録","time":"約3分", "steps": [
      {"title":"メール + 紹介コード","do":["登録リンクからアクセスし、メールアドレスを入力します。","Referral code欄に{CODE}が入力されているか確認します。","[Sign up]を押します。"],"warn":"Google・Apple・Telegramでの簡単登録には紹介特典が適用されません。必ずメールで登録してください。","screen":{"title":"What's your email?","rows":[{"l":"Email address","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Sign up"}},
      {"title":"メール認証","do":["登録したメールに届いた6桁のコードを入力します。"],"screen":{"k":"otp","title":"Enter the 6-digit code"}},
      {"title":"電話認証","do":["電話番号を入力して[Verify now]を押します。","SMSで届いた6桁のコードを入力します。"],"screen":{"k":"form","title":"What's your phone number?","rows":[{"l":"Phone number","v":"+82  010-0000-0000","hl":true}],"btn":"Verify now"}},
      {"title":"パスワード設定","do":["8~32文字、小文字・大文字・数字・特殊文字をそれぞれ1つ以上含めます。","[Confirm]を押すと登録完了です。"],"screen":{"k":"pw","title":"Create password","btn":"Confirm"}}
    ]},
    { "id":"check","title":"KYCの前に:紹介コードの適用確認", "steps": [
      {"title":"メニューを開く","do":["アプリのメイン画面左上の9つの点のメニューを押します。"],"screen":{"k":"tap","title":"ホーム画面","btn":"⋮⋮⋮  メニュー(左上)"}},
      {"title":"アカウント設定","do":["[Account settings]に入ります。"],"screen":{"k":"tap","title":"マイプロフィール","btn":"Account settings"}},
      {"title":"Invite perks","do":["Account informationで[Invite perks]を押します。"],"screen":{"k":"menu","title":"User Center","items":["UID","Identity verification","Trading fee tier","Invite perks"],"hl":3}},
      {"title":"コード確認","do":["Invite codeに{CODE}が表示されていれば正常に適用されています。"],"tip":"アプリのバージョンによってメニュー名や位置が少し異なる場合があります。","screen":{"title":"Your invite perks","rows":[{"l":"Invite code","v":"{CODE}","hl":true}]}}
    ]},
    { "id":"kyc","title":"KYC本人確認","time":"約5分", "steps": [
      {"title":"認証開始","do":["登録したメールアドレスでアプリにログインします。","プロフィールで[Get verified]を押します。"],"screen":{"k":"tap","title":"Verify your identity","btn":"Get verified"}},
      {"title":"地域・身分証の選択","do":["居住地域:お住まいの国","運転免許証・身分証・パスポートのいずれかを選び、[Next]"],"screen":{"title":"Select ID type","rows":[{"l":"Country/region of residence","v":"South Korea"},{"l":"ID type","v":"Driver's license","hl":true}],"btn":"Next"}},
      {"title":"身分証の撮影","do":["表面 → 裏面の順に撮影します。"],"tip":"光の反射や影がないよう、すべての文字がはっきり見えるように撮影してください。","screen":{"k":"id","title":"Check the photo"}},
      {"title":"セルフィー認証","do":["マスク・メガネ・帽子を外して正面を向きます。","案内に従って顔を認証します。"],"screen":{"k":"face","title":"Take a selfie"}},
      {"title":"審査完了","do":["審査は通常2分ほどで、終わると通知が届きます。","'Identity verified'と表示されれば完了です。"],"screen":{"k":"done","title":"Identity verified"}}
    ]},
    { "id":"refchange","title":"すでに登録済みの方:紹介コード変更の申請","warn":"アカウントを削除せずに紹介コードだけを変更できる方法です。以下の条件のうち1つを満たせば変更できるため、アカウント削除の前にまず確認してください。", "steps": [
      {"title":"変更可能条件の確認","do":["登録後7日以内","登録後7~30日、総取引量 ≤ 400,000","登録後30~90日、総取引量 ≤ 500,000","登録後90日超、直近90日の取引量 ≤ 5,000,000"],"tip":"4つのうち1つを満たせば大丈夫です。該当しない場合は、下の'アカウント削除後に再登録'で進めてください。"},
      {"title":"変更申請ページを開く","do":["OKXにログインした状態で、下のボタンから申請ページを開きます。コードは自動入力されず、申請後にOKXの審査を経て承認されます。"],"link":{"label":"OKX招待コード変更ページを開く","href":"https://www.okx.com/bind-channel"}},
      {"title":"招待コード・理由の入力","do":["Invite Code欄に{CODE}を入力します。","Reason for joining欄に変更理由を英語で入力します。"],"copy":"Change referral code","screen":{"k":"form","title":"Change invite code","rows":[{"l":"Invite Code","v":"{CODE}","hl":true},{"l":"Reason for joining","v":"Change referral code"}],"btn":"Submit"}},
      {"title":"適用確認","do":["処理が終わったら、上の'紹介コードの適用確認'の手順で、Invite perksに{CODE}が表示されるか確認します。"],"tip":"資産の移動、退会、KYCの変更の前に、取引所の最新ポリシーを再度ご確認ください。"}
    ]},
    { "id":"change","title":"変更できない場合:アカウント削除後に再登録","warn":"アカウントの削除は永久的で、元に戻せません。残高をすべて移してから進めてください。まず紹介コードの変更申請が可能か確認してください。", "steps": [
      {"title":"残高確認","do":["総資産が0で、残っているコインがないことを確認します。"],"screen":{"k":"form","title":"総資産","rows":[{"l":"Total assets","v":"0 USDT","hl":true}]}},
      {"title":"削除メニュー","do":["人のアイコン → [Security] → [Close Account]"],"screen":{"k":"menu","title":"Assets","items":["Overview","Security","Verification","Close Account"],"hl":3}},
      {"title":"OTP設定","do":["'Complete the following before closing account'が表示されたら、先にAuthenticatorアプリ(OTP)を設定します。"],"screen":{"k":"tap","title":"Complete the following before closing account","btn":"Turn on authenticator app"}},
      {"title":"削除を進める","do":["削除理由の選択","OTP・メール認証コードの入力","[Continue to close]を選択"],"warn":"[Freeze instead]ではなく[Continue to close]を押す必要があります。","screen":{"k":"tap","title":"Are you sure?","btn":"Continue to close","alt":"Freeze instead"}},
      {"title":"新規アカウント登録","do":["削除が終わったら、上の'会員登録'の手順で再度登録します。","紹介コード{CODE}を必ず確認してください。"],"screen":{"k":"form","title":"会員登録","rows":[{"l":"紹介コード","v":"{CODE}","hl":true}],"btn":"登録する"}}
    ]}
  ]},
  { "id": "bybit", "name": "Bybit", "sections": [
    { "id":"signup","title":"会員登録","time":"約3分", "steps": [
      {"title":"会員登録の開始","do":["登録リンクからアクセスし、[Sign Up]を押します。","居住国を正確に選択します。"],"screen":{"k":"tap","title":"Welcome to Bybit!","btn":"Sign Up","alt":"Log In"}},
      {"title":"アカウント情報の入力","do":["長く使うメールアドレスまたは電話番号を入力します。","規約に同意して[Next]"],"screen":{"k":"form","title":"Create Account","rows":[{"l":"Email","v":"example@email.com"}],"btn":"Next"}},
      {"title":"紹介コードの確認","do":["Referral Code欄に{CODE}を入力します。"],"warn":"紹介コードは登録後に変更できません。","screen":{"title":"Referral Code (Optional)","rows":[{"l":"Enter referral code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"認証番号の入力","do":["メールまたはSMSで届いた6桁の番号を入力します。"],"tip":"メールが届かない場合は迷惑メールフォルダも確認してください。","screen":{"k":"otp","title":"Email Verification"}},
      {"title":"パスワード設定","do":["8~30文字、英大文字・小文字・数字をそれぞれ1つ以上"],"tip":"他のサイトと異なる専用パスワードをおすすめします。","screen":{"k":"pw","title":"Set Your Password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC本人確認","time":"約5分", "steps": [
      {"title":"認証メニュー","do":["プロフィール → [Identity Verification] → [Verify Now]","Standard認証から始めます。"],"screen":{"k":"menu","title":"Account & Security","items":["Account & Security","Identity Verification","Payment","My Rewards"],"hl":1}},
      {"title":"国・身分証の選択","do":["発行国:お住まいの国","ID Card・Driver's License・Passportのいずれかを選択"],"screen":{"k":"menu","title":"Select ID type","items":["ID Card","Driver's License","Passport"],"hl":0}},
      {"title":"身分証の撮影","do":["原本を無地の背景の上に置き、明るい場所で撮影します。"],"tip":"名前・生年月日・写真が鮮明で、光の反射・ぼやけ・見切れがないようにしてください。","screen":{"k":"id","title":"Proof of Identity"}},
      {"title":"顔認証","do":["顔全体をフレームに合わせ、帽子とマスクを外します。"],"screen":{"k":"face","title":"Facial Recognition"}},
      {"title":"審査完了","do":["Identity Verificationの状態がVerifiedに変われば完了です。"],"screen":{"k":"done","title":"Verified"}}
    ]},
    { "id":"check","title":"すでに登録済みの方:紹介者登録のリクエスト","warn":"現在のアカウントに紹介者が登録されていない場合のみ申請できます。", "steps": [
      {"title":"メールを作成","do":["宛先:support@bybit.com","件名:Bybit 紹介者変更リクエスト"],"screen":{"k":"mail","to":"support@bybit.com","subj":"Bybit 紹介者変更リクエスト"}},
      {"title":"内容を貼り付け","do":["下の内容をコピーして貼り付け、空欄を埋めます。"],"copy":"紹介コードの登録に同意します。\n登録メールアドレスまたは電話番号: \nUID: \n割り当てを希望する紹介コード: {CODE}"},
      {"title":"確認して送信","do":["メールアドレス・電話番号・UID・紹介コードが合っているか確認して送信します。"],"screen":{"k":"tap","title":"新規メール","btn":"送信"}}
    ]},
    { "id":"change","title":"すでに登録済みの方:KYCを新規アカウントへ移行", "steps": [
      {"title":"新規アカウントを作成","do":["これまで使っていないメールアドレス・電話番号で新規アカウントを作成します。","紹介コード{CODE}を入力します。"],"screen":{"k":"form","title":"新規アカウント登録","rows":[{"l":"Referral Code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"既存アカウントのメニュー","do":["既存アカウントで人のアイコン → [Account & Security]"],"screen":{"k":"menu","title":"マイアカウント","items":["Account & Security","My Fee Rates","My Rewards"],"hl":0}},
      {"title":"KYC移行の開始","do":["Identity Verificationで[Verify Now]","[Identity Transfer] → [Facial Verification]"],"screen":{"k":"tap","title":"Identity Verification","btn":"Identity Transfer"}},
      {"title":"顔認証","do":["案内に従って顔を動かして認証し、[Continue]"],"screen":{"k":"face","title":"Facial Verification"}},
      {"title":"新規アカウントの入力","do":["新規アカウントのメールアドレスまたは電話番号を入力して[Continue]"],"screen":{"k":"form","title":"KYC移行","rows":[{"l":"新規アカウントのメールアドレスまたは電話番号","v":"new@email.com","hl":true}],"btn":"Continue"}}
    ]}
  ]},
  { "id": "bitget", "name": "Bitget", "sections": [
    { "id":"signup","title":"会員登録","time":"約3分", "steps": [
      {"title":"登録情報 + 紹介コード","do":["登録リンクからアクセスし、メールアドレスまたは電話番号を入力します。","Referral code欄に{CODE}があるか確認します。","18歳以上の項目にチェックして[Next]"],"screen":{"title":"Welcome to Bitget","rows":[{"l":"Email/Mobile","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"認証コードの入力","do":["メール登録 → メールで、電話番号登録 → SMSで届いたコードを入力して[Confirm]"],"screen":{"k":"otp","title":"Security verification","btn":"Confirm"}},
      {"title":"パスワード設定","do":["8~32文字、数字・英大文字・特殊文字をそれぞれ1つ以上"],"screen":{"k":"pw","title":"Set password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC本人確認","time":"約5分", "steps": [
      {"title":"認証開始","do":["左上の人のアイコン → [Verify] → [Verify now]"],"screen":{"k":"tap","title":"Complete identity verification","btn":"Verify now"}},
      {"title":"ID種類の選択","do":["居住・発行国:お住まいの国","ID type:ID card推奨(運転免許証・パスポートも可)"],"screen":{"k":"menu","title":"Select ID type","items":["ID card","Driver's license","Passport"],"hl":0}},
      {"title":"身分証の撮影","do":["表面 → 裏面の順に撮影します。"],"tip":"身分証全体が見えるように、ブレや光の反射なく撮影してください。","screen":{"k":"id","title":"Verify ID card"}},
      {"title":"顔認証","do":["明るい場所で帽子・マスク・サングラスを外して正面を向きます。","指示に従ってゆっくり動きます。"],"screen":{"k":"face","title":"Face verification"}},
      {"title":"承認完了","do":["審査が終わるとアカウントが有効になります。"],"screen":{"k":"done","title":"KYC認証完了"}}
    ]},
    { "id":"change","title":"すでに登録済みの方:KYC解除後に新規アカウント","warn":"電話番号での登録は、本人名義の1アカウントまでです。", "steps": [
      {"title":"情報の準備","do":["既存アカウントのUID、登録メールアドレス、登録電話番号、身分証の原本"],"screen":{"k":"check","title":"準備物","items":["既存アカウントのUID","登録メールアドレス","登録電話番号","身分証の原本"]}},
      {"title":"証明資料の撮影","do":["身分証と'KYC removal request'と書いた紙を、1つの画面に一緒に撮影","保有コインの数量画面とアカウント資産画面をキャプチャ"],"screen":{"k":"id","title":"身分証 + リクエスト用紙","paper":"KYC removal request"}},
      {"title":"メール送信","do":["準備した情報と写真を添付して、support@bitget.comに送ります。"],"tip":"通常3日以内に解除されます。","screen":{"k":"mail","to":"support@bitget.com","subj":"KYC removal request","attach":true}},
      {"title":"解除確認","do":["既存アカウントにログインし、人のアイコンを押します。","unverified = 解除完了 / verified = まだ処理中"],"screen":{"k":"form","title":"マイ情報","rows":[{"l":"認証状態","v":"unverified","hl":true}]}},
      {"title":"新規アカウント作成","do":["これまでと別のメールアドレスで新規アカウントを作成し、紹介コード{CODE}を入力します。","新規アカウントでKYC本人確認を行います。"],"screen":{"k":"form","title":"新規アカウント登録","rows":[{"l":"Email","v":"new@email.com"},{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Next"}}
    ]}
  ]}
];



var REFCHECK = [
  { id: "okx", summary: "アプリで1分あれば自分で確認できます。",
    steps: ["OKXアプリのホーム画面左上の9つの点のメニューを開きます。", "Account settings(アカウント設定)を押します。", "Account informationの一覧からInvite perksを押します。", "Invite code欄に書かれたコードを確認します。"],
    ok: "Invite codeが{CODE}であれば、dodogas紹介で正常に登録されたアカウントです。",
    note: "アプリのアップデートによって、メニュー名や位置が少し変わることがあります。" },
  { id: "bybit", summary: "アカウント情報画面で、紐づいている紹介コードを確認できます。",
    steps: ["Bybitにログインします。", "Profile → Account画面に入ります。", "Account Infoタブで、Affiliate Codeの項目を開きます。", "紐づいているAffiliate IDを確認します。"],
    note: "紹介者側の公開設定によっては、IDが隠れて表示されることがあります。迷ったらUIDをお送りください。代わりに確認します。" },
  { id: "binance", summary: "画面ですぐに確認するのは難しいです。UIDだけお送りいただければ、dodogasが代わりに確認します。",
    ask: ["取引所名(Binance)", "自分のUID(プロフィール画面からコピー)", "登録した日付(おおよそでOK)"] },
  { id: "bitget", summary: "画面ですぐに確認するのは難しいです。UIDだけお送りいただければ、dodogasが代わりに確認します。",
    ask: ["取引所名(Bitget)", "自分のUID(左上の人のアイコンからコピー)", "登録した日付(おおよそでOK)"] }
];


var FAQ = [
  { q: "ペイバックはいつ入金されますか?", a: "取引所ごとに支給時期が異なります。",
    list: ["OKX:約1時間ごとに支給", "TetherMax:ホームページ参照"],
    note: "※ 取引所の処理状況や会員ごとの条件によって、実際の支給時間は異なる場合があります。" },
  { q: "すでに登録したアカウントでも特典を受けられますか?", a: "はい、可能です。すでに登録済みのアカウントでも、取引所ごとの方法に従って、dodogas紹介コードが適用されたアカウントに切り替えられます。取引所ごとに方法が異なるため、以下からご利用中の取引所を選び、順番に進めてください。",
    links: [
      { label: "OKX · 紹介コード変更の申請", href: "guides.html#okx-refchange" },
      { label: "OKX · アカウント削除後に再登録", href: "guides.html#okx-change" },
      { label: "Bitget · KYC解除後に新規アカウント", href: "guides.html#bitget-change" },
      { label: "Bybit · KYCを新規アカウントへ移行", href: "guides.html#bybit-change" }
    ] },
  { q: "メンバーシップ等級はどのように変わりますか?", a: "メンバーシップ等級は、購読段階と取引量の基準によって決まります。詳しい内容は、下のVIPレベルアップ基準でご確認いただけます。",
    links: [
      { label: "VIPレベルアップ基準を見る", href: "vip.html" },
      { label: "メンバーシップ別の掲示板を見る", href: "membership.html" }
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
