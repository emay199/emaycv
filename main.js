/* ── main.js — CV Portfolio Interactions + i18n + Print ── */

(function () {
  'use strict';

  /* ════════════════════════════════════
     TRANSLATIONS
  ════════════════════════════════════ */
  const i18n = {
    en: {
      'nav-about': 'About', 'nav-skills': 'Skills', 'nav-experience': 'Experience',
      'nav-projects': 'Projects', 'nav-education': 'Education', 'nav-contact': 'Contact',
      'nav-cta': 'Hire Me', 'print-btn': 'Print CV',
      'hero-tag': 'QA Software Engineer',
      'hero-name': "Hi, I'm <em>Emay</em>",
      'hero-subtitle': 'I build confidence into software — through structured testing,<br />automation frameworks, and an obsession with quality.',
      'hero-cta-primary': 'View My Work', 'hero-cta-resume': 'Download CV',
      'badge-open': 'Open to work',
      'stat-years': 'Years of Experience', 'stat-tests': 'Test Cases Written', 'stat-projects': 'Projects Tested',
      'about-label': '01 — About', 'about-title': 'A little about me',
      'about-p1': "I'm a QA Software Engineer with 5+ years of experience in test manual/automation, API, database, smart contract, and performance testing. Skilled in leveraging AI Agents, MCP, Playwright and K6 to deliver reliable, scalable, and high-quality software.",
      'about-p2': "I believe quality is not just a phase — it's a mindset that should be embedded from day one. I work closely with developers, PMs, and stakeholders to shift testing left and catch bugs before they become expensive problems.",
      'about-location': 'Bach Mai, Hanoi, Vietnam',
      'about-avail': 'Available for full-time',
      'about-lang': 'English & Vietnamese',
      'val-q-title': 'Quality First', 'val-q-desc': 'Every build deserves thorough validation before it touches real users.',
      'val-a-title': 'AI Agents for Software Testing', 'val-a-desc': 'Applying AI agents to generate test cases, automate repetitive tasks, analyze failures, and accelerate QA delivery.',
      'val-c-title': 'Collaborative QA', 'val-c-desc': 'Testing is a team sport. I bridge the gap between dev, product, and users.',
      'skills-label': '02 — Skills', 'skills-title': 'Technical toolkit',
      'exp-label': '03 — Experience', 'exp-title': "Where I've worked",
      'exp1-date': 'Oct 2023 — Present', 'exp1-badge': 'Current',
      'exp1-role': 'Senior QA Engineer', 'exp1-company': 'Amnis Finance · Hanoi, Vietnam',
      'exp1-company-desc': 'Amnis Finance is a decentralized finance (DeFi) protocol built on the Aptos blockchain, providing liquid staking solutions that enable users to stake digital assets, earn rewards, and maintain liquidity within the Web3 ecosystem.',
      'exp1-b1': 'Built end-to-end Playwright test suite covering 200+ critical user flows',
      'exp1-b2': 'Reduced regression testing time from 8h to 45min via automation',
      'exp1-b3': 'Integrated test pipeline into GitHub Actions CI/CD for every PR',
      'exp1-b4': 'Defined QA standards and documented test strategies for the team',
      'exp2-date': 'July 2021 — Sep 2023',
      'exp2-role': 'Junior Software QA',
      'exp2-company': 'SYNERGIX TECHNOLOGIES PTE LTD',
      'exp2-company-desc': 'Synergix Technologies is Singapore’s leader in ERP system software, Cloud ERP solutions, and related ERP services. Known as one of the largest local and principal system developers for Small and Medium-sized companies, Synergix Technologies grew from a small accounting venture to the development of a fully integrated, web-based ERP System. The company has been in the ERP business for more than 15 years and has a strong presence in Singapore, Malaysia, Indonesia, Vietnam, and Myanmar.',
      'exp2-b1': 'Manually tested web and mobile applications across multiple platforms',
      'exp2-b2': 'Wrote comprehensive test cases and reported 300+ bugs in Jira',
      'exp2-b3': 'Collaborated with dev team in Agile sprints for timely releases',
      'proj-label': '04 — Projects', 'proj-title': 'Notable work',
      'proj1-title': 'E2E Automation Suite',
      'proj1-desc': 'Full end-to-end Playwright test framework for a fintech web platform. Covers authentication, trading flows, and reporting with 95%+ coverage.',
      'proj2-title': 'API Test Framework',
      'proj2-desc': 'Python-based REST API testing framework using pytest + requests. Includes data-driven tests, schema validation, and Allure reports.',
      'proj3-title': 'QA Dashboard',
      'proj3-desc': 'Internal dashboard for tracking test metrics, coverage reports, and bug trend analytics. Integrated with Jira and GitHub Actions.',
      'edu-label': '05 — Education & Certs', 'edu-title': 'Academic & learning journey',
      'edu-subtitle': 'Education', 'cert-subtitle': 'Certifications',
      'edu1-degree': 'Bachelor of Business English',
      'edu1-school': 'National Economics University',
      'contact-label': '06 — Contact', 'contact-title': "Let's work together",
      'contact-intro': 'Whether you need a QA engineer for a project or just say hello — my inbox is always open.',
      'form-name-label': 'Your Name', 'form-email-label': 'Your Email', 'form-msg-label': 'Message',
      'form-name-ph': 'Jane Smith', 'form-email-ph': 'jane@example.com',
      'form-msg-ph': 'Tell me about your project or opportunity...',
      'form-submit': 'Send Message →', 'form-note': 'I typically respond within 24 hours.',
    },
    vn: {
      'nav-about': 'Giới thiệu', 'nav-skills': 'Kỹ năng', 'nav-experience': 'Kinh nghiệm',
      'nav-projects': 'Dự án', 'nav-education': 'Học vấn', 'nav-contact': 'Liên hệ',
      'nav-cta': 'Thuê tôi', 'print-btn': 'In CV',
      'hero-tag': 'Kỹ sư Kiểm thử Phần mềm',
      'hero-name': "Xin chào, tôi là <em>Minh Anh</em>",
      'hero-subtitle': 'Tôi đảm bảo phần mềm hoạt động hoàn hảo — thông qua kiểm thử có cấu trúc,<br />framework tự động hóa, và niềm đam mê chất lượng.',
      'hero-cta-primary': 'Xem dự án', 'hero-cta-resume': 'Tải CV',
      'badge-open': 'Đang tìm việc',
      'stat-years': 'Năm kinh nghiệm', 'stat-tests': 'Test case đã viết', 'stat-projects': 'Dự án đã test',
      'about-label': '01 — Giới thiệu', 'about-title': 'Đôi nét về tôi',
      'about-p1': 'Tôi là Kỹ sư Kiểm thử Phần mềm với đam mê đảm bảo sản phẩm kỹ thuật số hoạt động hoàn hảo. Tôi chuyên xây dựng bộ kiểm thử tự động mạnh mẽ, phát hiện các trường hợp ngoại lệ mà con người bỏ sót, và chuyển hóa yêu cầu phức tạp thành các kịch bản kiểm thử chính xác, có thể lặp lại.',
      'about-p2': 'Tôi tin rằng chất lượng không chỉ là một giai đoạn — đó là tư duy cần được áp dụng ngay từ ngày đầu. Tôi làm việc chặt chẽ với lập trình viên, PM và các bên liên quan để kiểm thử sớm và phát hiện lỗi trước khi chúng trở thành vấn đề tốn kém.',
      'about-location': 'TP. Hồ Chí Minh, Việt Nam',
      'about-avail': 'Sẵn sàng làm freelance & toàn thời gian',
      'about-lang': 'Tiếng Anh & Tiếng Việt',
      'val-q-title': 'Chất lượng là trên hết', 'val-q-desc': 'Mỗi phiên bản đều xứng đáng được kiểm tra kỹ lưỡng trước khi đến tay người dùng.',
      'val-a-title': 'Tự động hóa mọi thứ', 'val-a-desc': 'Nếu con người làm 2 lần, máy có thể làm 1000 lần — đáng tin cậy hơn.',
      'val-c-title': 'QA cộng tác', 'val-c-desc': 'Kiểm thử là môn thể thao đồng đội. Tôi là cầu nối giữa dev, sản phẩm và người dùng.',
      'skills-label': '02 — Kỹ năng', 'skills-title': 'Bộ công cụ kỹ thuật',
      'exp-label': '03 — Kinh nghiệm', 'exp-title': 'Nơi tôi đã làm việc',
      'exp1-date': 'Tháng 1/2024 — Hiện tại', 'exp1-badge': 'Hiện tại',
      'exp1-role': 'Kỹ sư Tự động hóa QA', 'exp1-company': 'Công ty ABC · TP. Hồ Chí Minh',
      'exp1-b1': 'Xây dựng bộ test E2E với Playwright bao phủ 200+ luồng người dùng quan trọng',
      'exp1-b2': 'Giảm thời gian regression testing từ 8 tiếng xuống còn 45 phút nhờ tự động hóa',
      'exp1-b3': 'Tích hợp pipeline test vào CI/CD GitHub Actions cho mỗi Pull Request',
      'exp1-b4': 'Xây dựng tiêu chuẩn QA và tài liệu chiến lược kiểm thử cho đội nhóm',
      'exp2-date': 'Tháng 6/2022 — Tháng 12/2023',
      'exp2-role': 'Tester Phần mềm', 'exp2-company': 'Công ty XYZ · TP. Hồ Chí Minh',
      'exp2-b1': 'Kiểm thử thủ công ứng dụng web và mobile trên nhiều nền tảng',
      'exp2-b2': 'Viết test case toàn diện và báo cáo 300+ lỗi trên Jira',
      'exp2-b3': 'Phối hợp với đội dev trong các sprint Agile để ra mắt đúng hạn',
      'proj-label': '04 — Dự án', 'proj-title': 'Dự án nổi bật',
      'proj1-title': 'Bộ tự động hóa E2E',
      'proj1-desc': 'Framework test Playwright end-to-end cho nền tảng fintech. Bao gồm xác thực, luồng giao dịch và báo cáo với độ phủ 95%+.',
      'proj2-title': 'Framework Test API',
      'proj2-desc': 'Framework kiểm thử REST API bằng Python với pytest + requests. Bao gồm test data-driven, xác thực schema và báo cáo Allure.',
      'proj3-title': 'Dashboard QA',
      'proj3-desc': 'Dashboard nội bộ theo dõi chỉ số test, báo cáo độ phủ và phân tích xu hướng lỗi. Tích hợp Jira và GitHub Actions.',
      'edu-label': '05 — Học vấn & Chứng chỉ', 'edu-title': 'Hành trình học tập',
      'edu-subtitle': 'Học vấn', 'cert-subtitle': 'Chứng chỉ',
      'edu1-degree': 'Cử nhân Khoa học Máy tính',
      'edu1-school': 'Đại học Công nghệ · TP. Hồ Chí Minh',
      'contact-label': '06 — Liên hệ', 'contact-title': 'Hãy cùng làm việc',
      'contact-intro': 'Dù bạn cần kỹ sư QA cho dự án hay chỉ muốn chào hỏi — hộp thư của tôi luôn rộng mở.',
      'form-name-label': 'Họ và tên', 'form-email-label': 'Email của bạn', 'form-msg-label': 'Nội dung',
      'form-name-ph': 'Nguyễn Văn A', 'form-email-ph': 'email@example.com',
      'form-msg-ph': 'Hãy cho tôi biết về dự án hoặc cơ hội của bạn...',
      'form-submit': 'Gửi tin nhắn →', 'form-note': 'Tôi thường phản hồi trong vòng 24 giờ.',
    }
  };

  /* ════════════════════════════════════
     LANGUAGE SWITCHER
  ════════════════════════════════════ */
  let currentLang = localStorage.getItem('cv-lang') || 'en';
  const btnVN = document.getElementById('lang-vn');
  const btnEN = document.getElementById('lang-en');

  function updateLangButtons(lang) {
    if (btnVN) btnVN.classList.toggle('active', lang === 'vn');
    if (btnEN) btnEN.classList.toggle('active', lang === 'en');
  }

  function applyLang(lang) {
    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
    // HTML nodes (hero name, subtitle)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
    });
    updateLangButtons(lang);
    document.documentElement.lang = lang === 'vn' ? 'vi' : 'en';
    localStorage.setItem('cv-lang', lang);
    currentLang = lang;
  }

  if (btnVN) btnVN.addEventListener('click', () => applyLang('vn'));
  if (btnEN) btnEN.addEventListener('click', () => applyLang('en'));

  // Apply saved language on load
  applyLang(currentLang);

  /* ════════════════════════════════════
     PRINT CV
  ════════════════════════════════════ */
  const printBtn = document.getElementById('print-cv');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      // Ensure skill bars are filled before printing
      document.querySelectorAll('.skill-bar__fill[data-width]').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
      window.print();
    });
  }

  /* ════════════════════════════════════
     NAV SCROLL EFFECT
  ════════════════════════════════════ */
  const nav = document.getElementById('nav');
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ════════════════════════════════════
     MOBILE HAMBURGER
  ════════════════════════════════════ */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ════════════════════════════════════
     SCROLL ANIMATION
  ════════════════════════════════════ */
  const animTargets = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children)
          .filter(el => el.hasAttribute('data-animate'));
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  animTargets.forEach(el => observer.observe(el));

  /* ════════════════════════════════════
     COUNTER ANIMATION
  ════════════════════════════════════ */
  function animateCounters() {
    document.querySelectorAll('.stat__num[data-target]').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const start  = performance.now();
      const dur    = 1400;
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }
  const counterObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); counterObs.disconnect(); }
  }, { threshold: 0.5 });
  counterObs.observe(document.getElementById('hero'));

  /* ════════════════════════════════════
     SKILL BARS
  ════════════════════════════════════ */
  const skillsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.skill-bar__fill[data-width]').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
      skillsObs.disconnect();
    }
  }, { threshold: 0.2 });
  skillsObs.observe(document.getElementById('skills'));

  /* ════════════════════════════════════
     BACK TO TOP
  ════════════════════════════════════ */
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ════════════════════════════════════
     CONTACT FORM
  ════════════════════════════════════ */
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit');
  const formNote  = document.getElementById('form-note');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('form-name').value.trim();
    const email   = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();
    const t = i18n[currentLang];

    if (!name || !email || !message) {
      formNote.textContent = currentLang === 'vn' ? '⚠️ Vui lòng điền đầy đủ thông tin.' : '⚠️ Please fill in all fields.';
      formNote.style.color = '#C0392B'; return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formNote.textContent = currentLang === 'vn' ? '⚠️ Email không hợp lệ.' : '⚠️ Please enter a valid email address.';
      formNote.style.color = '#C0392B'; return;
    }
    submitBtn.textContent = currentLang === 'vn' ? 'Đang gửi…' : 'Sending…';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = currentLang === 'vn' ? '✅ Đã gửi!' : '✅ Message Sent!';
      formNote.textContent  = currentLang === 'vn' ? 'Cảm ơn! Tôi sẽ phản hồi sớm.' : "Thank you! I'll be in touch soon.";
      formNote.style.color  = '#1B6B5A';
      form.reset();
      setTimeout(() => {
        submitBtn.textContent = t['form-submit'];
        submitBtn.disabled    = false;
        formNote.textContent  = t['form-note'];
        formNote.style.color  = '';
      }, 3500);
    }, 1200);
  });

  /* ════════════════════════════════════
     ACTIVE NAV HIGHLIGHT
  ════════════════════════════════════ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + section.id ? 'var(--accent)' : '';
        });
      }
    });
  }, { passive: true });

  /* ════════════════════════════════════
     REDUCED MOTION
  ════════════════════════════════════ */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('is-visible'));
  }

})();
