/* Load this file AFTER app.js. It changes only #project/strength-machine.
   Edit STUDY below to revise the content. Other portfolio data is untouched. */
(() => {
  'use strict';
  if (window.StrengthMachinePage) return;
  const scriptURL = document.currentScript?.src || new URL('strength-machine.js', document.baseURI).href;
  const STUDY = {
  "id": "strength-machine",
  "title": "GYMPAL Smart Strength Training Assistant",
  "period": "Spring 2024",
  "role": "Team Leader · Team 4",
  "award": "Technology and Entrepreneurship · Seoul National University",
  "tagline": "Connecting a wearable motion-sensing concept with workout planning, repetition and tempo tracking, and session feedback.",
  "sections": [
    {
      "id": "sm-overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "GYMPAL is a course project that explores how a compact wearable and a companion application could simplify strength-training sessions. We developed the concept around a recurring problem: people training alone must plan their sessions, count repetitions, monitor tempo, manage rest, and record their progress."
        },
        {
          "type": "paragraph",
          "text": "The midterm focused on motion and tempo sensing inspired by velocity-based training. The final pitch expanded this into an integrated workout assistant with a smart-band concept and application demonstrations for planning, tracking, logging, and feedback."
        },
        {
          "type": "figure",
          "src": "band-design-concept.png",
          "alt": "GYMPAL-branded wrist-band design rendered against a blue background.",
          "caption": "GYMPAL Smart Band industrial design concept from the final pitch."
        }
      ]
    },
    {
      "id": "sm-needs",
      "heading": "User Needs and Product Direction",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The team used customer-oriented analysis, a survey of regular gym users, personas, and competitor comparisons to define the product. The midterm identified the difficulty of obtaining movement feedback when training without a partner. The final presentation broadened the focus to the full workout workflow."
        },
        {
          "type": "table",
          "caption": "Needs translated into proposed product functions.",
          "headers": [
            "User difficulty",
            "Product response"
          ],
          "rows": [
            [
              "Planning around an irregular schedule",
              "A chat-based workout-planning interface"
            ],
            [
              "Counting repetitions and regulating tempo",
              "Motion sensing and a live count/tempo display"
            ],
            [
              "Managing exercise-specific rest periods",
              "Rest timer and in-session adjustment"
            ],
            [
              "Recording a completed workout",
              "Session log and exercise history"
            ],
            [
              "Interpreting progress",
              "A session-analysis and feedback interface"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The proposed users included people training at home or alone in a gym, recreational beginners and intermediates, and people whose schedules make consistent planning difficult."
        },
        {
          "type": "subsection",
          "heading": "Commercialization Concept",
          "text": "The final pitch proposed a device-plus-application model with Basic, Standard, and Premium tiers. These were business-model proposals in a 2024 course project, rather than demonstrated subscription or sales results."
        }
      ]
    },
    {
      "id": "sm-architecture",
      "heading": "Sensing and Application Architecture",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The midterm describes a gyroscope-based sensing concept: detect movement, transfer the measurements to a smartphone, analyze repetition and tempo information, and return feedback through the interface. The final deck links that concept to a wrist-mounted band, rest management, and session records."
        },
        {
          "type": "table",
          "caption": "Functional architecture developed in the project materials.",
          "headers": [
            "Stage",
            "Intended role"
          ],
          "rows": [
            [
              "Sense",
              "Capture movement associated with an exercise"
            ],
            [
              "Transfer",
              "Send measurements to the companion application"
            ],
            [
              "Interpret",
              "Identify repetitions and timing-related features"
            ],
            [
              "Respond",
              "Display counts and tempo, then manage rest"
            ],
            [
              "Record",
              "Save the session and present feedback"
            ]
          ]
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "sensor-wiring.png",
              "alt": "Wiring illustration connecting a sensor module and breadboard to an Arduino Uno.",
              "label": "Sensor wiring concept"
            },
            {
              "src": "controller-board.png",
              "alt": "ESP32 development-board image included in the product-demo slide.",
              "label": "Controller option"
            }
          ],
          "caption": "Hardware materials from final-pitch slide 17: an Arduino wiring illustration and an ESP32 development-board image, showing components considered for prototyping."
        },
        {
          "type": "paragraph",
          "text": "The supplied slides do not specify a complete firmware, communications protocol, or calibration procedure. The application screens below show the intended user-facing behavior at the prototype stage."
        }
      ]
    },
    {
      "id": "sm-planning",
      "heading": "Workout Planning Interface",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The application demonstration begins with a conversational planning flow. The interface asks about the user’s exercise split and available schedule, offers exercise choices, and presents a proposed session. This makes planning part of the same workflow as tracking and logging."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "planning-preferences.png",
              "alt": "GYMPAL planning chat asking for preferred training split and available weekly schedule.",
              "label": "Training preferences"
            },
            {
              "src": "planning-chat.png",
              "alt": "Planning chat with selectable exercise options.",
              "label": "Exercise selection"
            },
            {
              "src": "plan-preview.png",
              "alt": "Planning chat showing a proposed workout sequence.",
              "label": "Plan preview"
            }
          ],
          "caption": "Planning-interface screens from final-pitch slide 10: user preferences, exercise choices, and a proposed plan."
        }
      ]
    },
    {
      "id": "sm-tracking",
      "heading": "Repetition, Tempo, and Rest",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Live Count and Tempo Display",
          "text": "The demo interface plots a movement trace with a phase marker and a repetition counter. Successive screens show the count advancing while an exercise is in progress."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "tempo-count-1.png",
              "alt": "Movement trace with a green phase marker and repetition count four.",
              "label": "Live count · 4"
            },
            {
              "src": "tempo-count-2.png",
              "alt": "Movement trace with a red phase marker and repetition count five.",
              "label": "Live count · 5"
            }
          ],
          "caption": "Tracking-interface screens from final-pitch slide 12, showing successive repetition counts and movement-phase markers."
        },
        {
          "type": "subsection",
          "heading": "Rest Management",
          "text": "The intended workflow recognizes the end of a set and starts a rest timer. The session interface also allows rest settings and exercise loads to be adjusted during the workout."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "rest-timer.png",
              "alt": "An exercise-specific rest-timer interface.",
              "label": "Rest timer"
            },
            {
              "src": "rest-adjustment.png",
              "alt": "In-session screen with a dialog for adjusting rest or exercise load.",
              "label": "Session adjustment"
            }
          ],
          "caption": "Rest and adjustment screens from final-pitch slide 13."
        }
      ]
    },
    {
      "id": "sm-records",
      "heading": "Workout Records and Feedback",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The session-history view gathers exercise entries, while a detail view organizes sets, loads, repetitions, and timing. The feedback interface adds a session summary and a dashboard with a movement trace and exercise-level indicators."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "session-history.png",
              "alt": "GYMPAL session-history screen listing workout entries.",
              "label": "Session history"
            },
            {
              "src": "session-detail.png",
              "alt": "Exercise-detail screen listing completed sets.",
              "label": "Exercise details"
            }
          ],
          "caption": "Workout-record screens from final-pitch slide 14."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "feedback-screen.png",
              "alt": "Post-workout feedback screen with a demonstration session score.",
              "label": "Session feedback"
            },
            {
              "src": "analysis-dashboard.png",
              "alt": "GYMPAL analysis dashboard with a trace and exercise indicators.",
              "label": "Analysis dashboard"
            }
          ],
          "caption": "Feedback screens from final-pitch slide 15, showing a sample session summary and exercise-analysis interface."
        }
      ]
    },
    {
      "id": "sm-contributions",
      "heading": "My Contributions",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Project Planning and Coordination",
          "text": "I led project planning and coordinated prototype development and application development. I helped shape and refine the product concept around the needs of people training independently."
        },
        {
          "type": "subsection",
          "heading": "Pitch and Presentation",
          "text": "I delivered the concept pitch and final presentation. The product concept, sensing materials, and application demonstrations represent the team’s combined work."
        },
        {
          "type": "paragraph",
          "text": "The final deck credits five team members: 허근영, 이준구, Sanghyun Cho (조상현), 이승준, and 도민주. My leadership and development responsibilities are also documented in my CV."
        }
      ]
    },
    {
      "id": "sm-scope",
      "heading": "Prototype Scope and Next Steps",
      "blocks": [
        {
          "type": "table",
          "caption": "What the supplied presentations document and what further evaluation would establish.",
          "headers": [
            "Area",
            "Documented output",
            "Next evaluation"
          ],
          "rows": [
            [
              "Product definition",
              "User needs, personas, and a wearable/app concept",
              "Usability testing with the intended users"
            ],
            [
              "Motion sensing",
              "Gyroscope concept and controller/wiring materials",
              "Calibration and repeatability across exercise types"
            ],
            [
              "Repetition and tempo",
              "Tracking-interface demonstrations",
              "Accuracy against independently annotated reference data"
            ],
            [
              "Application workflow",
              "Planning, rest, logging, and feedback screens",
              "End-to-end hardware/application validation"
            ],
            [
              "Personalization",
              "AI-assistant and recommendation concepts",
              "Model specification and outcome evaluation"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "Tempo estimation and calibrated linear bar velocity are different quantities. A follow-up evaluation should define the measured signal, compare repetition and timing estimates with reference recordings, and test the complete device-to-application workflow."
        },
        {
          "type": "paragraph",
          "text": "The displayed interface counts, traces, and scores are demonstration examples. Improved convenience and more structured training are design goals; the presentations do not establish measurement accuracy, reduced injury rates, increased strength, or commercial adoption."
        }
      ]
    },
    {
      "id": "sm-info",
      "heading": "Project Information",
      "blocks": [
        {
          "type": "info",
          "items": [
            ["Duration", "Spring 2024"],
            ["Type", "Team course project"],
            ["Institution", "Seoul National University"],
            ["Course", "Technology and Entrepreneurship"],
            ["Grade", "A+"],
            ["Role", "Team Leader"],
            ["Topics", "Wearable motion sensing, workout planning, repetition and tempo tracking, and session feedback"]
          ]
        }
      ]
    }
  ]
};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => esc(new URL('assets/strength-machine/' + name, scriptURL).href);
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const target = () => {
    const parts = window.location.hash.slice(1).split('/');
    return parts[0] === 'project' && parts[1] === STUDY.id;
  };
  const anchor = id => '#project/strength-machine/section/' + encodeURIComponent(id);
  function image(item) {
    return `<a class="sm-image-link" href="${asset(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open figure: ${esc(item.alt)}"><img src="${asset(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async"></a>`;
  }
  function video(item) {
    const auto = item.autoplay && !reduceMotion();
    return `<figure class="sm-video"><video controls muted playsinline ${auto ? 'autoplay loop' : ''} preload="${auto ? 'metadata' : 'none'}" poster="${asset(item.poster)}" aria-label="${esc(item.label)}"><source src="${asset(item.src)}" type="video/mp4">Your browser cannot play this video. <a href="${asset(item.src)}">Open MP4</a></video><figcaption>${esc(item.caption)}</figcaption></figure>`;
  }
  function block(b) {
    if (b.type === 'info') return `<ul style="margin:14px 0 22px;padding-left:18px;color:#626e78">${b.items.map(i=>`<li><strong>${esc(i[0])}:</strong> ${esc(i[1])}</li>`).join('')}</ul>`;
    if (b.type === 'paragraph') return `<p>${esc(b.text)}</p>`;
    if (b.type === 'subsection') return `<div class="sm-subsection"><h3>${esc(b.heading)}</h3><p>${esc(b.text)}</p></div>`;
    if (b.type === 'figure') return `<figure>${image(b)}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'video') return video(b);
    if (b.type === 'video-gallery') return `<div class="sm-video-group"><div class="sm-video-grid">${b.items.map(v=>`<div><h4>${esc(v.label)}</h4>${video(v)}</div>`).join('')}</div><p class="sm-caption">${esc(b.caption)}</p></div>`;
    if (b.type === 'gallery') return `<figure><div class="sm-figure-grid ${b.items.length === 3 ? 'sm-three' : ''}">${b.items.map(i=>`<div><h4>${esc(i.label)}</h4>${image(i)}</div>`).join('')}</div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'before-after') return `<figure class="sm-before-after"><h3>${esc(b.title)}</h3><div class="sm-figure-grid"><div><h4>Before</h4>${image({src:b.before,alt:b.title+' specimen before treatment'})}</div><div><h4>After</h4>${image({src:b.after,alt:b.title+' specimen after treatment'})}</div></div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'table') return `<div class="sm-table-wrap" role="region" aria-label="${esc(b.caption)}" tabindex="0"><table><caption>${esc(b.caption)}</caption><thead><tr>${b.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }
  function stylesheet() {
    if (document.getElementById('strength-machine-page-style')) return;
    const link = document.createElement('link');
    link.id = 'strength-machine-page-style';
    link.rel = 'stylesheet';
    link.href = new URL('strength-machine.css', scriptURL).href;
    document.head.appendChild(link);
  }
  function render() {
    if (!target()) return;
    const main = document.getElementById('main');
    if (!main) return;
    stylesheet();
    main.innerHTML = `<article class="strength-machine-study"><a class="sm-back" href="#projects">← Back to Projects</a><p class="sm-eyebrow">Wearable sensing · Product development</p><h1>${esc(STUDY.title)}</h1><p class="sm-meta">${esc(STUDY.period)}<br>${esc(STUDY.role)}</p><p class="sm-award">${esc(STUDY.award)}</p><p class="sm-intro">${esc(STUDY.tagline)}</p>${STUDY.sections.map(s=>`<section id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.blocks.map(block).join('')}</section>`).join('')}<a class="sm-back" href="#projects">← Back to Projects</a></article>`;
    const toc = document.getElementById('page-index');
    if (toc) {
      toc.innerHTML = `<strong>On this page</strong>${STUDY.sections.map(s=>`<a href="${anchor(s.id)}" data-sm-scroll="${esc(s.id)}">${esc(s.heading)}</a>`).join('')}`;
      toc.querySelectorAll('[data-sm-scroll]').forEach(a=>a.addEventListener('click',e=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.getElementById(a.dataset.smScroll)?.scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'});
      }));
    }
    document.title = STUDY.title + ' | ' + (window.PORTFOLIO?.name || 'Sanghyun Cho');
    const parts = location.hash.slice(1).split('/');
    if (parts[2] === 'section' && parts[3]) {
      let id; try { id=decodeURIComponent(parts[3]); } catch { id=''; }
      document.getElementById(id)?.scrollIntoView({behavior:'auto',block:'start'});
    }
  }
  window.StrengthMachinePage = {render, study:STUDY};
  window.addEventListener('hashchange',render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();
