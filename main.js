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
      'about-p1': "I'm a QA Engineer with 5 years of experience in software quality assurance, specializing in both Web2 and Web3 applications. Experienced in ensuring the quality of complex blockchain products, including staking, DEX, lending, wallets, DAO governance, incentive programs, airdrops, smart contracts, on-chain features, and blockchain super apps. Built a strong foundation in ERP testing by validating end-to-end business processes across finance, procurement, inventory, sales, and operations.",
      'about-p2': "Skilled in manual testing, API testing, regression testing, test planning, defect management, and performance testing, with hands-on experience using Postman, Swagger, K6, Playwright, MCP, and AI Agents to improve testing efficiency and automation. Proficient in working with databases such as MySQL, MongoDB, and DBeaver for data validation and troubleshooting. Experienced in collaborating closely with Product Managers, Business Analysts, Designers, and Development teams in Agile/Scrum environments, leveraging Figma for requirement validation to deliver reliable, high-quality software.",
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
      'exp1-proj-label': '🚀 Key Projects',
      'exp1-p1-title': 'Amnis Finance – Staking Platform',
      'exp1-p1-b1': 'Performed end-to-end testing across Frontend, Backend, and Smart Contracts for staking features, ensuring accuracy, security, and a seamless user experience.',
      'exp1-p1-b2': 'Validated DAO governance, strategy management, and UI/UX enhancements through functional, API, database, and on-chain testing.',
      'exp1-p1-b3': 'Tested incentive campaigns, retroactive rewards, and airdrop distribution by verifying business logic, smart contract execution, and blockchain transactions.',
      'exp1-p2-title': 'DEX Platform',
      'exp1-p2-b1': 'Performed end-to-end testing across Frontend, Backend, and Smart Contracts for token swaps, liquidity management, AMM mechanics, and ve(3,3) governance.',
      'exp1-p2-b2': 'Tested vote-escrow (veNFT), gauge voting, reward emissions, bribes, and incentive distribution through functional, API, database, and on-chain testing.',
      'exp1-p2-b3': 'Validated secondary market features, launchpad modules, smart contract interactions, and transaction flows to ensure protocol accuracy and reliable releases.',
      'exp1-p3-title': 'Lending Protocol',
      'exp1-p3-b1': 'Performed end-to-end testing across Frontend, Backend, and Smart Contracts for lending and borrowing workflows, including looping mechanisms, collateral management, and interest calculations.',
      'exp1-p3-b2': 'Verified API integrations, database consistency, smart contract execution, and blockchain transactions to ensure data integrity and protocol behavior.',
      'exp1-p3-b3': 'Supported release quality through regression testing, defect management, and cross-functional collaboration.',
      'exp1-p4-title': 'Blockchain Super App',
      'exp1-p4-b1': 'Performed end-to-end testing across Frontend, Backend, and Smart Contracts for wallet management, fiat deposits, on-chain transfers, internal transfers, yield products, P2P transactions, and payments.',
      'exp1-p4-b2': 'Created test plans and test cases, executing functional, API, database, regression, UAT, and on-chain testing to ensure complete feature coverage.',
      'exp1-p4-b3': 'Validated business requirements, smart contract interactions, APIs, and data integrity using Postman, Swagger, MySQL, MongoDB, DBeaver, and blockchain explorers while collaborating closely with Product Managers, Business Analysts, Designers, and Developers in Agile/Scrum environments.',
      'exp2-date': 'July 2021 — Sep 2023',
      'exp2-role': 'Junior Software QA',
      'exp2-company': 'SYNERGIX TECHNOLOGIES PTE LTD',
      'exp2-company-desc': 'Synergix Technologies is Singapore’s leader in ERP system software, Cloud ERP solutions, and related ERP services. Known as one of the largest local and principal system developers for Small and Medium-sized companies, Synergix Technologies grew from a small accounting venture to the development of a fully integrated, web-based ERP System. The company has been in the ERP business for more than 15 years and has a strong presence in Singapore, Malaysia, Indonesia, Vietnam, and Myanmar.',
      'exp2-b1': 'Manually tested web and mobile applications across multiple platforms',
      'exp2-b2': 'Wrote comprehensive test cases and reported 300+ bugs in Jira',
      'exp2-b3': 'Collaborated with dev team in Agile sprints for timely releases',
      'exp2-p1-title': 'Purchase Module Management',
      'exp2-p1-date': '10/2022 – 09/2023',
      'exp2-p1-desc': 'Purchasing module tightly integrated with inventory control and production planning, providing easy tracking of stock on hand.',
      'exp2-p1-customer': 'Singaporean businesses',
      'exp2-p1-tech': 'Web Testing (Firefox / MS Edge / Chrome)',
      'exp2-p1-db': 'Database: MySQL',
      'exp2-p2-title': 'Sales & Delivery Management',
      'exp2-p2-date': '09/2021 – 09/2022',
      'exp2-p2-desc': 'Customized screens meeting the Sales and Delivery business process requirements for client operations.',
      'exp2-p2-customer': 'Field Catering & Supplies Pte Ltd — Singapore',
      'exp2-p2-tech': 'Web Testing (Firefox / MS Edge / Chrome)',
      'exp2-p2-db': 'Database: MySQL',
      'proj-label': '04 — Projects', 'proj-title': 'Notable work',
      'proj1-title': 'Blockchain Staking Platform',
      'proj1-desc': 'Performed end-to-end testing across Frontend, Backend, APIs, and Smart Contracts for staking, DAO governance, strategy management, incentive campaigns, retroactive rewards, and airdrops. Verified on-chain transactions and reward distribution to ensure protocol accuracy.',
      'proj2-title': 'DeFi DEX & ve(3,3)',
      'proj2-desc': 'Validated core DEX features including token swaps, liquidity pools, AMM mechanics, veNFT, gauge voting, reward emissions, bribes, launchpad, and incentive programs. Conducted frontend, backend, API, database, and smart contract testing to ensure secure and reliable releases.',
      'proj3-title': 'Lending Protocol',
      'proj3-desc': 'Tested lending and borrowing workflows, collateral management, interest calculations, and looping mechanisms across Frontend, Backend, APIs, Databases, and Smart Contracts. Performed regression testing and validated on-chain transactions for protocol stability.',
      'proj4-title': 'Blockchain Super App',
      'proj4-desc': 'Performed end-to-end testing for an integrated blockchain ecosystem covering wallets, fiat deposits, on-chain transfers, internal transfers, P2P, payments, and yield products. Created test plans, executed functional, API, regression, database, UAT, and smart contract testing while collaborating closely with cross-functional Agile teams.',
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
      'about-p1': 'Mình là QA Engineer với 5 năm kinh nghiệm trong lĩnh vực kiểm thử phần mềm, luôn hướng đến việc mang lại những sản phẩm ổn định, chất lượng và trải nghiệm tốt cho người dùng. Mình có kinh nghiệm kiểm thử nhiều sản phẩm Web3 như staking, DEX, lending, wallet, DAO governance, incentive program, airdrop, smart contract, các tính năng on-chain và blockchain super app. Bên cạnh đó, mình cũng có nền tảng vững về kiểm thử hệ thống ERP với các quy trình nghiệp vụ như tài chính, mua hàng, kho, bán hàng và vận hành.',
      'about-p2': 'Trong quá trình làm việc, mình đã thực hiện manual testing, API testing, regression testing, test planning, defect management và performance testing. Mình thành thạo các công cụ như Postman, Swagger, Playwright, K6, DBeaver, MySQL, MongoDB, Figma, MCP và AI Agents để hỗ trợ quá trình kiểm thử và nâng cao chất lượng sản phẩm. Mình làm việc cùng Product Manager, Business Analyst, Designer và Developer trong môi trường Agile, cùng nhau giải quyết vấn đề từ sớm, đảm bảo mỗi phiên bản phát hành đều ổn định và mang đến trải nghiệm tốt nhất cho người dùng.',
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
      'proj1-title': 'Nền tảng Staking Blockchain',
      'proj1-desc': 'Thực hiện kiểm thử end-to-end trên Frontend, Backend, API và Smart Contract cho các tính năng staking, DAO governance, quản lý chiến lược, chiến dịch incentive, retroactive rewards và airdrop. Xác minh giao dịch on-chain và phân phối phần thưởng để đảm bảo tính chính xác của giao thức.',
      'proj2-title': 'DeFi DEX & ve(3,3)',
      'proj2-desc': 'Kiểm thử các tính năng cốt lõi của DEX bao gồm hoán đổi token, liquidity pool, cơ chế AMM, veNFT, gauge voting, reward emissions, bribes, launchpad và chương trình incentive. Thực hiện kiểm thử frontend, backend, API, database và smart contract để đảm bảo release ổn định và bảo mật.',
      'proj3-title': 'Lending Protocol',
      'proj3-desc': 'Kiểm thử quy trình vay và cho vay, quản lý tài sản thế chấp, tính toán lãi suất và cơ chế looping trên Frontend, Backend, API, Database và Smart Contract. Thực hiện regression testing và xác minh giao dịch on-chain để đảm bảo sự ổn định của giao thức.',
      'proj4-title': 'Blockchain Super App',
      'proj4-desc': 'Kiểm thử end-to-end cho hệ sinh thái blockchain tích hợp bao gồm ví, nạp tiền fiat, chuyển tiền on-chain, chuyển khoản nội bộ, P2P, thanh toán và sản phẩm yield. Lập kế hoạch test, thực hiện kiểm thử chức năng, API, regression, database, UAT và smart contract trong môi trường Agile đa bộ phận.',
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
