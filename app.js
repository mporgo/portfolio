/* ============================================================
   PORTFOLIO — MOUSSA PORGO  |  app.js
   ============================================================ */

'use strict';

/* ── État global ────────────────────────────────────────── */
let currentLang      = 'fr';
let currentFilter    = 'all';
let currentProjectId = null;
let galleryIndex     = 0;

/* ── Données des projets ────────────────────────────────── */
/*
   Images : placeholders picsum.photos (remplace par tes vraies captures)
   Format : https://picsum.photos/seed/{seed}/800/450
*/
const PROJECTS = [
  {
    id: 'rh',
    title: {
      fr: 'Application de Gestion des Ressources Humaines',
      en: 'Human Resources Management Application'
    },
    subtitle: {
      fr: 'Gestion complète du personnel',
      en: 'Complete staff management'
    },
    description: {
      fr: 'Application web complète de gestion des ressources humaines permettant la gestion des employés, des contrats, des congés, des paies et des évaluations de performance. Développée avec Laravel et Vue.js pour une expérience moderne et réactive.',
      en: 'Complete web application for human resources management covering employees, contracts, leaves, payroll and performance reviews. Built with Laravel and Vue.js for a modern reactive experience.'
    },
    tech: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Tailwind CSS'],
    categories: ['gestion', 'web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Gestion des employés et contrats', 'Suivi des présences et congés', 'Calcul et gestion des paies', 'Évaluations de performance', 'Tableau de bord analytique', 'Gestion des documents RH'],
      en: ['Employee & contract management', 'Attendance and leave tracking', 'Payroll calculation & management', 'Performance evaluations', 'Analytics dashboard', 'HR document management']
    },
    images: [
      'https://picsum.photos/seed/rh-dashboard/800/450',
      'https://picsum.photos/seed/rh-employes/800/450',
      'https://picsum.photos/seed/rh-paie/800/450',
      'https://picsum.photos/seed/rh-conges/800/450',
      'https://picsum.photos/seed/rh-perf/800/450',
      'https://picsum.photos/seed/rh-docs/800/450'
    ],
    gradient: 'linear-gradient(135deg, #1a3a8f, #2563eb)'
  },
  {
    id: 'spa',
    title: {
      fr: 'Site Web Vitrine Spa',
      en: 'Spa Showcase Website'
    },
    subtitle: {
      fr: 'Site vitrine professionnel',
      en: 'Professional showcase website'
    },
    description: {
      fr: 'Site web vitrine moderne pour un spa bien-être. Design élégant et responsive, avec présentation des services, galerie photos et informations de contact. Développé en HTML, CSS et JavaScript purs, accessible en ligne.',
      en: 'Modern showcase website for a wellness spa. Elegant and responsive design featuring services presentation, photo gallery and contact information. Built with pure HTML, CSS and JavaScript, available online.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    categories: ['web'],
    online: true,
    url: 'https://mporgo.github.io/spa',
    github: 'https://github.com/mporgo/spa',
    features: {
      fr: ['Design élégant et animé', 'Galerie photos responsive', 'Présentation des prestations', 'Section tarifs', 'Formulaire de contact', 'Optimisé mobile / SEO'],
      en: ['Elegant animated design', 'Responsive photo gallery', 'Services presentation', 'Pricing section', 'Contact form', 'Mobile & SEO optimized']
    },
    images: [
      'https://picsum.photos/seed/spa-accueil/800/450',
      'https://picsum.photos/seed/spa-galerie/800/450',
      'https://picsum.photos/seed/spa-services/800/450',
      'https://picsum.photos/seed/spa-tarifs/800/450',
      'https://picsum.photos/seed/spa-contact/800/450',
      'https://picsum.photos/seed/spa-mobile/800/450'
    ],
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)'
  },
  {
    id: 'restaurant-vitrine',
    title: {
      fr: 'Site Web Vitrine Restaurant',
      en: 'Restaurant Showcase Website'
    },
    subtitle: {
      fr: 'Menu en ligne &amp; réservations',
      en: 'Online menu &amp; reservations'
    },
    description: {
      fr: 'Site web vitrine pour un restaurant, avec présentation du menu, des plats du jour, et système de réservation simplifié. Interface attrayante et responsive. Accessible en ligne sur GitHub Pages.',
      en: 'Restaurant showcase website with menu presentation, daily specials, and simplified reservation system. Attractive and responsive interface. Available online via GitHub Pages.'
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    categories: ['web'],
    online: true,
    url: 'https://mporgo.github.io/reste_menu',
    github: 'https://github.com/mporgo/reste_menu',
    features: {
      fr: ['Carte et menu interactif', 'Galerie des plats', 'Plats du jour mis en avant', 'Réservation simplifiée', 'Section À propos', 'Responsive & performant'],
      en: ['Interactive menu & card', 'Dishes gallery', 'Daily specials highlight', 'Simplified reservation', 'About section', 'Responsive & performant']
    },
    images: [
      'https://picsum.photos/seed/resto-home/800/450',
      'https://picsum.photos/seed/resto-menu/800/450',
      'https://picsum.photos/seed/resto-plats/800/450',
      'https://picsum.photos/seed/resto-galerie/800/450',
      'https://picsum.photos/seed/resto-reservation/800/450',
      'https://picsum.photos/seed/resto-mobile/800/450'
    ],
    gradient: 'linear-gradient(135deg, #d97706, #f59e0b)'
  },
  {
    id: 'pme',
    title: {
      fr: 'Site Web PME',
      en: 'SME Website'
    },
    subtitle: {
      fr: 'Présence digitale complète',
      en: 'Complete digital presence'
    },
    description: {
      fr: 'Site web vitrine pour une petite et moyenne entreprise, développé avec React.js. Design professionnel et moderne mettant en valeur les services, l\'équipe et les réalisations de l\'entreprise. Projet personnel en cours.',
      en: 'Showcase website for a small and medium enterprise, built with React.js. Professional and modern design showcasing the company\'s services, team, and achievements. Personal project in progress.'
    },
    tech: ['React.js', 'CSS', 'JavaScript'],
    categories: ['web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Page d\'accueil animée', 'Présentation des services', 'Section équipe', 'Portfolio de réalisations', 'Formulaire de contact React', 'Déploiement GitHub Pages prévu'],
      en: ['Animated homepage', 'Services presentation', 'Team section', 'Achievements portfolio', 'React contact form', 'GitHub Pages deployment planned']
    },
    images: [
      'https://picsum.photos/seed/pme-hero/800/450',
      'https://picsum.photos/seed/pme-services/800/450',
      'https://picsum.photos/seed/pme-equipe/800/450',
      'https://picsum.photos/seed/pme-realisations/800/450',
      'https://picsum.photos/seed/pme-contact/800/450',
      'https://picsum.photos/seed/pme-footer/800/450'
    ],
    gradient: 'linear-gradient(135deg, #0d2558, #1a3a8f)'
  },
  {
    id: 'tuteur',
    title: {
      fr: 'Application eLearning — Tuteur Intelligent',
      en: 'eLearning App — Smart Tutor'
    },
    subtitle: {
      fr: 'Plateforme d\'apprentissage en ligne',
      en: 'Online learning platform'
    },
    description: {
      fr: 'Plateforme d\'e-learning complète intégrant un tuteur intelligent. Permet la création et la consultation de cours, des évaluations interactives et un suivi personnalisé de la progression des apprenants. Stack : Laravel + React + MySQL.',
      en: 'Complete e-learning platform integrating a smart tutor. Features course creation and viewing, interactive assessments and personalized learner progress tracking. Stack: Laravel + React + MySQL.'
    },
    tech: ['Laravel', 'React.js', 'MySQL', 'REST API'],
    categories: ['education', 'web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Gestion des cours et modules', 'Quiz et évaluations interactifs', 'Suivi de progression', 'Tuteur IA intégré', 'Tableau de bord apprenant', 'Espace administrateur'],
      en: ['Course & module management', 'Interactive quizzes & assessments', 'Progress tracking', 'Integrated AI tutor', 'Learner dashboard', 'Admin panel']
    },
    images: [
      'https://picsum.photos/seed/tutor-dashboard/800/450',
      'https://picsum.photos/seed/tutor-cours/800/450',
      'https://picsum.photos/seed/tutor-quiz/800/450',
      'https://picsum.photos/seed/tutor-progress/800/450',
      'https://picsum.photos/seed/tutor-ai/800/450',
      'https://picsum.photos/seed/tutor-admin/800/450'
    ],
    gradient: 'linear-gradient(135deg, #059669, #10b981)'
  },
  {
    id: 'pharmacie',
    title: {
      fr: 'Application de Gestion de Pharmacie',
      en: 'Pharmacy Management Application'
    },
    subtitle: {
      fr: 'Stocks, ventes &amp; ordonnances',
      en: 'Stock, sales &amp; prescriptions'
    },
    description: {
      fr: 'Application web de gestion complète pour officines pharmaceutiques. Gestion des stocks de médicaments, suivi des ventes, alertes de péremption, gestion des ordonnances et rapports analytiques. Développée avec Laravel et Vue.js.',
      en: 'Complete web management application for pharmacies. Medicine stock management, sales tracking, expiry alerts, prescription management and analytical reports. Built with Laravel and Vue.js.'
    },
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    categories: ['gestion', 'web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Gestion des stocks médicaments', 'Suivi des ventes et caisse', 'Alertes péremption et stock bas', 'Gestion des ordonnances', 'Rapports et statistiques', 'Interface de caisse rapide'],
      en: ['Medicine stock management', 'Sales & cash tracking', 'Expiry & low stock alerts', 'Prescription management', 'Reports & statistics', 'Quick checkout interface']
    },
    images: [
      'https://picsum.photos/seed/pharma-dash/800/450',
      'https://picsum.photos/seed/pharma-stock/800/450',
      'https://picsum.photos/seed/pharma-ventes/800/450',
      'https://picsum.photos/seed/pharma-ordo/800/450',
      'https://picsum.photos/seed/pharma-alerts/800/450',
      'https://picsum.photos/seed/pharma-rapports/800/450'
    ],
    gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)'
  },
  {
    id: 'restaurant-app',
    title: {
      fr: 'Application de Gestion de Restaurant',
      en: 'Restaurant Management Application'
    },
    subtitle: {
      fr: 'Commandes, tables &amp; cuisine',
      en: 'Orders, tables &amp; kitchen'
    },
    description: {
      fr: 'Application de gestion complète pour restaurant : gestion des commandes en temps réel, suivi des tables, interface cuisine, gestion des stocks et rapports des ventes journalières. Stack : Laravel + Blade + Tailwind CSS + MySQL.',
      en: 'Complete restaurant management application: real-time order management, table tracking, kitchen interface, stock management and daily sales reports. Stack: Laravel + Blade + Tailwind CSS + MySQL.'
    },
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    categories: ['gestion', 'web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Gestion des commandes en temps réel', 'Plan de salle interactif', 'Interface dédiée cuisine', 'Gestion des stocks ingrédients', 'Rapports des ventes', 'Gestion du personnel'],
      en: ['Real-time order management', 'Interactive floor plan', 'Dedicated kitchen interface', 'Ingredient stock management', 'Sales reports', 'Staff management']
    },
    images: [
      'https://picsum.photos/seed/restapp-pos/800/450',
      'https://picsum.photos/seed/restapp-tables/800/450',
      'https://picsum.photos/seed/restapp-cuisine/800/450',
      'https://picsum.photos/seed/restapp-stock/800/450',
      'https://picsum.photos/seed/restapp-rapport/800/450',
      'https://picsum.photos/seed/restapp-menu/800/450'
    ],
    gradient: 'linear-gradient(135deg, #dc2626, #ef4444)'
  },
  {
    id: 'ecommerce',
    title: {
      fr: 'Application E-commerce',
      en: 'E-commerce Application'
    },
    subtitle: {
      fr: 'Boutique en ligne complète',
      en: 'Complete online store'
    },
    description: {
      fr: 'Application e-commerce complète développée avec Laravel Blade et MySQL. Permet la gestion d\'un catalogue produits, panier d\'achat, processus de commande, espace client et interface d\'administration backoffice. Projet personnel.',
      en: 'Complete e-commerce application built with Laravel Blade and MySQL. Features product catalog management, shopping cart, order process, customer area and backoffice admin interface. Personal project.'
    },
    tech: ['Laravel', 'Blade', 'MySQL', 'JavaScript', 'Bootstrap'],
    categories: ['ecommerce', 'web'],
    online: false,
    url: null,
    github: null,
    features: {
      fr: ['Catalogue produits avec filtres', 'Panier d\'achat dynamique', 'Processus de commande complet', 'Espace client et suivi commandes', 'Back-office administrateur', 'Gestion des promotions'],
      en: ['Product catalog with filters', 'Dynamic shopping cart', 'Complete order process', 'Customer area & order tracking', 'Admin back-office', 'Promotions management']
    },
    images: [
      'https://picsum.photos/seed/ecom-home/800/450',
      'https://picsum.photos/seed/ecom-catalogue/800/450',
      'https://picsum.photos/seed/ecom-produit/800/450',
      'https://picsum.photos/seed/ecom-panier/800/450',
      'https://picsum.photos/seed/ecom-commande/800/450',
      'https://picsum.photos/seed/ecom-admin/800/450'
    ],
    gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)'
  }
];

