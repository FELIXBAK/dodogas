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
  { exchange: "Binance", title: "샘플 이벤트 A", tag: "대회",     start: "2026-10-01", end: "2026-10-31", desc: "이벤트 설명을 여기에 적습니다.", link: "" },
  { exchange: "OKX",     title: "샘플 이벤트 B", tag: "신규가입", start: "2026-10-01", end: "2026-10-31", desc: "참여 조건과 혜택을 한두 줄로 적습니다.", link: "" },
  { exchange: "Bybit",   title: "샘플 이벤트 C", tag: "캐시백",   start: "2026-09-01", end: "2026-09-30", desc: "종료된 이벤트는 자동으로 종료 목록에 들어갑니다.", link: "" }
];

// 가입·KYC 가이드. steps의 img에 이미지 경로를 넣으면 단계 아래에 사진이 붙습니다.
// 가입·KYC 가이드. 문구의 {CODE}는 위 EXCHANGES의 추천인 코드로 자동 바뀝니다.
var GUIDES = [
  { id: "binance", name: "Binance", sections: [
    { title: "회원가입", steps: [
      { title: "가입 링크로 접속", text: "위의 '가입 링크 열기'로 접속해 Sign Up(회원가입)을 누르세요. 공식 앱 또는 공식 홈페이지인지 꼭 확인하세요." },
      { title: "이메일·비밀번호 입력", text: "이메일(또는 휴대폰 번호)과 비밀번호를 입력합니다." },
      { title: "추천인 코드 확인", text: "'추천인 코드' 칸에 {CODE}가 들어 있는지 확인하세요. 가입 후에는 적용이 어려우니 이 단계에서 반드시 확인해야 합니다." },
      { title: "이용약관 동의 후 다음", text: "이용약관 체크 후 '다음'을 누릅니다." },
      { title: "이메일 인증", text: "이메일로 온 6자리 인증코드를 입력합니다. 메일이 안 보이면 스팸함을 확인하거나 코드를 다시 요청하세요." },
      { title: "보안 설정(2단계 인증)", text: "Google Authenticator 등으로 2단계 인증(2FA)을 켜 계정을 보호하세요. OTP 백업키는 분실하지 않게 따로 보관하세요." }
    ]},
    { title: "KYC 본인인증", steps: [
      { title: "Verify Now 누르기", text: "메인 화면에서 Verify Now를 누릅니다. 거래·입출금에 KYC가 필요합니다. 소요 시간은 약 5분입니다." },
      { title: "개인정보 입력", text: "거주 국가·발급 국가는 South Korea(대한민국), 신분증은 운전면허증 또는 여권을 권장합니다. 영문 이름은 신분증과 똑같이 입력하고, 성(Last Name)과 이름(First Name) 순서를 확인하세요." },
      { title: "얼굴 인증", text: "밝은 곳에서 역광을 피하고, 모자·안경·마스크를 벗은 뒤 얼굴 전체를 프레임 안에 맞춥니다. 화면 안내에 따라 고개를 돌리거나 눈을 깜빡이세요." },
      { title: "승인 대기", text: "승인되면 거래와 입출금을 이용할 수 있습니다." }
    ]}
  ]},
  { id: "okx", name: "OKX", sections: [
    { title: "회원가입", steps: [
      { title: "이메일 입력", text: "가입 링크로 접속해 이메일을 입력하고, 추천인 코드(Referral code) 칸에 {CODE}가 입력됐는지 확인합니다.", warn: "Google·Apple·Telegram으로 가입하면 20% 페이백을 받을 수 없습니다. 반드시 이메일로만 가입하세요." },
      { title: "이메일 인증", text: "Sign up을 누르면 이메일로 6자리 코드가 전송됩니다. 확인해서 입력하세요." },
      { title: "휴대폰 인증", text: "휴대폰 번호를 입력하고 Verify now를 누른 뒤, 문자로 온 6자리 코드를 입력합니다." },
      { title: "비밀번호 설정", text: "8~32자, 소문자·대문자·숫자·특수문자를 각각 1개 이상 넣고 Confirm을 누릅니다." },
      { title: "가입 완료", text: "회원가입이 끝났습니다. 이어서 KYC 인증을 진행하세요." }
    ]},
    { title: "KYC 본인인증", steps: [
      { title: "앱 로그인 후 Get verified", text: "가입한 이메일로 앱에 로그인하고 Get verified를 누릅니다." },
      { title: "거주 지역·신분증 선택", text: "South Korea를 선택하고 운전면허증(권장)·신분증·여권 중 하나를 고릅니다." },
      { title: "신분증 촬영", text: "앞면과 뒷면을 선명하게 촬영합니다. 빛 반사와 그림자가 생기지 않게, 모든 정보가 잘 보이게 찍으세요." },
      { title: "셀카 인증", text: "마스크·안경·모자를 벗고 정면을 바라보세요. 안내에 맞춰 얼굴 인증을 합니다." },
      { title: "검토 완료", text: "검토는 보통 2분 정도 걸리며, 끝나면 알림이 옵니다. 'Identity verified'가 뜨면 완료입니다." }
    ]},
    { title: "추천인 적용 확인", steps: [
      { title: "메뉴 열기", text: "모바일 앱 메인 화면 왼쪽 위의 9개 점 메뉴를 누릅니다." },
      { title: "Account settings", text: "Account settings(계정 설정)로 들어갑니다." },
      { title: "Invite perks", text: "Account information에서 Invite perks를 누릅니다." },
      { title: "확인", text: "Rebate rate 20%와 Invite code {CODE}가 보이면 정상 적용된 것입니다. (앱 버전에 따라 메뉴 이름이나 위치가 조금 다를 수 있습니다.)" }
    ]},
    { title: "이미 가입한 경우: 계정 삭제 후 재가입", warn: "계정 삭제는 영구적이며 되돌릴 수 없습니다. 이미 다른 추천인으로 가입된 계정에 혜택을 받고 싶을 때만 진행하세요.", steps: [
      { title: "잔고·자산 확인", text: "삭제 전에 잔고와 보유 자산이 남아 있지 않은지 꼭 확인하세요." },
      { title: "계정 삭제 메뉴", text: "사람 아이콘 → Security → Close Account로 들어갑니다." },
      { title: "OTP 설정", text: "'Complete the following before closing account'가 나오면 먼저 Authenticator 앱(OTP)을 설정해야 삭제를 진행할 수 있습니다." },
      { title: "계정 삭제 진행", text: "삭제 이유 선택 → OTP·이메일 인증번호 입력 → Continue to close를 누릅니다. 'Freeze instead'가 아니라 반드시 Continue to close를 선택하세요." },
      { title: "새 계정 가입", text: "삭제가 완료된 뒤 위의 '회원가입' 순서대로 새로 가입하고, 추천인 코드 {CODE}를 꼭 확인하세요." }
    ]}
  ]},
  { id: "bybit", name: "Bybit", sections: [
    { title: "회원가입", steps: [
      { title: "회원가입 시작", text: "가입 링크로 접속해 Sign Up을 누르고, 거주 국가를 실제 거주 국가(South Korea)로 정확히 선택하세요." },
      { title: "이메일·휴대폰 입력", text: "오래 사용할 수 있는 이메일 또는 휴대폰 번호를 입력하고, 약관에 동의한 뒤 Next를 누릅니다." },
      { title: "추천인 코드 확인", text: "Referral Code 칸에 {CODE}를 입력합니다.", warn: "추천인 코드는 가입 후 변경할 수 없으니 반드시 확인하세요." },
      { title: "인증번호 입력", text: "이메일 또는 SMS로 받은 6자리 인증번호를 입력합니다. 메일이 안 보이면 스팸함도 확인하세요." },
      { title: "비밀번호 설정", text: "8~30자, 영문 대문자·소문자·숫자를 각각 1개 이상 넣습니다. 다른 사이트와 다른 전용 비밀번호를 권장합니다." }
    ]},
    { title: "KYC 본인인증", steps: [
      { title: "인증 메뉴 열기", text: "프로필 메뉴에서 Account & Security → Identity Verification을 선택하고 Verify Now를 누릅니다. Standard 인증부터 시작합니다." },
      { title: "국가·신분증 선택", text: "발급 국가는 South Korea, 신분증은 ID Card·Driver's License·Passport 중 하나를 고릅니다." },
      { title: "신분증 촬영", text: "원본을 밝은 곳에서 단색 배경 위에 놓고 촬영하세요. 이름·생년월일·사진이 선명해야 하며, 빛 반사·흐림·잘림이 없어야 합니다." },
      { title: "얼굴 인증", text: "밝은 곳에서 얼굴 전체를 프레임에 맞추고, 모자·마스크 등 가리는 물건은 치웁니다. 안내에 따라 진행하세요." },
      { title: "심사 완료", text: "Identity Verification에서 상태가 Verified로 바뀌면 완료입니다. 필요한 경우 추가 확인을 요청할 수 있습니다." }
    ]},
    { title: "이미 가입한 경우: 추천인 등록 요청", warn: "현재 계정에 추천인이 등록되어 있지 않은 경우에만 신청하세요. 추천인 코드는 등록된 뒤에는 변경이 어려울 수 있습니다.", steps: [
      { title: "이메일 작성", text: "받는 사람은 support@bybit.com, 제목은 '바이비트 추천인 변경 요청'으로 작성합니다." },
      { title: "내용 입력", text: "다음 내용을 적어 주세요: ① 추천인 코드 등록에 동의합니다. ② 가입 이메일 또는 휴대폰 번호 ③ UID ④ 배정받을 추천인 코드: {CODE}" },
      { title: "확인 후 발송", text: "이메일·휴대폰 번호·UID·추천인 코드가 빠짐없이 맞는지 확인하고 보냅니다." }
    ]},
    { title: "이미 가입한 경우: KYC를 새 계정으로 이전", intro: "기존 계정의 KYC를 추천인 코드가 적용된 새 계정으로 옮기는 방법입니다.", steps: [
      { title: "새 계정 만들기", text: "먼저 기존에 쓰지 않은 이메일 또는 휴대폰 번호로 새 Bybit 계정을 만들고, 추천인 코드 {CODE}를 입력합니다." },
      { title: "기존 계정 메뉴 접속", text: "기존 계정에서 사람 아이콘 → Account & Security로 들어갑니다." },
      { title: "Identity Verification", text: "Identity Verification에서 Verify Now를 누릅니다." },
      { title: "KYC 이전 시작", text: "Identity Transfer → Facial Verification을 선택합니다." },
      { title: "얼굴 인증 진행", text: "안내에 따라 얼굴을 돌려 인증하고 Continue를 누릅니다." },
      { title: "새 계정 정보 입력", text: "KYC를 이전받을 새 계정의 이메일 또는 휴대폰 번호를 입력하고 Continue를 누릅니다." }
    ]}
  ]},
  { id: "bitget", name: "Bitget", sections: [
    { title: "회원가입", steps: [
      { title: "가입 정보 입력", text: "가입 링크로 접속해 이메일 또는 전화번호를 입력합니다." },
      { title: "추천인 코드 입력", text: "Referral code(optional) 칸에 {CODE}가 들어 있는지 확인합니다. 만 18세 이상 항목에 체크하고 Next를 누릅니다." },
      { title: "인증코드 입력", text: "이메일로 가입했다면 이메일로, 전화번호로 가입했다면 문자로 온 인증 코드를 입력하고 Confirm을 누릅니다." },
      { title: "비밀번호 설정", text: "8~32자, 숫자·대문자(영문)·특수문자를 각각 1개 이상 포함해 설정합니다." }
    ]},
    { title: "KYC 본인인증", steps: [
      { title: "인증 시작", text: "앱 왼쪽 위 사람 아이콘을 누르고 Verify를 누른 뒤, 다시 Verify now를 누릅니다." },
      { title: "ID 종류 선택", text: "거주 국가·발급 국가를 South Korea로 두고 ID type은 ID card(권장)를 선택합니다. 운전면허증, 여권도 가능합니다." },
      { title: "신분증 촬영", text: "앞면과 뒷면을 촬영합니다. 신분증 전체가 보이게, 흔들림 없이 선명하게, 빛 반사 없이 찍으세요." },
      { title: "얼굴 인증", text: "밝은 곳에서 모자·마스크·선글라스를 벗고 정면을 바라본 뒤 지시에 따라 천천히 움직입니다." },
      { title: "승인 대기", text: "인증이 완료되면 검토 후 계정이 활성화됩니다." }
    ]},
    { title: "이미 가입한 경우: KYC 해제 후 새 계정 등록", intro: "기존 계정의 KYC를 해제한 뒤, 새 계정으로 인증하는 방법입니다.", steps: [
      { title: "요청 정보 준비", text: "기존 계정의 UID, 등록한 이메일, 등록한 휴대폰 번호, 신분증 원본을 준비합니다." },
      { title: "증빙자료 촬영", text: "신분증과 'KYC 해제 요청'이라고 적은 종이를 책상 위에 놓고 한 화면에 함께 촬영합니다. 보유 코인 수량 화면과 계정 자산 화면도 캡처하세요." },
      { title: "이메일 발송", text: "준비한 정보와 사진을 모두 첨부해 support@bitget.com으로 보냅니다. 보통 3일 이내에 해제가 완료됩니다." },
      { title: "해제 여부 확인", text: "해제를 요청한 계정으로 로그인해 사람 아이콘을 누르세요. unverified면 해제 완료, verified면 아직 해제되지 않은 것입니다." },
      { title: "새 계정 생성", text: "기존 계정과 다른 이메일로 새 계정을 만들고 추천인 코드 {CODE}를 입력한 뒤 KYC 본인인증을 진행합니다.", warn: "휴대폰 가입은 본인 명의 1계정까지만 가능합니다." }
    ]}
  ]}
];

// 자주 묻는 질문
var FAQ = [
  { q: "페이백은 언제 들어오나요?", a: "거래소마다 지급 시점이 다릅니다. 실제 지급 시간표를 여기에 적어 주세요." },
  { q: "이미 가입한 계정도 혜택을 받을 수 있나요?", a: "가능 여부와 방법을 여기에 적어 주세요." },
  { q: "멤버십 등급은 어떻게 바뀌나요?", a: "등급 기준과 변경 방법을 여기에 적어 주세요." }
];
