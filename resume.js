/* juancornejo.com — i18n, carruseles, reveals */
(function () {
  'use strict';

  // Anti-clickjacking (GitHub Pages no permite cabeceras; mejor esfuerzo en cliente).
  try { if (window.top !== window.self) { window.top.location = window.self.location; } } catch (e) {}

  // El toggle de idioma requiere JS: se revela marcando la raíz.
  document.documentElement.classList.add('js');

  /* ---------- i18n ----------
     ES es la fuente de verdad y vive en el markup; se captura al cargar.
     EN se define aquí. setLang aplica el diccionario correspondiente. */
  const I18N = { es: {}, en: {
    'meta.title': 'Juan Cornejo · Apps for real businesses',
    'meta.desc': 'I design and build complete app systems for restaurants and service businesses in Mexico and the US: the app your customers see, the app your team runs on, and the secure backend that connects them.',
    'nav.contact': 'Contact',
    'dot.process': 'Process', 'dot.contact': 'Contact',

    'hero.kicker': 'Juan Cornejo · Portfolio',
    'hero.h1': 'Apps real businesses <em>use every day</em>.',
    'hero.sub': 'I design and build complete systems for restaurants and service businesses in Mexico and the US: the app your customers see, the app your team operates with, and the secure backend that connects them.',
    'hero.cta1': 'Let’s talk about your app', 'hero.cta2': 'See the work',
    'hero.s1': 'real businesses', 'hero.s2': 'native apps', 'hero.s3': 'countries',
    'hero.s4': 'custom-built',
    'ui.demo': 'Screenshots use sample data — they don’t show any business’s or customer’s real information.',

    /* San Marco */
    'sm.kicker': 'Case 01 · Italian restaurant · Atlixco, Mexico',
    'sm.pitch': 'A loyalty program turned into a game — a level tower, a roulette and a photo puzzle — plus reservations with live negotiation and an operations panel the restaurant runs on iPad.',
    'sm.chip1': '2 iOS apps', 'sm.chip2': 'On the App Store', 'sm.chip3': 'Firebase',
    'sm.cap': 'Official App Store listing cards.',
    'sm.devc.t': 'San Marco', 'sm.devc.s': 'what your diners see',
    'sm.devb.t': 'San Marco Restaurante', 'sm.devb.s': 'operations: tables, coupons, reservations',
    'sm.appc.k': 'Customer app', 'sm.appc.d': 'Digital menu, reservations and takeout, points for visits and spending, level rewards, roulette and puzzle. Sign in with SMS or Apple.',
    'sm.appb.k': 'Business app', 'sm.appb.d': 'Live table map, counter-offer reservations, coupon scanner, push campaigns, monthly analytics and staff sub-accounts with 14 granular permissions. iPhone and iPad.',
    'sm.f1t': '15-level tower', 'sm.f1d': 'Every visit earns points; every level unlocks a house reward.',
    'sm.f2t': 'Bronze · Silver · Gold roulette', 'sm.f2d': 'Key levels spin a roulette; the server decides the prize.',
    'sm.f3t': 'Photo puzzle', 'sm.f3d': '15 pieces unlock as you level up; completing it earns wine.',
    'sm.f4t': 'Counter-offer reservations', 'sm.f4d': 'Staff can propose another time or area; the guest accepts in-app.',
    'sm.f5t': 'Live table map', 'sm.f5d': 'Floor plan with statuses, table merging and a waitlist.',
    'sm.f6t': 'Seasons', 'sm.f6d': 'The pass resets each season; lifetime points are kept.',
    'sm.f7t': 'QR coupons', 'sm.f7d': 'Redeemed at the register with a built-in scanner and server validation.',
    'sm.f8t': 'Staff with permissions', 'sm.f8d': 'The owner creates staff accounts with 14 granular capabilities.',
    'sm.arch.a': 'Customer app (iPhone)', 'sm.arch.b': 'Secure cloud · real time', 'sm.arch.c': 'Staff app (iPhone · iPad)',
    'sm.s1': 'iOS apps', 'sm.s2': 'reward levels', 'sm.s3': 'screens', 'sm.s4': 'staff permissions',

    /* ShineBright */
    'sb.kicker': 'Case 02 · Home cleaning · United States',
    'sb.pitch': 'Two native apps on a custom design system: clients book, negotiate their quote, pay and chat; the business runs schedule, CRM, coupons and metrics.',
    'sb.chip1': '2 iOS apps', 'sb.chip2': 'In development', 'sb.chip3': 'Swift 6', 'sb.chip4': 'English + Spanish',
    'sb.devc.t': 'ShineBright', 'sb.devc.s': 'what your clients see · ES/EN',
    'sb.devb.t': 'ShineBright Admin', 'sb.devb.s': 'what the business runs on',
    'sb.appc.k': 'Customer app', 'sb.appc.d': 'Multi-step booking, negotiable quotes, Zelle payment with receipt, live chat, loyalty pass and service rating.',
    'sb.appb.k': 'Business app', 'sb.appb.d': 'Today’s schedule, calendar with blocked slots, CRM with notes and tags, coupons, payment confirmation, push broadcasts and business metrics.',
    'sb.f1t': 'Negotiable quotes', 'sb.f1d': 'The team counter-offers and the client accepts with one tap.',
    'sb.f2t': 'Payments with receipt', 'sb.f2d': 'Zelle with receipt upload and business confirmation, or pay on site.',
    'sb.f3t': 'Live chat', 'sb.f3d': 'Client and business talk inside the app, with notifications.',
    'sb.f4t': 'Recurring cleanings', 'sb.f4d': 'The server re-books automatically based on each client’s plan.',
    'sb.f5t': 'Stamp pass', 'sb.f5d': 'A configurable reward every 5 visits.',
    'sb.f6t': 'CRM with follow-ups', 'sb.f6d': 'Overdue rebooks, new clients and win-backs, with a nightly digest.',
    'sb.f7t': 'Automatic reminders', 'sb.f7d': 'Push the evening before and the morning of every visit.',
    'sb.f8t': 'Data security', 'sb.f8d': 'App Check, per-user rate limits and security rules covered by tests.',
    'sb.arch.a': 'Customer app', 'sb.arch.b': 'Secure cloud · real time', 'sb.arch.c': 'Admin app',
    'sb.s1': 'native apps', 'sb.s2': 'screens', 'sb.s3': 'languages', 'sb.s4': 'visits per reward',

    /* El Compa */
    'ec.kicker': 'Case 03 · Taquerías · 2 locations · Puebla, Mexico',
    'ec.pitch': 'The owner runs everything from an iPhone; branch managers work from Android. Traffic-light inventory, weekly payroll and cash closes — with the server as the single source of truth.',
    'ec.chip1': 'Native iOS + Android', 'ec.chip2': 'In production · daily use', 'ec.chip3': 'Firebase',
    'ec.devc.t': 'El Compa Admin', 'ec.devc.s': 'iOS · the owner',
    'ec.devb.t': 'Supervisores', 'ec.devb.s': 'Android · branch managers',
    'ec.appc.k': 'Owner app · iOS', 'ec.appc.d': 'Six-level traffic-light inventory, weekly payroll with Sunday auto-freeze, employees and vacations, suppliers, cash closes with charts and real-time reports.',
    'ec.appb.k': 'Manager app · Android', 'ec.appb.d': 'Daily inventory capture inside time windows, payroll submission, reports to the owner and push notifications. Kotlin + Jetpack Compose.',
    'ec.f1t': 'Inventory traffic light', 'ec.f1d': 'Six color-coded stock levels, per product and per branch.',
    'ec.f2t': 'Server-clock windows', 'ec.f2d': 'Time comes from the server: changing the phone’s clock won’t open the window.',
    'ec.f3t': 'Payroll that freezes itself', 'ec.f3d': 'Every Sunday the week closes and stays audited.',
    'ec.f4t': 'Credentials from the iPhone', 'ec.f4d': 'The owner creates and revokes manager access.',
    'ec.f5t': 'Real-time reports', 'ec.f5d': 'What happens at the branch reaches the owner with a push.',
    'ec.f6t': 'Cash closes', 'ec.f6d': 'Cash, card and delivery apps, with weekly and monthly charts.',
    'ec.f7t': 'Suppliers and orders', 'ec.f7d': 'Purchase history and live totals.',
    'ec.f8t': 'No hard deletes', 'ec.f8d': 'Products are archived; the business history is never lost.',
    'ec.arch.a': 'Admin iOS (owner)', 'ec.arch.b': 'Secure cloud · real time', 'ec.arch.c': 'Supervisores Android',
    'ec.s1': 'locations in production', 'ec.s2': 'traffic-light levels', 'ec.s3': 'native platforms', 'ec.s4': 'source of truth: the server',
    'ec.note': 'The system runs in production with the business’s real data; these captures run in demo mode with invented information.',

    /* La Cocina */
    'lc.kicker': 'Case 04 · Mexican restaurant · York, Nebraska',
    'lc.pitch': 'Loyalty with zero friction: the app reads the physical receipt with the camera, validates it’s real, and turns spending into points on a 100-level battle pass.',
    'lc.chip1': 'iOS', 'lc.chip2': 'Working concept', 'lc.chip3': 'VisionKit OCR',
    'lc.devc.t': 'La Cocina', 'lc.devc.s': 'customer app',
    'lc.appc.k': 'Customer app', 'lc.appc.d': 'Receipt scanner with OCR, battle pass with an animated thermometer, bilingual 23-category menu, level-based coupons and favorites.',
    'lc.appb.k': 'Business app', 'lc.appb.d': 'In construction: ticket and reward management for the staff.',
    'lc.f1t': 'Receipt scanner', 'lc.f1d': 'Camera + OCR read the real POS ticket (Clover) in seconds.',
    'lc.f2t': 'Anti-cheat validation', 'lc.f2d': 'Business header, 30-day limit, and each barcode counts only once.',
    'lc.f3t': 'Battle pass', 'lc.f3d': '100 levels with an animated mercury thermometer.',
    'lc.f4t': 'Points for spending', 'lc.f4d': '20 per visit + half a point per dollar spent.',
    'lc.f5t': 'Bilingual menu', 'lc.f5d': '23 categories with spicy and veggie tags, ES/EN based on the phone.',
    'lc.f6t': 'Level coupons', 'lc.f6d': 'Rewards unlock from level 5 up to 100.',
    'lc.f7t': 'Getting there', 'lc.f7d': 'Map, Waze/Google/Apple Maps and one-tap call.',
    'lc.f8t': 'Privacy first', 'lc.f8d': 'Everything lives on the customer’s phone; zero accounts, zero friction.',
    'lc.arch.a': 'Customer app (iPhone)', 'lc.arch.b': 'Scanner and data on the phone', 'lc.arch.c': 'Admin panel (in construction)',
    'lc.s1': 'pass levels', 'lc.s2': 'menu categories', 'lc.s3': 'screens', 'lc.s4': 'languages',
    'lc.note': 'A working concept: the customer app first; the business panel is the next phase.',

    /* proceso */
    'pr.h2': 'How I <em>work</em>',
    'pr.s1t': 'Discovery inside your business', 'pr.s1d': 'I sit with the owner and their real operation: tips, capture windows, tables that merge, POS receipts. The app’s rules come from there, not from a template.',
    'pr.s2t': 'Pricing that fits your business', 'pr.s2d': 'Every project is quoted to fit your business and your real needs — no inflated packages, no features you’ll never use.',
    'pr.s3t': 'Real quality, real usefulness', 'pr.s3d': 'Committed to quality and true usefulness: native, fast, secure apps your team and your customers use every day because they actually help.',
    'pr.s4t': 'More than you imagined', 'pr.s4d': 'I’m proactive: I’ll propose options and features you hadn’t imagined — a puzzle that rewards wine, a traffic-light inventory, a battle pass — so your app delivers more value than you asked for.',
    'pr.s5t': 'App Store and operation', 'pr.s5d': 'Your app published and running: App Store, notifications, analytics and support. The deliverable isn’t a file: it’s your business running on its app.',

    /* contacto */
    'ct.h2': 'Does your business need <em>its own app</em>?',
    'ct.p': 'Tell me what your business does and I’ll propose what its system could look like — no strings attached, in your language.',
    'ct.cta': 'Write to me',
    'ft.made': '© 2026 Juan Cornejo — handmade, like everything above.'
  } };

  const els = () => document.querySelectorAll('[data-i18n]');

  function captureSpanish() {
    els().forEach(el => { I18N.es[el.getAttribute('data-i18n')] = el.innerHTML; });
    I18N.es['meta.title'] = document.title;
    I18N.es['meta.desc'] = document.querySelector('meta[name="description"]').getAttribute('content');
  }

  function setLang(lang) {
    document.documentElement.lang = lang;
    try { localStorage.setItem('resume-lang', lang); } catch (e) {}
    els().forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
    });
    // Apps con idioma nativo (ShineBright, La Cocina): sus capturas cambian con la página.
    document.querySelectorAll('img[data-lang-src]').forEach(im => {
      im.src = im.getAttribute('data-lang-src').replace('{lang}', lang);
    });
    document.title = I18N[lang]['meta.title'] || document.title;
    const md = document.querySelector('meta[name="description"]');
    if (md && I18N[lang]['meta.desc']) md.setAttribute('content', I18N[lang]['meta.desc']);
    document.querySelectorAll('[data-lang-btn]').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));
  }

  /* ---------- carruseles dentro de teléfonos ---------- */
  function startCarousels() {
    document.querySelectorAll('.phone__screen').forEach(screen => {
      const imgs = Array.from(screen.querySelectorAll('img'));
      imgs.forEach(img => img.addEventListener('error', () => {
        img.remove();
        const left = screen.querySelectorAll('img');
        if (left.length && !screen.querySelector('img.on')) left[0].classList.add('on');
      }));
      if (imgs.length < 2) { if (imgs[0]) imgs[0].classList.add('on'); return; }
      let i = 0; imgs[0].classList.add('on');
      const t = setInterval(() => {
        const live = Array.from(screen.querySelectorAll('img'));
        if (live.length < 2) return;
        live.forEach(im => im.classList.remove('on'));
        i = (i + 1) % live.length;
        live[i].classList.add('on');
      }, 3600);
      screen.dataset.timer = String(t);
    });
  }

  /* ---------- reveals + scrollspy ---------- */
  function initObservers() {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach(el => io.observe(el));

    const dots = document.querySelectorAll('.dots a');
    if (!dots.length) return;
    const spy = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      dots.forEach(d => d.classList.toggle('active',
        d.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-40% 0px -50% 0px' });
    document.querySelectorAll('[data-spy]').forEach(s => spy.observe(s));
  }

  document.addEventListener('DOMContentLoaded', () => {
    captureSpanish();
    let saved = 'es';
    try { saved = localStorage.getItem('resume-lang') || 'es'; } catch (e) {}
    if (saved !== 'es' && saved !== 'en') saved = 'es';
    setLang(saved);
    document.querySelectorAll('[data-lang-btn]').forEach(b =>
      b.addEventListener('click', () => setLang(b.dataset.langBtn)));
    startCarousels();
    initObservers();
  });
})();
