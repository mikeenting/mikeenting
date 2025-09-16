// Smooth scroll to bottom over ~2 seconds
if (location.hash === '#bottom') {
  window.addEventListener('load', () => {
    const duration = 2000; // 2000 ms = 2 seconds
    const start = window.scrollY || document.documentElement.scrollTop;
    const end = document.documentElement.scrollHeight - window.innerHeight;
    const distance = end - start;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutCubic for smoother acceleration/deceleration
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
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
