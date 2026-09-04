/* ============================================================
   KALANCH GLOBAL EDUCATION — main.js
   Shared site chrome, interactions, and WhatsApp helper.
   ============================================================ */

/* ---------------------------------------------------------
   CONFIG — update these once, they apply site-wide
--------------------------------------------------------- */
const KALANCH_CONFIG = {
  whatsappNumber: "923000000000", // TODO: replace with real WhatsApp number (with country code, no +/spaces)
  phone: "+92 300 0000000",       // TODO: replace with real phone
  email: "info@kalanchglobal.com",// TODO: replace with real email
  address: "Office Address (to be added)",
  mapsEmbed: "", // TODO: paste a Google Maps embed src when available
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#"
  }
};

function waLink(message){
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${KALANCH_CONFIG.whatsappNumber}?text=${encoded}`;
}
window.waLink = waLink;
window.KALANCH_CONFIG = KALANCH_CONFIG;

/* ---------------------------------------------------------
   NAV DATA
--------------------------------------------------------- */
const NAV_ITEMS = [
  { label: "Home", href: "index.html", key: "home" },
  {
    label: "Study Destinations", key: "destinations",
    children: [
      { label: "Study in Malaysia", href: "malaysia.html", desc: "Our primary destination" },
      { label: "Study in Cyprus", href: "cyprus.html", desc: "European study opportunities" }
    ]
  },
  { label: "Universities & Colleges", href: "universities.html", key: "universities" },
  { label: "Programs", href: "programs.html", key: "programs" },
  { label: "Our Services", href: "services.html", key: "services" },
  { label: "Student Resources", href: "resources.html", key: "resources" },
  { label: "About Us", href: "about.html", key: "about" },
  { label: "Success Stories", href: "success-stories.html", key: "success" },
  { label: "Contact Us", href: "contact.html", key: "contact" }
];

const ICONS = {
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4.02 8.36 4.02 15c0 2.28.63 4.44 1.83 6.34L4 29l7.86-1.8A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.64 28 15S22.65 3 16.02 3Zm6.98 16.9c-.3.85-1.7 1.62-2.35 1.7-.6.08-1.36.11-2.2-.14-.5-.15-1.15-.36-1.98-.71-3.5-1.51-5.78-5.04-5.96-5.28-.17-.24-1.43-1.9-1.43-3.62s.9-2.57 1.22-2.92c.31-.35.68-.43.9-.43.23 0 .46 0 .66.01.21.01.5-.08.78.6.3.7 1 2.42 1.08 2.6.09.17.15.37.03.6-.12.24-.18.38-.35.58-.18.2-.38.45-.54.6-.18.17-.37.36-.16.71.21.35.94 1.55 2.02 2.52 1.39 1.24 2.56 1.62 2.92 1.8.35.18.56.15.77-.09.21-.24.9-1.05 1.14-1.41.24-.35.47-.29.79-.17.32.12 2.03.96 2.38 1.13.35.18.58.26.66.41.09.15.09.85-.21 1.7Z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.67 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.94.31 1.91.54 2.9.67A2 2 0 0 1 22 16.92Z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><path d="M4 20h16"/></svg>`
};

