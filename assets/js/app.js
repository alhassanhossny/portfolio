/**
 * Portfolio Main JavaScript
 * Handles: rendering, theme, language, navigation, animations
 */
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel);

  // ===== Theme Manager =====
  const Theme = {
    init() {
      const saved = localStorage.getItem('portfolio-theme') || 'light';
      this.set(saved);
    },
    set(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
      const btn = $('#theme-toggle');
      if (btn) btn.innerHTML = theme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    },
    toggle() {
      const current = document.documentElement.getAttribute('data-theme');
      this.set(current === 'dark' ? 'light' : 'dark');
    }
  };

  // ===== Renderer =====
  function render() {
    const d = i18n.data;

    // Hero
    const hero = $('#hero-content');
    if (hero) {
      hero.innerHTML = `
        <div class="hero-greeting">${d.hero.greeting}</div>
        <h1 class="hero-name">${d.hero.name}</h1>
        <p class="hero-title">${d.hero.title}</p>
        <p class="hero-summary">${d.hero.summary}</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary"><i class="bi bi-envelope"></i> ${d.hero.cta_contact}</a>
          <a href="alhassanhossny.pdf" download class="btn btn-outline"><i class="bi bi-download"></i> ${d.hero.cta_cv}</a>
        </div>`;
    }

    // Nav links
    $$('.nav-link-text').forEach(el => {
      const key = el.dataset.key;
      if (key && d.nav[key]) el.textContent = d.nav[key];
    });

    // About
    const aboutText = $('#about-text');
    if (aboutText) aboutText.textContent = d.about.text;
    const aboutTitle = $('#about-title');
    if (aboutTitle) aboutTitle.textContent = d.about.title;
    const aboutSubtitle = $('#about-subtitle');

    // About stats
    const statsGrid = $('#about-stats');
    if (statsGrid) {
      statsGrid.innerHTML = d.about.stats.map(s => `
        <div class="stat-card fade-up">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>`).join('');
    }

    // About info
    const aboutInfo = $('#about-info');
    if (aboutInfo) {
      aboutInfo.innerHTML = `
        <div class="about-info-item"><i class="bi bi-geo-alt"></i><span>${d.about.location}</span></div>
        <div class="about-info-item"><i class="bi bi-envelope"></i><span>${d.about.email}</span></div>
        <div class="about-info-item"><i class="bi bi-telephone"></i><span>${d.about.phone}</span></div>`;
    }

    // Skills
    const skillsTitle = $('#skills-title');
    if (skillsTitle) skillsTitle.textContent = d.skills.title;
    const skillsSub = $('#skills-subtitle');
    if (skillsSub) skillsSub.textContent = d.skills.subtitle;
    const skillsGrid = $('#skills-grid');
    if (skillsGrid) {
      skillsGrid.innerHTML = d.skills.categories.map(cat => `
        <div class="skill-category fade-up">
          <div class="skill-category-header">
            <i class="bi ${cat.icon}"></i>
            <h3>${cat.name}</h3>
          </div>
          <div class="skill-tags">
            ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
          </div>
        </div>`).join('');
    }

    // Experience
    const expTitle = $('#experience-title');
    if (expTitle) expTitle.textContent = d.experience.title;
    const expSub = $('#experience-subtitle');
    if (expSub) expSub.textContent = d.experience.subtitle;
    const timeline = $('#timeline');
    if (timeline) {
      timeline.innerHTML = d.experience.jobs.map(job => `
        <div class="timeline-item fade-up">
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <div class="timeline-role">${job.role}</div>
                <div class="timeline-company"><a href="${job.url}" target="_blank" rel="noopener">${job.company} <i class="bi bi-box-arrow-up-right" style="font-size:0.75rem"></i></a></div>
              </div>
              <span class="timeline-period">${job.period}</span>
            </div>
            <div class="timeline-type">${job.type}</div>
            <ul class="timeline-tasks">
              ${job.tasks.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>`).join('');
    }

    // Education
    const eduTitle = $('#education-title');
    if (eduTitle) eduTitle.textContent = d.education.title;
    const eduSub = $('#education-subtitle');
    if (eduSub) eduSub.textContent = d.education.subtitle;
    const eduGrid = $('#edu-grid');
    if (eduGrid) {
      eduGrid.innerHTML = d.education.degrees.map(deg => `
        <div class="edu-card fade-up">
          <div class="edu-icon"><i class="bi bi-mortarboard"></i></div>
          <h3>${deg.degree}</h3>
          <div class="edu-school">${deg.school}</div>
          <div class="edu-period">${deg.period}</div>
          <p class="edu-detail">${deg.detail}</p>
        </div>`).join('');
    }
    const certTitle = $('#cert-title');
    if (certTitle) certTitle.textContent = d.education.cert_title;
    const certList = $('#cert-list');
    if (certList) {
      certList.innerHTML = d.education.certs.map(c => `
        <div class="cert-item fade-up">
          <i class="bi bi-patch-check"></i>
          <span>${c}</span>
        </div>`).join('');
    }

    // Projects
    const projTitle = $('#projects-title');
    if (projTitle) projTitle.textContent = d.projects.title;
    const projSub = $('#projects-subtitle');
    if (projSub) projSub.textContent = d.projects.subtitle;

    // Build filter tags
    const allTags = new Set();
    d.projects.items.forEach(p => p.tags.forEach(t => allTags.add(t)));
    const filterContainer = $('#project-filters');
    if (filterContainer) {
      filterContainer.innerHTML = `<button class="filter-btn active" data-filter="all">${d.projects.filter_all}</button>` +
        [...allTags].map(t => `<button class="filter-btn" data-filter="${t}">${t}</button>`).join('');

      filterContainer.addEventListener('click', e => {
        if (!e.target.classList.contains('filter-btn')) return;
        $$('.filter-btn', filterContainer).forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filter = e.target.dataset.filter;
        $$('.project-card').forEach(card => {
          const tags = card.dataset.tags.split(',');
          card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
        });
      });
    }

    const projGrid = $('#projects-grid');
    if (projGrid) {
      projGrid.innerHTML = d.projects.items.map(p => `
        <div class="project-card fade-up" data-tags="${p.tags.join(',')}">
          <div class="project-card-img">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <div class="project-card-overlay">
              <a href="${p.url}" target="_blank" rel="noopener" title="Visit"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
          <div class="project-card-body">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
          </div>
        </div>`).join('');
    }

    // Contact
    const conTitle = $('#contact-title');
    if (conTitle) conTitle.textContent = d.contact.title;
    const conSub = $('#contact-subtitle');
    if (conSub) conSub.textContent = d.contact.subtitle;
    const contactInfo = $('#contact-info');
    if (contactInfo) {
      contactInfo.innerHTML = `
        <div class="contact-info-item fade-up">
          <div class="icon"><i class="bi bi-geo-alt"></i></div>
          <div><h4>${d.contact.address_label}</h4><p>${d.contact.address}</p></div>
        </div>
        <div class="contact-info-item fade-up">
          <div class="icon"><i class="bi bi-telephone"></i></div>
          <div><h4>${d.contact.phone_label}</h4><p>${d.contact.phone}</p></div>
        </div>
        <div class="contact-info-item fade-up">
          <div class="icon"><i class="bi bi-envelope"></i></div>
          <div><h4>${d.contact.email_label}</h4><p>${d.contact.email}</p></div>
        </div>`;
    }
    const form = $('#contact-form');
    if (form) {
      form.innerHTML = `
        <div class="form-row">
          <div class="form-group"><input class="form-control" type="text" name="name" placeholder="${d.contact.form_name}" required></div>
          <div class="form-group"><input class="form-control" type="email" name="email" placeholder="${d.contact.form_email}" required></div>
        </div>
        <div class="form-group"><input class="form-control" type="text" name="subject" placeholder="${d.contact.form_subject}" required></div>
        <div class="form-group"><textarea class="form-control" name="message" placeholder="${d.contact.form_message}" required></textarea></div>
        <button type="submit" class="btn btn-primary" style="width:100%"><i class="bi bi-send"></i> ${d.contact.form_send}</button>`;
    }

    // Footer
    const footerText = $('#footer-text');
    if (footerText) footerText.textContent = d.footer.text;
    const footerCopy = $('#footer-copy');
    if (footerCopy) footerCopy.innerHTML = `&copy; ${new Date().getFullYear()} Alhassan Hossny. ${d.footer.copyright}`;

    // Re-observe animations
    observeAnimations();
  }

  // ===== Scroll Animations =====
  function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    $$('.fade-up, .fade-in').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }

  // ===== Active Nav on Scroll =====
  function updateActiveNav() {
    const sections = $$('section[id]');
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = $(`.nav-links a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  }

  // ===== Navbar Scroll Effect =====
  function handleNavScroll() {
    const nav = $('.navbar');
    const scrollTop = $('.scroll-top');
    if (window.scrollY > 50) {
      nav && nav.classList.add('scrolled');
      scrollTop && scrollTop.classList.add('visible');
    } else {
      nav && nav.classList.remove('scrolled');
      scrollTop && scrollTop.classList.remove('visible');
    }
    updateActiveNav();
  }

  // ===== Mobile Menu =====
  function initMobileMenu() {
    const toggle = $('.mobile-toggle');
    const menu = $('.mobile-menu');
    const overlay = $('.mobile-overlay');
    const close = $('.mobile-close');
    if (!toggle || !menu) return;

    const openMenu = () => { menu.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMenu = () => { menu.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; };

    toggle.addEventListener('click', openMenu);
    close && close.addEventListener('click', closeMenu);
    overlay && overlay.addEventListener('click', closeMenu);
    $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
  }

  // ===== Contact Form =====
  function initContactForm() {
    const formWrap = $('#contact-form-wrap');
    if (!formWrap) return;
    formWrap.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      fetch('https://formspree.io/f/xldoyazl', { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
        .then(r => {
          if (r.ok) {
            this.reset();
            alert(i18n.data.contact.form_success);
          }
        }).catch(() => {});
    });
  }

  // ===== Init =====
  function init() {
    Theme.init();
    i18n.setLang(i18n.lang);
    render();

    // Theme toggle
    const themeBtn = $('#theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', () => Theme.toggle());

    // Language toggle
    const langBtn = $('#lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const newLang = i18n.lang === 'en' ? 'ar' : 'en';
        i18n.setLang(newLang);
        langBtn.textContent = newLang === 'en' ? 'عربي' : 'EN';
        render();
      });
      langBtn.textContent = i18n.lang === 'en' ? 'عربي' : 'EN';
    }

    // Scroll
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // Scroll top button
    const scrollTopBtn = $('.scroll-top');
    if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    initMobileMenu();
    initContactForm();
    observeAnimations();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
