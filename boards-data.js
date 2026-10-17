// 게시판 안내 페이지 내용. 이 파일만 고치면 됩니다.
// group/icon/minTier는 멤버십 페이지와 같은 값입니다(0=Basic, 1=Trillion, 2=VIP). 게시판이 바뀌면 membership.html과 함께 고치세요.
// summary : 한 줄 요약
// usage   : 활용 방법(순서대로 한 줄씩). 비워 두면 "상세 안내 준비 중"으로 보입니다.
// tip     : 참고·주의 사항(선택)
// img     : 활용 예시 이미지 경로(선택). 예) "img/btc-liq-map.png" 파일을 저장소의 img 폴더에 올리면 됩니다.
var BOARD_INFO = [
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-m1-테스트", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조1-테스트", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조2-테스트", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조3-테스트", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "⏰", name: "BOOM-BOOM-Alert", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "📊", name: "BTC_Liquidation_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "🔥", name: "BTC_hit_map_KF", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "📚", name: "BTC_hit_map_CG", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "", name: "DODO_index", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "🧨", name: "High_Leverage_Frenzy_index", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "📊", name: "ETH_Liquidation_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "🔥", name: "ETH_hit_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "📚", name: "ETH_hit_map_CG", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "📊", name: "XRP_Liquidation_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "🔥", name: "XRP_hit_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "📊", name: "SOL_Liquidation_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "🔥", name: "SOL_hit_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Archive - Altcoins", icon: "📊", name: "ALT_Liquidation_map", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "⛔", name: "BOOST-PHASE_Line", minTier: 2, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "🀄", name: "MID-COURSE_Line", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "🚀", name: "APOCALYPTIC_Line", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "💠", name: "Line-altcoins", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "💬", name: "Line-free_chat", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "💬", name: "altcoins-request", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - NASDAQ, etc.", icon: "💠", name: "Line-NASDAQ", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - NASDAQ, etc.", icon: "🥇", name: "Line-METALS", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "LINE - NASDAQ, etc.", icon: "💠", name: "Line-KOSPI-200", minTier: 1, summary: "", usage: [], tip: "", img: "" },
  { group: "Laboratory (non public)", icon: "📊", name: "gex-BTC", minTier: 0, summary: "", usage: [], tip: "", img: "" },
  { group: "Laboratory (non public)", icon: "📊", name: "gex-ETH", minTier: 0, summary: "", usage: [], tip: "", img: "" }
];