/* ---------------------------------------------------------
   BUILD HEADER
--------------------------------------------------------- */
function buildHeader(){
  const mount = document.getElementById("site-header");
  if(!mount) return;
  const current = document.body.getAttribute("data-page") || "";

  const navHTML = NAV_ITEMS.map(item => {
    const isActive = item.key === current;
    if(item.children){
      return `<li class="${isActive ? 'active' : ''}">
        <button type="button">${item.label} ${ICONS.chevron}</button>
        <div class="dropdown">
          ${item.children.map(c => `<a href="${c.href}"><b>${c.label}</b><small>${c.desc}</small></a>`).join("")}
        </div>
      </li>`;
    }
    return `<li class="${isActive ? 'active' : ''}"><a href="${item.href}">${item.label}</a></li>`;
  }).join("");

  mount.innerHTML = `
    <div class="topbar">
      <div class="wrap">
        <div class="topbar-links">
          <a href="tel:${KALANCH_CONFIG.phone.replace(/\s/g,'')}">${ICONS.phone}${KALANCH_CONFIG.phone}</a>
          <a href="mailto:${KALANCH_CONFIG.email}">${ICONS.mail}${KALANCH_CONFIG.email}</a>
        </div>
        <div class="topbar-note">Malaysia Specialists · European Study Opportunities</div>
      </div>
    </div>
    <nav class="navbar">
      <div class="wrap">
        <a href="index.html" class="brand">
          <span class="brand-mark"><img src="assets/images/logos/kalanch-logo.jpg" alt="Kalanch Global Education logo"></span>
          <span class="brand-word"><b>Kalanch</b><span>Global Education</span></span>
        </a>
        <ul class="nav-main">${navHTML}</ul>
        <div class="nav-cta">
          <a href="application.html" class="btn btn-gold btn-sm">Free Assessment</a>
          <button class="nav-toggle" id="navToggle" aria-label="Open menu"><span></span><span></span><span></span></button>
        </div>
      </div>
    </nav>
  `;

  // Mobile menu
  const mobileNavHTML = NAV_ITEMS.map(item => {
    if(item.children){
      return `<li>
        <button type="button" class="mobile-parent">${item.label} ${ICONS.chevron}</button>
        <div class="mobile-sub">
          ${item.children.map(c => `<a href="${c.href}">${c.label}</a>`).join("")}
        </div>
      </li>`;
    }
    return `<li><a href="${item.href}">${item.label}</a></li>`;
  }).join("");

  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";
  mobileMenu.id = "mobileMenu";
  mobileMenu.innerHTML = `
    <div class="mobile-menu-head">
      <a href="index.html" class="brand">
        <span class="brand-mark"><img src="assets/images/logos/kalanch-logo.jpg" alt="Kalanch Global Education logo"></span>
        <span class="brand-word"><b>Kalanch</b><span>Global Education</span></span>
      </a>
      <button class="mobile-close" id="mobileClose">${ICONS.close}</button>
    </div>
    <ul class="mobile-list">${mobileNavHTML}</ul>
    <div class="mobile-menu-foot">
      <a href="application.html" class="btn btn-gold btn-block">Free Assessment</a>
      <a href="${waLink('Hi Kalanch Global Education, I would like to know more about studying abroad.')}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block">${ICONS.whatsapp} Chat on WhatsApp</a>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  document.getElementById("navToggle").addEventListener("click", () => mobileMenu.classList.add("open"));
  document.getElementById("mobileClose").addEventListener("click", () => mobileMenu.classList.remove("open"));
  mobileMenu.querySelectorAll(".mobile-parent").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });

  window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });
}

/* ---------------------------------------------------------
   BUILD FOOTER
--------------------------------------------------------- */
function buildFooter(){
  const mount = document.getElementById("site-footer");
  if(!mount) return;
  mount.innerHTML = `
    <footer>
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a href="index.html" class="brand">
              <span class="brand-mark"><img src="assets/images/logos/kalanch-logo.jpg" alt="Kalanch Global Education logo"></span>
              <span class="brand-word"><b style="color:#fff">Kalanch</b><span>Global Education</span></span>
            </a>
            <p>An international education consultancy helping students access quality higher education opportunities abroad, with a focus on Malaysia and select European destinations.</p>
            <div class="foot-social">
              <a href="${KALANCH_CONFIG.social.facebook}" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.27-1.6 1.63-1.6h1.74V3.5A23 23 0 0 0 14 3.3c-2.5 0-4.2 1.53-4.2 4.34v2.66H7v3.3h2.8V22h3.7Z"/></svg></a>
              <a href="${KALANCH_CONFIG.social.instagram}" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
              <a href="${KALANCH_CONFIG.social.linkedin}" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 20h-3.38v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.53V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22V20Z"/></svg></a>
              <a href="${KALANCH_CONFIG.social.youtube}" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.4-.43-5a2.78 2.78 0 0 0-1.96-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.6.5A2.78 2.78 0 0 0 2.44 7C2 8.6 2 12 2 12s0 3.4.43 5a2.78 2.78 0 0 0 1.97 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.78 2.78 0 0 0 1.96-2c.44-1.6.44-5 .44-5ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></a>
            </div>
          </div>
          <div class="foot-col">
            <h5>Destinations</h5>
            <ul>
              <li><a href="malaysia.html">Study in Malaysia</a></li>
              <li><a href="cyprus.html">Study in Cyprus</a></li>
              <li><a href="universities.html">Universities & Colleges</a></li>
              <li><a href="programs.html">Programs</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="services.html">Our Services</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="success-stories.html">Success Stories</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="resources.html">Student Resources</a></li>
              <li><a href="application.html">Free Assessment</a></li>
              <li><a href="resources.html#faqs">FAQs</a></li>
              <li><a href="contact.html#partner">Partner With Us</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Get in Touch</h5>
            <ul>
              <li><a href="${waLink('Hi Kalanch Global Education, I would like to know more about studying abroad.')}" target="_blank" rel="noopener">WhatsApp Us</a></li>
              <li><a href="mailto:${KALANCH_CONFIG.email}">${KALANCH_CONFIG.email}</a></li>
              <li><a href="tel:${KALANCH_CONFIG.phone.replace(/\s/g,'')}">${KALANCH_CONFIG.phone}</a></li>
              <li style="color:rgba(255,255,255,.45)">${KALANCH_CONFIG.address}</li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© <span id="year"></span> Kalanch Global Education (Private Limited). All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Service</a></span>
        </div>
      </div>
    </footer>
  `;
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   FLOATING WHATSAPP BUTTON
--------------------------------------------------------- */
function buildFab(){
  const fab = document.createElement("a");
  fab.className = "fab-whatsapp";
  fab.href = waLink("Hi Kalanch Global Education, I would like to know more about studying abroad.");
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", "Chat with us on WhatsApp");
  fab.innerHTML = ICONS.whatsapp;
  document.body.appendChild(fab);
}

/* ---------------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------------- */
function initReveal(){
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if(!("IntersectionObserver" in window)){
    targets.forEach(t => t.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  targets.forEach(t => io.observe(t));
}

/* ---------------------------------------------------------
   COUNT-UP NUMBERS (hero stats, stat strips)
--------------------------------------------------------- */
function initCounters(){
  const els = document.querySelectorAll(".hero-stat b, .stat-strip b");
  if(!els.length || !("IntersectionObserver" in window)) return;

  function animate(el){
    const raw = el.textContent.trim();
    const match = raw.match(/^(\d+)(.*)$/); // leading integer + trailing suffix
    if(!match){ return; } // nothing numeric to animate (e.g. "1:1")
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    if(target > 500) return; // skip absurdly large numbers, just show as-is
    const duration = 900;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* ---------------------------------------------------------
   TIMELINE REVEAL (progress line + step-by-step pop in)
--------------------------------------------------------- */
function initTimeline(){
  const timelines = document.querySelectorAll(".timeline");
  if(!timelines.length) return;
  timelines.forEach(tl => {
    const items = tl.querySelectorAll(".tl-item");
    if(!("IntersectionObserver" in window)){
      tl.classList.add("in");
      items.forEach(i => i.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          tl.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    io.observe(tl);

    const itemIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          itemIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3, rootMargin: "0px 0px -40px 0px" });
    items.forEach(item => itemIo.observe(item));
  });
}

/* ---------------------------------------------------------
   HERO CARD TILT (subtle, pointer-driven — desktop only)
--------------------------------------------------------- */
function initHeroTilt(){
  const card = document.querySelector(".hero-card");
  if(!card || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const strength = 6; // degrees
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
}

/* ---------------------------------------------------------
   FAQ ACCORDION
--------------------------------------------------------- */
function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if(!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".faq-item.open").forEach(other => {
        if(other !== item){
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });
}

/* ---------------------------------------------------------
   PILL FILTER HELPER (generic — used on programs/universities/resources)
--------------------------------------------------------- */
function initPillFilter(containerSelector, onChange){
  const container = document.querySelector(containerSelector);
  if(!container) return;
  container.addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if(!pill) return;
    container.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    onChange(pill.dataset.value);
  });
}
window.initPillFilter = initPillFilter;

/* ---------------------------------------------------------
   SIMPLE FORM VALIDATION HELPER
--------------------------------------------------------- */
function validateForm(form){
  let valid = true;
  form.querySelectorAll("[required]").forEach(field => {
    const wrapper = field.closest(".field");
    let ok = true;
    if(field.type === "checkbox"){
      ok = field.checked;
    } else if(field.type === "email"){
      ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
    } else {
      ok = field.value && field.value.trim().length > 0;
    }
    if(wrapper) wrapper.classList.toggle("invalid", !ok);
    if(!ok) valid = false;
  });
  return valid;
}
window.validateForm = validateForm;

/* ---------------------------------------------------------
   HERO AMBIENT ORBS (purely decorative, injected once)
--------------------------------------------------------- */
function initHeroOrbs(){
  const hero = document.querySelector(".hero");
  if(!hero) return;
  ["o1","o2","o3","o4"].forEach(cls => {
    const orb = document.createElement("span");
    orb.className = "hero-orb " + cls;
    hero.appendChild(orb);
  });
}

/* ---------------------------------------------------------
   INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  buildFab();
  initReveal();
  initFaq();
  initCounters();
  initTimeline();
  initHeroTilt();
  initHeroOrbs();
  document.body.classList.toggle("scrolled", window.scrollY > 30);
});
