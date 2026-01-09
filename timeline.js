const timelineItems = [
  {
    year: '2026 - Current',
    title: 'Product Owner at Tikkie, Amsterdam 🇳🇱',
    summary: 'Promoted to Product Owner role starting January 2026.',
    bullets: [],
  },
  {
    year: '2023 - Dec 2025',
    title: 'IT Business Analyst at Tikkie, Amsterdam 🇳🇱',
    summary: 'Lead Analyst of a new <strong>Advertising & User Engagement platform</strong> in the Tikkie app, reaching <strong>10+ million users</strong>.',
    bullets: [
      'Gathered and translated business requirements into scalable technical solutions.',
      'Collaborated with cross-functional teams to ensure timely launch.',
      'Improved customer engagement and opened new revenue streams through in-app advertising.',
    ],
    certificates: [
      { src: 'images/certificates/PSPO-A.webp', tooltip: 'Professional Scrum Product Owner: Advanced - Scrum.org' },
      { src: 'images/certificates/zuidema.png', tooltip: 'Inzicht in Invloed - Bureau Zuidema' },
      { src: 'images/certificates/google_analytics.png', tooltip: 'Google Data Analytics Professional Certificate - Google' },
      { src: 'images/certificates/harvard.png', tooltip: 'CS50W Web Programming with Python and JavaScript - Harvard University' },
    ],
  },
  {
    year: '2022',
    title: 'Data Analyst at ABN AMRO, Amsterdam 🇳🇱',
    summary: 'Designed and implemented a <strong>bank-wide Behavioural Risk Management dashboard</strong>, adopted across multiple divisions.',
    bullets: [
      'Consolidated <strong>10+ data sources</strong> into a unified and sustainable data model.',
      'Automated reporting, saving <strong>30+ hours of manual work per month</strong>.',
      'Ensured GDPR compliance through secure and automated access management.',
    ],
    certificates: [
      { src: 'images/certificates/harvard.png', tooltip: 'CS50X Introduction to Computer Science - Harvard University' },
      { src: 'images/certificates/harvard.png', tooltip: 'CS50P Introduction to Programming with Python - Harvard University' },
      { src: 'images/certificates/pspo.png', tooltip: 'Professional Scrum Product Owner I (PSPO I) - Scrum.org' },
    ],
  },
  {
    year: '2020',
    title: 'IT Business Developer at ABN AMRO, Amsterdam 🇳🇱',
    summary: 'Implemented and rolled out a <strong>bank-wide SaaS solution</strong> for GDPR-compliant Data Breach reporting.',
    bullets: [
      'Partnered with compliance, IT security, and legal stakeholders.',
      'Ensured <strong>full GDPR and information security alignment</strong>.',
      'Lead technical roll-out to <strong>20.000+</strong> employees, improving incident reporting speed and audit-readiness.',
    ],
    certificates: [
      { src: 'images/certificates/powerbi.png', tooltip: 'Power BI Data Analyst Associate - Microsoft' },
      { src: 'images/certificates/expert_in_sales.png', tooltip: 'Expert in Sales - Kenneth Smit' },
      { src: 'images/certificates/onetrust.svg', tooltip: 'Assessment Automation & Incident Response - OneTrust' },
    ],
  },
  {
    year: '2018',
    title: 'IT Engineer at ABN AMRO, Amsterdam 🇳🇱',
    summary: 'Completed a traineeship with a strong focus on personal leadership with focus on risk management and compliance.',
    bullets: [
      'Implemented changes to the <strong>bank-wide operational risk management platform</strong>.',
      'Developed foundations in Agile, stakeholder collaboration, and system delivery.',
    ],
    certificates: [
      { src: 'images/certificates/psm.png', tooltip: 'Professional Scrum Master I (PSM I) - Scrum.org' },
      { src: 'images/certificates/garp.webp', tooltip: 'Foundations Of Financial Risk - GARP' },
      { src: 'images/certificates/architecture_awareness.png', tooltip: 'Architecture Awareness - Capgemini' },
    ],
  },
  {
    year: '2018',
    title: 'Business Developer at Avocady Masters, Shanghai 🇨🇳',
    summary: 'Supported market entry and growth strategy in China for a Dutch food exporter.',
    bullets: [
      'Conducted <strong>market research</strong> on consumer preferences and pricing trends.',
      'Built local distributor relationships and assisted with promotional campaigns.',
    ],
  },
  {
    year: '2017',
    title: 'MSc at Fudan University, Shanghai 🇨🇳',
    summary: 'Awarded the competitive <a href="https://www.nuffic.nl/sino-dutch-scholarship" target="_blank" rel="noopener"><strong>SINO-Dutch Full Scholarship</strong></a> (top 5% of applicants).',
    bullets: [
      'Specialized in international trade policy and economic development.',
      'Developed expertise in <strong>China–Europe business relations</strong> and cross-cultural collaboration.',
      'Further deepened understanding of Chinese Language, achieving the highest level of Chinese Proficiency Test.',
    ],
    certificates: [
      { src: 'images/certificates/hsk.png', tooltip: 'HSK6 - Highest level of Chinese Proficiency Test - Hanban' },
    ],
  },
  {
    year: '2016',
    title: 'MSc at University of Groningen, Groningen 🇳🇱',
    summary: 'Graduated with a 7.8 average grade (Thesis: <em>Cross-border Acquisition Completion or Abandonment</em>, grade 8/10).',
    bullets: [
      'Specialized in <strong>M&A, corporate strategy, and international expansion</strong>.',
      'Conducted research on decision-making in cross-border acquisitions.',
      'Gained practical consulting experience through a government-supported project for local SMEs.',
    ],
    certificates: [
      { src: 'images/certificates/x_culture.jpeg', tooltip: 'X-Culture Global Virtual Teamwork - X-Culture' },
      { src: 'images/certificates/kvk.png', tooltip: 'Business Research & Consulting - KVK and Province of Drenthe' },
    ],
  },
  {
    year: '2015',
    title: 'Language Student at Tsinghua University, Beijing 🇨🇳',
    summary: 'Awarded the <strong>Confucius Scholarship</strong> to attend a full-time intensive Mandarin program.',
    bullets: [
      'Achieved business-level Mandarin proficiency.',
      'Strengthened intercultural communication and academic collaboration skills.',
    ],
    certificates: [
      { src: 'images/certificates/hsk.png', tooltip: 'HSK5 - Advanced level of Chinese Proficiency Test - Hanban' },
      { src: 'images/certificates/confucius.png', tooltip: 'Confucius Scholarship - Hanban' },
    ],
  },
  {
    year: '2015',
    title: 'Exchange at NCTU, Hsinchu 🇹🇼',
    summary: 'Completed exchange semester in International Business as part of Bachelor program.',
    bullets: [
      'Coursework in Asian business culture and economics.',
      'Sparked long-term interest in Chinese language and culture.',
    ],
  },
  {
    year: '2012',
    title: 'BSc at University of Groningen, Groningen 🇳🇱',
    summary: 'Completed BSc with focus on global strategy and competitive advantage.',
    bullets: [
      'Thesis: <em>Key Factors Leading to Sustained Competitive Advantage in the Motorcycle Industry</em>.',
      'Exchange semester in Taiwan (National Chiao Tung University).',
    ],
  },
  {
    year: '2011',
    title: '🇺🇸 Kansas, USA',
    summary: 'Exchange program via Youth For Understanding (YFU).',
    bullets: [
      'Elected <strong>Representative of International Students</strong> in Student Senate.',
      'Gained early leadership experience in multicultural environment.',
    ],
  },
  {
    year: '2005',
    title: '🇳🇱 Assen, NL',
    summary: 'Highschool (Atheneum). Specialization: <strong>Economics & Society</strong>.',
    bullets: [
      'Final project: <em>Americanisation of The Netherlands</em>.',
    ],
  },
  {
    year: '1993',
    title: '🇳🇱 Grolloo, NL',
    summary: '🐣',
    bullets: [],
  },
];

