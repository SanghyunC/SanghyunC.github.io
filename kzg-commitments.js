/* Load this file AFTER app.js. It changes only #project/kzg-commitments.
   Edit STUDY below to revise the content. Other portfolio data is untouched. */
(() => {
  'use strict';
  if (window.KzgCommitmentsPage) return;
  const scriptURL = document.currentScript?.src || new URL('kzg-commitments.js', document.baseURI).href;
  const STUDY = {
  "id": "kzg-commitments",
  "title": "KZG Commitments and Proto-Danksharding",
  "period": "Spring 2024",
  "role": "Mathematical Analysis · Collaborative Course Project",
  "award": "Practical Applications of Blockchain 1 · Seoul National University",
  "tagline": "Connecting polynomial commitments with the data flow of Ethereum blob transactions.",
  "sections": [
    {
      "id": "kzg-overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Our four-person course team studied EIP-4844 and the mathematics behind KZG polynomial commitments. The project connected a cryptographic construction to a practical blob-transaction tutorial using TypeScript, viem, and a KZG implementation."
        },
        {
          "type": "paragraph",
          "text": "I contributed mathematical analysis and explanations to the team’s technical article. Vladislav Lenskii published the article on 15 June 2024 and credited the group’s work at Seoul National University."
        },
        {
          "type": "links",
          "items": [
            {
              "url": "https://medium.com/@vladislav.lenskii/blob-transaction-sending-tutorial-kzg-explanation-3b6b84510916",
              "label": "Read the collaborative article"
            }
          ]
        }
      ]
    },
    {
      "id": "kzg-context",
      "heading": "Why Blob Transactions Need Commitments",
      "blocks": [
        {
          "type": "paragraph",
          "text": "EIP-4844 introduced type-0x03 transactions for blob data. Execution refers to that data through versioned hashes, while blob availability is handled separately. This separates transaction execution from the accompanying data-distribution path."
        },
        {
          "type": "table",
          "caption": "Key objects in the EIP-4844 design.",
          "headers": [
            "Object",
            "Representation",
            "Purpose"
          ],
          "rows": [
            [
              "Blob",
              "4,096 field elements; 131,072 serialized bytes",
              "Carry the data"
            ],
            [
              "KZG commitment",
              "48-byte elliptic-curve point",
              "Commit to the blob polynomial"
            ],
            [
              "KZG proof",
              "48-byte elliptic-curve point",
              "Support a consistency check"
            ],
            [
              "Versioned hash",
              "32-byte reference",
              "Identify the commitment in execution"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The commitment and its versioned hash are distinct. EIP-4844 derives the reference as a version byte followed by the final 31 bytes of SHA-256(commitment)."
        },
        {
          "type": "equation",
          "label": "Execution-layer reference",
          "text": "versioned_hash = 0x01 || SHA256(commitment)[1:]",
          "note": "The hash identifies the commitment; it is not itself the polynomial commitment."
        },
        {
          "type": "links",
          "items": [
            {
              "url": "https://eips.ethereum.org/EIPS/eip-4844",
              "label": "Protocol specification: EIP-4844"
            }
          ]
        }
      ]
    },
    {
      "id": "kzg-math",
      "heading": "Mathematical Framework",
      "blocks": [
        {
          "type": "paragraph",
          "text": "A polynomial commitment lets a prover commit to a polynomial and later prove a claimed evaluation p(z) = y. KZG gives constant-sized commitments and evaluation witnesses for polynomials within the supported degree bound."
        },
        {
          "type": "subsection",
          "heading": "Structured Reference String",
          "text": "Public setup parameters encode powers of an unknown scalar τ as curve points. Linear combinations let the prover form a commitment without learning τ. Setup integrity and the scheme’s cryptographic assumptions matter for binding."
        },
        {
          "type": "equation",
          "label": "Commit",
          "text": "C = [p(τ)]₁",
          "note": "Here [a]₁ means scalar multiplication of a generator in group G₁."
        },
        {
          "type": "subsection",
          "heading": "Opening an Evaluation",
          "text": "If the claimed evaluation is correct, X − z divides p(X) − y. The quotient determines the opening witness."
        },
        {
          "type": "equation",
          "label": "Prove",
          "text": "q(X) = (p(X) − y) / (X − z)\nπ = [q(τ)]₁",
          "note": ""
        },
        {
          "type": "equation",
          "label": "Verify",
          "text": "e(C − [y]₁, [1]₂) = e(π, [τ]₂ − z[1]₂)",
          "note": "e denotes the pairing. Group notation turns the polynomial identity into a check on curve points."
        },
        {
          "type": "paragraph",
          "text": "Succinct verification is the key benefit here. Privacy depends on the commitment construction and its use; a basic deterministic KZG commitment should not be treated as an encryption guarantee."
        },
        {
          "type": "links",
          "items": [
            {
              "url": "https://cypherpunks.ca/~iang/pubs/PolyCommit-AsiaCrypt.pdf",
              "label": "Original KZG paper"
            },
            {
              "url": "https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",
              "label": "Setup and pairing explanation"
            }
          ]
        }
      ]
    },
    {
      "id": "kzg-example",
      "heading": "A Worked Polynomial Example",
      "blocks": [
        {
          "type": "equation",
          "label": "Choose a polynomial",
          "text": "p(X) = X² + 4X + 3\nz = 2,   y = p(2) = 15",
          "note": ""
        },
        {
          "type": "equation",
          "label": "Factor the shifted polynomial",
          "text": "p(X) − 15 = X² + 4X − 12\n             = (X − 2)(X + 6)\nq(X) = X + 6",
          "note": ""
        },
        {
          "type": "figure",
          "src": "polynomial-opening.svg",
          "alt": "Two plots show p(x) and the horizontal value 15, then p(x) minus 15 crossing zero at x equals 2.",
          "caption": "Original illustration for this portfolio: subtracting the claimed value creates a root at the evaluation point. The plot uses real numbers for intuition; KZG arithmetic takes place over a finite field."
        },
        {
          "type": "paragraph",
          "text": "The factorization explains why a quotient witness exists for a correct evaluation. The coefficients are (3, 4, 1) in increasing-power order. This example illustrates the algebra behind an opening, rather than implementing elliptic-curve operations."
        }
      ]
    },
    {
      "id": "kzg-workflow",
      "heading": "From Payload to a Blob Transaction",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The team tutorial connects payload encoding, a KZG interface, and a wallet client on Sepolia. Viem’s KZG interface loads trusted setup parameters and supplies blob-commitment and blob-proof operations."
        },
        {
          "type": "table",
          "caption": "Conceptual workflow reflected in the tutorial and SDK interface.",
          "headers": [
            "Stage",
            "Operation",
            "Output"
          ],
          "rows": [
            [
              "1 · Encode",
              "Convert the message to field-compatible blob data",
              "Blob"
            ],
            [
              "2 · Commit",
              "Use the KZG implementation and trusted setup",
              "Commitment"
            ],
            [
              "3 · Prove",
              "Generate the blob consistency proof",
              "Blob proof"
            ],
            [
              "4 · Reference",
              "Derive the versioned hash",
              "Transaction reference"
            ],
            [
              "5 · Submit",
              "Assemble and sign the blob-carrying transaction",
              "Transaction hash"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "The elementary opening above explains the quotient construction. Ethereum’s blob-consistency proof uses a challenge derived from the blob and commitment, rather than simply opening at the toy example’s fixed point."
        },
        {
          "type": "paragraph",
          "text": "The article links its Sepolia execution example and a companion repository. They document the team tutorial’s implementation path. This portfolio page presents the 2024 project context."
        },
        {
          "type": "links",
          "items": [
            {
              "url": "https://viem.sh/docs/utilities/setupKzg",
              "label": "Viem KZG interface documentation"
            },
            {
              "url": "https://github.com/rrhlrmrr/BlobTransactionTutorial/tree/main",
              "label": "Companion tutorial repository"
            }
          ]
        }
      ]
    },
    {
      "id": "kzg-contributions",
      "heading": "My Contributions",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Mathematical Analysis",
          "text": "I analyzed the mathematical foundations of KZG commitments and their connection to EIP-4844. My contribution focused on explaining polynomial evaluations and the commitment mechanism in the team’s technical article."
        },
        {
          "type": "subsection",
          "heading": "Technical Communication",
          "text": "I contributed mathematical explanations within a four-member course team. The published tutorial combines that explanation with the team’s practical transaction walkthrough."
        },
        {
          "type": "paragraph",
          "text": "The project brought together abstract algebra, protocol reading, and developer-facing communication. The implementation and published article reflect the group’s combined work."
        }
      ]
    },
    {
      "id": "kzg-output",
      "heading": "Project Outputs",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The primary output is a public technical article that links an implementation repository and a testnet example. The work demonstrates collaborative analysis of an existing protocol and communication of the mathematics behind it."
        },
        {
          "type": "links",
          "items": [
            {
              "url": "https://medium.com/@vladislav.lenskii/blob-transaction-sending-tutorial-kzg-explanation-3b6b84510916",
              "label": "Blob Transaction Sending Tutorial + KZG explanation"
            },
            {
              "url": "https://github.com/rrhlrmrr/BlobTransactionTutorial/tree/main",
              "label": "BlobTransactionTutorial repository"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "Group credited in the article: Vladislav Lenskii, Sanghyun Cho (조상현), 전경민, and 조창민. The article is published under Vladislav Lenskii’s byline."
        }
      ]
    },
    {
      "id": "kzg-references",
      "heading": "References",
      "blocks": [
        {
          "type": "links",
          "items": [
            {
              "url": "https://medium.com/@vladislav.lenskii/blob-transaction-sending-tutorial-kzg-explanation-3b6b84510916",
              "label": "Collaborative course article · 15 June 2024"
            },
            {
              "url": "https://eips.ethereum.org/EIPS/eip-4844",
              "label": "EIP-4844 · Shard Blob Transactions"
            },
            {
              "url": "https://cypherpunks.ca/~iang/pubs/PolyCommit-AsiaCrypt.pdf",
              "label": "Kate, Zaverucha, and Goldberg · Constant-Size Commitments to Polynomials and Their Applications"
            },
            {
              "url": "https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",
              "label": "Dankrad Feist · KZG polynomial commitments"
            },
            {
              "url": "https://viem.sh/docs/utilities/setupKzg",
              "label": "Viem · setupKzg documentation"
            }
          ]
        }
      ]
    }
  ]
};
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const asset = name => esc(new URL('assets/kzg-commitments/' + name, scriptURL).href);
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  const target = () => {
    const parts = window.location.hash.slice(1).split('/');
    return parts[0] === 'project' && parts[1] === STUDY.id;
  };
  const anchor = id => '#project/kzg-commitments/section/' + encodeURIComponent(id);
  function image(item) {
    return `<a class="kz-image-link" href="${asset(item.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open figure: ${esc(item.alt)}"><img src="${asset(item.src)}" alt="${esc(item.alt)}" loading="lazy" decoding="async"></a>`;
  }
  function video(item) {
    const auto = item.autoplay && !reduceMotion();
    return `<figure class="kz-video"><video controls muted playsinline ${auto ? 'autoplay loop' : ''} preload="${auto ? 'metadata' : 'none'}" poster="${asset(item.poster)}" aria-label="${esc(item.label)}"><source src="${asset(item.src)}" type="video/mp4">Your browser cannot play this video. <a href="${asset(item.src)}">Open MP4</a></video><figcaption>${esc(item.caption)}</figcaption></figure>`;
  }
  function block(b) {
    if (b.type === 'equation') return `<div class="kz-equation"><span>${esc(b.label)}</span><pre>${esc(b.text)}</pre>${b.note ? `<p>${esc(b.note)}</p>` : ''}</div>`;
    if (b.type === 'links') return `<ul class="kz-reference-links">${b.items.map(i=>`<li><a href="${esc(i.url)}" target="_blank" rel="noopener noreferrer">${esc(i.label)} ↗</a></li>`).join('')}</ul>`;
    if (b.type === 'paragraph') return `<p>${esc(b.text)}</p>`;
    if (b.type === 'subsection') return `<div class="kz-subsection"><h3>${esc(b.heading)}</h3><p>${esc(b.text)}</p></div>`;
    if (b.type === 'figure') return `<figure>${image(b)}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'video') return video(b);
    if (b.type === 'video-gallery') return `<div class="kz-video-group"><div class="kz-video-grid">${b.items.map(v=>`<div><h4>${esc(v.label)}</h4>${video(v)}</div>`).join('')}</div><p class="kz-caption">${esc(b.caption)}</p></div>`;
    if (b.type === 'gallery') return `<figure><div class="kz-figure-grid ${b.items.length === 3 ? 'kz-three' : ''}">${b.items.map(i=>`<div><h4>${esc(i.label)}</h4>${image(i)}</div>`).join('')}</div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'before-after') return `<figure class="kz-before-after"><h3>${esc(b.title)}</h3><div class="kz-figure-grid"><div><h4>Before</h4>${image({src:b.before,alt:b.title+' specimen before treatment'})}</div><div><h4>After</h4>${image({src:b.after,alt:b.title+' specimen after treatment'})}</div></div><figcaption>${esc(b.caption)}</figcaption></figure>`;
    if (b.type === 'table') return `<div class="kz-table-wrap" role="region" aria-label="${esc(b.caption)}" tabindex="0"><table><caption>${esc(b.caption)}</caption><thead><tr>${b.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    return '';
  }
  function stylesheet() {
    if (document.getElementById('kzg-commitments-page-style')) return;
    const link = document.createElement('link');
    link.id = 'kzg-commitments-page-style';
    link.rel = 'stylesheet';
    link.href = new URL('kzg-commitments.css', scriptURL).href;
    document.head.appendChild(link);
  }
  function render() {
    if (!target()) return;
    const main = document.getElementById('main');
    if (!main) return;
    stylesheet();
    main.innerHTML = `<article class="kzg-commitments-study"><a class="kz-back" href="#projects">← Back to Projects</a><p class="kz-eyebrow">Cryptography · Protocol analysis</p><h1>${esc(STUDY.title)}</h1><p class="kz-meta">${esc(STUDY.period)}<br>${esc(STUDY.role)}</p><p class="kz-award">${esc(STUDY.award)}</p><p class="kz-intro">${esc(STUDY.tagline)}</p>${STUDY.sections.map(s=>`<section id="${esc(s.id)}"><h2>${esc(s.heading)}</h2>${s.blocks.map(block).join('')}</section>`).join('')}<a class="kz-back" href="#projects">← Back to Projects</a></article>`;
    const toc = document.getElementById('page-index');
    if (toc) {
      toc.innerHTML = `<strong>On this page</strong>${STUDY.sections.map(s=>`<a href="${anchor(s.id)}" data-kz-scroll="${esc(s.id)}">${esc(s.heading)}</a>`).join('')}`;
      toc.querySelectorAll('[data-kz-scroll]').forEach(a=>a.addEventListener('click',e=>{
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        document.getElementById(a.dataset.kzScroll)?.scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'start'});
      }));
    }
    document.title = STUDY.title + ' | ' + (window.PORTFOLIO?.name || 'Sanghyun Cho');
    const parts = location.hash.slice(1).split('/');
    if (parts[2] === 'section' && parts[3]) {
      let id; try { id=decodeURIComponent(parts[3]); } catch { id=''; }
      document.getElementById(id)?.scrollIntoView({behavior:'auto',block:'start'});
    }
  }
  window.KzgCommitmentsPage = {render, study:STUDY};
  window.addEventListener('hashchange',render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();