/* ── Map couleur par technologie ────────────────────────── */
const TECH_COLORS = {
  'Laravel':      'tag-red',
  'Vue.js':       'tag-green',
  'React.js':     'tag-sky',
  'React':        'tag-sky',
  'MySQL':        'tag-blue',
  'PostgreSQL':   'tag-indigo',
  'HTML':         'tag-orange',
  'CSS':          'tag-orange',
  'JavaScript':   'tag-yellow',
  'Tailwind CSS': 'tag-yellow',
  'Bootstrap':    'tag-sky',
  'Blade':        'tag-red',
  'Django':       'tag-green',
  'Flutter':      'tag-cyan',
  'Dart':         'tag-cyan',
  'Python':       'tag-blue',
  'PHP':          'tag-purple',
  'REST API':     'tag-gray',
  'Android Studio': 'tag-green',
  'WordPress':    'tag-blue',
  'Mobirise':     'tag-purple',
  'TypeScript':   'tag-blue',
  'Next.js':      'tag-gray',
  'Spring Boot':  'tag-green'
};

function techColorClass(tech) {
  return TECH_COLORS[tech] || 'tag-gray';
}

/* ── Rendu des cartes projets ───────────────────────────── */
function renderProjects(filter = 'all', search = '') {
  const grid = document.getElementById('projects-grid');
  const noResults = document.getElementById('no-results');
  grid.innerHTML = '';

  const searchLower = search.toLowerCase().trim();

  const filtered = PROJECTS.filter(p => {
    const matchFilter = filter === 'all' || p.categories.includes(filter);
    const title = (currentLang === 'fr' ? p.title.fr : p.title.en).toLowerCase();
    const desc  = (currentLang === 'fr' ? p.description.fr : p.description.en).toLowerCase();
    const techStr = p.tech.join(' ').toLowerCase();
    const matchSearch = !searchLower ||
      title.includes(searchLower) ||
      desc.includes(searchLower)  ||
      techStr.includes(searchLower);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.animationDelay = `${i * 0.07}s`;

    const titleText = currentLang === 'fr' ? p.title.fr : p.title.en;
    const descText  = currentLang === 'fr' ? p.description.fr.substring(0, 110) + '…' : p.description.en.substring(0, 110) + '…';
    const techTags  = p.tech.map(t =>
      `<span class="tag ${techColorClass(t)}">${t}</span>`
    ).join('');

    const statusText = p.online
      ? `<span style="color:#059669;">● ${currentLang === 'fr' ? 'En ligne' : 'Live'}</span>`
      : `<span style="color:var(--isg-orange-dk);">⏳ ${currentLang === 'fr' ? 'En cours / Hors ligne' : 'In progress / Offline'}</span>`;

    const liveBtnLabel = currentLang === 'fr' ? 'Voir en ligne' : 'View live';
    const detailBtnLabel = currentLang === 'fr' ? 'Voir plus' : 'View more';

    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.images[0]}" alt="${titleText}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="project-thumb-fallback" style="display:none;background:${p.gradient};">
          <svg viewBox="0 0 80 80" style="width:48px;height:48px;color:rgba(255,255,255,.5);" fill="currentColor">
            <rect x="10" y="10" width="60" height="45" rx="4"/>
            <rect x="20" y="20" width="40" height="4" rx="2" fill="white" opacity=".8"/>
            <rect x="20" y="28" width="28" height="3" rx="2" fill="white" opacity=".6"/>
            <rect x="20" y="35" width="32" height="3" rx="2" fill="white" opacity=".6"/>
          </svg>
        </div>
        <span class="project-badge">${p.categories[0].toUpperCase()}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${titleText}</h3>
        <p class="project-desc">${descText}</p>
        <div class="project-tags">${techTags}</div>
        <div style="margin-bottom:.75rem;font-size:.8rem;">${statusText}</div>
        <div class="project-actions">
          <button class="btn-see" onclick="openModal('${p.id}')">
            <i data-lucide="eye" style="width:14px;height:14px;"></i>
            ${detailBtnLabel}
          </button>
          ${p.online
            ? `<a href="${p.url}" target="_blank" class="btn-link">
                 <i data-lucide="external-link" style="width:14px;height:14px;"></i>
                 ${liveBtnLabel}
               </a>`
            : `<button class="btn-link disabled" disabled>
                 <i data-lucide="lock" style="width:14px;height:14px;"></i>
                 ${currentLang === 'fr' ? 'Non déployé' : 'Not deployed'}
               </button>`
          }
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-init icons for newly added elements
  lucide.createIcons();
  // Re-init reveal for new cards
  initReveal();
}

/* ── Filtre projets ─────────────────────────────────────── */
function filterProjects(category, btn) {
  currentFilter = category;

  // Mise à jour des boutons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const searchVal = document.getElementById('project-search').value;
  renderProjects(category, searchVal);
}

/* ── Modal ──────────────────────────────────────────────── */
function openModal(projectId) {
  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) return;

  currentProjectId = projectId;
  galleryIndex = 0;

  // Textes
  document.getElementById('modal-title').textContent =
    currentLang === 'fr' ? p.title.fr : p.title.en;
  document.getElementById('modal-description').textContent =
    currentLang === 'fr' ? p.description.fr : p.description.en;
  document.getElementById('modal-status').innerHTML = p.online
    ? `<span style="color:#059669;">● ${currentLang === 'fr' ? 'En ligne' : 'Live'} — <a href="${p.url}" target="_blank" style="color:var(--isg-blue);text-decoration:underline;">${p.url}</a></span>`
    : `<span style="color:var(--isg-orange-dk);">⏳ ${currentLang === 'fr' ? 'Projet personnel — Non déployé' : 'Personal project — Not deployed'}</span>`;

  // Tech tags
  const techDiv = document.getElementById('modal-tech');
  techDiv.innerHTML = p.tech.map(t =>
    `<span class="tag ${techColorClass(t)}">${t}</span>`
  ).join('');

  // Features
  const featuresList = document.getElementById('modal-features');
  const features = currentLang === 'fr' ? p.features.fr : p.features.en;
  featuresList.innerHTML = features.map(f => `<li>${f}</li>`).join('');

  // Boutons du bas
  const btnLive = document.getElementById('modal-btn-live');
  const btnGh   = document.getElementById('modal-btn-github');
  if (p.online && p.url) {
    btnLive.href = p.url;
    btnLive.removeAttribute('style');
  } else {
    btnLive.href = '#';
    btnLive.style.opacity = '.4';
    btnLive.style.pointerEvents = 'none';
  }
  if (p.github) {
    btnGh.href = p.github;
    btnGh.removeAttribute('style');
  } else {
    btnGh.href = '#';
    btnGh.style.opacity = '.4';
    btnGh.style.pointerEvents = 'none';
  }

  // Galerie
  buildGallery(p.images);

  // Ouvrir la modal
  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';

  lucide.createIcons();
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
  currentProjectId = null;
}

