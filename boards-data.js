// 게시판 안내 페이지 내용. 이 파일만 고치면 됩니다.
// group/icon/minTier는 멤버십 페이지와 같은 값입니다(0=Basic, 1=Trillion, 2=VIP). 게시판이 바뀌면 membership.html과 함께 고치세요.
// summary : 한 줄 요약
// usage   : 활용 방법(순서대로 한 줄씩). 비워 두면 "상세 안내 준비 중"으로 보입니다.
// tip     : 참고·주의 사항(선택)
// img     : 활용 예시 이미지 경로(선택). 예) "img/btc-liq-map.png" 파일을 저장소의 img 폴더에 올리면 됩니다.
var BOARD_INFO = [
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-m1-테스트", minTier: 1, summary: "붐붐이 M1 알림이 “LLLL 1”, “SSSS 2” 같은 카드 형태로 올라옵니다.", usage: [], tip: "", img: "img/boomboom-m1.png" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조1-테스트", minTier: 2, summary: "붐붐이 V1 알림이 “SSSS 3” 같은 카드 형태로 올라옵니다.", usage: [], tip: "", img: "img/boomboom-sub1.png" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조2-테스트", minTier: 2, summary: "붐붐이 V2 알림이 “SSSS 1” 같은 카드 형태로 올라옵니다.", usage: [], tip: "", img: "img/boomboom-sub2.png" },
  { group: "Archive - BTC", icon: "💬", name: "붐붐이-보조3-테스트", minTier: 2, summary: "붐붐이 보조 알림 채널입니다. 2026년 10월 18일 확인 시점에는 올라온 게시물이 없었습니다.", usage: [], tip: "", img: "" },
  { group: "Archive - BTC", icon: "⏰", name: "BOOM-BOOM-Alert", minTier: 1, summary: "붐붐이 알림이 BBBBLL1, BBBBSS2 같은 짧은 문구로 올라옵니다.", usage: [], tip: "", img: "img/boom-boom-alert.png" },
  { group: "Archive - BTC", icon: "📊", name: "BTC_Liquidation_map", minTier: 0, summary: "청산맵 봇이 하루에 한 번 올리는 이미지입니다. 게시글 제목은 “btc (날짜)” 형식이고, 이미지 2장이 함께 올라옵니다.", usage: [], tip: "", img: "img/btc_liquidation_map.png" },
  { group: "Archive - BTC", icon: "🔥", name: "BTC_hit_map_KF", minTier: 0, summary: "킹피셔 기반 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “btc (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/btc_hit_map_kf.png" },
  { group: "Archive - BTC", icon: "📚", name: "BTC_hit_map_CG", minTier: 0, summary: "코인글라스 기반 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “btc (날짜)” 형식으로 여러 장이 올라옵니다.", usage: [], tip: "", img: "img/btc_hit_map_cg.png" },
  { group: "Archive - BTC", icon: "", name: "DODO_index", minTier: 2, summary: "DODO 지수 신호가 “L dodo 0”, “S dodo 1” 같은 짧은 문구로 올라옵니다. 올라오는 간격은 일정하지 않습니다.", usage: [], tip: "", img: "img/dodo_index.png" },
  { group: "Archive - BTC", icon: "🧨", name: "High_Leverage_Frenzy_index", minTier: 2, summary: "“Pitched battle 0~3” 같은 짧은 문구로 지수 신호가 올라옵니다. 올라오는 간격은 일정하지 않습니다.", usage: [], tip: "", img: "img/high_leverage_frenzy_index.png" },
  { group: "Archive - Altcoins", icon: "📊", name: "ETH_Liquidation_map", minTier: 0, summary: "청산맵 봇이 하루에 한 번 올리는 이미지입니다. 게시글 제목은 “eth (날짜)” 형식이고, 이미지 2장이 함께 올라옵니다.", usage: [], tip: "", img: "img/eth_liquidation_map.png" },
  { group: "Archive - Altcoins", icon: "🔥", name: "ETH_hit_map", minTier: 0, summary: "ETH 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “eth (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/eth_hit_map.png" },
  { group: "Archive - Altcoins", icon: "📚", name: "ETH_hit_map_CG", minTier: 0, summary: "코인글라스 기반 ETH 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “eth (날짜)” 형식으로 여러 장이 올라옵니다.", usage: [], tip: "", img: "img/eth_hit_map_cg.png" },
  { group: "Archive - Altcoins", icon: "📊", name: "XRP_Liquidation_map", minTier: 0, summary: "청산맵 봇이 하루에 한 번 올리는 이미지입니다. 게시글 제목은 “xrp (날짜)” 형식이고, 이미지 2장이 함께 올라옵니다.", usage: [], tip: "", img: "img/xrp_liquidation_map.png" },
  { group: "Archive - Altcoins", icon: "🔥", name: "XRP_hit_map", minTier: 0, summary: "XRP 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “xrp (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/xrp_hit_map.png" },
  { group: "Archive - Altcoins", icon: "📊", name: "SOL_Liquidation_map", minTier: 0, summary: "청산맵 봇이 하루에 한 번 올리는 이미지입니다. 게시글 제목은 “sol (날짜)” 형식이고, 이미지 2장이 함께 올라옵니다.", usage: [], tip: "", img: "img/sol_liquidation_map.png" },
  { group: "Archive - Altcoins", icon: "🔥", name: "SOL_hit_map", minTier: 0, summary: "SOL 히트맵 이미지입니다. 하루에 한 번, 게시글 제목 “sol (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/sol_hit_map.png" },
  { group: "Archive - Altcoins", icon: "📊", name: "ALT_Liquidation_map", minTier: 0, summary: "알트코인 청산맵을 하루에 한 번 모아서 올립니다. 게시글 제목은 “ait (날짜)” 형식이고, 이미지 여러 장이 한 번에 올라옵니다.", usage: [], tip: "", img: "img/alt_liquidation_map.png" },
  { group: "LINE - BTC, Crypto.", icon: "⛔", name: "BOOST-PHASE_Line", minTier: 2, summary: "운영자가 라인을 표시한 TradingView 차트 이미지를 올립니다. 올라오는 간격은 일정하지 않습니다.", usage: [], tip: "", img: "img/boost-phase_line.png" },
  { group: "LINE - BTC, Crypto.", icon: "🀄", name: "MID-COURSE_Line", minTier: 1, summary: "운영자가 라인을 표시한 TradingView 차트 이미지를 올립니다. 올라오는 간격은 일정하지 않습니다.", usage: [], tip: "", img: "img/mid-course_line.png" },
  { group: "LINE - BTC, Crypto.", icon: "🚀", name: "APOCALYPTIC_Line", minTier: 1, summary: "운영자가 라인을 표시한 TradingView 차트 이미지를 올립니다. 올라오는 간격은 일정하지 않습니다.", usage: [], tip: "", img: "img/apocalyptic_line.png" },
  { group: "LINE - BTC, Crypto.", icon: "💠", name: "Line-altcoins", minTier: 1, summary: "운영자가 알트코인 차트에 라인을 표시한 TradingView 이미지를 올립니다.", usage: [], tip: "", img: "img/line-altcoins.png" },
  { group: "LINE - BTC, Crypto.", icon: "💬", name: "Line-free_chat", minTier: 0, summary: "회원들이 자유롭게 대화하는 채널입니다.", usage: [], tip: "", img: "" },
  { group: "LINE - BTC, Crypto.", icon: "💬", name: "altcoins-request", minTier: 1, summary: "라인을 보고 싶은 알트코인을 회원들이 요청하는 채널입니다.", usage: [], tip: "", img: "" },
  { group: "LINE - NASDAQ, etc.", icon: "💠", name: "Line-NASDAQ", minTier: 1, summary: "운영자가 나스닥 차트에 라인을 표시한 TradingView 이미지를 올립니다.", usage: [], tip: "", img: "img/line-nasdaq.png" },
  { group: "LINE - NASDAQ, etc.", icon: "🥇", name: "Line-METALS", minTier: 1, summary: "운영자가 금속 종목 차트에 라인을 표시한 TradingView 이미지를 올립니다.", usage: [], tip: "", img: "img/line-metals.png" },
  { group: "LINE - NASDAQ, etc.", icon: "💠", name: "Line-KOSPI-200", minTier: 1, summary: "운영자가 코스피200 차트에 라인을 표시한 TradingView 이미지를 올립니다.", usage: [], tip: "", img: "img/line-kospi-200.png" },
  { group: "Laboratory (non public)", icon: "📊", name: "gex-BTC", minTier: 0, summary: "BTC GEX 이미지입니다. 하루에 한 번, 게시글 제목 “btc (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/gex-btc.png" },
  { group: "Laboratory (non public)", icon: "📊", name: "gex-ETH", minTier: 0, summary: "ETH GEX 이미지입니다. 하루에 한 번, 게시글 제목 “eth (날짜)” 형식으로 2장이 올라옵니다.", usage: [], tip: "", img: "img/gex-eth.png" }
];
