/* Load after app.js. This module changes only #project/smart-planter. */
(() => {
  'use strict';
  if (window.AloePage) return;
  const scriptURL = document.currentScript?.src || new URL('smart-planter.js', document.baseURI).href;
  const STUDY = {
  "id": "smart-planter",
  "title": "ALOE Smart Plant-Care Device",
  "period": "Sep. 2021 to Jun. 2022",
  "role": "Team Lead · 5-person team · Team ALOE",
  "badge": "CAD Design · Arduino Prototyping · Crowdfunding",
  "tagline": "Leading a five-person team across product design, Arduino prototyping, and crowdfunding for a plant-care device.",
  "sections": [
    {
      "id": "al-overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "ALOE explored a compact plant-care device that brings information about a plant’s growing environment to the pot itself. The concept combined a circular visual interface with a probe-style form that could be placed in soil or attached to the edge of a pot."
        },
        {
          "type": "paragraph",
          "text": "I led a five-person team and contributed to CAD-based product design, Arduino prototype development, and crowdfunding. My role connected the physical design and technical implementation with the work of turning the idea into a product proposal."
        },
        {
          "type": "figure",
          "src": "aloe-cad-concepts.png",
          "alt": "New CAD reconstruction showing ALOE as a soil stake and a pot-rim clip with a common circular display.",
          "caption": "Sketch-based CAD reconstruction created in 2026 for this portfolio. The geometry and dimensions are newly proposed; display readings are illustrative."
        }
      ]
    },
    {
      "id": "al-role",
      "heading": "My Role",
      "blocks": [
        {
          "type": "table",
          "caption": "Personal responsibilities within the five-person team.",
          "headers": [
            "Area",
            "My contribution"
          ],
          "rows": [
            [
              "Team leadership",
              "Led a five-person team through the project’s product-development work."
            ],
            [
              "CAD design",
              "Worked on the device’s physical design using CAD."
            ],
            [
              "Arduino prototyping",
              "Developed Arduino-based prototypes to explore the product concept."
            ],
            [
              "Crowdfunding",
              "Carried out crowdfunding as part of the project."
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "As team lead, I worked across the design, prototyping, and crowdfunding activities. This required keeping the product idea coherent while the team moved between physical form, electronics, and product communication."
        }
      ]
    },
    {
      "id": "al-design",
      "heading": "From Sketch to Product Form",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The surviving sketches show two ways to position the same circular interface. The first places the display above a soil stake. The second turns the display outward and hangs it from the pot rim, with a probe extending into the pot."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "original-sketch-stake.jpg",
              "alt": "Supplied original ALOE sketch of a circular display on a soil stake.",
              "label": "Original sketch: soil stake"
            },
            {
              "src": "original-sketch-clip.jpg",
              "alt": "Supplied original ALOE sketch of a circular display with a pot-rim clip and probe.",
              "label": "Original sketch: pot-rim clip"
            }
          ],
          "caption": "Original concept sketches supplied for the project. Their numbers and ring colors are interface illustrations."
        },
        {
          "type": "subsection",
          "heading": "Soil-Stake Variant",
          "text": "The display sits above a tapered stem. In the reconstructed design, the stem provides a mounting surface for a sensor module, while an open groove offers a route for its cable."
        },
        {
          "type": "subsection",
          "heading": "Pot-Rim Clip Variant",
          "text": "A U-shaped bracket separates the outward-facing display from the arm inside the pot. The reconstruction uses a 16 mm gap as a starting point for studying pot-rim placement."
        },
        {
          "type": "figure",
          "src": "aloe-pot-mount.png",
          "alt": "CAD placement study of the ALOE circular display clipped over the rim of a generic pot.",
          "caption": "New CAD placement study based on the second sketch. The pot is illustrative; compatibility with actual pot sizes has not been evaluated."
        }
      ]
    },
    {
      "id": "al-cad",
      "heading": "CAD Reconstruction and Packaging",
      "blocks": [
        {
          "type": "paragraph",
          "text": "I worked on CAD-based design during the original project. To explain the concept with the remaining visual material, the models below were newly reconstructed from the two sketches. They use a shared enclosure with interchangeable mounting concepts."
        },
        {
          "type": "figure",
          "src": "aloe-exploded.png",
          "alt": "Exploded CAD view of the proposed bezel, display window, display envelope, controller envelope, carrier and rear enclosure.",
          "caption": "Reconstructed enclosure and proposed electronics packaging. The controller and display are simplified size envelopes, not models of confirmed historical components."
        },
        {
          "type": "figure",
          "src": "aloe-dimensions.png",
          "alt": "Dimension drawing of a 60 mm ALOE display housing, 108 mm stake, and 16 mm clip gap.",
          "caption": "Newly proposed dimensions in millimetres. The supplied sketches do not specify dimensions. Fit and tolerances require physical evaluation."
        },
        {
          "type": "paragraph",
          "text": "The CAD supports further design review and iteration; component selection, fastening, and environmental protection remain to be resolved before fabrication."
        }
      ]
    },
    {
      "id": "al-prototype",
      "heading": "Arduino Prototype Development",
      "blocks": [
        {
          "type": "paragraph",
          "text": "I developed Arduino-based prototypes as part of the original ALOE project. Prototyping formed the technical part of my role alongside CAD design and team leadership."
        },
        {
          "type": "paragraph",
          "text": "The layout below proposes a demonstrator for explaining the concept today: sensor inputs connect to an Arduino-compatible controller, which updates a circular display. A soil-moisture module and an ambient sensor module are suggested inputs; the exact parts and display mapping are new design choices."
        },
        {
          "type": "figure",
          "src": "aloe-prototype-layout.png",
          "alt": "Proposed functional layout with soil-moisture and ambient sensor inputs, Arduino-compatible controller, circular display and external USB power.",
          "caption": "New prototype proposal, not a recovered wiring diagram. The connections indicate signal flow; they do not specify a validated pinout."
        },
        {
          "type": "paragraph",
          "text": "A practical next step would be to select the modules, verify the sensor-to-display workflow on the bench, and then check component fit in the enclosure. The sample numbers shown in the interface are visual examples, not recorded measurements."
        }
      ]
    },
    {
      "id": "al-crowdfunding",
      "heading": "Crowdfunding and Product Communication",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Alongside design and prototyping, I worked on the team’s crowdfunding effort. This extended the project from developing the device to presenting ALOE as a product and communicating the idea to a wider audience."
        },
        {
          "type": "paragraph",
          "text": "The experience brought engineering and entrepreneurship into the same project: the physical concept, prototype work, and product story had to support one another."
        }
      ]
    },
    {
      "id": "al-takeaways",
      "heading": "What I Took Away",
      "blocks": [
        {
          "type": "paragraph",
          "text": "ALOE gave me experience leading a small team while contributing directly to both product design and prototyping. Working across CAD, Arduino development, and crowdfunding helped me see how technical decisions and product communication shape one another."
        }
      ]
    },
    {
      "id": "al-materials",
      "heading": "Design Files",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The two sketches preserve the original visual concept. The CAD, rendered views, dimension drawing, and proposed prototype layout were created in 2026 to reconstruct and explain it. The project description follows my stated responsibilities in the original work."
        }
      ]
    }
  ]
};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => esc(new URL('assets/smart-planter/' + name, scriptURL).href);
  const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const isTarget = () => {
    const parts = location.hash.slice(1).split('/');
    return parts[0] === 'project' && parts[1] === STUDY.id;
  };
  const anchor = id => '#project/smart-planter/section/' + encodeURIComponent(id);
  function image(item) {
    return `<a class="al-image-link" href="${asset(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open figure: ${esc(item.alt)}"><img src="${asset(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async"></a>`;
  }
  function block(b) {
    if (b.type === 'paragraph') return `<p>${esc(b.text)}</p>`;
    if (b.type === 'subsection') return `<div><h3>${esc(b.heading)}</h3><p>${esc(b.text)}</p></div>`;
    if (b.type === 'figure') return `<figure>${image(b)}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'gallery') return `<figure><div class="al-figure-grid">${b.items.map(i=>`<div><h4>${esc(i.label)}</h4>${image(i)}</div>`).join('')}</div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'table') return `<div class="al-table-wrap" role="region" aria-label="${esc(b.caption)}" tabindex="0"><table><caption>${esc(b.caption)}</caption><thead><tr>${b.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(row=>`<tr>${row.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (b.type === 'downloads') return `<ul class="al-downloads">${b.items.map(i=>`<li><a href="${asset(i.src)}" download>${esc(i.label)}</a><span>${esc(i.detail)}</span></li>`).join('')}</ul>`;
    return '';
  }
  function stylesheet() {
    if (document.getElementById('aloe-page-style')) return;
    const link = document.createElement('link');
    link.id = 'aloe-page-style';
    link.rel = 'stylesheet';
    link.href = new URL('smart-planter.css', scriptURL).href;
    document.head.appendChild(link);
  }
  function render() {
    if (!isTarget()) return;
    const main = document.getElementById('main');
    if (!main) return;
    stylesheet();
    main.innerHTML = `<article class="smart-planter-study"><a class="al-back" href="#projects">← Back to Projects</a><p class="al-eyebrow">Embedded Systems · Product Development</p><h1>${esc(STUDY.title)}</h1><p class="al-meta">${esc(STUDY.period)}<br>${esc(STUDY.role)}</p><p class="al-award">${esc(STUDY.badge)}</p><p class="al-intro">${esc(STUDY.tagline)}</p>${STUDY.sections.map(s=>`<section id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.blocks.map(block).join('')}</section>`).join('')}<a class="al-back" href="#projects">← Back to Projects</a></article>`;
    const toc = document.getElementById('page-index');
    if (toc) {
      toc.innerHTML = `<strong>On this page</strong>${STUDY.sections.map(s=>`<a href="${anchor(s.id)}" data-al-scroll="${esc(s.id)}">${esc(s.heading)}</a>`).join('')}`;
      toc.querySelectorAll('[data-al-scroll]').forEach(a=>a.addEventListener('click',e=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.getElementById(a.dataset.alScroll)?.scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'start'});
      }));
    }
    document.title = STUDY.title + ' | ' + (window.PORTFOLIO?.name || 'Sanghyun Cho');
    const route = location.hash.slice(1).split('/');
    if (route[2] === 'section' && route[3]) {
      let id; try {id=decodeURIComponent(route[3]);} catch {id='';}
      if (STUDY.sections.some(s=>s.id===id)) document.getElementById(id)?.scrollIntoView({behavior:'auto',block:'start'});
    }
  }
  window.AloePage = {render,study:STUDY};
  window.addEventListener('hashchange',render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();