/* ── Galerie ────────────────────────────────────────────── */
function buildGallery(images) {
  const mainImg    = document.getElementById('gallery-main-img');
  const thumbsDiv  = document.getElementById('gallery-thumbs');

  galleryIndex = 0;
  mainImg.src = images[0];
  mainImg.alt = 'Screenshot 1';

  thumbsDiv.innerHTML = '';
  images.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
    div.innerHTML = `<img src="${src}" alt="Screenshot ${i + 1}" loading="lazy">`;
    div.addEventListener('click', () => setGalleryImage(images, i));
    thumbsDiv.appendChild(div);
  });
}

function setGalleryImage(images, index) {
  galleryIndex = index;
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = images[index];
    mainImg.alt = `Screenshot ${index + 1}`;
    mainImg.style.opacity = '1';
  }, 150);

  document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function galleryNavigate(dir) {
  const p = PROJECTS.find(x => x.id === currentProjectId);
  if (!p) return;
  const len = p.images.length;
  const next = (galleryIndex + dir + len) % len;
  setGalleryImage(p.images, next);
}

/* ── Changement de langue ───────────────────────────────── */
function switchLanguage(lang) {
  currentLang = lang;
  document.getElementById('lang-label').textContent = lang.toUpperCase();
  document.getElementById('lang-menu').classList.add('hidden');

  // Mise à jour éléments data-fr / data-en
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.innerHTML = lang === 'fr'
      ? el.getAttribute('data-fr')
      : el.getAttribute('data-en');
  });

  // Placeholder de recherche
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.placeholder = lang === 'fr'
      ? searchInput.getAttribute('data-placeholder-fr')
      : searchInput.getAttribute('data-placeholder-en');
  }

  // Re-rendu projets
  renderProjects(currentFilter, searchInput ? searchInput.value : '');
}

