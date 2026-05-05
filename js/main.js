/* ================================
   NAVIGATION
   ================================ */
const navHeader = document.getElementById('nav-header');
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
const backToTop = document.getElementById('back-to-top');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ================================
   SCROLL: nav bg + back-to-top
   ================================ */
window.addEventListener('scroll', () => {
  navHeader.classList.toggle('scrolled', window.scrollY > 40);
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* ================================
   SCROLL SPY
   ================================ */
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link[href^="#"]');

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(item => item.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => spyObserver.observe(s));

/* ================================
   FADE-IN ON SCROLL
   ================================ */
const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    animObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

/* ================================
   BACK TO TOP
   ================================ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ================================
   CONTACT CAPTCHA
   ================================ */
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I to avoid confusion
let captchaCode = '';

function generateCaptcha() {
  captchaCode = Array.from({ length: 6 }, () =>
    CHARS[Math.floor(Math.random() * CHARS.length)]
  ).join('');
  document.getElementById('captcha-display').textContent = captchaCode;
}

const captchaDisplay = document.getElementById('captcha-display');
if (captchaDisplay) {
  generateCaptcha();

  document.getElementById('captcha-refresh').addEventListener('click', () => {
    generateCaptcha();
    document.getElementById('captcha-input').value = '';
    document.getElementById('captcha-error').textContent = '';
  });

  document.querySelector('.contact-form').addEventListener('submit', e => {
    const input = document.getElementById('captcha-input').value.trim().toUpperCase();
    const error = document.getElementById('captcha-error');
    if (input !== captchaCode) {
      e.preventDefault();
      error.textContent = 'Incorrect code — please try again.';
      generateCaptcha();
      document.getElementById('captcha-input').value = '';
    } else {
      error.textContent = '';
    }
  });
}
