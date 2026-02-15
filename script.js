(function () {
  'use strict';

  const flagshipGrid = document.getElementById('flagship-grid');
  const otherProjectsEl = document.getElementById('other-projects');

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderFlagshipCards() {
    if (!flagshipGrid || typeof window.flagshipProjects === 'undefined') return;
    const list = window.flagshipProjects;
    flagshipGrid.innerHTML = list.map(function (p) {
      const icon = p.icon ? '<i class="fa-solid ' + escapeHtml(p.icon) + ' text-3xl text-violet-400 mb-3"></i>' : '';
      var painLine = escapeHtml(p.painLine || '');
      var resultLine = escapeHtml(p.resultLine || '');
      var price = escapeHtml(p.price || '14 900 ₽');
      var ctaText = escapeHtml(p.ctaText || 'Обсудить →');
      var link = escapeHtml(p.link || 'https://t.me/MyNotesAI_Bot');

      var backContent =
        '<div class="flip-back-content flex flex-col justify-center h-full gap-4">' +
          (painLine
            ? '<p class="text-sm text-slate-500 flex items-start gap-2">' +
                '<span class="text-red-400 mt-0.5" aria-hidden="true">✔</span>' +
                '<span>' + painLine + '</span>' +
              '</p>'
            : '') +
          (resultLine
            ? '<p class="text-sm text-slate-300 flex items-start gap-2">' +
                '<span class="text-accent mt-0.5" aria-hidden="true">✔</span>' +
                '<span>' + resultLine + '</span>' +
              '</p>'
            : '') +
          '<p class="text-slate-50 font-bold text-lg mt-2">' + price + '</p>' +
          '<a href="' + link + '" target="_blank" rel="noopener" class="cta-card-btn inline-flex items-center justify-center gap-2 gradient-btn text-white font-semibold px-4 py-2.5 rounded-xl text-sm mt-2">' +
            '<i class="fab fa-telegram-plane"></i>' +
            '<span>' + ctaText + '</span>' +
          '</a>' +
        '</div>';

      return (
        '<article class="flip-card rounded-2xl card-enter" style="animation-delay: ' + Math.random() * 0.1 + 's">' +
          '<div class="flip-card-inner" style="transform-style: preserve-3d;">' +
            '<div class="flip-card-front rounded-2xl flex flex-col h-full">' +
              icon +
              '<h3 class="font-heading font-semibold text-slate-50 text-lg mb-2">' + escapeHtml(p.title) + '</h3>' +
              '<p class="text-slate-400 text-sm flex-1">' + escapeHtml(p.descriptionFront || '') + '</p>' +
            '</div>' +
            '<div class="flip-card-back rounded-2xl flex flex-col h-full">' +
              backContent +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  function renderOtherProjects() {
    if (!otherProjectsEl || typeof window.otherProjects === 'undefined') return;
    const list = window.otherProjects;
    otherProjectsEl.innerHTML = list.map(function (p) {
      return (
        '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener" class="other-project-link glass rounded-xl px-4 py-3 border border-white/10 hover:border-violet-500/30 flex items-center justify-between gap-3 transition group">' +
          '<span class="font-medium text-slate-300 group-hover:text-slate-50">' + escapeHtml(p.title) + '</span>' +
          '<i class="fa-solid fa-arrow-up-right-from-square text-slate-500 group-hover:text-violet-400 text-sm"></i>' +
        '</a>'
      );
    }).join('');
  }

  // FAQ Accordion
  var faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var content = item.querySelector('.faq-content');
      var icon = this.querySelector('.fa-chevron-down');
      var isOpen = !content.classList.contains('hidden');
      document.querySelectorAll('.faq-content').forEach(function (c) { c.classList.add('hidden'); });
      document.querySelectorAll('.faq-trigger').forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
        var chev = t.querySelector('.fa-chevron-down');
        if (chev) chev.classList.remove('rotate-180');
      });
      if (!isOpen) {
        content.classList.remove('hidden');
        this.setAttribute('aria-expanded', 'true');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // Smooth scroll for nav
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      e.preventDefault();
      var el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Flip-cards: tap support for touch devices
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.flip-card');
    if (!card) return;
    // Don't interfere with links inside the card
    if (e.target.closest('a')) return;
    card.classList.toggle('flipped');
  });

  // Burger menu toggle
  var burgerBtn = document.getElementById('burger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var burgerIcon = document.getElementById('burger-icon');
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      burgerBtn.setAttribute('aria-expanded', String(!isOpen));
      if (burgerIcon) {
        burgerIcon.classList.toggle('fa-bars', isOpen);
        burgerIcon.classList.toggle('fa-xmark', !isOpen);
      }
    });
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        burgerBtn.setAttribute('aria-expanded', 'false');
        if (burgerIcon) {
          burgerIcon.classList.add('fa-bars');
          burgerIcon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Hero cards: mouse parallax (desktop only, respects reduced motion)
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDesktop = window.matchMedia('(min-width: 900px)').matches;

  if (!prefersReducedMotion && isDesktop) {
    var heroVisual = document.querySelector('.hero-visual');
    var heroCards = document.querySelectorAll('.hero-card');
    var parallaxStrengths = [0.02, 0.015, 0.025]; // different per card

    if (heroVisual && heroCards.length) {
      heroVisual.addEventListener('mousemove', function (e) {
        var rect = heroVisual.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var dx = e.clientX - centerX;
        var dy = e.clientY - centerY;

        heroCards.forEach(function (card, i) {
          var strength = parallaxStrengths[i] || 0.02;
          var offsetX = dx * strength;
          var offsetY = dy * strength;
          // Clamp to max 14px
          offsetX = Math.max(-14, Math.min(14, offsetX));
          offsetY = Math.max(-14, Math.min(14, offsetY));
          card.style.setProperty('--px', offsetX + 'px');
          card.style.setProperty('--py', offsetY + 'px');
          card.style.translate = offsetX + 'px ' + offsetY + 'px';
        });
      });

      heroVisual.addEventListener('mouseleave', function () {
        heroCards.forEach(function (card) {
          card.style.translate = '0px 0px';
        });
      });
    }
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderFlagshipCards();
  renderOtherProjects();
})();
