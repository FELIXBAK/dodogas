// 사이트 내용은 이 파일만 고치면 됩니다. 빈 칸("")은 화면에서 "–" 또는 준비 중으로 표시됩니다.
var SITE = {
  name: "dodogas",
  // true면 샘플 표시가 보입니다. 실제 내용을 다 채운 뒤 false로 바꾸세요.
  sample: true,
  // 연락처 링크. 비워 두면 버튼이 비활성으로 보입니다.
  contacts: {
    discord: "https://discord.gg/BZ4kRyAuhT",
    cafe: "https://cafe.naver.com/liquidation",
    youtube: "https://www.youtube.com/@dodogas",
    telegram: "https://t.me/+kSnaeCAx_QUxNzQ1"
  }
};

// 제공 서비스 (홈 화면). link가 있으면 '바로가기' 버튼이 보입니다.
var SERVICES = [
  { name: "붐붐이 Lite", tag: "텔레그램", access: "전체 공개", desc: "텔레그램 채널로 제공되는 붐붐이 Lite입니다. 누구나 무료로 볼 수 있습니다.", link: "https://t.me/+kSnaeCAx_QUxNzQ1" },
  { name: "킹피셔", tag: "링크", access: "", desc: "킹피셔 바로가기입니다.", link: "https://app.thekingfisher.io/?ref=7O0MaNch" }
];

// 거래소 혜택 비교 (홈 화면 표). 페이백·수수료·추천인 코드는 실제 값으로 채워 주세요.
var EXCHANGES = [
  { id: "binance", name: "Binance", payback: "", fee: "", code: "", link: "https://accounts.binance.com/register?ref=361097924" },
  { id: "okx",     name: "OKX",     payback: "", fee: "", code: "", link: "https://okx.com/join/67654160" },
  { id: "bybit",   name: "Bybit",   payback: "", fee: "", code: "", link: "https://partner.bybit.com/b/37560" },
  { id: "bitget",  name: "Bitget",  payback: "", fee: "", code: "", link: "https://www.bitget.com/en-GB/expressly?channelCode=ff1k&vipCode=wfx8&languageType=3" },
  { id: "tethermax", name: "TetherMax", payback: "", fee: "", code: "", link: "https://tethermax.io/ko/signup?inviteCode=3032" }
];

// 이벤트·대회. start/end는 YYYY-MM-DD, end가 오늘보다 앞서면 자동으로 "종료" 처리됩니다.
var EVENTS = [
  { exchange: "Binance", title: "샘플 이벤트 A", tag: "대회",     start: "2026-10-01", end: "2026-10-31", desc: "이벤트 설명을 여기에 적습니다.", link: "" },
  { exchange: "OKX",     title: "샘플 이벤트 B", tag: "신규가입", start: "2026-10-01", end: "2026-10-31", desc: "참여 조건과 혜택을 한두 줄로 적습니다.", link: "" },
  { exchange: "Bybit",   title: "샘플 이벤트 C", tag: "캐시백",   start: "2026-09-01", end: "2026-09-30", desc: "종료된 이벤트는 자동으로 종료 목록에 들어갑니다.", link: "" }
];

// 가입·KYC 가이드. steps의 img에 이미지 경로를 넣으면 단계 아래에 사진이 붙습니다.
var GUIDES = [
  { id: "binance", name: "Binance", steps: [
    { title: "가입 링크로 접속", text: "안내된 가입 링크로 접속해 가입을 시작합니다.", img: "" },
    { title: "이메일·휴대폰 인증", text: "가입에 쓴 이메일과 휴대폰 번호로 인증을 마칩니다.", img: "" },
    { title: "본인 인증(KYC)", text: "본인 명의의 신분증으로 인증합니다. 타인 명의는 사용할 수 없습니다.", img: "" },
    { title: "추천인 적용 확인", text: "가입 후 추천인 적용 여부를 확인합니다.", img: "" }
  ]},
  { id: "okx", name: "OKX", steps: [
    { title: "가입 링크로 접속", text: "안내된 가입 링크로 접속해 가입을 시작합니다.", img: "" },
    { title: "본인 인증(KYC)", text: "본인 명의의 신분증으로 인증합니다.", img: "" }
  ]},
  { id: "bybit", name: "Bybit", steps: [
    { title: "가입 링크로 접속", text: "안내된 가입 링크로 접속해 가입을 시작합니다.", img: "" },
    { title: "본인 인증(KYC)", text: "본인 명의의 신분증으로 인증합니다.", img: "" }
  ]}
];

// 자주 묻는 질문
var FAQ = [
  { q: "페이백은 언제 들어오나요?", a: "거래소마다 지급 시점이 다릅니다. 실제 지급 시간표를 여기에 적어 주세요." },
  { q: "이미 가입한 계정도 혜택을 받을 수 있나요?", a: "가능 여부와 방법을 여기에 적어 주세요." },
  { q: "멤버십 등급은 어떻게 바뀌나요?", a: "등급 기준과 변경 방법을 여기에 적어 주세요." }
];