const createTextParagraph = (textOrHtml) => {
  const p = document.createElement('p');
  p.innerHTML = textOrHtml;
  return p;
};

const createCertificates = (certificates = []) => {
  if (!certificates.length) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'certificates';

  const heading = document.createElement('h3');
  heading.className = 'certificates-title';
  heading.textContent = 'Certificates';
  wrapper.appendChild(heading);

  const icons = document.createElement('div');
  icons.className = 'certificate-icons';

  certificates.forEach(({ src, tooltip, alt }) => {
    if (!src) return;
    const span = document.createElement('span');
    span.className = 'certificate-icon';
    if (tooltip) span.dataset.tooltip = tooltip;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt || tooltip || 'Certificate';
    span.appendChild(img);

    icons.appendChild(span);
  });

  wrapper.appendChild(icons);
  return wrapper;
};

const renderTimeline = (items = []) => {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  timeline.innerHTML = '';

  items.forEach((item, index) => {
    const container = document.createElement('div');
    const side = item.side || (index % 2 === 0 ? 'left' : 'right');
    container.className = `container ${side}`;

    const content = document.createElement('div');
    content.className = 'content';

    const year = document.createElement('h2');
    year.textContent = item.year;
    content.appendChild(year);

    if (item.title) {
      const titleP = document.createElement('p');
      const strong = document.createElement('strong');
      strong.textContent = item.title;
      titleP.appendChild(strong);
      content.appendChild(titleP);
    }

    if (item.summary) {
      content.appendChild(createTextParagraph(item.summary));
    }

    if (item.bullets && item.bullets.length) {
      const list = document.createElement('ul');
      item.bullets.forEach((bullet) => {
        const li = document.createElement('li');
        li.innerHTML = bullet;
        list.appendChild(li);
      });
      content.appendChild(list);
    }

    const certBlock = createCertificates(item.certificates);
    if (certBlock) {
      content.appendChild(certBlock);
    }

    container.appendChild(content);
    timeline.appendChild(container);
  });
};

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const smoothScrollTo = (targetY, durationMs) => {
  const start = window.scrollY || document.documentElement.scrollTop;
  const distance = targetY - start;
  if (distance === 0 || durationMs <= 0) return;

  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * eased);
    if (elapsed < durationMs) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
};

// Smooth scroll to bottom, slowed down for readability
if (location.hash === '#bottom') {
  window.addEventListener('load', () => {
    const target = document.documentElement.scrollHeight - window.innerHeight;
    if (prefersReducedMotion()) {
      window.scrollTo(0, target);
    } else {
      smoothScrollTo(target, 3200); // ~3.2s to bottom; adjust if needed
    }
  });
}

// Scroll progress bar
(function () {
  const bar = document.querySelector('.scroll-progress__bar');
  const container = document.querySelector('.scroll-progress');
  if (!bar || !container) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function update() {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const max = (doc.scrollHeight - window.innerHeight) || 0;

    const raw = max > 0 ? (scrollTop / max) : 0;
    const reversed = clamp(1 - raw, 0, 1);

    bar.style.transform = `scaleX(${reversed})`;
    container.setAttribute('aria-valuenow', Math.round(reversed * 100));
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
})();

// Render timeline after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  renderTimeline(timelineItems);
});
