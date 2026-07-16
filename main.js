/* ── main.js — CV Portfolio Interactions ── */

(function () {
  'use strict';

  /* ─ NAV SCROLL EFFECT ─ */
  const nav = document.getElementById('nav');
  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ─ MOBILE HAMBURGER ─ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  /* ─ SCROLL ANIMATION (Intersection Observer) ─ */
  const animTargets = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings slightly
          const delay = Array.from(entry.target.parentElement.children)
            .filter(el => el.hasAttribute('data-animate'))
            .indexOf(entry.target) * 80;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  animTargets.forEach(el => observer.observe(el));

  /* ─ COUNTER ANIMATION ─ */
  function animateCounters() {
    document.querySelectorAll('.stat__num[data-target]').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  const heroSection = document.getElementById('hero');
  const counterObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      counterObs.disconnect();
    }
  }, { threshold: 0.5 });
  counterObs.observe(heroSection);

  /* ─ SKILL BAR ANIMATION ─ */
  function animateSkillBars(container) {
    container.querySelectorAll('.skill-bar__fill[data-width]').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }

  const skillsSection = document.getElementById('skills');
  const skillsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateSkillBars(skillsSection);
      skillsObs.disconnect();
    }
  }, { threshold: 0.2 });
  skillsObs.observe(skillsSection);

  /* ─ BACK TO TOP ─ */
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─ CONTACT FORM (UI only — no backend) ─ */
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const formNote = document.getElementById('form-note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      formNote.textContent = '⚠️ Please fill in all fields.';
      formNote.style.color = '#C0392B';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formNote.textContent = '⚠️ Please enter a valid email address.';
      formNote.style.color = '#C0392B';
      return;
    }

    // Simulate send
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = '✅ Message Sent!';
      formNote.textContent = 'Thank you! I\'ll be in touch soon.';
      formNote.style.color = '#1B6B5A';
      form.reset();
      setTimeout(() => {
        submitBtn.textContent = 'Send Message →';
        submitBtn.disabled = false;
        formNote.textContent = 'I typically respond within 24 hours.';
        formNote.style.color = '';
      }, 3500);
    }, 1200);
  });

  /* ─ ACTIVE NAV LINK HIGHLIGHT ─ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + section.id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ─ REDUCED MOTION CHECK ─ */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--ease-out', 'linear');
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
  }

})();
