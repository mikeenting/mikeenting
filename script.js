const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const smoothScrollToElement = (el) => {
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY;
  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    return;
  }
  window.scrollTo({ top: targetY, behavior: 'smooth' });
};

// Smooth scroll for "Get in Touch" and other #contact links
document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener('click', (evt) => {
    const contact = document.getElementById('contact');
    if (!contact) return;
    evt.preventDefault();
    smoothScrollToElement(contact);
  });
});

// Analytics
document.querySelectorAll('.contact-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.getAttribute('aria-label') || 'Unknown';
    gtag('event', 'click_contact', {
      event_category: 'Contact',
      event_label: label
    });
  });
});

// Download Resume Analytics
const resumeBtn = document.getElementById('download-resume');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    gtag('event', 'download_resume', {
      event_category: 'Resume',
      event_label: 'Download Resume'
    });
  });
}
