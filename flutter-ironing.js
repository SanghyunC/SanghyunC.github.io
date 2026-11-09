/* Load this file AFTER app.js. It changes only #project/flutter-ironing.
   Edit STUDY below to revise the content. Other portfolio data is untouched. */
(() => {
  'use strict';
  if (window.FlutterIroningPage) return;
  const scriptURL = document.currentScript?.src || new URL('flutter-ironing.js', document.baseURI).href;
  const STUDY = {
  "id": "flutter-ironing",
  "title": "Flutter-Based Ironing Technology",
  "period": "Jul. – Dec. 2025",
  "role": "Team Leader · Team Ironing Man",
  "award": "Bronze Prize · 4th KSME–LG Electronics Future Home Tech Challenge",
  "tagline": "Using flow-induced fabric motion to generate distributed tension and remove wrinkles.",
  "sections": [
    {
      "id": "fi-overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We developed a flutter-based ironing concept for the 4th KSME–LG Electronics Future Home Tech Challenge. The idea grew from a simple observation: a fabric that repeatedly flutters in airflow can lose creases formed during storage. We explored how aerodynamic loading could turn this motion into a practical wrinkle-removal mechanism."
        },
        {
          "type": "paragraph",
          "text": "The project combined wind-tunnel experiments, high-speed imaging, physical modeling, and fabric-treatment tests. Our team demonstrated wrinkle reduction in cotton, wool, polyester, and denim specimens, then compared a flutter-treated cotton specimen with a specimen treated in a commercial garment-care appliance."
        },
        {
          "type": "video",
          "src": "airflow-demonstration.mp4",
          "poster": "airflow-demonstration.jpg",
          "label": "Airflow-driven fabric demonstration",
          "caption": "",
          "autoplay": true
        }
      ]
    },
    {
      "id": "fi-principle",
      "heading": "Physical Principle and Modeling",
      "blocks": [
        {
          "type": "subsection",
          "heading": "From Aerodynamic Motion to Fabric Tension",
          "text": "Flow-induced deformation creates transient tensile loading along a flexible fabric. We focused on the irregular flutter regime, termed “chaotic flutter” in the competition materials, as a way to generate large, changing tension across the specimen."
        },
        {
          "type": "paragraph",
          "text": "The modeling framework includes aerodynamic inertia, damping, stiffness, and the tension gradient. The project materials report transient tension per unit width on the order of 100 N/m in the irregular regime. This is a model-based estimate, not a direct tension-sensor measurement, and should not be interpreted as a constant load over the entire fabric."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "regular-tension-model.png",
              "alt": "Model visualization of regular flutter with a color scale extending to 5 N/m.",
              "label": "Regular flutter"
            },
            {
              "src": "irregular-tension-model.png",
              "alt": "Model visualization of irregular flutter with a color scale extending to 100 N/m.",
              "label": "Irregular flutter"
            }
          ],
          "caption": "Tension visualizations reproduced from the poster. The color scales differ between panels. They illustrate the modeled change in loading across the two regimes."
        },
        {
          "type": "paragraph",
          "text": "The mechanism connects the shape dynamics to the application: changing aerodynamic tension acts on the creased fabric, allowing the specimen to relax toward a smoother configuration. The experiments below test the resulting wrinkle reduction."
        }
      ]
    },
    {
      "id": "fi-methods",
      "heading": "Experimental Setup and Motion Analysis",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Vertical Wind Tunnel",
          "text": "Fabric specimens were suspended in a vertical wind tunnel while airflow speed was varied. High-speed imaging captured their motion. Fluorescent marking and controlled illumination made the fabric profile visible for extraction and analysis."
        },
        {
          "type": "video-gallery",
          "items": [
            {
              "type": "video",
              "src": "high-speed-profile.mp4",
              "poster": "high-speed-profile.jpg",
              "label": "High-speed recording",
              "caption": "Original fluorescent-profile recording embedded in the poster.",
              "autoplay": true
            },
            {
              "type": "video",
              "src": "extracted-profile.mp4",
              "poster": "extracted-profile.jpg",
              "label": "Extracted profile",
              "caption": "Corresponding extracted contour embedded in the poster.",
              "autoplay": true
            }
          ],
          "caption": "Recording and extracted contour. The poster labels this visualization as 0.1× playback. The supplied frame timing is retained."
        },
        {
          "type": "subsection",
          "heading": "Motion Regimes",
          "text": "The proposal distinguishes stable, regular, and irregular motion as flow conditions change. The two clips below illustrate the regular and irregular regimes used in the project’s discussion of aerodynamic tension."
        },
        {
          "type": "video-gallery",
          "items": [
            {
              "type": "video",
              "src": "regular-flutter.mp4",
              "poster": "regular-flutter.jpg",
              "label": "Regular flutter",
              "caption": "",
              "autoplay": true
            },
            {
              "type": "video",
              "src": "irregular-flutter.mp4",
              "poster": "irregular-flutter.jpg",
              "label": "Chaotic flutter",
              "caption": "",
              "autoplay": true
            }
          ],
          "caption": "High-speed visualizations retain the timing in the supplied presentation files. Clip duration is not the treatment duration reported in the fabric tests."
        }
      ]
    },
    {
      "id": "fi-fabrics",
      "heading": "Wrinkle Removal Across Fabric Types",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We tested 90 × 180 mm specimens of cotton, wool, polyester, and denim. Creases were prepared by pressing the specimens for two seconds with an iron at material-specific settings. The proposal lists 200–210 °C for cotton and denim, 145–160 °C for wool, and 110–130 °C for polyester. These temperatures describe crease preparation, not the flutter treatment."
        },
        {
          "type": "table",
          "caption": "Treatment durations shown in proposal slides 13–14. These are demonstrated conditions, not established minimum times for every fabric.",
          "headers": [
            "Fabric",
            "Composition stated in slides",
            "Flutter treatment"
          ],
          "rows": [
            [
              "Denim",
              "Not specified",
              "30 s"
            ],
            [
              "Wool",
              "100% wool",
              "5 min"
            ],
            [
              "Polyester",
              "100% polyester",
              "5 min"
            ],
            [
              "Cotton",
              "100% cotton",
              "30 s"
            ]
          ]
        },
        {
          "type": "before-after",
          "title": "Denim · 30 s",
          "before": "denim-before.png",
          "after": "denim-after.png",
          "caption": "Denim specimen before and after the reported flutter treatment. Source: proposal slide 13."
        },
        {
          "type": "before-after",
          "title": "Wool · 5 min",
          "before": "wool-before.png",
          "after": "wool-after.png",
          "caption": "Wool specimen before and after the reported flutter treatment. Source: proposal slide 13."
        },
        {
          "type": "before-after",
          "title": "Polyester · 5 min",
          "before": "polyester-before.png",
          "after": "polyester-after.png",
          "caption": "Polyester specimen before and after the reported flutter treatment. Source: proposal slide 14."
        },
        {
          "type": "before-after",
          "title": "Cotton · 30 s",
          "before": "cotton-before.png",
          "after": "cotton-after.png",
          "caption": "Cotton specimen before and after the reported flutter treatment. Source: proposal slide 14."
        },
        {
          "type": "paragraph",
          "text": "The photographs show visible wrinkle reduction across the four tested materials. The presentation does not report a standardized wrinkle-recovery score, a blinded assessment, or replicate statistics for these comparisons."
        }
      ]
    },
    {
      "id": "fi-benchmark",
      "heading": "Comparison with a Garment-Care Appliance",
      "blocks": [
        {
          "type": "paragraph",
          "text": "For the appliance comparison, the team used a 200 × 200 mm specimen cut from a cotton hoodie. A grid of creases was formed by pressing with an iron at 200–210 °C for two seconds. The proposal compares a 90 s flutter treatment with a 40 min standard styling cycle in an LG S3GHM Styler."
        },
        {
          "type": "table",
          "caption": "Conditions reported in proposal slide 16.",
          "headers": [
            "Treatment",
            "Reported duration",
            "Comparison basis"
          ],
          "rows": [
            [
              "LG S3GHM Styler",
              "40 min (2,400 s)",
              "Standard styling mode"
            ],
            [
              "Flutter treatment",
              "90 s",
              "Photographed cotton specimen"
            ],
            [
              "Treatment-time ratio",
              "3.75%",
              "90 / 2,400; approximately 4%"
            ]
          ]
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "benchmark-before.png",
              "alt": "Cotton hoodie specimen with a grid of creases before treatment.",
              "label": "Before treatment"
            },
            {
              "src": "benchmark-styler.png",
              "alt": "Cotton specimen after the reported 40-minute Styler cycle.",
              "label": "Styler · 40 min"
            },
            {
              "src": "benchmark-flutter.png",
              "alt": "Cotton specimen after the reported 90-second flutter treatment.",
              "label": "Flutter · 90 s"
            }
          ],
          "caption": "Specimen photographs from proposal slide 16. The comparison documents these specific treatment conditions and is not a standardized appliance-wide performance rating."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "benchmark-styler-detail.png",
              "alt": "Close view of the specimen after Styler treatment.",
              "label": "Styler detail"
            },
            {
              "src": "benchmark-flutter-detail.png",
              "alt": "Close view of the specimen after flutter treatment.",
              "label": "Flutter detail"
            }
          ],
          "caption": "Close views from the same comparison. The photographed flutter-treated specimen appears smoother in the displayed region."
        },
        {
          "type": "paragraph",
          "text": "The time ratio describes the two reported treatment durations. It does not by itself quantify energy savings or establish performance across all garments. The proposal lists nominal power figures but does not report measured electrical energy."
        }
      ]
    },
    {
      "id": "fi-contribution",
      "heading": "My Contributions",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Team Leadership and Development",
          "text": "I led Team Ironing Man and coordinated development of the flutter-based ironing system, connecting the fluid–structure interaction research with the engineering application."
        },
        {
          "type": "subsection",
          "heading": "Experiments and Presentation",
          "text": "I designed and conducted high-speed imaging experiments to characterize system performance and delivered the final presentation. The modeling, experimental results, and designs on this page represent the team’s combined work."
        },
        {
          "type": "paragraph",
          "text": "Team Ironing Man received the Bronze Prize at the 4th KSME–LG Electronics Future Home Tech Challenge."
        }
      ]
    },
    {
      "id": "fi-next",
      "heading": "Limitations and Next Steps",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The current evidence is at the prototype and specimen level. Full garments introduce seams, thickness variations, constraints at hangers, and interactions between neighboring items. The proposal identifies fabric-dependent onset conditions, inter-garment interference, acoustic noise, and possible damage from excessive tension as issues for further study."
        },
        {
          "type": "paragraph",
          "text": "Next steps include fabric-specific operating windows, repeated wrinkle-recovery measurements, durability testing, measured energy and noise evaluation, and airflow management for multiple garments. AI-based operating-condition optimization and integration into an enclosed garment-care appliance are proposed directions rather than demonstrated product capabilities."
        }
      ]
    },
    {
      "id": "fi-info",
      "heading": "Project Information",
      "blocks": [
        {
          "type": "info",
          "items": [
            ["Duration", "Jul. – Dec. 2025"],
            ["Type", "Competition team project (Team Ironing Man)"],
            ["Institution", "Seoul National University"],
            ["Advisor", "Prof. Ho-Young Kim"],
            ["Competition", "4th KSME–LG Electronics Future Home Tech Challenge · Bronze Prize"],
            ["Methods", "Vertical wind-tunnel experiments, high-speed imaging, and physical modeling"]
          ]
        }
      ]
    },
    {
      "id": "fi-materials",
      "heading": "Project Materials",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Flutter Ironing Technology · Team Ironing Man · Seoul National University."
        },
        {
          "type": "paragraph",
          "text": "Advisor: Prof. Ho-Young Kim."
        }
      ]
    }
  ]
};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => esc(new URL('assets/flutter-ironing/' + name, scriptURL).href);
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const target = () => {
    const parts = window.location.hash.slice(1).split('/');
    return parts[0] === 'project' && parts[1] === STUDY.id;
  };
  const anchor = id => '#project/flutter-ironing/section/' + encodeURIComponent(id);
  function image(item) {
    return `<a class="fi-image-link" href="${asset(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open figure: ${esc(item.alt)}"><img src="${asset(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async"></a>`;
  }
  function video(item) {
    const auto = item.autoplay && !reduceMotion();
    return `<figure class="fi-video"><video controls muted playsinline ${auto ? 'autoplay loop' : ''} preload="${auto ? 'metadata' : 'none'}" poster="${asset(item.poster)}" aria-label="${esc(item.label)}"><source src="${asset(item.src)}" type="video/mp4">Your browser cannot play this video. <a href="${asset(item.src)}">Open MP4</a></video>${item.caption ? `<figcaption>${esc(item.caption)}</figcaption>` : ''}</figure>`;
  }
  function block(b) {
    if (b.type === 'info') return `<ul style="margin:14px 0 22px;padding-left:18px;color:#626e78">${b.items.map(i=>`<li><strong>${esc(i[0])}:</strong> ${esc(i[1])}</li>`).join('')}</ul>`;
    if (b.type === 'paragraph') return `<p>${esc(b.text)}</p>`;
    if (b.type === 'subsection') return `<div class="fi-subsection"><h3>${esc(b.heading)}</h3><p>${esc(b.text)}</p></div>`;
    if (b.type === 'figure') return `<figure>${image(b)}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'video') return video(b);
    if (b.type === 'video-gallery') return `<div class="fi-video-group"><div class="fi-video-grid">${b.items.map(v=>`<div><h4>${esc(v.label)}</h4>${video(v)}</div>`).join('')}</div><p class="fi-caption">${esc(b.caption)}</p></div>`;
    if (b.type === 'gallery') return `<figure><div class="fi-figure-grid ${b.items.length === 3 ? 'fi-three' : ''}">${b.items.map(i=>`<div><h4>${esc(i.label)}</h4>${image(i)}</div>`).join('')}</div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'before-after') return `<figure class="fi-before-after"><h3>${esc(b.title)}</h3><div class="fi-figure-grid"><div><h4>Before</h4>${image({src:b.before,alt:b.title+' specimen before treatment'})}</div><div><h4>After</h4>${image({src:b.after,alt:b.title+' specimen after treatment'})}</div></div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'table') return `<div class="fi-table-wrap" role="region" aria-label="${esc(b.caption)}" tabindex="0"><table><caption>${esc(b.caption)}</caption><thead><tr>${b.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }
  function stylesheet() {
    if (document.getElementById('flutter-ironing-page-style')) return;
    const link = document.createElement('link');
    link.id = 'flutter-ironing-page-style';
    link.rel = 'stylesheet';
    link.href = new URL('flutter-ironing.css', scriptURL).href;
    document.head.appendChild(link);
  }
  function render() {
    if (!target()) return;
    const main = document.getElementById('main');
    if (!main) return;
    stylesheet();
    main.innerHTML = `<article class="flutter-ironing-study"><a class="fi-back" href="#projects">← Back to Projects</a><p class="fi-eyebrow">Fluid–structure interaction · Engineering application</p><h1>${esc(STUDY.title)}</h1><p class="fi-meta">${esc(STUDY.period)}<br>${esc(STUDY.role)}</p><p class="fi-award">${esc(STUDY.award)}</p><p class="fi-intro">${esc(STUDY.tagline)}</p>${STUDY.sections.map(s=>`<section id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.blocks.map(block).join('')}</section>`).join('')}<a class="fi-back" href="#projects">← Back to Projects</a></article>`;
    const toc = document.getElementById('page-index');
    if (toc) {
      toc.innerHTML = `<strong>On this page</strong>${STUDY.sections.map(s=>`<a href="${anchor(s.id)}" data-fi-scroll="${esc(s.id)}">${esc(s.heading)}</a>`).join('')}`;
      toc.querySelectorAll('[data-fi-scroll]').forEach(a=>a.addEventListener('click',e=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.getElementById(a.dataset.fiScroll)?.scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'});
      }));
    }
    document.title = STUDY.title + ' | ' + (window.PORTFOLIO?.name || 'Sanghyun Cho');
    const parts = location.hash.slice(1).split('/');
    if (parts[2] === 'section' && parts[3]) {
      let id; try { id=decodeURIComponent(parts[3]); } catch { id=''; }
      document.getElementById(id)?.scrollIntoView({behavior:'auto',block:'start'});
    }
  }
  window.FlutterIroningPage = {render, study:STUDY};
  window.addEventListener('hashchange',render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();
