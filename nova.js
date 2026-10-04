/* NOVA Green Economy Foundation, shared behaviour + injected chrome */
(function () {
  "use strict";

  var LOGO = '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#1B4332"/><path d="M24 10c-6 7-9 12-9 17a9 9 0 0 0 18 0c0-5-3-10-9-17z" fill="#2A9D8F"/><path d="M24 12c0 10 0 18 0 26" stroke="#E9C46A" stroke-width="1.6" fill="none"/><path d="M24 22c3-2 5-2 7-1-2 2-4 3-7 3zM24 28c-3-2-5-2-7-1 2 2 4 3 7 3z" fill="#E9C46A"/></svg>';

  var NAV = [
    ["about", "About", "about.html"],
    ["programs", "Programs", "programs.html"],
    ["impact", "Impact", "impact.html"],
    ["governance", "Governance", "governance.html"],
    ["partners", "Partners", "partners.html"],
    ["media", "Media Hub", "media-hub.html"],
    ["contact", "Contact", "contact.html"]
  ];
  var page = document.body.getAttribute("data-page") || "";

  function navLinks(mobile) {
    return NAV.map(function (n) {
      var cur = n[0] === page ? ' aria-current="page"' : "";
      return '<a href="' + n[2] + '"' + cur + '>' + n[1] + "</a>";
    }).join("");
  }

  var sun = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>';
  var burger = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  var ex = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  var chrome =
    '<a class="skip" href="#main">Skip to content</a>' +
    '<div class="demo-note" role="note">DEMO PREVIEW. This is not the live site. All text, names, figures, logos and media are dummy placeholder data, shown only to preview how the finished website will look.</div>' +
    '<div class="topbar"><div class="wrap">' +
      '<a href="contact.html">✉ hello@novagreen.org</a>' +
      '<a href="contact.html">☎ +256 414 234 567</a>' +
      '<span class="spacer"></span>' +
      '<div class="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a></div>' +
    '</div></div>' +
    '<header class="site"><div class="wrap">' +
      '<a class="brandmark" href="index.html">' + LOGO +
        '<span class="stack"><b>NOVA</b><span class="tag">Green Economy Foundation</span></span></a>' +
      '<nav class="main" aria-label="Primary">' + navLinks() + '</nav>' +
      '<div class="hdr-tools">' +
        '<button class="icon-btn" id="themeBtn" aria-label="Toggle light or dark theme" title="Toggle theme">' + sun + '</button>' +
        '<a href="donate.html" class="btn btn-donate">Donate</a>' +
        '<button class="icon-btn hamburger" id="menuBtn" aria-label="Open menu" aria-expanded="false">' + burger + '</button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu" id="mobileMenu" hidden>' +
      '<div class="mm-top"><b style="font-family:var(--display);font-size:18px">Menu</b>' +
        '<button id="menuClose" aria-label="Close menu">' + ex + '</button></div>' +
      '<nav aria-label="Mobile">' + navLinks(true) + '</nav>' +
      '<a href="donate.html" class="btn btn-donate mm-donate">Donate to NOVA</a>' +
    '</div>';

  var footer =
    '<footer class="site"><div class="wrap"><div class="foot-grid">' +
      '<div class="foot-brand"><a class="brandmark" href="index.html" style="color:#fff">' +
        '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#2A9D8F"/><path d="M24 10c-6 7-9 12-9 17a9 9 0 0 0 18 0c0-5-3-10-9-17z" fill="#1B4332"/><path d="M24 22c3-2 5-2 7-1-2 2-4 3-7 3z" fill="#E9C46A"/></svg>' +
        '<span class="stack"><b style="color:#fff">NOVA</b><span class="tag" style="color:#9cb3a4">Green Economy Foundation</span></span></a>' +
        '<p>Strengthening institutions and communities for a sustainable, resilient green economy in Uganda.</p>' +
        '<p class="foot-reg">Registered NGO No. NB/2021/00482 · Kampala, Uganda</p></div>' +
      '<div><h5>Explore</h5><ul><li><a href="about.html">About</a></li><li><a href="programs.html">Programs</a></li><li><a href="impact.html">Impact</a></li><li><a href="governance.html">Governance</a></li><li><a href="media-hub.html">Media Hub</a></li></ul></div>' +
      '<div><h5>Programs</h5><ul><li><a href="programs.html">Agriculture &amp; Food</a></li><li><a href="programs.html">Water &amp; Sanitation</a></li><li><a href="programs.html">Renewable Energy</a></li><li><a href="programs.html">Green Livelihoods</a></li></ul></div>' +
      '<div><h5>Contact</h5><ul><li><a href="contact.html">✉ hello@novagreen.org</a></li><li><a href="contact.html">☎ +256 414 000 000</a></li><li><a href="contact.html">⟟ Plot 00, Kampala, Uganda</a></li><li>◷ Mon-Fri, 9:00-17:00 EAT</li></ul>' +
        '<form class="newsletter" id="nlForm"><label for="nl" class="vh">Email for newsletter</label>' +
        '<input id="nl" type="email" placeholder="Your email" required /><button type="submit">Join</button></form></div>' +
    '</div>' +
    '<div class="foot-bottom"><span>© 2025 NOVA Green Economy Foundation. All rights reserved.</span>' +
      '<nav aria-label="Policies"><a href="governance.html">Privacy</a><a href="governance.html">Safeguarding</a><a href="governance.html">Anti-Corruption</a><a href="governance.html">Terms</a></nav>' +
    '</div></div></footer>';

  var spark = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15l-1.9-4.1L5.5 9l4.6-1.4z"/></svg>';
  var ai =
    '<div class="ai-nudge" id="aiNudge" hidden>' +
      '<button class="ai-nudge-x" id="aiNudgeX" aria-label="Dismiss">' + ex + '</button>' +
      '<b>Try the AI assistant</b><span>Ask NOVA AI anything about our work. Tap the button below.</span>' +
      '<span class="ai-nudge-tail"></span>' +
    '</div>' +
    '<button class="ai-fab" id="aiFab" aria-label="Open NOVA AI assistant" aria-expanded="false"><span class="pulse"></span>' +
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15l-1.9-4.1L5.5 9l4.6-1.4z"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/></svg></button>' +
    '<div class="ai-panel" id="aiPanel" hidden role="dialog" aria-label="NOVA AI assistant">' +
      '<div class="ai-head"><span class="av">' + spark + '</span>' +
        '<div><b>NOVA AI</b><span class="st"><span class="live"></span>Answers from our published documents</span></div>' +
        '<button class="x" id="aiClose" aria-label="Close assistant">' + ex + '</button></div>' +
      '<div class="ai-body" id="aiBody">' +
        '<div class="msg bot">Hello, I\'m NOVA AI. I can answer questions about our programs, impact, and governance, drawing only from our approved documents. What would you like to know?<span class="cite">Source: <b>NOVA welcome guide</b></span></div>' +
        '<div class="chips" id="aiChips">' +
          '<button class="chip">What programs do you run?</button>' +
          '<button class="chip">How is my donation used?</button>' +
          '<button class="chip">Where do you work?</button>' +
          '<button class="chip">Are your finances audited?</button>' +
        '</div></div>' +
      '<div class="ai-foot"><form class="ai-input" id="aiForm"><label for="aiText" class="vh">Ask NOVA AI</label>' +
        '<input id="aiText" type="text" placeholder="Ask about our work…" autocomplete="off" />' +
        '<button type="submit" aria-label="Send"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/></svg></button></form>' +
        '<div class="ai-human"><a href="contact.html" id="aiHuman">💬 Talk to a human instead</a></div>' +
        '<div class="ai-disc">Demo assistant · does not publish financial or governance content without human approval.</div>' +
      '</div></div>';

  // inject chrome at top, footer + AI at end
  document.body.insertAdjacentHTML("afterbegin", chrome);
  document.body.insertAdjacentHTML("beforeend", footer + ai);

  // ---- theme ----
  (function () {
    var root = document.documentElement, btn = document.getElementById("themeBtn"), KEY = "nova-theme-v2";
    // Default is light. Only a previously-saved explicit choice is restored;
    // with nothing saved the site stays light (system dark is ignored).
    try {
      var s = localStorage.getItem(KEY);
      root.setAttribute("data-theme", s === "dark" ? "dark" : "light");
    } catch (e) { root.setAttribute("data-theme", "light"); }
    btn.addEventListener("click", function () {
      var dark = root.getAttribute("data-theme") === "dark";
      var next = dark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  })();

  // ---- mobile menu ----
  (function () {
    var menu = document.getElementById("mobileMenu"), b = document.getElementById("menuBtn");
    b.addEventListener("click", function () { menu.hidden = false; b.setAttribute("aria-expanded", "true"); });
    document.getElementById("menuClose").addEventListener("click", function () { menu.hidden = true; b.setAttribute("aria-expanded", "false"); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { menu.hidden = true; }); });
  })();

  // ---- count-up stats ----
  (function () {
    var nums = document.querySelectorAll(".stat .n[data-count]");
    if (!nums.length) return;
    var done = false;
    function run() {
      if (done) return;
      var band = nums[0].closest("section") || nums[0];
      var r = band.getBoundingClientRect();
      if (r.top < innerHeight && r.bottom > 0) {
        done = true;
        nums.forEach(function (el) {
          var target = +el.getAttribute("data-count"), t0 = null, dur = 1400;
          (function step(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1);
            var e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * e).toLocaleString("en-US");
            if (p < 1) requestAnimationFrame(step); })(performance.now());
        });
      }
    }
    addEventListener("scroll", run, { passive: true }); addEventListener("load", run); run();
  })();

  // ---- newsletter / generic "no-backend" forms ----
  function flashOk(form, msg) {
    var ok = form.parentNode.querySelector(".form-ok");
    if (!ok) { ok = document.createElement("div"); ok.className = "form-ok"; form.parentNode.appendChild(ok); }
    ok.textContent = msg; form.reset();
  }
  (function () {
    var nl = document.getElementById("nlForm");
    if (nl) nl.addEventListener("submit", function (e) { e.preventDefault();
      var i = nl.querySelector("input"); i.value = ""; i.placeholder = "Thank you, you're subscribed ✓"; });
  })();

  // ---- AI assistant ----
  (function () {
    var fab = document.getElementById("aiFab"), panel = document.getElementById("aiPanel"),
        body = document.getElementById("aiBody"), form = document.getElementById("aiForm"),
        input = document.getElementById("aiText");

    var KB = [
      { k: ["program", "programme", "what do you do", "work on", "focus"],
        a: "NOVA runs four programs: Climate-Smart Agriculture & Food Security, Clean Water & Sanitation, Renewable Energy & Clean Cooking, and Green Livelihoods & Community Resilience.", c: "Programs overview" },
      { k: ["donation", "donate", "my money", "give", "funds used", "where to give"],
        a: "Donations fund field work directly, drought-tolerant seed, water points, solar systems, and women-led green enterprises. Finances are audited annually and every gift is tracked. You can give via Mobile Money, bank transfer, or card.", c: "Donate page & Annual Report 2024" },
      { k: ["where", "district", "location", "region", "area"],
        a: "We currently work across six districts: Wakiso, Mukono, Mbale, Gulu, Jinja, and Kasese, reaching an estimated 24,800 people.", c: "Impact dashboard" },
      { k: ["audit", "finance", "financial", "transparent", "accountab"],
        a: "Yes, our accounts are audited every year and the audited financial statements are published on the Impact page. Transparency and accountable leadership are founding principles.", c: "Audited Financial Statements 2024" },
      { k: ["impact", "reached", "results", "how many", "people"],
        a: "To date (illustrative figures): ~24,800 people reached, 1,240 households with new safe-water access, 48 solar systems installed at schools and clinics, and 320 women-led green enterprises supported.", c: "Impact Brief 2024" },
      { k: ["water", "borehole", "sanitation", "wash"],
        a: "Our Clean Water & Sanitation program installs boreholes and rainwater harvesting and sets up community WASH committees so safe water keeps flowing after installation.", c: "Impact Brief: Water & Sanitation" },
      { k: ["board", "governance", "leadership", "who runs", "policy", "policies"],
        a: "NOVA is governed by a board chaired by Dr. Sarah Nakato, with an Executive Director, Treasurer, and members overseeing finance, audit, and safeguarding. Our policies, safeguarding, anti-corruption, procurement, conflict of interest, are published on the Governance page.", c: "Governance page" },
      { k: ["partner", "work with", "collaborat"],
        a: "We partner with government ministries, district local governments, UN and development partners, community cooperatives, and private-sector allies. See the Partners page to explore the relationships.", c: "Partners page" },
      { k: ["contact", "human", "email", "phone", "reach", "volunteer", "join"],
        a: "You can reach the team at hello@novagreen.org or +256 414 000 000, Mon-Fri 9:00-17:00 EAT. Use the “Talk to a human” link below any time, or the Contact page.", c: "Contact page" }
    ];
    function respond(q) {
      var t = q.toLowerCase();
      for (var i = 0; i < KB.length; i++) if (KB[i].k.some(function (w) { return t.indexOf(w) > -1; })) return KB[i];
      return { a: "I can help with questions about our programs, impact, donations, governance, partners, and where we work. For anything else, the team is glad to help directly.", c: "NOVA welcome guide", human: true };
    }
    function add(text, who, cite, human) {
      var d = document.createElement("div"); d.className = "msg " + who; d.textContent = text;
      if (cite) { var c = document.createElement("span"); c.className = "cite"; c.innerHTML = "Source: <b>" + cite + "</b>"; d.appendChild(c); }
      if (human) { var h = document.createElement("span"); h.className = "cite";
        var a = document.createElement("a"); a.href = "contact.html"; a.textContent = "💬 Talk to a human →";
        a.style.color = "var(--brand-2)"; a.style.textDecoration = "none"; h.appendChild(a); d.appendChild(h); }
      body.appendChild(d); body.scrollTop = body.scrollHeight;
    }
    function ask(q) {
      add(q, "user");
      var typing = document.createElement("div"); typing.className = "msg bot"; typing.textContent = "…";
      body.appendChild(typing); body.scrollTop = body.scrollHeight;
      setTimeout(function () { typing.remove(); var r = respond(q); add(r.a, "bot", r.c, r.human); }, 420);
    }
    function open() { panel.hidden = false; fab.setAttribute("aria-expanded", "true"); setTimeout(function () { input.focus(); }, 60); }
    function close() { panel.hidden = true; fab.setAttribute("aria-expanded", "false"); }

    fab.addEventListener("click", function () { panel.hidden ? open() : close(); });
    document.getElementById("aiClose").addEventListener("click", close);
    form.addEventListener("submit", function (e) { e.preventDefault(); var v = input.value.trim(); if (!v) return; input.value = ""; ask(v); });
    document.getElementById("aiChips").addEventListener("click", function (e) { if (e.target.classList.contains("chip")) ask(e.target.textContent); });
    addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) close(); });
    // embedded prompts across pages
    document.querySelectorAll("[data-ask]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); open(); });
    });
    window.NOVA_AI_OPEN = open;
  })();

  // ---- donate calculator ----
  (function () {
    var card = document.getElementById("donateCard"); if (!card) return;
    var state = { freq: "once", amount: 50000 };
    var readout = card.querySelector("#impactReadout");
    function impactText(a) {
      if (a >= 400000) return "funds a <b>rainwater harvesting tank</b> for a household.";
      if (a >= 180000) return "provides an <b>efficient cookstove</b> to a family, less smoke, less firewood.";
      if (a >= 90000) return "supplies a farmer with <b>drought-tolerant seed</b> for a full season.";
      if (a >= 30000) return "contributes to <b>safe-water access</b> for a village water point.";
      return "every shilling is tracked and goes toward field programs.";
    }
    function render() {
      card.querySelectorAll(".amt").forEach(function (b) { b.setAttribute("aria-pressed", (+b.dataset.amt === state.amount) ? "true" : "false"); });
      card.querySelectorAll(".toggle-row button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.freq === state.freq ? "true" : "false"); });
      var label = state.freq === "monthly" ? " / month" : "";
      readout.innerHTML = "UGX " + state.amount.toLocaleString("en-US") + label + ", " + impactText(state.amount);
      var cta = card.querySelector("#donateCta");
      if (cta) cta.textContent = "Donate UGX " + state.amount.toLocaleString("en-US") + label;
    }
    card.querySelectorAll(".amt").forEach(function (b) { b.addEventListener("click", function () {
      state.amount = +b.dataset.amt; var ci = card.querySelector("#customAmt"); if (ci) ci.value = ""; render(); }); });
    card.querySelectorAll(".toggle-row button").forEach(function (b) { b.addEventListener("click", function () { state.freq = b.dataset.freq; render(); }); });
    var custom = card.querySelector("#customAmt");
    if (custom) custom.addEventListener("input", function () { var v = parseInt(custom.value.replace(/\D/g, ""), 10); if (v) { state.amount = v; render(); } });
    var dform = card.querySelector("#donateForm");
    if (dform) dform.addEventListener("submit", function (e) { e.preventDefault();
      readout.innerHTML = "Thank you! This is a demo, no payment was taken. In the live site this opens secure checkout for UGX " + state.amount.toLocaleString("en-US") + "."; });
    render();
  })();

  // ---- media / news filter ----
  (function () {
    var bar = document.getElementById("mediaFilters") || document.getElementById("newsFilters");
    if (!bar) return;
    var posts = bar.closest("section").querySelectorAll("[data-cat]");
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".filter"); if (!b) return;
      bar.querySelectorAll(".filter").forEach(function (f) { f.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      var cat = b.dataset.filter;
      posts.forEach(function (p) { p.hidden = !(cat === "all" || p.dataset.cat === cat); });
    });
  })();

  // ---- featured podcast player (demo) ----
  (function () {
    var trig = document.querySelector(".play-trigger"),
        player = document.querySelector(".player"),
        big = document.querySelector(".play-lg");
    if (!player) return;
    function toggle() {
      player.hidden = !player.hidden;
      if (trig) trig.innerHTML = player.hidden
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Play episode'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg> Pause episode';
    }
    if (trig) trig.addEventListener("click", toggle);
    if (big) big.addEventListener("click", toggle);
  })();

  // ---- AI button nudge ----
  (function () {
    var nudge = document.getElementById("aiNudge"),
        fab = document.getElementById("aiFab");
    if (!nudge || !fab) return;
    var KEY = "nova-ai-nudge-dismissed";
    var dismissed = false;
    try { dismissed = localStorage.getItem(KEY) === "1"; } catch (e) {}
    function hide() { nudge.hidden = true; try { localStorage.setItem(KEY, "1"); } catch (e) {} }
    if (!dismissed) {
      setTimeout(function () { nudge.hidden = false; nudge.classList.add("in"); }, 1600);
      setTimeout(function () { if (!nudge.hidden) hide(); }, 12000);
    }
    document.getElementById("aiNudgeX").addEventListener("click", function (e) { e.stopPropagation(); hide(); });
    fab.addEventListener("click", hide);
    nudge.addEventListener("click", function () { hide(); if (window.NOVA_AI_OPEN) window.NOVA_AI_OPEN(); });
  })();

  // ---- contact form validation ----
  (function () {
    var f = document.getElementById("contactForm"); if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      f.querySelectorAll("[required]").forEach(function (field) {
        var err = field.parentNode.querySelector(".err");
        var bad = !field.value.trim() || (field.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value));
        if (err) err.textContent = bad ? (field.type === "email" ? "Enter a valid email address." : "This field is required.") : "";
        if (bad) ok = false;
      });
      if (ok) { f.hidden = true; flashOk(f, "Thank you, your message has been received. This is a demo, so nothing was actually sent. The team would reply within two business days."); }
    });
  })();
})();