/* ── Typing animation (Hero) ────────────────────────────── */
function startTyping() {
  const el = document.getElementById('hero-subtitle');
  if (!el) return;

  const texts = {
    fr: 'Ingénieur des Systèmes d\'Information en formation | Développeur Full Stack',
    en: 'Information Systems Engineering Student | Fullstack Developer'
  };

  let text = texts[currentLang];
  let i = 0;
  el.textContent = '';

  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i++];
    } else {
      clearInterval(interval);
      // Loop after pause
      setTimeout(() => {
        let j = text.length;
        const erase = setInterval(() => {
          if (j > 0) {
            el.textContent = text.substring(0, --j);
          } else {
            clearInterval(erase);
            setTimeout(startTyping, 600);
          }
        }, 30);
      }, 2500);
    }
  }, 45);
}

/* ── Menu mobile ────────────────────────────────────────── */
function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Fermer au clic sur un lien
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

/* ── Langue switcher toggle ─────────────────────────────── */
function initLangSwitcher() {
  const btn  = document.getElementById('lang-btn');
  const menu = document.getElementById('lang-menu');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });
}

/* ── Nav active au scroll ───────────────────────────────── */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) {
        current = s.getAttribute('id');
      }
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ── Scroll Reveal ──────────────────────────────────────── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.observed)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => {
    el.classList.add('observed');
    observer.observe(el);
  });
}

/* ── Recherche projets ──────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('project-search');
  if (!input) return;
  input.addEventListener('input', e => {
    renderProjects(currentFilter, e.target.value);
  });
}

/* ── Modal events ───────────────────────────────────────── */
function initModal() {
  const modal   = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');

  closeBtn.addEventListener('click', closeModal);

  // Clic en dehors de la modal-box
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Touche Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  prevBtn.addEventListener('click', () => galleryNavigate(-1));
  nextBtn.addEventListener('click', () => galleryNavigate(1));
}

/* ── Navbar shadow au scroll ────────────────────────────── */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 4px 24px rgba(8,24,64,.4)'
      : 'none';
  }, { passive: true });
}

/* ── Smooth scroll des ancres ───────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Initialisation ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Init Lucide icons
  lucide.createIcons();

  // Composants
  initMobileMenu();
  initLangSwitcher();
  initNavHighlight();
  initReveal();
  initSearch();
  initModal();
  initNavbarScroll();
  initSmoothScroll();

  // Projets initiaux
  renderProjects('all', '');

  // Typing animation (délai pour que la page charge)
  setTimeout(startTyping, 800);
});