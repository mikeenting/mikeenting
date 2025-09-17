const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

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