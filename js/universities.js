/* ============================================================
   KALANCH GLOBAL EDUCATION — universities.js
   University directory data + rendering for listing & profile pages.
   Update UNIVERSITIES below to add/edit institutions — everything
   else (cards, filters, profile page, WhatsApp messages) is generated
   automatically from this array.
   ============================================================ */

const UNIVERSITIES = [
  {
    id: "apu",
    name: "Asia Pacific University (APU)",
    shortName: "APU",
    country: "Malaysia",
    city: "Kuala Lumpur",
    type: "Private University",
    areas: ["Computing & IT", "Business & Management", "Engineering", "Design"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's"],
    about: "Asia Pacific University (APU) is a Kuala Lumpur–based private university known for its strong focus on technology, computing and business education. It attracts a large international student community and maintains close links with the technology and digital industries, making it a popular choice for students interested in future-facing fields such as computing, data and digital business."
  },
  {
    id: "taylors",
    name: "Taylor's University",
    shortName: "TAY",
    country: "Malaysia",
    city: "Subang Jaya, Selangor",
    type: "Private University",
    areas: ["Business & Management", "Hospitality & Tourism", "Architecture", "Communication & Media"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's", "PhD"],
    about: "Taylor's University is one of Malaysia's well-established private universities, offering a broad range of programs across business, hospitality, architecture, design and communication. The campus is known for its modern facilities and active student life, and the university is regularly recognised among the region's leading private institutions."
  },
  {
    id: "sunway",
    name: "Sunway University",
    shortName: "SUN",
    country: "Malaysia",
    city: "Bandar Sunway, Selangor",
    type: "Private University",
    areas: ["Business & Management", "Computing & IT", "Health Sciences", "Engineering"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's"],
    about: "Sunway University is part of the wider Sunway integrated township, offering programs across business, computing, engineering and health sciences. The university is known for its partnerships with international institutions and its focus on providing a well-rounded, industry-connected learning environment."
  },
  {
    id: "inti",
    name: "INTI International University",
    shortName: "INTI",
    country: "Malaysia",
    city: "Nilai, Negeri Sembilan",
    type: "Private University",
    areas: ["Business & Management", "Computing & IT", "Accounting & Finance", "Engineering"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's"],
    about: "INTI International University is a private institution with a strong reputation for pathway and foundation programs leading into degree studies. It offers a wide range of programs in business, computing, accounting and engineering, with an emphasis on preparing students for international academic progression and employability."
  },
  {
    id: "ucsi",
    name: "UCSI University",
    shortName: "UCSI",
    country: "Malaysia",
    city: "Kuala Lumpur",
    type: "Private University",
    areas: ["Health Sciences", "Engineering", "Business & Management", "Hospitality & Tourism"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's", "PhD"],
    about: "UCSI University is a comprehensive private university offering programs across health sciences, engineering, business, music and hospitality. It is one of the larger private institutions in Malaysia, with a diverse international student population and a wide academic offering across multiple faculties."
  },
  {
    id: "help",
    name: "HELP University",
    shortName: "HELP",
    country: "Malaysia",
    city: "Kuala Lumpur",
    type: "Private University",
    areas: ["Psychology", "Business & Management", "Social Sciences", "Communication & Media"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's"],
    about: "HELP University is recognised for its strengths in psychology, social sciences and liberal arts education alongside business programs. It offers a relatively close-knit academic environment and has built a solid reputation particularly in psychology-related fields of study."
  },
  {
    id: "limkokwing",
    name: "Limkokwing University of Creative Technology",
    shortName: "LUCT",
    country: "Malaysia",
    city: "Cyberjaya",
    type: "Private University",
    areas: ["Communication & Media", "Business & Management", "Computing & IT"],
    levels: ["Foundation", "Diploma", "Bachelor's", "Master's"],
    about: "Limkokwing University of Creative Technology is known for its focus on creative and design-led education, including media, communication and creative business programs, alongside a growing offering in computing and technology-related fields."
  },
  {
    id: "nicosia",
    name: "University of Nicosia",
    shortName: "UNIC",
    country: "Cyprus",
    city: "Nicosia",
    type: "Private University",
    areas: ["Business & Management", "Health Sciences", "Computing & IT", "Engineering"],
    levels: ["Bachelor's", "Master's", "PhD"],
    about: "The University of Nicosia is one of the largest universities in Cyprus, offering a broad academic portfolio including business, medicine, computing and engineering. It has a significant international student population and is known for its blended and distance-learning program options alongside on-campus study."
  },
  {
    id: "euc",
    name: "European University Cyprus",
    shortName: "EUC",
    country: "Cyprus",
    city: "Nicosia",
    type: "Private University",
    areas: ["Health Sciences", "Business & Management", "Psychology", "Engineering"],
    levels: ["Bachelor's", "Master's", "PhD"],
    about: "European University Cyprus offers a range of programs across health sciences, business, law, psychology and engineering. The university places emphasis on practical, career-oriented education and maintains modern campus facilities in Nicosia."
  },
  {
    id: "ciu",
    name: "Cyprus International University",
    shortName: "CIU",
    country: "Cyprus",
    city: "Nicosia",
    type: "Private University",
    areas: ["Engineering", "Business & Management", "Architecture", "Computing & IT"],
    levels: ["Foundation", "Bachelor's", "Master's", "PhD"],
    about: "Cyprus International University offers a wide range of undergraduate and postgraduate programs across engineering, architecture, business and computing, with a large and diverse international student community drawn from across the region."
  },
  {
    id: "lincoln",
    name: "Lincoln University College",
    shortName: "LUC",
    country: "Malaysia",
    city: "Petaling Jaya, Selangor",
    type: "Private University College",
    areas: ["Medicine & Health Sciences", "Business & Management", "Computing & IT", "Engineering", "Social Sciences & Education"],
    levels: ["Diploma", "Bachelor's", "Master's", "PhD"],
    about: "Lincoln University College is one of Malaysia's larger private institutions, with an unusually wide academic spread across medicine, dentistry, pharmacy, nursing, engineering, business, computing and the social sciences. It's a strong option for students looking at healthcare-related fields, and it also runs a good number of programs in Open & Distance Learning (ODL) mode for added flexibility.",
    feeStructure: "assets/fee-structures/lincoln-university-college-fees-2026.pdf"
  }
];

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */
function uniWaMessage(uni){
  return `Hi Kalanch Global Education, I am interested in studying at ${uni.name}${uni.shortName ? " (" + uni.shortName + ")" : ""}. Please guide me regarding available programs, tuition fees, eligibility requirements and upcoming intakes.`;
}
window.uniWaMessage = uniWaMessage;

/* Each university can optionally include a "feeStructure" field pointing
   to a PDF, e.g. "assets/fee-structures/apu-fees.pdf". When present, a
   "Download Fee Structure" button appears automatically on that
   university's profile page and its directory card. Leave the field out
   (or set it to "") for universities where no PDF has been added yet. */

function getUniversityById(id){
  return UNIVERSITIES.find(u => u.id === id);
}
window.UNIVERSITIES = UNIVERSITIES;
window.getUniversityById = getUniversityById;

function uniCardHTML(uni){
  return `
  <div class="uni-card reveal">
    <div class="uni-card-top">
      <div class="uni-badge">${uni.shortName}</div>
      <div>
        <h4>${uni.name}</h4>
        <div class="uni-loc">${ICONS.pin}${uni.city}, ${uni.country}</div>
      </div>
    </div>
    <div class="uni-card-body">
      <div class="uni-tags">
        <span>${uni.type}</span>
        <span>${uni.country}</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <a href="university.html?id=${uni.id}" class="btn-text gold">Explore University ${ICONS.arrow}</a>
        ${uni.feeStructure ? `<a href="${uni.feeStructure}" download class="btn-text" style="font-size:13px">${ICONS.download} Fee Structure</a>` : ""}
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   LISTING PAGE (universities.html)
--------------------------------------------------------- */
function renderUniversityListing(){
  const grid = document.getElementById("uniGrid");
  if(!grid) return;

  function render(filter){
    const list = filter && filter !== "all" ? UNIVERSITIES.filter(u => u.country === filter) : UNIVERSITIES;
    grid.innerHTML = list.map(uniCardHTML).join("");
    initReveal();
  }
  render("all");
  initPillFilter("#uniFilters", render);
}

/* ---------------------------------------------------------
   PROFILE PAGE (university.html?id=apu)
--------------------------------------------------------- */
function renderUniversityProfile(){
  const mount = document.getElementById("uniProfile");
  if(!mount) return;
  const params = new URLSearchParams(window.location.search);
  const uni = getUniversityById(params.get("id"));

  if(!uni){
    mount.innerHTML = `
      <div class="page-header">
        <div class="wrap text-center">
          <h1>University Not Found</h1>
          <p style="margin-left:auto;margin-right:auto">We couldn't find that university profile. Browse our full directory instead.</p>
          <div style="margin-top:30px"><a href="universities.html" class="btn btn-gold">View All Universities</a></div>
        </div>
      </div>`;
    return;
  }

  document.title = `${uni.name} | Kalanch Global Education`;

  mount.innerHTML = `
    <div class="page-header">
      <div class="wrap">
        <div class="breadcrumb">
          <a href="index.html">Home</a> ${ICONS.chevron} <a href="universities.html">Universities</a> ${ICONS.chevron} <span>${uni.shortName}</span>
        </div>
        <span class="tag light">${uni.country}</span>
        <h1 style="margin-top:16px">${uni.name}</h1>
        <p>${uni.city}, ${uni.country} &nbsp;·&nbsp; ${uni.type}</p>
      </div>
    </div>

    <div class="section-tight">
      <div class="wrap split">
        <div class="reveal">
          <div class="eyebrow">About the University</div>
          <p style="color:var(--ink-soft);font-size:16px;line-height:1.85">${uni.about}</p>

          <div class="eyebrow" style="margin-top:44px">Study Areas</div>
          <div class="pill-row">
            ${uni.areas.map(a => `<span class="pill" style="cursor:default">${a}</span>`).join("")}
          </div>

          <div class="eyebrow" style="margin-top:36px">Study Levels Available</div>
          <div class="pill-row">
            ${uni.levels.map(l => `<span class="pill" style="cursor:default">${l}</span>`).join("")}
          </div>
        </div>

        <div class="reveal">
          <div class="hero-card" style="background:var(--paper-tint);border:1px solid var(--line);backdrop-filter:none">
            <div class="uni-badge" style="margin-bottom:20px">${uni.shortName}</div>
            <h3 style="color:var(--navy-900);font-size:22px;margin-bottom:12px">Interested in studying at this university?</h3>
            <p style="color:var(--muted);font-size:14.5px;line-height:1.7;margin-bottom:26px">Get the latest information about available programs, tuition fees, entry requirements and upcoming intakes from our admissions team.</p>
            <div style="display:flex;flex-direction:column;gap:12px">
              <a href="${waLink(uniWaMessage(uni))}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block">${ICONS.whatsapp} WhatsApp Admissions</a>
              <a href="application.html?university=${encodeURIComponent(uni.name)}" class="btn btn-navy btn-block">Apply Now</a>
              ${uni.feeStructure ? `<a href="${uni.feeStructure}" download class="btn btn-outline-dark btn-block">${ICONS.download} Download Fee Structure</a>` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-tight" style="background:var(--paper-soft)">
      <div class="wrap">
        <div class="cta-band">
          <div>
            <h3>Not sure if ${uni.shortName} is the right fit?</h3>
            <p>Talk to our admissions team, and we'll help you compare universities and programs based on your profile and goals.</p>
          </div>
          <div class="btn-row">
            <a href="${waLink('Hi Kalanch Global Education, I would like guidance comparing universities and programs based on my profile.')}" target="_blank" rel="noopener" class="btn btn-gold">Talk to Our Admissions Team</a>
          </div>
        </div>
      </div>
    </div>
  `;
  initReveal();
}

document.addEventListener("DOMContentLoaded", () => {
  renderUniversityListing();
  renderUniversityProfile();
});
