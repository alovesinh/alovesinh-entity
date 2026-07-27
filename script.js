// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Before / after wipe slider
  const wipe = document.querySelector('.wipe');
  if (wipe) {
    const before = wipe.querySelector('.wipe-before');
    const handle = wipe.querySelector('.wipe-handle');
    const range = wipe.querySelector('input[type="range"]');

    const setPos = (val) => {
      before.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      handle.style.left = val + '%';
    };
    setPos(50);
    range.addEventListener('input', (e) => setPos(e.target.value));
  }

  // Footer year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (static demo — no backend, guide user to hotline/Zalo)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-status');
      if (note) {
        note.textContent = 'Cảm ơn bạn! Vui lòng gọi hotline 0962 440 244 để được xử lý nhanh nhất, hoặc chúng tôi sẽ liên hệ lại trong ít phút.';
        note.style.color = '#0E5F58';
      }
      form.reset();
    });
  }
});
