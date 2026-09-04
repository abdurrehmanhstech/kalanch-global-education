/* ============================================================
   KALANCH GLOBAL EDUCATION — programs.js
   Program category data + rendering. Categories map to the
   `areas` tags used on university records in universities.js,
   so matching universities are shown automatically.
   ============================================================ */

const PROGRAM_CATEGORIES = [
  {
    key: "Business & Management",
    label: "Business & Management",
    sample: "BA (Hons) Business Management",
    blurb: "Foundation, diploma, bachelor's and master's pathways in business, management and entrepreneurship."
  },
  {
    key: "Accounting & Finance",
    label: "Accounting & Finance",
    sample: "BSc (Hons) Accounting & Finance",
    blurb: "Programs covering accounting, finance and professional certification pathways."
  },
  {
    key: "Computing & IT",
    label: "Computing & Information Technology",
    sample: "BSc (Hons) Computer Science",
    blurb: "Computer science, software engineering, IT and computing-related degrees."
  },
  {
    key: "Cyber Security",
    label: "Cyber Security",
    sample: "BSc (Hons) Cyber Security",
    blurb: "Specialised programs in network security, ethical hacking and information security."
  },
  {
    key: "Artificial Intelligence",
    label: "Artificial Intelligence",
    sample: "BSc (Hons) Artificial Intelligence",
    blurb: "AI, data science and machine learning focused undergraduate and postgraduate programs."
  },
  {
    key: "Engineering",
    label: "Engineering",
    sample: "BEng (Hons) Engineering",
    blurb: "Civil, mechanical, electrical and computer engineering programs across our partner network."
  },
  {
    key: "Architecture",
    label: "Architecture",
    sample: "BSc (Hons) Architecture",
    blurb: "Architecture and built environment programs with strong studio-based learning."
  },
  {
    key: "Logistics & Supply Chain",
    label: "Logistics & Supply Chain",
    sample: "BA (Hons) Logistics & Supply Chain Management",
    blurb: "Programs focused on logistics, procurement and international supply chain management."
  },
  {
    key: "Hospitality & Tourism",
    label: "Hospitality & Tourism",
    sample: "BA (Hons) Hospitality Management",
    blurb: "Hotel management, culinary arts, tourism and events management programs."
  },
  {
    key: "Health Sciences",
    label: "Health Sciences",
    sample: "BSc (Hons) Health Sciences",
    blurb: "Nursing, biomedical science, pharmacy and allied health science programs."
  },
  {
    key: "Biotechnology",
    label: "Biotechnology",
    sample: "BSc (Hons) Biotechnology",
    blurb: "Biotechnology and life sciences programs with laboratory-based learning."
  },
  {
    key: "Education",
    label: "Education",
    sample: "BEd (Hons) Education",
    blurb: "Teaching, early childhood education and education studies programs."
  },
  {
    key: "Communication & Media",
    label: "Communication & Media",
    sample: "BA (Hons) Mass Communication",
    blurb: "Journalism, media production, public relations and communication studies."
  },
  {
    key: "Psychology",
    label: "Psychology",
    sample: "BSc (Hons) Psychology",
    blurb: "Undergraduate and postgraduate psychology programs across our partner network."
  },
  {
    key: "Social Sciences",
    label: "Social Sciences",
    sample: "BA (Hons) Social Sciences",
    blurb: "Interdisciplinary programs across sociology, politics and international relations."
  }
];

function programWaMessage(category, destination){
  return `Hi Kalanch Global Education, I am interested in studying ${category.sample} in ${destination || "Malaysia"}. Please guide me regarding suitable universities, fees, eligibility and upcoming intakes.`;
}

function programCardHTML(cat){
  const matchCount = UNIVERSITIES.filter(u => u.areas.includes(cat.key)).length;
  return `
  <div class="prog-card reveal" data-key="${cat.key}">
    <span class="prog-count">${matchCount > 0 ? matchCount + " universities offer related programs" : "Available on request"}</span>
    <h4>${cat.label}</h4>
    <p>${cat.blurb}</p>
    <button class="btn-text gold" data-open="${cat.key}">View Universities & Enquire ${ICONS.arrow}</button>
  </div>`;
}

function renderProgramCategories(){
  const grid = document.getElementById("programGrid");
  if(!grid) return;
  grid.innerHTML = PROGRAM_CATEGORIES.map(programCardHTML).join("");
  initReveal();

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if(!btn) return;
    openProgramDetail(btn.dataset.open);
  });
}

function openProgramDetail(key){
  const cat = PROGRAM_CATEGORIES.find(c => c.key === key);
  if(!cat) return;
  const matches = UNIVERSITIES.filter(u => u.areas.includes(key));
  const panel = document.getElementById("programDetail");
  const overlay = document.getElementById("programOverlay");

  panel.innerHTML = `
    <div class="program-detail-head">
      <div>
        <span class="tag sky">${cat.label}</span>
        <h3 style="margin-top:14px;font-size:24px;color:var(--navy-900)">${cat.sample}</h3>
        <p style="color:var(--muted);font-size:14.5px;margin-top:8px;max-width:520px">${cat.blurb}</p>
      </div>
      <button class="mobile-close" id="programClose" style="background:var(--paper-tint)"><span style="color:var(--navy-900)">${ICONS.close}</span></button>
    </div>

    <div class="divider" style="margin:30px 0"></div>

    ${matches.length > 0 ? `
      <div class="eyebrow">Universities offering related programs</div>
      <div class="grid-3" style="margin-top:20px">
        ${matches.map(uniCardHTML).join("")}
      </div>
    ` : `
      <div class="empty-state">
        ${ICONS.pin}
        <p>We're building out this category. Our admissions team can still guide you to the right universities for ${cat.label.toLowerCase()} based on current availability.</p>
      </div>
    `}

    <div class="cta-band" style="margin-top:40px;padding:38px">
      <div>
        <h3 style="font-size:20px">Interested in this program?</h3>
        <p>Chat with our admissions team to check current availability, fees, eligibility and intake dates.</p>
      </div>
      <div class="btn-row">
        <a href="${waLink(programWaMessage(cat))}" target="_blank" rel="noopener" class="btn btn-whatsapp">${ICONS.whatsapp} WhatsApp Us</a>
      </div>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  initReveal();

  document.getElementById("programClose").addEventListener("click", closeProgramDetail);
}

function closeProgramDetail(){
  document.getElementById("programOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderProgramCategories();
  const overlay = document.getElementById("programOverlay");
  if(overlay){
    overlay.addEventListener("click", (e) => {
      if(e.target === overlay) closeProgramDetail();
    });
  }
});
