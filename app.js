(() => {
  'use strict';
  const d = window.PORTFOLIO;
  const main = document.getElementById('main');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safe = url => {
    if (!url || /^(?:javascript|data|vbscript):/i.test(url) || /^\/\//.test(url)) return '';
    return esc(url);
  };
  const external = (url, label) => safe(url) ? `<a href="${safe(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
  const labLink = () => safe(d.labUrl) ? `<a href="${safe(d.labUrl)}" target="_blank" rel="noopener noreferrer">${esc(d.lab)}</a>` : esc(d.lab);
  const nav = [['about','About'],['research','Research'],['projects','Projects'],['publications','Publications'],['cv','CV']];
  const tags = items => `<div class="tags">${items.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>`;
  const draft = () => d.draft ? '<div class="draft-note"><span class="draft-dot"></span>Portfolio draft · Images and videos to be added.</div>' : '';
  const projectHref = p => `#project/${encodeURIComponent(p.id)}`;
  function media(p, detail = false) {
    const src = safe(p.media);
    let body;
    if (!src) body = `<div class="media-placeholder"><span class="symbol" aria-hidden="true">▷</span><b>${esc(p.mediaLabel)}</b><small>${esc(p.mediaHint)}</small></div>`;
    else if (/\.(mp4|webm|ogv)(?:\?.*)?$/i.test(p.media)) body = `<video controls muted loop playsinline preload="metadata" ${p.poster ? `poster="${safe(p.poster)}"` : ''} aria-label="${esc(p.mediaAlt)}"><source src="${src}">Your browser does not support this video.</video>`;
    else body = `<img src="${src}" alt="${esc(p.mediaAlt)}" loading="lazy">`;
    return `<div class="${detail ? 'hero-media' : 'project-media'}"><div class="media-box">${body}</div><p class="media-caption">${src ? esc(p.mediaAlt) : 'Visual material to be added.'}</p></div>`;
  }
  function actions() {
    return `<div class="page-actions"><a href="#cv">Experience &amp; CV <span aria-hidden="true">↗</span></a>${external(d.links.scholar, 'Google Scholar')}</div>`;
  }
  function renderProfile(page) {
    document.querySelectorAll('[data-name]').forEach(n => n.textContent = d.name);
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('profile').innerHTML = `${d.portrait ? `<img class="portrait" src="${safe(d.portrait)}" alt="${esc(d.name)}">` : `<div class="portrait" aria-label="${esc(d.name)} initials">${esc(d.initials)}</div>`}<h2>${esc(d.name)}</h2><p>${esc(d.role)}<br>${esc(d.university)}</p><p class="department">${esc(d.department)}</p><p class="lab">${labLink()}</p><p class="location">⌖ &nbsp;${esc(d.location)}</p><div class="contact">${d.email ? `<a href="mailto:${esc(d.email)}">Email ↗</a><button class="copy-button" type="button" id="copy-email" aria-live="polite">Copy email</button>` : ''}${external(d.links.scholar,'Google Scholar')}${external(d.links.github,'GitHub')}${external(d.links.linkedin,'LinkedIn')}${!d.email && !Object.values(d.links).some(Boolean) ? '<span class="pending">Contact details to be added</span>' : ''}</div><nav class="side-nav" aria-label="Profile navigation">${nav.map(([id,label]) => `<a href="#${id}" ${page === id ? 'class="active" aria-current="page"' : ''}>${label}</a>`).join('')}</nav>`;
    document.querySelectorAll('[data-page]').forEach(a => {
      const active = a.dataset.page === page;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    const copy = document.getElementById('copy-email');
    if (copy) copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(d.email); copy.textContent = 'Copied'; }
      catch { copy.textContent = d.email; }
    });
  }
  function projectCard(p, i) {
    return `<article class="project" id="${esc(p.id)}">${media(p)}<div class="project-copy"><div class="number">${String(i+1).padStart(2,'0')}${p.badge ? `<span class="project-badge">${esc(p.badge)}</span>` : ''}</div><p class="category">${esc(p.category)}</p><h2><a href="${projectHref(p)}">${esc(p.title)}</a></h2><p class="summary">${esc(p.summary)}</p><p class="contribution"><strong>My work.</strong> ${p.contribution ? esc(p.contribution) : '<span class="pending">Add your specific contribution.</span>'}</p>${p.role ? `<p class="project-role">${esc(p.role)}</p>` : ''}${p.period ? `<p class="period">Project period: ${esc(p.period)}</p>` : ''}<a class="explore" href="${projectHref(p)}">Explore project <span aria-hidden="true">→</span></a></div></article>`;
  }
  function renderCollection(kind) {
    const isResearch = kind === 'research';
    const items = d.projects.filter(p => p.kind === kind);
    main.innerHTML = `<div class="eyebrow">${items.length} ${isResearch ? 'research areas' : 'engineering projects'}</div><h1>${isResearch ? 'Research' : 'Projects'}</h1><p class="intro">${isResearch ? 'Experiments, physical modeling, and collective dynamics.' : 'From mechanical concepts to functional prototypes.'}</p>${actions()}<div class="projects">${items.map(projectCard).join('')}</div>`;
    index(items.map(p => [p.id,p.title]), true);
  }
  function renderProjects() { renderCollection('project'); }
  function renderResearch() { renderCollection('research'); }
  function index(items, anchors = false) {
    const el = document.getElementById('page-index');
    const base = location.hash.startsWith('#project/') ? location.hash.split('/').slice(0,2).join('/') : '#'+(location.hash.slice(1).split('/')[0] || 'about');
    el.innerHTML = items.length ? `<strong>On this page</strong>${items.map(([id,label]) => `<a ${anchors ? `data-scroll="${esc(id)}"` : ''} href="${anchors ? `${base}${base.startsWith('#project/') ? '/section/' : '/'}${encodeURIComponent(id)}` : `#${id}`}">${esc(label)}</a>`).join('')}` : '';
    el.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', e => {
      if(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      e.preventDefault(); document.getElementById(a.dataset.scroll)?.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
    }));
  }
  function education() {
    return d.education.map(e => `<div class="education"><div><strong>${esc(e.degree)}</strong><p>${esc(e.institution)}</p>${e.notes.map(n=>`<p>${esc(n)}</p>`).join('')}</div><span class="record-period">${esc(e.period)}</span></div>`).join('');
  }
  function records(items) {
    return `<div class="records">${items.map(r => `<div class="record"><div><strong>${esc(r.title)}</strong><p>${esc(r.organization)}</p>${r.description ? `<p>${esc(r.description)}</p>` : ''}</div><span class="record-period">${esc(r.period)}</span></div>`).join('')}</div>`;
  }
  function renderAbout() {
    const featured = d.featured.map(id=>d.projects.find(p=>p.id===id)).filter(Boolean);
    main.innerHTML = `<div class="eyebrow">Mechanical engineering · Seoul National University</div><h1>${esc(d.name)}</h1><p class="intro">${esc(d.tagline)}</p><p class="bio">${esc(d.bio)}</p>${actions()}${draft()}<section id="selected-work"><div class="section-title-row"><h2 class="section-heading">Selected work</h2><a href="#research" class="text-link">All research →</a></div><div class="projects featured-projects">${featured.map(projectCard).join('')}</div></section><section id="education"><h2 class="section-heading">Education</h2>${education()}</section><section id="interests"><h2 class="section-heading">Research interests</h2>${tags(d.interests)}</section><section id="contact"><h2 class="section-heading">Contact</h2><p class="prose"><a href="mailto:${esc(d.email)}">${esc(d.email)}</a><br>${labLink()}<br>${esc(d.university)} · ${esc(d.location)}</p></section>`;
    index([['selected-work','Selected work'],['education','Education'],['interests','Research interests'],['contact','Contact']],true);
  }
  function publicationList(items) {
    return `<ol class="pub-list">${items.map(p => `<li>${safe(p.url) ? `<a href="${safe(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)} ↗</a>` : `<strong>${esc(p.title)}</strong>`}<br>${esc(p.authors).replace('Sanghyun Cho','<strong>Sanghyun Cho</strong>')}<br><em>${esc(p.venue).replace(/\(([^)]*)\)/g,'</em>($1)<em>')}</em>${p.year ? `, ${esc(p.year)}` : ''}${p.status ? `<br><span class="publication-status">${esc(p.status)}</span>` : ''}</li>`).join('')}</ol>`;
  }
  function renderPublications() {
    main.innerHTML = `<div class="eyebrow">Research output</div><h1>Publications</h1><p class="intro">Manuscripts and conference contributions.</p><section id="manuscripts"><h2 class="section-heading">Manuscripts</h2>${publicationList(d.publications.filter(p=>p.type==='manuscript'))}</section><section id="conferences"><h2 class="section-heading">Conference presentations</h2>${publicationList(d.publications.filter(p=>p.type==='conference'))}</section>`;
    index([['manuscripts','Manuscripts'],['conferences','Conferences']],true);
  }
  function renderCV() {
    main.innerHTML = `<div class="eyebrow">Experience &amp; education</div><h1>Curriculum Vitae</h1><p class="intro">Research, engineering, and leadership experience.</p><div class="page-actions"><a href="${safe(d.cv)}" target="_blank" rel="noopener noreferrer">Open CV PDF ↗</a><a href="${safe(d.cv)}" download>Download CV ↓</a></div><section id="cv-education"><h2 class="section-heading">Education</h2>${education()}</section><section id="cv-experience"><h2 class="section-heading">Research experience</h2>${records([{title:'Graduate Researcher',organization:d.lab+', '+d.university,period:'Mar. 2025 – Present',description:'Fluid–structure interaction and nonlinear dynamics; collective robotics and reconfigurable systems.'}])}<a href="#research" class="text-link">Explore research →</a></section><section id="cv-skills"><h2 class="section-heading">Research methods &amp; skills</h2><div class="skills-grid">${d.skills.map(g=>`<div class="skill-group"><h3>${esc(g.name)}</h3>${tags(g.items)}</div>`).join('')}</div></section><section id="cv-awards"><h2 class="section-heading">Honors &amp; awards</h2>${records(d.awards)}</section><section id="cv-leadership"><h2 class="section-heading">Leadership &amp; service</h2>${records(d.leadership)}</section><section id="cv-certifications"><h2 class="section-heading">Certifications</h2>${records(d.certifications)}</section><section id="cv-military"><h2 class="section-heading">Military service</h2>${records([d.military])}</section>`;
    index([['cv-education','Education'],['cv-experience','Research experience'],['cv-skills','Methods & skills'],['cv-awards','Honors & awards'],['cv-leadership','Leadership & service'],['cv-certifications','Certifications'],['cv-military','Military service']],true);
  }
  function sectionMedia(v) {
    if (Array.isArray(v.gallery) && v.gallery.length) return `<div class="section-gallery">${v.gallery.map(g => sectionMedia(Object.assign({heading: v.heading}, g))).join('')}</div>`;
    const src = safe(v.media);
    if (!src) return v.text ? `<figure class="section-media section-text"><p>${esc(v.text)}</p></figure>` : '';
    const alt = esc(v.mediaAlt || v.heading);
    const body = /\.(mp4|webm|ogv|mov)(?:\?.*)?$/i.test(v.media)
      ? `<video autoplay muted loop playsinline preload="auto" ${v.poster ? `poster="${safe(v.poster)}"` : ''} aria-label="${alt}"><source src="${src}">Your browser does not support this video.</video>`
      : `<img src="${src}" alt="${alt}" loading="lazy">`;
    return `<figure class="section-media">${body}${v.caption ? `<figcaption>${esc(v.caption)}</figcaption>` : ''}</figure>`;
  }
  function sectionGroups(v) {
    if (!Array.isArray(v.groups) || !v.groups.length) return "";
    return v.groups.map(g => `<h3 class="sec-group">${esc(g.label)}</h3><ul class="sec-pubs">${(g.items || []).map(it => `<li>${it.id ? `<span class="pub-id">[${esc(it.id)}]</span> ` : ""}${esc(it.cite)}${it.venue ? `<br><span class="pub-venue">${esc(it.venue)}</span>` : ""}</li>`).join("")}</ul>`).join("");
  }
  function sectionLink(v) {
    if (!v.link || !v.link.href) return "";
    return `<p class="sec-link"><a href="${safe(v.link.href)}">${esc(v.link.label || v.link.href)} <span aria-hidden="true">→</span></a></p>`;
  }
  function sectionBlock(v, i) {
    return `<section class="detail-block" id="detail-${i}"><h2>${esc(v.heading)}</h2>${v.body ? `<p>${esc(v.body)}</p>` : ""}${sectionGroups(v)}${sectionMedia(v)}${sectionLink(v)}</section>`;
  }
  function renderProject(id) {
    const p = d.projects.find(x => x.id === id);
    if (!p) { main.innerHTML = '<h1>Project not found</h1><a href="#research">Back to research →</a>'; index([]); return; }
    const back = p.kind === 'research' ? 'research' : 'projects';
    const hasRoles = Array.isArray(p.roles) && p.roles.length;
    const sections = hasRoles ? p.sections : [...p.sections, {heading:'My contribution',body:p.contribution}];
    const stats = Array.isArray(p.stats) ? p.stats : [];
    const catTags = String(p.category || '').split('·').map(t => t.trim()).filter(Boolean);
    const first = p.links && p.links[0];
    const primary = first && safe(first.url)
      ? `<a class="btn-primary" href="${safe(first.url)}" target="_blank" rel="noopener noreferrer">${esc(first.label)} ↗</a>`
      : (p.id === 'hanging-ribbon' ? '<a class="btn-primary" href="#publications">Publications →</a>' : '');
    const status = [p.badge, p.role].filter(Boolean).map(esc).join(' · ');
    const roleSection = hasRoles ? `<section class="detail-block" id="detail-role"><h2>My role</h2><div class="role-grid">${p.roles.map((r, i) => `<div class="role-card"><span class="role-num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(r.title)}</h3><p>${esc(r.body)}</p></div>`).join('')}</div></section>` : '';
    const statSection = stats.length ? `<section class="detail-block" id="detail-results"><h2>At a glance</h2><div class="stat-grid">${stats.map(s => `<div class="stat-card"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div></section>` : '';
    const head = sections.slice(0, 1).map((v, i) => sectionBlock(v, i)).join('');
    const rest = sections.slice(1).map((v, i) => sectionBlock(v, i + 1)).join('');
    main.innerHTML = `<article class="detail"><a class="back" href="#${back}">← Back to ${back}</a><header class="detail-head">${catTags.length ? `<div class="detail-tags">${catTags.map(esc).join(' · ')}</div>` : ''}<h1>${esc(p.title)}</h1><p class="intro">${esc(p.summary)}</p>${status ? `<p class="detail-status">${status}</p>` : ''}${p.period ? `<p class="detail-period"><b>Project period:</b> ${esc(p.period)}</p>` : ''}<div class="detail-buttons">${primary}${hasRoles ? '<a class="btn-link" data-scroll="detail-role" href="#detail-role">My contributions ↓</a>' : ''}<a class="btn-link" data-scroll="detail-1" href="#detail-1">Details ↓</a></div></header>${media(p,true)}${head}${roleSection}${statSection}${rest}${p.figures.map(f => `<figure><img src="${safe(f.src)}" alt="${esc(f.alt)}" loading="lazy"><figcaption>${esc(f.caption)}</figcaption></figure>`).join('')}${p.links.length ? `<div class="page-actions">${p.links.map(l=>external(l.url,l.label)).join('')}</div>` : ''}${p.id==='hanging-ribbon' ? '<div class="page-actions"><a href="#publications">Related manuscript &amp; presentations →</a><a href="#project/flutter-ironing">Engineering application: Flutter ironing →</a></div>' : ''}</article>`;
    main.querySelectorAll('.detail-buttons [data-scroll]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(a.dataset.scroll)?.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
    }));
    const idx = [];
    if (sections[0]) idx.push(['detail-0', sections[0].heading]);
    if (hasRoles) idx.push(['detail-role', 'My role']);
    if (stats.length) idx.push(['detail-results', 'At a glance']);
    sections.slice(1).forEach((v, i) => idx.push(['detail-' + (i + 1), v.heading]));
    index(idx, true);
  }
  function decode(value) { try { return decodeURIComponent(value); } catch { return ''; } }
  function route() {
    const hash = location.hash.slice(1) || 'about';
    const [page, ...parts] = hash.split('/');
    const key = ['research','projects','project','about','publications','cv'].includes(page) ? page : 'about';
    const p = key==='project' ? d.projects.find(x=>x.id===decode(parts[0] || '')) : null;
    renderProfile(key === 'project' ? (p?.kind==='research' ? 'research' : 'projects') : key);
    if (key === 'project') renderProject(decode(parts[0] || ''));
    else ({research:renderResearch,projects:renderProjects,about:renderAbout,publications:renderPublications,cv:renderCV})[key]();
    document.title = `${key === 'project' ? (p?.title || 'Project') : ({research:'Research',projects:'Projects',about:'About',publications:'Publications',cv:'CV'})[key]} | ${d.name}`;
    window.scrollTo({top:0,behavior:'instant'});
    document.getElementById('topnav').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    if (key === 'project' && parts[1]==='section' && parts[2]) document.getElementById(decode(parts[2]))?.scrollIntoView();
    if (key !== 'project' && parts[0]) document.getElementById(decode(parts[0]))?.scrollIntoView();
  }
  document.querySelector('.menu-toggle').addEventListener('click', e => {
    const open = document.getElementById('topnav').classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded', String(open));
  });
  window.addEventListener('hashchange', () => { route(); main.focus({preventScroll:true}); });
  route();
})();
