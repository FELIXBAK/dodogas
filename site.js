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
    { id: "boards", href: "boards.html", label: "게시판 안내" },
    { id: "support", href: "support.html", label: "고객센터" },
    { id: "events", href: "events.html", label: "이벤트·대회" }
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
})();

// 샘플 표시: data.js의 SITE.sample이 true일 때만 보입니다.
function sampleFlag() {
  return (typeof SITE !== "undefined" && SITE.sample) ? '<span class="sample-flag">샘플</span>' : "";
}
