/* Load this file AFTER app.js. It changes only #project/beauty-device.
   Edit STUDY below to revise the content. Other portfolio data is untouched. */
(() => {
  'use strict';
  if (window.BeautyDevicePage) return;
  const scriptURL = document.currentScript?.src || new URL('beauty-device.js', document.baseURI).href;
  const STUDY = {
  "id": "beauty-device",
  "title": "AI-Powered Home Beauty Device",
  "period": "Spring 2026",
  "role": "Team Leader / Co-CEO · Team Quicksilver",
  "award": "Porcelain · Interdisciplinary Capstone Design, Seoul National University",
  "tagline": "A modular home-care device concept combining suction-response sensing, physics-informed mapping, and personalized output recommendations.",
  "sections": [
    {
      "id": "bd-overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Porcelain is a capstone project by Team Quicksilver exploring how a home-care device could adapt to different body regions and user characteristics. We developed a system concept that combines interchangeable tips, suction-response measurements, and a recommendation interface for radio-frequency (RF) and high-voltage-pulse (HVP) operation."
        },
        {
          "type": "paragraph",
          "text": "The project progressed from user-needs studies and product planning to prototype development, CAD-based tip design, response measurements, and regime-map visualizations. The final presentation documents a working mock-up and a proposed measurement-to-recommendation workflow. Clinical efficacy testing remained a later milestone."
        },
        {
          "type": "video",
          "src": "porcelain-concept-film.mp4",
          "poster": "porcelain-concept-film.jpg",
          "label": "Porcelain product concept film",
          "caption": "Product concept film from the final presentation, including design visualizations, intended operating mechanisms, and a prototype-interface demonstration. The mechanism animations illustrate design intent rather than measured biological effects.",
          "autoplay": true
        }
      ]
    },
    {
      "id": "bd-system",
      "heading": "System Architecture and Prototype",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The architecture links a configurable contact interface to a measurement and control workflow: identify the tip, apply suction, record tissue deformation, map the measured response, and recommend an output stage. Different tips are intended to accommodate the face, arm, and abdomen."
        },
        {
          "type": "table",
          "caption": "System roles described across the third and final presentations.",
          "headers": [
            "Subsystem",
            "Engineering role",
            "Evidence in the materials"
          ],
          "rows": [
            [
              "Interchangeable tip",
              "Adapt contact area, curvature, and electrode geometry",
              "CAD designs and attachment-interface visualization"
            ],
            [
              "Suction and sensing",
              "Induce deformation and record its time response",
              "Measurement demonstration and response plots"
            ],
            [
              "Mapping and recommendation",
              "Relate measured features to a proposed output stage",
              "Regime maps and a model-interface screenshot"
            ],
            [
              "RF / HVP actuation",
              "Provide the proposed energy-delivery functions",
              "System concept and mock-up; no independent biological-efficacy result"
            ]
          ]
        },
        {
          "type": "figure",
          "src": "prototype-development.png",
          "alt": "A montage of prototype parts, electronics, test configurations, a device rendering, and internal wiring.",
          "caption": "Prototype-development montage from the third presentation. It combines fabrication and testing photographs with the intended device appearance."
        }
      ]
    },
    {
      "id": "bd-sensing",
      "heading": "Suction Response and Physical Modeling",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Measuring Deformation",
          "text": "The measurement concept applies suction and records the protrusion height as a function of time, h(t). The response diagram highlights the maximum displacement, the initial rise rate, and a characteristic response time as features for further analysis."
        },
        {
          "type": "figure",
          "src": "suction-response-concept.png",
          "alt": "Illustration of a suction chamber lifting a layered tissue model and an example time-dependent deformation curve.",
          "caption": "Measurement concept and example response features from the third presentation."
        },
        {
          "type": "video",
          "src": "suction-measurement-demo.mp4",
          "poster": "suction-measurement-demo.jpg",
          "label": "Suction-response measurement prototype",
          "caption": "Suction-response prototype on an arm. This demonstration shows the sensing stage that supplies deformation-response information to the proposed mapping workflow.",
          "autoplay": false
        },
        {
          "type": "subsection",
          "heading": "From Response Curves to a Regime Map",
          "text": "The third presentation shows measured response traces with fitted curves. The intended workflow is to characterize the deformation response, calibrate a physics-informed relationship, and use the resulting features in a recommendation model."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "response-fitting-1.png",
              "alt": "Multiple deformation-response traces with fitted curves over a five-second interval.",
              "label": "Response examples"
            },
            {
              "src": "response-fitting-2.png",
              "alt": "Additional deformation-response traces and fitted curves.",
              "label": "Additional fits"
            }
          ],
          "caption": "Response plots reproduced from the third presentation. The rising response and fitted curves illustrate the features used in the proposed characterization workflow."
        }
      ]
    },
    {
      "id": "bd-mapping",
      "heading": "Regime Mapping and Recommendation",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The final presentation reports a 900-sample dataset spanning ages 20–60 and three body regions: face, arm, and abdomen. Its model-interface screenshot describes the records as 100 subjects × 3 sites × 3 repeats. This describes the dataset organization reported in the presentation."
        },
        {
          "type": "figure",
          "src": "viscoelastic-regime-map.png",
          "alt": "A displayed regime map of loss tangent versus subcutaneous-layer thickness, with markers for face, arm, and abdomen and colors representing age.",
          "caption": "Regime-map visualization from the final presentation, relating viscoelasticity and the layer-thickness variable across the three illustrated body regions."
        },
        {
          "type": "figure",
          "src": "body-site-regime-maps.png",
          "alt": "Three body-region regime maps showing groups of samples across mapped regions.",
          "caption": "Body-region maps from the final presentation, illustrating how the mapping could support differentiated recommendations."
        },
        {
          "type": "subsection",
          "heading": "Recommendation Interface",
          "text": "The final presentation illustrates a two-input multilayer perceptron with hidden layers of 32 and 32 units and five output stages. The displayed inputs are loss tangent and layer thickness. This component represents the recommendation stage downstream of the proposed sensing and characterization workflow."
        },
        {
          "type": "table",
          "caption": "Configuration depicted in the final presentation’s model-interface screenshot.",
          "headers": [
            "Item",
            "Reported configuration"
          ],
          "rows": [
            [
              "Inputs",
              "Loss tangent and layer thickness"
            ],
            [
              "Network",
              "2 → 32 → 32 → 5 MLP"
            ],
            [
              "Parameters",
              "1,317"
            ],
            [
              "Output",
              "One of five proposed RF/HVP stages"
            ],
            [
              "Validation scope",
              "No underlying dataset, split protocol, or independent test set supplied"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The development objective is to connect tissue-response characterization to a consistent stage-recommendation interface. Independent thickness-estimation and recommendation validation are separate next steps."
        }
      ]
    },
    {
      "id": "bd-tips",
      "heading": "Interchangeable Tip Design",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The tip design evolved from two sizes in the second presentation to a three-size family in the third. The proposed large, medium, and small tips vary contact area and electrode spacing to support different body regions."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "tip-family.png",
              "alt": "Three tip designs with large, medium, and small contact areas and different electrode spacing.",
              "label": "Tip family"
            },
            {
              "src": "tip-cad.png",
              "alt": "CAD rendering of a rectangular suction tip with internal electrode features.",
              "label": "Tip CAD"
            }
          ],
          "caption": "Tip-family and CAD visualizations from the third presentation, showing contact-area and electrode-layout variations."
        },
        {
          "type": "figure",
          "src": "magnetic-tip-interface.jpeg",
          "alt": "Exploded visualization of a device body and removable tip joined through magnets and pogo-pin contacts.",
          "caption": "Attachment concept in the final presentation: magnetic alignment with pogo-pin electrical contacts."
        },
        {
          "type": "paragraph",
          "text": "The proposed Tip ID step links the installed interface to its measurement and control settings. Interface validation across tip sizes is part of the next development stage."
        }
      ]
    },
    {
      "id": "bd-contributions",
      "heading": "My Contributions",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Product Planning and Project Leadership",
          "text": "I led product planning and market strategy for Team Quicksilver and coordinated the capstone development effort. I delivered the concept pitch and final presentation."
        },
        {
          "type": "subsection",
          "heading": "Prototype Development and Experiments",
          "text": "I contributed to CAD-based hardware design and repeated experiments to construct an operating regime map. The prototype, mapping results, and visualizations represent the team’s combined work."
        },
        {
          "type": "paragraph",
          "text": "The final presentation identifies Minjun Kim as the lead for mechanical design, prototype fabrication, and hardware/PCB development. The work combined product planning, mechanical design, sensing, and prototype implementation."
        }
      ]
    },
    {
      "id": "bd-next",
      "heading": "Limitations and Next Steps",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The next technical steps are to specify and validate the sensing calibration, compare inferred quantities with an independent reference, and evaluate repeatability across body regions and tip sizes. Recommendation performance needs a documented dataset, explicit labels, and a subject-independent evaluation."
        },
        {
          "type": "paragraph",
          "text": "The RF/HVP branch requires separate characterization of delivered electrical and thermal output, contact conditions, and control limits. The presentations do not provide a validated dosing protocol or clinical efficacy results. The proposed clinical study and manufacturing work should follow, rather than substitute for, those engineering evaluations."
        },
        {
          "type": "paragraph",
          "text": "Earlier decks also describe a rental-to-purchase business model and patent-development plans. These are commercialization directions separate from the prototype’s demonstrated sensing and mapping evidence."
        }
      ]
    },
    {
      "id": "bd-info",
      "heading": "Project Information",
      "blocks": [
        {
          "type": "info",
          "items": [
            ["Duration", "Spring 2026"],
            ["Type", "Team capstone project (Team Quicksilver)"],
            ["Institution", "Seoul National University"],
            ["Course", "Interdisciplinary Capstone Design"],
            ["Role", "Team Leader / Co-CEO"],
            ["Topics", "Suction-response sensing, physics-informed mapping, and personalized RF/HVP output recommendation"]
          ]
        }
      ]
    }
  ]
};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => esc(new URL('assets/beauty-device/' + name, scriptURL).href);
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const target = () => {
    const parts = window.location.hash.slice(1).split('/');
    return parts[0] === 'project' && parts[1] === STUDY.id;
  };
  const anchor = id => '#project/beauty-device/section/' + encodeURIComponent(id);
  function image(item) {
    return `<a class="bd-image-link" href="${asset(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open figure: ${esc(item.alt)}"><img src="${asset(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async"></a>`;
  }
  function video(item) {
    const auto = item.autoplay && !reduceMotion();
    return `<figure class="bd-video"><video controls muted playsinline ${auto ? 'autoplay loop' : ''} preload="${auto ? 'metadata' : 'none'}" poster="${asset(item.poster)}" aria-label="${esc(item.label)}"><source src="${asset(item.src)}" type="video/mp4">Your browser cannot play this video. <a href="${asset(item.src)}">Open MP4</a></video><figcaption>${esc(item.caption)}</figcaption></figure>`;
  }
  function block(b) {
    if (b.type === 'info') return `<ul style="margin:14px 0 22px;padding-left:18px;color:#626e78">${b.items.map(i=>`<li><strong>${esc(i[0])}:</strong> ${esc(i[1])}</li>`).join('')}</ul>`;
    if (b.type === 'paragraph') return `<p>${esc(b.text)}</p>`;
    if (b.type === 'subsection') return `<div class="bd-subsection"><h3>${esc(b.heading)}</h3><p>${esc(b.text)}</p></div>`;
    if (b.type === 'figure') return `<figure>${image(b)}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'video') return video(b);
    if (b.type === 'video-gallery') return `<div class="bd-video-group"><div class="bd-video-grid">${b.items.map(v=>`<div><h4>${esc(v.label)}</h4>${video(v)}</div>`).join('')}</div><p class="bd-caption">${esc(b.caption)}</p></div>`;
    if (b.type === 'gallery') return `<figure><div class="bd-figure-grid ${b.items.length === 3 ? 'bd-three' : ''}">${b.items.map(i=>`<div><h4>${esc(i.label)}</h4>${image(i)}</div>`).join('')}</div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'before-after') return `<figure class="bd-before-after"><h3>${esc(b.title)}</h3><div class="bd-figure-grid"><div><h4>Before</h4>${image({src:b.before,alt:b.title+' specimen before treatment'})}</div><div><h4>After</h4>${image({src:b.after,alt:b.title+' specimen after treatment'})}</div></div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'table') return `<div class="bd-table-wrap" role="region" aria-label="${esc(b.caption)}" tabindex="0"><table><caption>${esc(b.caption)}</caption><thead><tr>${b.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }
  function stylesheet() {
    if (document.getElementById('beauty-device-page-style')) return;
    const link = document.createElement('link');
    link.id = 'beauty-device-page-style';
    link.rel = 'stylesheet';
    link.href = new URL('beauty-device.css', scriptURL).href;
    document.head.appendChild(link);
  }
  function render() {
    if (!target()) return;
    const main = document.getElementById('main');
    if (!main) return;
    stylesheet();
    main.innerHTML = `<article class="beauty-device-study"><a class="bd-back" href="#projects">← Back to Projects</a><p class="bd-eyebrow">Product design · Sensing and recommendation</p><h1>${esc(STUDY.title)}</h1><p class="bd-meta">${esc(STUDY.period)}<br>${esc(STUDY.role)}</p><p class="bd-award">${esc(STUDY.award)}</p><p class="bd-intro">${esc(STUDY.tagline)}</p>${STUDY.sections.map(s=>`<section id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.blocks.map(block).join('')}</section>`).join('')}<a class="bd-back" href="#projects">← Back to Projects</a></article>`;
    const toc = document.getElementById('page-index');
    if (toc) {
      toc.innerHTML = `<strong>On this page</strong>${STUDY.sections.map(s=>`<a href="${anchor(s.id)}" data-bd-scroll="${esc(s.id)}">${esc(s.heading)}</a>`).join('')}`;
      toc.querySelectorAll('[data-bd-scroll]').forEach(a=>a.addEventListener('click',e=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.getElementById(a.dataset.bdScroll)?.scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'});
      }));
    }
    document.title = STUDY.title + ' | ' + (window.PORTFOLIO?.name || 'Sanghyun Cho');
    const parts = location.hash.slice(1).split('/');
    if (parts[2] === 'section' && parts[3]) {
      let id; try { id=decodeURIComponent(parts[3]); } catch { id=''; }
      document.getElementById(id)?.scrollIntoView({behavior:'auto',block:'start'});
    }
  }
  window.BeautyDevicePage = {render, study:STUDY};
  window.addEventListener('hashchange',render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();
