const root = document.querySelector('#site-root');

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const lines = (value = '') => escapeHtml(value).replace(/\n/g, '<br>');

function render(data) {
  const { site, hero, about, projectsSection, projects, skillsSection, skills, journeySection, journey, certificatesSection, certificates, visitorsSection, contact, footer, welcome } = data;
  document.title = site.title;
  document.querySelector('meta[name="description"]').setAttribute('content', site.description);

  root.innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="${escapeHtml(site.brandName)} home"><span>${escapeHtml(site.brandInitials)}</span> ${escapeHtml(site.brandName)}</a>
      <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span></button>
      <nav class="nav" aria-label="Primary navigation">
        ${site.nav.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}
        <a class="nav-cta" href="#contact">${escapeHtml(site.navCta)} <span>↗</span></a>
      </nav>
    </header>
    <main id="top">
      <section class="hero section-grid">
        <div class="hero-copy reveal"><p class="eyebrow"><i></i> ${escapeHtml(hero.eyebrow)}</p><h1>${escapeHtml(hero.title)}<br><em>${escapeHtml(hero.titleEmphasis)}</em></h1><p class="hero-intro">${escapeHtml(hero.intro)}</p><div class="hero-actions"><a class="button button-dark" href="#work">${escapeHtml(hero.workButton)} <span>↓</span></a><a class="text-link" href="${escapeHtml(hero.cvUrl)}" download>${escapeHtml(hero.cvLabel)} <span>↓</span></a></div></div>
        <div class="hero-aside reveal reveal-delay"><div class="portrait"><img src="${escapeHtml(hero.profileImage)}" alt="${escapeHtml(hero.profileAlt)}"><span class="portrait-label">${lines(hero.portraitLabel)}</span></div><div class="hero-note"><span>${escapeHtml(hero.noteNumber)}</span><p>${lines(hero.note)}</p></div></div>
      </section>
      <section id="about" class="about section-grid section-pad"><div class="section-label"><span>${escapeHtml(about.number)}</span><span>${escapeHtml(about.label)}</span></div><div class="about-content reveal"><h2>${escapeHtml(about.heading)}<br><em>${escapeHtml(about.headingEmphasis)}</em></h2><p class="lead">${escapeHtml(about.lead)}</p><p>${escapeHtml(about.body)}</p><div class="facts">${about.facts.map((fact) => `<div><strong>${escapeHtml(fact.value)}</strong><span>${escapeHtml(fact.label)}</span></div>`).join('')}</div></div></section>
      <section id="work" class="work section-pad"><div class="section-heading"><div class="section-label"><span>${escapeHtml(projectsSection.number)}</span><span>${escapeHtml(projectsSection.label)}</span></div><p>${escapeHtml(projectsSection.intro)}</p></div><div class="project-list">${projects.map((project, index) => `<article class="project-card${index === 0 ? ' project-feature' : ''} reveal"><div class="project-number">${escapeHtml(project.number)}</div><div class="project-main"><div class="project-top"><span class="project-type">${escapeHtml(project.type)}</span><a class="project-arrow" href="${escapeHtml(project.link)}" aria-label="Open ${escapeHtml(project.title)}">↗</a></div>${project.image ? `<img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}">` : ''}<h3>${escapeHtml(project.title)}<br><em>${escapeHtml(project.titleEmphasis)}</em></h3><p>${escapeHtml(project.description)}</p><div class="tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div></div><div class="project-stat"><strong>${escapeHtml(project.stat)}</strong><span>${lines(project.statLabel)}</span></div></article>`).join('')}</div></section>
      <section id="skills" class="skills section-grid section-pad"><div class="section-label"><span>${escapeHtml(skillsSection.number)}</span><span>${escapeHtml(skillsSection.label)}</span></div><div class="skills-content reveal"><h2>${escapeHtml(skillsSection.heading)}<br><em>${escapeHtml(skillsSection.headingEmphasis)}</em></h2><div class="skill-grid">${skills.map((skill) => `<div class="skill-item"><span>${escapeHtml(skill.number)}</span>${skill.icon ? `<img src="${escapeHtml(skill.icon)}" alt="">` : ''}<h3>${escapeHtml(skill.name)}</h3><p>${escapeHtml(skill.details)}</p></div>`).join('')}</div><div class="skill-foot"><span>${escapeHtml(skillsSection.alsoLabel)}</span><p>${escapeHtml(skillsSection.alsoText)}</p></div></div></section>
      <section id="journey" class="journey section-pad"><div class="section-heading"><div class="section-label"><span>${escapeHtml(journeySection.number)}</span><span>${escapeHtml(journeySection.label)}</span></div><p>${escapeHtml(journeySection.intro)}</p></div><div class="timeline">${journey.map((item) => `<div class="timeline-item reveal"><div class="timeline-date">${escapeHtml(item.date)}</div><div><h3>${escapeHtml(item.role)} <span>· ${escapeHtml(item.organization)}</span></h3><p>${escapeHtml(item.description)}</p></div></div>`).join('')}</div><div class="certifications"><span>Credentials</span><p>${escapeHtml(data.credentialsSummary)}</p></div></section>
      <section id="certificates" class="certificates-section section-pad"><div class="section-heading"><div class="section-label"><span>${escapeHtml(certificatesSection.number)}</span><span>${escapeHtml(certificatesSection.label)}</span></div><p>${escapeHtml(certificatesSection.intro)}</p></div><div class="certificate-grid">${certificates.map((certificate) => `<a class="certificate-card reveal" href="${escapeHtml(certificate.file)}" target="_blank" rel="noreferrer"><span class="certificate-icon">${escapeHtml(certificate.icon)}</span><div><h3>${escapeHtml(certificate.name)}</h3><p>${escapeHtml(certificate.issuer)}${certificate.date ? ` · ${escapeHtml(certificate.date)}` : ''}</p></div><span class="certificate-arrow">↗</span></a>`).join('')}</div><p class="certificate-note">${escapeHtml(certificatesSection.note)}</p></section>
      <section id="visitors" class="visitors section-pad"><div class="section-heading"><div class="section-label"><span>${escapeHtml(visitorsSection.number)}</span><span>${escapeHtml(visitorsSection.label)}</span></div><p>${escapeHtml(visitorsSection.intro)}</p></div><div class="visitor-panel reveal"><div class="visitor-total"><strong id="visit-count">0</strong><span>${escapeHtml(visitorsSection.countLabel)}</span></div><div class="visitor-list-wrap"><span class="visitor-caption">${escapeHtml(visitorsSection.caption)}</span><ul id="visitor-list"><li>${escapeHtml(visitorsSection.empty)}</li></ul></div><p class="visitor-note">${escapeHtml(visitorsSection.note)}</p></div></section>
      <section id="contact" class="contact section-pad"><div class="contact-inner reveal"><p class="eyebrow"><i></i> ${escapeHtml(contact.eyebrow)}</p><h2>${escapeHtml(contact.heading)}<br><em>${escapeHtml(contact.headingEmphasis)}</em></h2><a class="email-link" href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)} <span>↗</span></a><div class="contact-meta"><span>${escapeHtml(contact.location)}</span><div>${contact.links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join('')}</div></div></div></section>
    </main>
    <footer><span>${escapeHtml(footer.copyright)}</span><span>${escapeHtml(footer.tagline)}</span></footer>
    <div class="welcome-gate" id="welcome-gate" role="dialog" aria-modal="true" aria-labelledby="welcome-title"><div class="welcome-card"><p class="eyebrow"><i></i> ${escapeHtml(welcome.eyebrow)}</p><h2 id="welcome-title">${escapeHtml(welcome.heading)}<br><em>${escapeHtml(welcome.headingEmphasis)}</em></h2><p>${escapeHtml(welcome.description)}</p><form id="visitor-form"><label for="visitor-name">${escapeHtml(welcome.label)}</label><input id="visitor-name" name="visitorName" type="text" maxlength="40" autocomplete="name" placeholder="${escapeHtml(welcome.placeholder)}" required><button class="button button-dark" type="submit">${escapeHtml(welcome.button)} <span>↗</span></button></form></div></div>`;

  initializeInteractions();
}

function initializeInteractions() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const welcomeGate = document.querySelector('#welcome-gate');
  const visitorForm = document.querySelector('#visitor-form');
  const visitorName = document.querySelector('#visitor-name');
  const visitCount = document.querySelector('#visit-count');
  const visitorList = document.querySelector('#visitor-list');

  function renderVisitors() {
    const visitors = JSON.parse(localStorage.getItem('tayyabVisitors') || '[]');
    visitCount.textContent = visitors.length;
    visitorList.innerHTML = visitors.length ? visitors.slice(-5).reverse().map((name) => `<li>${escapeHtml(name)}</li>`).join('') : '<li>No visitors yet.</li>';
  }

  function showPortfolio() {
    welcomeGate.classList.add('hidden');
    document.body.classList.remove('gate-open');
  }

  if (localStorage.getItem('tayyabCurrentVisitor')) showPortfolio();
  else {
    document.body.classList.add('gate-open');
    visitorName.focus();
  }

  visitorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = visitorName.value.trim().replace(/[<>]/g, '');
    if (!name) return;
    const visitors = JSON.parse(localStorage.getItem('tayyabVisitors') || '[]');
    visitors.push(name);
    localStorage.setItem('tayyabVisitors', JSON.stringify(visitors.slice(-50)));
    localStorage.setItem('tayyabCurrentVisitor', name);
    renderVisitors();
    showPortfolio();
  });

  renderVisitors();
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

fetch('content/data.json')
  .then((response) => {
    if (!response.ok) throw new Error(`Unable to load content (${response.status})`);
    return response.json();
  })
  .then(render)
  .catch((error) => {
    root.innerHTML = '<p class="content-error">Portfolio content could not be loaded. Please refresh the page.</p>';
    console.error(error);
  });
