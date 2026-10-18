// 모든 페이지 공통: 상단 메뉴, 하단 안내, 화면 색(밝게/어둡게) 전환
(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  window.esc = esc;

  // ---- 언어 설정 (ko / en / ja / zh / ar) ----
  var LANGS = [
    { code: "ko", name: "한국어" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "中文(简体)" },
    { code: "ar", name: "العربية" }
  ];
  var L = {
    ko: { nav: ["홈", "가입·KYC 가이드", "멤버십", "지표 설명", "고객센터"], navAria: "주요 메뉴", themeAria: "화면 색 바꾸기", toLight: "밝은 화면으로", toDark: "어두운 화면으로",
      risk: "암호화폐 거래는 높은 위험을 수반할 수 있습니다. 본인 명의 정보만 사용하시고, 투자 판단과 책임은 본인에게 있습니다.",
      helpBtn: "도움이 필요하세요?", help: [["디스코드 1:1 문의", "운영진에게 바로 물어보기"], ["가입·KYC 가이드", "거래소 가입부터 본인인증까지"], ["내 추천인 확인", "추천 코드가 잘 등록됐는지"], ["VIP 기준 보기", "레벨업 조건과 인증 방법"], ["고객센터", "자주 묻는 질문"]],
      sample: "샘플", langTitle: "언어 선택", langAria: "언어 선택", close: "닫기" },
    en: { nav: ["Home", "Sign-up & KYC", "Membership", "Indicators", "Support"], navAria: "Main menu", themeAria: "Switch color mode", toLight: "Switch to light mode", toDark: "Switch to dark mode",
      risk: "Cryptocurrency trading carries a high level of risk. Only use information in your own name; investment decisions and responsibility are your own.",
      helpBtn: "Need help?", help: [["Discord 1:1 inquiry", "Ask the team directly"], ["Sign-up & KYC guide", "From exchange sign-up to ID verification"], ["Check my referral", "Is your referral code registered?"], ["View VIP criteria", "Level-up conditions and verification"], ["Support", "FAQ"]],
      sample: "Sample", langTitle: "Select language", langAria: "Select language", close: "Close" },
    ja: { nav: ["ホーム", "登録・KYC", "メンバーシップ", "指標の説明", "サポート"], navAria: "メインメニュー", themeAria: "画面の色を切り替え", toLight: "明るい画面にする", toDark: "暗い画面にする",
      risk: "暗号資産の取引は高いリスクを伴う場合があります。ご本人名義の情報のみをご使用ください。投資の判断と責任はご自身にあります。",
      helpBtn: "お困りですか?", help: [["Discord 1:1 お問い合わせ", "運営チームに直接質問"], ["登録・KYCガイド", "取引所の登録から本人確認まで"], ["紹介コードを確認", "紹介コードが正しく登録されたか"], ["VIP基準を見る", "レベルアップ条件と認証方法"], ["サポート", "よくある質問"]],
      sample: "サンプル", langTitle: "言語を選択", langAria: "言語を選択", close: "閉じる" },
    zh: { nav: ["首页", "注册·KYC", "会员", "指标说明", "客服中心"], navAria: "主菜单", themeAria: "切换显示颜色", toLight: "切换为浅色", toDark: "切换为深色",
      risk: "加密货币交易可能伴随较高风险。请仅使用本人名义的信息,投资决策及其责任由您本人承担。",
      helpBtn: "需要帮助吗?", help: [["Discord 1:1 咨询", "直接向运营团队提问"], ["注册·KYC 指南", "从交易所注册到实名认证"], ["确认我的推荐码", "推荐码是否已正确登记"], ["查看 VIP 标准", "升级条件和认证方法"], ["客服中心", "常见问题"]],
      sample: "示例", langTitle: "选择语言", langAria: "选择语言", close: "关闭" },
    ar: { nav: ["الرئيسية", "التسجيل وKYC", "العضوية", "المؤشرات", "الدعم"], navAria: "القائمة الرئيسية", themeAria: "تغيير لون الشاشة", toLight: "التبديل إلى الوضع الفاتح", toDark: "التبديل إلى الوضع الداكن",
      risk: "ينطوي تداول العملات المشفرة على مخاطر عالية. استخدم معلومات باسمك الشخصي فقط، وقرارات الاستثمار والمسؤولية عنها تقع عليك.",
      helpBtn: "هل تحتاج إلى مساعدة؟", help: [["استفسار 1:1 عبر Discord", "اسأل فريق التشغيل مباشرة"], ["دليل التسجيل وKYC", "من التسجيل في المنصة إلى توثيق الهوية"], ["تحقق من إحالتي", "هل رمز الإحالة مسجّل بشكل صحيح؟"], ["عرض معايير VIP", "شروط الترقية وطريقة التوثيق"], ["الدعم", "الأسئلة الشائعة"]],
      sample: "عينة", langTitle: "اختيار اللغة", langAria: "اختيار اللغة", close: "إغلاق" }
  };
  var LANG = ((document.documentElement.getAttribute("lang") || "ko").slice(0, 2).toLowerCase());
  if (!L[LANG]) LANG = "ko";
  var T = L[LANG];
  window.DODO_LANG = LANG;
  window.DODO_SAMPLE = T.sample;
  var GLOBE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z"/></svg>';
  var BASE = LANG === "ko" ? "" : "../";

  // 저장된 언어가 있으면 한국어 첫 화면에서 그 언어 페이지로 이동합니다 (저장소를 못 쓰면 건너뜁니다).
  function curPage() {
    var segs = location.pathname.split("/").filter(Boolean), last = segs[segs.length - 1] || "";
    if (/^(en|ja|zh|ar)$/.test(last) || !last) return "index.html";
    return /\.html$/.test(last) ? last : last + ".html";
  }
  function langHref(code) {
    return (code === "ko" ? BASE : BASE + code + "/") + curPage() + location.hash;
  }
  try {
    var saved = localStorage.getItem("dodogas-lang");
    if (LANG === "ko" && saved && saved !== "ko" && L[saved] && !sessionStorage.getItem("dodogas-lang-skip")) {
      location.replace(langHref(saved));
    }
  } catch (e) {}

  // 저장된 화면 색 불러오기. 저장소를 못 쓰는 환경에서도 밝은 화면으로 정상 동작합니다.
  var theme = "light";
  try { theme = localStorage.getItem("dodogas-theme") === "dark" ? "dark" : "light"; } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);

  var PAGES = [
    { id: "home", href: "index.html", label: T.nav[0] },
    { id: "guides", href: "guides.html", label: T.nav[1] },
    { id: "membership", href: "membership.html", label: T.nav[2] },
    { id: "signals", href: "signals.html", label: T.nav[3] },
    { id: "support", href: "support.html", label: T.nav[4] }
  ];
  var current = document.body.getAttribute("data-page");

  var header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML =
    '<div class="container">' +
    '<a class="logo" href="index.html">do<span>do</span>gas</a>' +
    '<nav class="nav" aria-label="' + esc(T.navAria) + '">' +
    PAGES.map(function (p) {
      return '<a href="' + p.href + '"' + (p.id === current ? ' aria-current="page"' : "") + ">" + p.label + "</a>";
    }).join("") +
    "</nav>" +
    '<button class="lang-btn" id="lang-btn" type="button" aria-label="' + esc(T.langAria) + '" aria-haspopup="dialog" title="' + esc(T.langAria) + '">' + GLOBE + "</button>" +
    '<button class="theme-btn" id="theme-btn" type="button" aria-label="' + esc(T.themeAria) + '"></button>' +
    "</div>";
  document.body.insertBefore(header, document.body.firstChild);

  var btn = document.getElementById("theme-btn");
  function paintBtn() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("title", dark ? T.toLight : T.toDark);
  }
  paintBtn();
  btn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("dodogas-theme", next); } catch (e) {}
    paintBtn();
  });


  // 언어 선택 창 (상단 지구본 버튼)
  var lb = document.getElementById("lang-btn");
  var modal = document.createElement("div");
  modal.className = "lang-modal";
  modal.hidden = true;
  modal.innerHTML =
    '<div class="lang-backdrop" data-close="1"></div>' +
    '<div class="lang-dialog" role="dialog" aria-modal="true" aria-labelledby="lang-title">' +
    '<div class="lang-head"><h2 id="lang-title">' + esc(T.langTitle) + '</h2>' +
    '<button type="button" class="lang-x" data-close="1" aria-label="' + esc(T.close) + '">&times;</button></div>' +
    '<ul class="lang-list">' +
    LANGS.map(function (l) {
      return '<li><a href="' + esc(langHref(l.code)) + '" data-lang="' + l.code + '" hreflang="' + l.code + '"' + (l.code === LANG ? ' aria-current="true"' : "") + ">" +
        "<span>" + esc(l.name) + "</span>" + (l.code === LANG ? '<b aria-hidden="true">✓</b>' : "") + "</a></li>";
    }).join("") + "</ul></div>";
  document.body.appendChild(modal);
  function setLang(open) {
    modal.hidden = !open;
    document.documentElement.classList.toggle("lang-open", open);
    if (open) {
      // 해시가 바뀌었을 수 있으니 열 때마다 링크를 다시 계산합니다.
      [].forEach.call(modal.querySelectorAll("a[data-lang]"), function (a) { a.setAttribute("href", langHref(a.getAttribute("data-lang"))); });
      var cur = modal.querySelector("a[aria-current]") || modal.querySelector("a");
      if (cur) cur.focus();
    } else { lb.focus(); }
  }
  lb.addEventListener("click", function () { setLang(true); });
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) { setLang(false); return; }
    var a = e.target.closest("a[data-lang]");
    if (a) {
      try {
        localStorage.setItem("dodogas-lang", a.getAttribute("data-lang"));
        sessionStorage.setItem("dodogas-lang-skip", "1");
      } catch (err) {}
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) setLang(false); });

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="container">' +
    '<div class="links">' +
    PAGES.map(function (p) { return '<a href="' + p.href + '">' + p.label + "</a>"; }).join("") +
    "</div>" +
    '<p class="risk">' + esc(T.risk) + '</p>' +
    "</div>";
  document.body.appendChild(footer);

  // 오른쪽 아래 '도움이 필요하세요?' 버튼 (모든 페이지)
  var dc = (typeof SITE !== "undefined" && SITE.contacts && SITE.contacts.discord) || "";
  var HELP = [
    dc ? { href: dc, label: T.help[0][0], sub: T.help[0][1], ext: true } : null,
    { href: "guides.html", label: T.help[1][0], sub: T.help[1][1] },
    { href: "guides.html#referral-check", label: T.help[2][0], sub: T.help[2][1] },
    { href: "vip.html", label: T.help[3][0], sub: T.help[3][1] },
    { href: "support.html", label: T.help[4][0], sub: T.help[4][1] }
  ].filter(Boolean);
  var help = document.createElement("div");
  help.className = "help-fab";
  help.innerHTML =
    '<div class="help-menu" id="help-menu" role="menu" hidden>' +
    HELP.map(function (h) {
      return '<a role="menuitem" href="' + h.href + '"' + (h.ext ? ' target="_blank" rel="noopener"' : "") + "><strong>" + h.label + "</strong><span>" + h.sub + "</span></a>";
    }).join("") + "</div>" +
    '<button type="button" class="help-btn" aria-expanded="false" aria-controls="help-menu">' + esc(T.helpBtn) +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg></button>';
  document.body.appendChild(help);
  var hb = help.querySelector(".help-btn"), hm = help.querySelector(".help-menu");
  function setHelp(open) { hm.hidden = !open; hb.setAttribute("aria-expanded", String(open)); help.classList.toggle("open", open); }
  hb.addEventListener("click", function () { setHelp(hm.hidden); });
  document.addEventListener("click", function (e) { if (!help.contains(e.target)) setHelp(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setHelp(false); });
  hm.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a) return;
    setHelp(false);
    // 같은 페이지 안의 추천인 확인으로 갈 때는 그 위치로 바로 이동합니다.
    var href = a.getAttribute("href"), here = location.pathname.replace(/\/$/, "").split("/").pop() || "index";
    if (href.indexOf("guides.html#") === 0 && /^guides/.test(here)) {
      e.preventDefault();
      var t = document.getElementById(href.split("#")[1]);
      if (t) t.scrollIntoView({ behavior: "smooth" });
    }
  });

  // 위에 고정되는 메뉴가 헤더 바로 아래에 붙도록 헤더 높이를 기록합니다.
  function setHdr() {
    var h = document.querySelector(".site-header");
    if (h) document.documentElement.style.setProperty("--hdr-h", h.offsetHeight + "px");
  }
  setHdr();
  window.addEventListener("resize", setHdr);
})();

// 고정 메뉴가 위에 붙으면 .stuck 클래스를 달아 그림자를 보여 줍니다.
function watchSticky(el) {
  if (!el) return;
  function on() {
    var top = parseFloat(getComputedStyle(el).top) || 0;
    el.classList.toggle("stuck", el.getBoundingClientRect().top <= top + 0.5 && window.scrollY > 0);
  }
  window.addEventListener("scroll", on, { passive: true });
  window.addEventListener("resize", on);
  on();
}

// 샘플 표시: data.js의 SITE.sample이 true일 때만 보입니다.
function sampleFlag() {
  return (typeof SITE !== "undefined" && SITE.sample) ? '<span class="sample-flag">' + (window.DODO_SAMPLE || "샘플") + '</span>' : "";
}
