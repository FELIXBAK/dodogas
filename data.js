// 사이트 내용은 이 파일만 고치면 됩니다. 빈 칸("")은 화면에서 "–" 또는 준비 중으로 표시됩니다.
var SITE = {
  name: "dodogas",
  // true면 샘플 표시가 보입니다. 실제 내용을 다 채운 뒤 false로 바꾸세요.
  sample: true,
  // 연락처 링크. 비워 두면 버튼이 비활성으로 보입니다.
  contacts: { discord: "https://discord.gg/BZ4kRyAuhT" }
};

// 제공 서비스 (홈 화면). link가 있으면 '바로가기' 버튼이 보입니다.
var SERVICES = [
  { name: "디스코드", tag: "커뮤니티", access: "", desc: "dodogas 디스코드 커뮤니티입니다.", link: "https://discord.gg/BZ4kRyAuhT" },
  { name: "유튜브", tag: "영상", access: "", desc: "dodogas 유튜브 채널입니다.", link: "https://www.youtube.com/@dodogas" },
  { name: "네이버 카페", tag: "커뮤니티", access: "", desc: "dodogas 네이버 카페입니다.", link: "https://cafe.naver.com/liquidation" },
  { name: "붐붐이 Lite", tag: "텔레그램", access: "전체 공개", desc: "텔레그램 채널로 제공되는 붐붐이 Lite입니다. 누구나 무료로 볼 수 있습니다.", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "KingFisher", tag: "분석 서비스", access: "결제 시 20% 할인", desc: "킹피셔(KingFisher) 서비스입니다. 아래 링크로 결제하면 20% 할인이 적용됩니다.", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];

// 거래소 혜택 비교 (홈 화면 표). icon에 로고 이미지 경로(예: "img/ex/binance.png")를 넣으면 글자 아이콘 대신 로고가 보입니다. 혜택·추천인 코드는 실제 값으로 채워 주세요.
var EXCHANGES = [
  { id: "binance", icon: "img/ex/binance.png", name: "Binance", benefit: "수수료 20% 할인", code: "361097924", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx", icon: "img/ex/okx.png",     name: "OKX",     benefit: "수수료 20% 페이백", code: "67654160", link: "https://okx.com/join/67654160" },
  { id: "bybit", icon: "img/ex/bybit.png",   name: "Bybit",   benefit: "수수료 20% 할인", code: "37560", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget", icon: "img/ex/bitget.png",  name: "Bitget",  benefit: "수수료 50% 할인", code: "wfx8", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", icon: "img/ex/tethermax.png", name: "TetherMax", benefit: "최대 90% 환급 (홈페이지 확인)", code: "3032", link: "https://tethermax.io/ko/signup?inviteCode=3032" }
];

// 이벤트·대회. start/end는 YYYY-MM-DD, end가 오늘보다 앞서면 자동으로 "종료" 처리됩니다.
var EVENTS = [
  // 예시: { exchange: "Binance", title: "이벤트 이름", tag: "대회", start: "2026-11-01", end: "2026-11-30", desc: "참여 조건과 혜택", link: "https://..." },
];

// 가입·KYC 가이드. 문구 안의 {CODE}는 해당 거래소 추천인 코드로, [버튼] 은 버튼 모양으로 바뀝니다.
// step: { title, do: [할 일], tip, warn, screen: 그림(k: tap·form·otp·pw·menu·id·face·done·mail·check), copy: 복사용 문구 }
var GUIDES = [
  { "id": "binance", "name": "Binance", "sections": [
    { "id":"signup","title":"회원가입","time":"약 3분", "steps": [
      {"title":"가입 링크로 접속","do":["위의 [가입 링크 열기] 버튼으로 접속합니다.","[Sign Up] (회원가입)을 누릅니다."],"tip":"공식 바이낸스 앱·홈페이지인지 주소를 꼭 확인하세요.","screen":{"k":"tap","title":"바이낸스에 오신 것을 환영합니다!","btn":"Sign Up","alt":"Log In"}},
      {"title":"계정 정보 + 추천인 코드","do":["이메일(또는 휴대폰 번호)과 비밀번호를 입력합니다.","추천인 코드 칸에 {CODE}가 들어 있는지 확인합니다. 비어 있으면 직접 입력하세요.","이용약관에 체크하고 [다음]을 누릅니다."],"warn":"가입 후에는 추천인 코드를 넣기 어렵습니다. 이 단계에서 꼭 확인하세요.","screen":{"title":"계정 생성","rows":[{"l":"이메일","v":"example@email.com"},{"l":"비밀번호","v":"••••••••"},{"l":"추천인 코드 (선택사항)","v":"{CODE}","hl":true}],"btn":"다음"}},
      {"title":"이메일 인증","do":["메일로 온 6자리 인증코드를 입력하고 [제출]을 누릅니다."],"tip":"메일이 안 보이면 스팸함을 확인하거나 코드를 다시 요청하세요.","screen":{"k":"otp","title":"이메일 인증","btn":"제출"}},
      {"title":"2단계 인증(2FA) 켜기","do":["보안 설정에서 Google Authenticator 등 OTP 앱을 연결합니다."],"warn":"OTP 백업키는 잃어버리지 않게 따로 안전하게 보관하세요.","screen":{"k":"menu","title":"보안 설정","items":["Google Authenticator","SMS 인증","이메일 인증"],"hl":0}}
    ]},
    { "id":"kyc","title":"KYC 본인인증","time":"약 5분", "steps": [
      {"title":"인증 시작","do":["메인 화면에서 [Verify Now]를 누릅니다."],"tip":"거래와 입출금을 하려면 KYC 인증이 필요합니다.","screen":{"k":"tap","title":"Verify Identity","btn":"Verify Now"}},
      {"title":"개인정보 입력","do":["거주 국가·발급 국가: South Korea","신분증: 운전면허증 또는 여권 권장","영문 이름을 신분증과 철자·순서까지 똑같이 입력"],"warn":"성(Last Name)과 이름(First Name) 칸이 바뀌지 않았는지 확인하세요.","screen":{"title":"Personal Information","rows":[{"l":"Country/Region of Residence","v":"South Korea"},{"l":"ID Type","v":"Driver's License"},{"l":"First Name / Last Name","v":"GILDONG / HONG","hl":true}],"btn":"Continue"}},
      {"title":"얼굴 인증","do":["밝은 곳에서 역광을 피합니다.","모자·안경·마스크를 벗고 얼굴 전체를 프레임에 맞춥니다.","화면 안내에 따라 고개를 돌리거나 눈을 깜빡입니다."],"screen":{"k":"face","title":"Face Verification"}},
      {"title":"승인 완료","do":["승인되면 거래와 입출금을 이용할 수 있습니다."],"screen":{"k":"done","title":"인증 완료"}}
    ]}
  ]},
  { "id": "okx", "name": "OKX", "sections": [
    { "id":"signup","title":"회원가입","time":"약 3분", "steps": [
      {"title":"이메일 + 추천인 코드","do":["가입 링크로 접속해 이메일을 입력합니다.","Referral code 칸에 {CODE}가 입력됐는지 확인합니다.","[Sign up]을 누릅니다."],"warn":"Google·Apple·Telegram 간편가입은 추천 혜택이 적용되지 않습니다. 반드시 이메일로 가입하세요.","screen":{"title":"What's your email?","rows":[{"l":"Email address","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Sign up"}},
      {"title":"이메일 인증","do":["가입한 메일로 온 6자리 코드를 입력합니다."],"screen":{"k":"otp","title":"Enter the 6-digit code"}},
      {"title":"휴대폰 인증","do":["휴대폰 번호(+82)를 입력하고 [Verify now]를 누릅니다.","문자로 온 6자리 코드를 입력합니다."],"screen":{"k":"form","title":"What's your phone number?","rows":[{"l":"Phone number","v":"+82  010-0000-0000","hl":true}],"btn":"Verify now"}},
      {"title":"비밀번호 설정","do":["8~32자, 소문자·대문자·숫자·특수문자를 각각 1개 이상 넣습니다.","[Confirm]을 누르면 가입 완료입니다."],"screen":{"k":"pw","title":"Create password","btn":"Confirm"}}
    ]},
    { "id":"check","title":"KYC 전에: 추천인 적용 확인", "steps": [
      {"title":"메뉴 열기","do":["앱 메인 화면 왼쪽 위 9개 점 메뉴를 누릅니다."],"screen":{"k":"tap","title":"홈 화면","btn":"⋮⋮⋮  메뉴 (왼쪽 위)"}},
      {"title":"계정 설정","do":["[Account settings]로 들어갑니다."],"screen":{"k":"tap","title":"내 프로필","btn":"Account settings"}},
      {"title":"Invite perks","do":["Account information에서 [Invite perks]를 누릅니다."],"screen":{"k":"menu","title":"User Center","items":["UID","Identity verification","Trading fee tier","Invite perks"],"hl":3}},
      {"title":"코드 확인","do":["Invite code에 {CODE}가 보이면 정상 적용입니다."],"tip":"앱 버전에 따라 메뉴 이름이나 위치가 조금 다를 수 있습니다.","screen":{"title":"Your invite perks","rows":[{"l":"Invite code","v":"{CODE}","hl":true}]}}
    ]},
    { "id":"kyc","title":"KYC 본인인증","time":"약 5분", "steps": [
      {"title":"인증 시작","do":["가입한 이메일로 앱에 로그인합니다.","프로필에서 [Get verified]를 누릅니다."],"screen":{"k":"tap","title":"Verify your identity","btn":"Get verified"}},
      {"title":"지역·신분증 선택","do":["거주 지역: South Korea","운전면허증·신분증·여권 중 하나를 선택하고 [Next]"],"screen":{"title":"Select ID type","rows":[{"l":"Country/region of residence","v":"South Korea"},{"l":"ID type","v":"Driver's license","hl":true}],"btn":"Next"}},
      {"title":"신분증 촬영","do":["앞면 → 뒷면 순서로 촬영합니다."],"tip":"빛 반사와 그림자가 없게, 모든 글자가 선명하게 보이도록 찍으세요.","screen":{"k":"id","title":"Check the photo"}},
      {"title":"셀카 인증","do":["마스크·안경·모자를 벗고 정면을 봅니다.","안내에 맞춰 얼굴을 인증합니다."],"screen":{"k":"face","title":"Take a selfie"}},
      {"title":"검토 완료","do":["검토는 보통 2분 정도 걸리고, 끝나면 알림이 옵니다.","'Identity verified'가 보이면 완료입니다."],"screen":{"k":"done","title":"Identity verified"}}
    ]},
    { "id":"change","title":"이미 가입했다면: 계정 삭제 후 재가입","warn":"계정 삭제는 영구적이며 되돌릴 수 없습니다. 잔고를 모두 옮긴 뒤 진행하세요.", "steps": [
      {"title":"잔고 확인","do":["총 자산이 0인지, 남은 코인이 없는지 확인합니다."],"screen":{"k":"form","title":"총 자산","rows":[{"l":"Total assets","v":"0 USDT","hl":true}]}},
      {"title":"삭제 메뉴","do":["사람 아이콘 → [Security] → [Close Account]"],"screen":{"k":"menu","title":"Assets","items":["Overview","Security","Verification","Close Account"],"hl":3}},
      {"title":"OTP 설정","do":["'Complete the following before closing account'가 나오면 먼저 Authenticator 앱(OTP)을 설정합니다."],"screen":{"k":"tap","title":"Complete the following before closing account","btn":"Turn on authenticator app"}},
      {"title":"삭제 진행","do":["삭제 이유 선택","OTP·이메일 인증번호 입력","[Continue to close] 선택"],"warn":"[Freeze instead]가 아니라 [Continue to close]를 눌러야 합니다.","screen":{"k":"tap","title":"Are you sure?","btn":"Continue to close","alt":"Freeze instead"}},
      {"title":"새 계정 가입","do":["삭제가 끝나면 위 '회원가입' 순서대로 다시 가입합니다.","추천인 코드 {CODE}를 꼭 확인하세요."],"screen":{"k":"form","title":"회원가입","rows":[{"l":"추천인 코드","v":"{CODE}","hl":true}],"btn":"가입하기"}}
    ]}
  ]},
  { "id": "bybit", "name": "Bybit", "sections": [
    { "id":"signup","title":"회원가입","time":"약 3분", "steps": [
      {"title":"회원가입 시작","do":["가입 링크로 접속해 [Sign Up]을 누릅니다.","거주 국가를 South Korea로 정확히 선택합니다."],"screen":{"k":"tap","title":"Welcome to Bybit!","btn":"Sign Up","alt":"Log In"}},
      {"title":"계정 정보 입력","do":["오래 쓸 이메일 또는 휴대폰 번호를 입력합니다.","약관에 동의하고 [Next]"],"screen":{"k":"form","title":"Create Account","rows":[{"l":"Email","v":"example@email.com"}],"btn":"Next"}},
      {"title":"추천인 코드 확인","do":["Referral Code 칸에 {CODE}를 입력합니다."],"warn":"추천인 코드는 가입 후 변경할 수 없습니다.","screen":{"title":"Referral Code (Optional)","rows":[{"l":"Enter referral code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"인증번호 입력","do":["이메일 또는 SMS로 받은 6자리 번호를 입력합니다."],"tip":"메일이 안 보이면 스팸함도 확인하세요.","screen":{"k":"otp","title":"Email Verification"}},
      {"title":"비밀번호 설정","do":["8~30자, 영문 대문자·소문자·숫자 각 1개 이상"],"tip":"다른 사이트와 다른 전용 비밀번호를 권장합니다.","screen":{"k":"pw","title":"Set Your Password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC 본인인증","time":"약 5분", "steps": [
      {"title":"인증 메뉴","do":["프로필 → [Identity Verification] → [Verify Now]","Standard 인증부터 시작합니다."],"screen":{"k":"menu","title":"Account & Security","items":["Account & Security","Identity Verification","Payment","My Rewards"],"hl":1}},
      {"title":"국가·신분증 선택","do":["발급 국가: South Korea","ID Card·Driver's License·Passport 중 하나 선택"],"screen":{"k":"menu","title":"Select ID type","items":["ID Card","Driver's License","Passport"],"hl":0}},
      {"title":"신분증 촬영","do":["원본을 단색 배경 위에 놓고 밝은 곳에서 찍습니다."],"tip":"이름·생년월일·사진이 선명하고, 빛 반사·흐림·잘림이 없어야 합니다.","screen":{"k":"id","title":"Proof of Identity"}},
      {"title":"얼굴 인증","do":["얼굴 전체를 프레임에 맞추고, 모자·마스크는 벗습니다."],"screen":{"k":"face","title":"Facial Recognition"}},
      {"title":"심사 완료","do":["Identity Verification 상태가 Verified로 바뀌면 완료입니다."],"screen":{"k":"done","title":"Verified"}}
    ]},
    { "id":"check","title":"이미 가입했다면: 추천인 등록 요청","warn":"현재 계정에 추천인이 등록되어 있지 않은 경우에만 신청할 수 있습니다.", "steps": [
      {"title":"이메일 작성","do":["받는 사람: support@bybit.com","제목: 바이비트 추천인 변경 요청"],"screen":{"k":"mail","to":"support@bybit.com","subj":"바이비트 추천인 변경 요청"}},
      {"title":"내용 붙여넣기","do":["아래 내용을 복사해 붙여넣고, 빈칸을 채웁니다."],"copy":"추천인 코드 등록에 동의합니다.\n가입 이메일 또는 휴대폰 번호: \nUID: \n배정받을 추천인 코드: {CODE}"},
      {"title":"확인 후 발송","do":["이메일·휴대폰 번호·UID·추천인 코드가 맞는지 확인하고 보냅니다."],"screen":{"k":"tap","title":"새 메일","btn":"보내기"}}
    ]},
    { "id":"change","title":"이미 가입했다면: KYC를 새 계정으로 이전", "steps": [
      {"title":"새 계정 만들기","do":["기존에 쓰지 않은 이메일·휴대폰 번호로 새 계정을 만듭니다.","추천인 코드 {CODE}를 입력합니다."],"screen":{"k":"form","title":"새 계정 가입","rows":[{"l":"Referral Code","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"기존 계정 메뉴","do":["기존 계정에서 사람 아이콘 → [Account & Security]"],"screen":{"k":"menu","title":"내 계정","items":["Account & Security","My Fee Rates","My Rewards"],"hl":0}},
      {"title":"KYC 이전 시작","do":["Identity Verification에서 [Verify Now]","[Identity Transfer] → [Facial Verification]"],"screen":{"k":"tap","title":"Identity Verification","btn":"Identity Transfer"}},
      {"title":"얼굴 인증","do":["안내에 따라 얼굴을 돌려 인증하고 [Continue]"],"screen":{"k":"face","title":"Facial Verification"}},
      {"title":"새 계정 입력","do":["새 계정의 이메일 또는 휴대폰 번호를 입력하고 [Continue]"],"screen":{"k":"form","title":"KYC 이전","rows":[{"l":"새 계정 이메일 또는 휴대폰 번호","v":"new@email.com","hl":true}],"btn":"Continue"}}
    ]}
  ]},
  { "id": "bitget", "name": "Bitget", "sections": [
    { "id":"signup","title":"회원가입","time":"약 3분", "steps": [
      {"title":"가입 정보 + 추천인 코드","do":["가입 링크로 접속해 이메일 또는 전화번호를 입력합니다.","Referral code 칸에 {CODE}가 있는지 확인합니다.","만 18세 이상 항목에 체크하고 [Next]"],"screen":{"title":"Welcome to Bitget","rows":[{"l":"Email/Mobile","v":"example@email.com"},{"l":"Referral code (optional)","v":"{CODE}","hl":true}],"btn":"Next"}},
      {"title":"인증코드 입력","do":["이메일 가입 → 메일로, 전화번호 가입 → 문자로 온 코드를 입력하고 [Confirm]"],"screen":{"k":"otp","title":"Security verification","btn":"Confirm"}},
      {"title":"비밀번호 설정","do":["8~32자, 숫자·영문 대문자·특수문자 각 1개 이상"],"screen":{"k":"pw","title":"Set password","btn":"Next"}}
    ]},
    { "id":"kyc","title":"KYC 본인인증","time":"약 5분", "steps": [
      {"title":"인증 시작","do":["왼쪽 위 사람 아이콘 → [Verify] → [Verify now]"],"screen":{"k":"tap","title":"Complete identity verification","btn":"Verify now"}},
      {"title":"ID 종류 선택","do":["거주·발급 국가: South Korea","ID type: ID card 권장 (운전면허증·여권도 가능)"],"screen":{"k":"menu","title":"Select ID type","items":["ID card","Driver's license","Passport"],"hl":0}},
      {"title":"신분증 촬영","do":["앞면 → 뒷면 순서로 촬영합니다."],"tip":"신분증 전체가 보이게, 흔들림·빛 반사 없이 찍으세요.","screen":{"k":"id","title":"Verify ID card"}},
      {"title":"얼굴 인증","do":["밝은 곳에서 모자·마스크·선글라스를 벗고 정면을 봅니다.","지시에 따라 천천히 움직입니다."],"screen":{"k":"face","title":"Face verification"}},
      {"title":"승인 완료","do":["검토가 끝나면 계정이 활성화됩니다."],"screen":{"k":"done","title":"KYC 인증 완료"}}
    ]},
    { "id":"change","title":"이미 가입했다면: KYC 해제 후 새 계정","warn":"휴대폰 번호 가입은 본인 명의 1계정까지만 가능합니다.", "steps": [
      {"title":"정보 준비","do":["기존 계정 UID, 등록 이메일, 등록 휴대폰 번호, 신분증 원본"],"screen":{"k":"check","title":"준비물","items":["기존 계정 UID","등록 이메일","등록 휴대폰 번호","신분증 원본"]}},
      {"title":"증빙자료 촬영","do":["신분증과 'KYC 해제 요청'이라고 쓴 종이를 한 화면에 함께 촬영","보유 코인 수량 화면과 계정 자산 화면 캡처"],"screen":{"k":"id","title":"신분증 + 요청 종이","paper":"KYC 해제 요청"}},
      {"title":"이메일 발송","do":["준비한 정보와 사진을 첨부해 support@bitget.com으로 보냅니다."],"tip":"보통 3일 이내에 해제됩니다.","screen":{"k":"mail","to":"support@bitget.com","subj":"KYC 해제 요청","attach":true}},
      {"title":"해제 확인","do":["기존 계정에 로그인해 사람 아이콘을 누릅니다.","unverified = 해제 완료 / verified = 아직 처리 중"],"screen":{"k":"form","title":"내 정보","rows":[{"l":"인증 상태","v":"unverified","hl":true}]}},
      {"title":"새 계정 생성","do":["기존과 다른 이메일로 새 계정을 만들고 추천인 코드 {CODE}를 입력합니다.","새 계정에서 KYC 본인인증을 진행합니다."],"screen":{"k":"form","title":"새 계정 가입","rows":[{"l":"Email","v":"new@email.com"},{"l":"Referral code","v":"{CODE}","hl":true}],"btn":"Next"}}
    ]}
  ]}
];

// 내 추천인 적용 확인 방법 (가입·KYC 가이드 페이지 아래). steps가 없으면 고객센터 문의로 안내합니다.
var REFCHECK = [
  { id: "okx", summary: "OKX 앱의 Invite perks에서 직접 확인할 수 있습니다.", steps: ["OKX 앱 메인 화면 왼쪽 위의 9개 점 메뉴를 누릅니다.", "Account settings(계정 설정)로 들어갑니다.", "Account information에서 Invite perks를 누릅니다.", "Invite code에 표시된 추천인 코드를 확인합니다."], note: "Invite code가 {CODE}로 보이면 dodogas 추천인이 적용된 계정입니다. 앱 버전에 따라 메뉴 이름이나 위치가 조금 다를 수 있습니다." },
  { id: "bybit", summary: "Bybit Account Info에서 등록된 Affiliate Code를 확인할 수 있습니다.", steps: ["Bybit에 로그인합니다.", "프로필 → Account 페이지로 이동합니다.", "Account Info 탭에서 등록된 Affiliate Code 항목을 선택합니다.", "표시되는 Affiliate ID를 확인합니다."], note: "파트너의 개인정보 설정에 따라 Affiliate ID가 보이지 않을 수 있습니다. 코드가 보이지 않거나 판단이 어려우면 고객센터로 문의해 주세요." },
  { id: "binance", summary: "Binance 추천인 적용 여부는 dodogas 고객센터에서 확인해 드립니다.", note: "직접 확인하는 경로가 확인되지 않아 고객센터에서 확인을 도와드립니다." },
  { id: "bitget", summary: "Bitget 추천인 적용 여부는 dodogas 고객센터에서 확인해 드립니다.", note: "직접 확인하는 경로가 확인되지 않아 고객센터에서 확인을 도와드립니다." },
  { id: "tethermax", summary: "TetherMax 추천인 적용 여부는 dodogas 고객센터에서 확인해 드립니다.", note: "직접 확인하는 경로가 확인되지 않아 고객센터에서 확인을 도와드립니다." }
];

// 자주 묻는 질문
var FAQ = [
  { q: "페이백은 언제 들어오나요?", a: "거래소마다 지급 시점이 다릅니다. 실제 지급 시간표를 여기에 적어 주세요." },
  { q: "이미 가입한 계정도 혜택을 받을 수 있나요?", a: "가능 여부와 방법을 여기에 적어 주세요." },
  { q: "멤버십 등급은 어떻게 바뀌나요?", a: "등급 기준과 변경 방법을 여기에 적어 주세요." }
];
