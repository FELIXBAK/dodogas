// 모든 페이지 공통: 상단 메뉴, 하단 안내, 화면 색(밝게/어둡게) 전환
(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  window.esc = esc;

  // 저장된 화면 색 불러오기. 저장소를 못 쓰는 환경에서도 밝은 화면으로 정상 동작합니다.
  var theme = "light";
  try { theme = localStorage.getItem("dodogas-theme") === "dark" ? "dark" : "light"; } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);

  var PAGES = [
    { id: "home", href: "index.html", label: "홈" },
    { id: "guides", href: "guides.html", label: "가입·KYC 가이드" },
    { id: "membership", href: "membership.html", label: "멤버십" },
    { id: "signals", href: "signals.html", label: "지표 설명" },
    { id: "support", href: "support.html", label: "고객센터" }
  ];
  var current = document.body.getAttribute("data-page");

  var header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML =
    '<div class="container">' +
    '<a class="logo" href="index.html">do<span>do</span>gas</a>' +
    '<nav class="nav" aria-label="주요 메뉴">' +
    PAGES.map(function (p) {
      return '<a href="' + p.href + '"' + (p.id === current ? ' aria-current="page"' : "") + ">" + p.label + "</a>";
    }).join("") +
    "</nav>" +
    '<button class="theme-btn" id="theme-btn" type="button" aria-label="화면 색 바꾸기"></button>' +
    "</div>";
  document.body.insertBefore(header, document.body.firstChild);

  var btn = document.getElementById("theme-btn");
  function paintBtn() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("title", dark ? "밝은 화면으로" : "어두운 화면으로");
  }
  paintBtn();
  btn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("dodogas-theme", next); } catch (e) {}
    paintBtn();
  });

  var footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="container">' +
    '<div class="links">' +
    PAGES.map(function (p) { return '<a href="' + p.href + '">' + p.label + "</a>"; }).join("") +
    "</div>" +
    '<p class="risk">암호화폐 거래는 높은 위험을 수반할 수 있습니다. 본인 명의 정보만 사용하시고, 투자 판단과 책임은 본인에게 있습니다.</p>' +
    "</div>";
  document.body.appendChild(footer);

  // 오른쪽 아래 '도움이 필요하세요?' 버튼 (모든 페이지)
  var dc = (typeof SITE !== "undefined" && SITE.contacts && SITE.contacts.discord) || "";
  var HELP = [
    dc ? { href: dc, label: "디스코드 1:1 문의", sub: "운영진에게 바로 물어보기", ext: true } : null,
    { href: "guides.html", label: "가입·KYC 가이드", sub: "거래소 가입부터 본인인증까지" },
    { href: "guides.html#referral-check", label: "내 추천인 확인", sub: "추천 코드가 잘 등록됐는지" },
    { href: "vip.html", label: "VIP 기준 보기", sub: "레벨업 조건과 인증 방법" },
    { href: "support.html", label: "고객센터", sub: "자주 묻는 질문" }
  ].filter(Boolean);
  var help = document.createElement("div");
  help.className = "help-fab";
  help.innerHTML =
    '<div class="help-menu" id="help-menu" role="menu" hidden>' +
    HELP.map(function (h) {
      return '<a role="menuitem" href="' + h.href + '"' + (h.ext ? ' target="_blank" rel="noopener"' : "") + "><strong>" + h.label + "</strong><span>" + h.sub + "</span></a>";
    }).join("") + "</div>" +
    '<button type="button" class="help-btn" aria-expanded="false" aria-controls="help-menu">도움이 필요하세요?' +
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
  return (typeof SITE !== "undefined" && SITE.sample) ? '<span class="sample-flag">샘플</span>' : "";
}
