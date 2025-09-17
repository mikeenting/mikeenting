const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


document.querySelectorAll('.contact-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.getAttribute('aria-label') || 'Unknown';
    gtag('event', 'click_contact', {
      event_category: 'Contact',
      event_label: label
    });
  });
});