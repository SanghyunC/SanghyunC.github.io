/* Tourniquet case study data (overrides the entry in content.js). */
(function () {
  const d = window.PORTFOLIO;
  const p = {
  "id": "tourniquet",
  "title": "Rapid-Application Tourniquet Using Snap-Through Buckling",
  "kind": "project",
  "category": "Medical device design · Snap-through mechanics",
  "summary": "A snapband-based compression prototype designed for rapid, one-handed application, evaluated through timing, pressure, simulated-leakage, and usability tests.",
  "contribution": "Contributed to device development, designed experimental setups, conducted experiments, and collected performance data.",
  "period": "Spring 2025",
  "role": "Course Project",
  "badge": "Course grade: A+",
  "media": "assets/tourniquet/video/prototype-application.mp4",
  "poster": "assets/tourniquet/video/prototype-application.jpg",
  "mediaAlt": "Prototype application demonstration with its original on-screen timer",
  "mediaLabel": "Rapid tourniquet application",
  "mediaHint": "Project image or video to be added",
  "sections": [],
  "figures": [],
  "links": [],
  "caseStudy": true,
  "story": [
    {
      "id": "overview",
      "heading": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "We developed this prototype as Team 4 in Introduction to Design of Medical Robots and Devices at Seoul National University. The project explored whether snap-through buckling could simplify the application of a limb-compression device intended for venous bleeding control."
        },
        {
          "type": "paragraph",
          "text": "The design target was one-handed application in less than five seconds. A metallic snapband provides rapid wrapping, while a soft textile enclosure and absorbent layers form the contact interface. We compared the prototype with an Israeli bandage and a conventional compression bandage using application-time measurements, pressure measurements, a water-leakage model, and user feedback."
        },
        {
          "type": "paragraph",
          "text": "The results below describe a preliminary engineering prototype and its reported test conditions. They do not establish clinical effectiveness or a safe compression range."
        },
        {
          "type": "video",
          "src": "assets/tourniquet/video/prototype-application.mp4",
          "poster": "assets/tourniquet/video/prototype-application.jpg",
          "label": "Prototype application",
          "caption": "Prototype application from the final presentation (slides 6 and 9). The original on-screen timer is retained. This is an individual demonstration, separate from the averaged application-time results.",
          "autoplay": true
        }
      ]
    },
    {
      "id": "mechanical-design",
      "heading": "Mechanical Design and Operating Principle",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The device combines a snapband actuation layer, a textile enclosure, and an absorbent core. The mechanism description here covers the team design; my individual responsibilities are listed separately below."
        },
        {
          "type": "subsection",
          "heading": "Snap-Through Actuation",
          "paragraphs": [
            "The metallic snapband changes from a straightened configuration to a rolled configuration when triggered. This rapid mechanical transition wraps the device around the limb and applies compression in a single motion, reducing the repeated wrapping steps required by bandage-based designs."
          ]
        },
        {
          "type": "subsection",
          "heading": "Soft Contact and Absorbent Layers",
          "paragraphs": [
            "A soft, hydrophilic textile encloses the internal layers. The absorbent core incorporates cotton and gauze with sodium polyacrylate, a superabsorbent polymer. The proposed role of the polymer is to swell after fluid absorption and thereby modify local compression."
          ]
        },
        {
          "type": "paragraph",
          "text": "The report includes an initial swelling demonstration, but it does not quantify the polymer’s contribution to pressure or leakage control. Long-term pressure regulation with the integrated swelling layer remained a follow-up objective."
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "assets/tourniquet/prototype-flat.jpg",
              "alt": "Straightened yellow prototype with fastening straps."
            },
            {
              "src": "assets/tourniquet/prototype-coiled.jpg",
              "alt": "The prototype in its compact coiled configuration."
            }
          ],
          "caption": "Straightened and coiled configurations of the prototype. Source: final presentation, slide 7."
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/layered-design.png",
          "alt": "Exploded drawing labeled snapband, absorbent cotton, gauze, sodium polyacrylate, and enclosing fabric.",
          "caption": "Layered construction with the snapband, absorbent cotton, gauze, sodium polyacrylate, and fabric enclosure. Source: final presentation, slide 7.",
          "width": ""
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "assets/tourniquet/swelling-principle.png",
              "alt": "Schematic of the proposed radial contraction as the absorbent layer expands."
            },
            {
              "src": "assets/tourniquet/sap-demonstration.png",
              "alt": "Sodium polyacrylate before and after water absorption."
            }
          ],
          "caption": "Proposed swelling-assisted compression (left) and the material demonstration (right). These illustrate the design concept; quantitative pressure regulation was listed as future work. Source: final presentation, slides 7 and 20."
        }
      ]
    },
    {
      "id": "experimental-evaluation",
      "heading": "Experimental Evaluation",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Application Time",
          "paragraphs": [
            "We timed application of the prototype, Israeli bandage, and compression bandage. The report compares users with and without previous experience to examine how familiarity affected application time.",
            "The comparison clips below retain the source edits, including the marked 8× segments in the bandage videos. Playback duration is not the measured application time; use the on-screen timers and the results table for that comparison."
          ]
        },
        {
          "type": "video-gallery",
          "items": [
            {
              "type": "video",
              "src": "assets/tourniquet/video/compression-bandage.mp4",
              "poster": "assets/tourniquet/video/compression-bandage.jpg",
              "label": "Compression bandage",
              "caption": "White compression bandage. The source clip contains marked 8× segments.",
              "autoplay": false
            },
            {
              "type": "video",
              "src": "assets/tourniquet/video/israeli-bandage.mp4",
              "poster": "assets/tourniquet/video/israeli-bandage.jpg",
              "label": "Israeli bandage",
              "caption": "Israeli bandage. The source clip contains marked 8× segments.",
              "autoplay": false
            }
          ],
          "caption": "Bandage comparison clips from slide 9 of the final presentation. The prototype demonstration appears in Project Overview above. Original timers and playback-speed labels are preserved."
        },
        {
          "type": "subsection",
          "heading": "Compression Pressure",
          "paragraphs": [
            "Three sensors were placed at different positions around the arm to measure local compression. The same measurement arrangement was used for the three devices. These measurements characterize the prototype’s pressure distribution under the tested conditions; they do not independently validate a clinical pressure target."
          ]
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/figure-3.png",
          "caption": "Pressure-measurement arrangement and comparison devices, reproduced from the report. ID2 marks the main target point.",
          "alt": "A schematic of three pressure sensors around an arm, photographs of sensor placement, and the three tested devices.",
          "width": ""
        },
        {
          "type": "subsection",
          "heading": "Simulated Leakage",
          "paragraphs": [
            "A Tygon tube with a lateral incision was attached to an arm to represent a leaking vessel. Water supplied at 5 kPa flowed through the tube, and leaked-water mass was tracked before and after applying the prototype. This was a simplified water-based test rather than a biological bleeding model."
          ]
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/figure-5.png",
          "caption": "Water-leakage model with regulated pressure, incised tubing, and mass collection. The supply pressure was set to 5 kPa.",
          "alt": "Schematic of a regulated water source feeding an incised Tygon tube with escaped water collected on a balance.",
          "width": ""
        },
        {
          "type": "subsection",
          "heading": "User Experience",
          "paragraphs": [
            "Ten participants completed a questionnaire that included comfort ratings, usability-related questions, and open-ended feedback. Comfort was assessed immediately after application and after five minutes. The report labels the usability questionnaire as SUS; the figures show item-level responses rather than a conventional 0–100 SUS score."
          ]
        }
      ]
    },
    {
      "id": "my-contributions",
      "heading": "My Contributions",
      "blocks": [
        {
          "type": "subsection",
          "heading": "Device Development",
          "paragraphs": [
            "I contributed to the development of the rapid-application tourniquet incorporating the snap-through mechanism."
          ]
        },
        {
          "type": "subsection",
          "heading": "Experimental Setups and Data Collection",
          "paragraphs": [
            "I designed experimental setups, conducted experiments, and collected performance data. The prototype design and combined results presented on this page are the work of the team."
          ]
        }
      ]
    },
    {
      "id": "results",
      "heading": "Results",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The strongest reported result was the reduction in application time. Pressure, leakage, and user-feedback measurements provided additional preliminary evidence about the prototype’s behavior."
        },
        {
          "type": "subsection",
          "heading": "Rapid Application",
          "paragraphs": [
            "The report’s timing plots show a mean of 3.9 s for the prototype in the prior-experience comparison and 3.8 s in the comparison without previous experience. The corresponding bandage means were substantially longer."
          ]
        },
        {
          "type": "table",
          "caption": "Average application times printed in Figure 6 of the project report.",
          "headers": [
            "Device",
            "With prior experience",
            "Without prior experience"
          ],
          "rows": [
            [
              "Snapband prototype",
              "3.9 s",
              "3.8 s"
            ],
            [
              "Israeli bandage",
              "117.8 s",
              "137.0 s"
            ],
            [
              "Compression bandage",
              "173.8 s",
              "200.8 s"
            ]
          ]
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "assets/tourniquet/figure-7.png",
              "alt": "Bar chart showing mean times of 3.9, 117.8, and 173.8 seconds."
            },
            {
              "src": "assets/tourniquet/figure-8.png",
              "alt": "Bar chart showing mean times of 3.8, 137.0, and 200.8 seconds."
            }
          ],
          "caption": "Original application-time plots: prior-experience comparison (left) and no-previous-experience comparison (right). The report does not consistently specify the timing cohort size."
        },
        {
          "type": "subsection",
          "heading": "Pressure Distribution",
          "paragraphs": [
            "The final presentation reports pressure measurements as mean (SD), with n = 5. The prototype measurements were lower than the Israeli-bandage measurements and higher than the compression-bandage measurements at all three sensor locations.",
            "The pressure cohort size is specified in slide 13. This does not resolve the report’s separate ambiguity about the application-time cohort."
          ]
        },
        {
          "type": "table",
          "caption": "Compression pressure in kPa, mean (SD), n = 5. Source: final presentation, slide 13.",
          "headers": [
            "Sensor",
            "Snapband prototype",
            "Israeli bandage",
            "Compression bandage"
          ],
          "rows": [
            [
              "Sensor 1",
              "16.96 (0.90)",
              "18.79 (1.28)",
              "12.76 (1.73)"
            ],
            [
              "Sensor 2",
              "17.43 (0.59)",
              "23.10 (1.04)",
              "11.73 (2.39)"
            ],
            [
              "Sensor 3",
              "14.20 (2.18)",
              "22.84 (0.70)",
              "12.67 (2.44)"
            ]
          ]
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/figure-11.png",
          "caption": "Original pressure comparison. The prototype bars lie above the shaded 4–8 kPa reference band in the report; the graph does not support the caption’s claim that they lie within that band.",
          "alt": "Three pressure bar charts comparing the prototype, Israeli bandage, and compression bandage, with a shaded reference band from 4 to 8 kPa.",
          "width": ""
        },
        {
          "type": "subsection",
          "heading": "Leakage Control in the Water Model",
          "paragraphs": [
            "The cumulative leaked-water mass increased before application and then plateaued after the prototype was applied at approximately 95 s. This indicates that further leakage was suppressed during the observed interval in this specific setup."
          ]
        },
        {
          "type": "video",
          "src": "assets/tourniquet/video/water-leakage-test.mp4",
          "poster": "assets/tourniquet/video/water-leakage-test.jpg",
          "label": "Water-leakage experiment",
          "caption": "Water-leakage demonstration embedded in slide 15. The clip switches from a marked 1× segment to marked 10× playback. Original timestamps and speed labels are retained.",
          "autoplay": false
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/figure-12.png",
          "caption": "Cumulative leaked-water mass. The red dashed line marks application at approximately 95 s, after which the measured mass remains near 60 g.",
          "alt": "Leaked-water mass rises to approximately 60 grams and then levels off following prototype application.",
          "width": "430px"
        },
        {
          "type": "subsection",
          "heading": "Comfort and Usability",
          "paragraphs": [
            "The final presentation gives specific feedback counts from the ten surveyed participants. Five requested a larger version, two requested a more reliable locking mechanism, and three described the snapping motion as painful. These responses identify concrete priorities for the next design iteration.",
            "The original comfort and usability figures are retained below. They show reported item-level responses; no unreported overall usability score has been calculated."
          ]
        },
        {
          "type": "table",
          "caption": "Open-ended feedback, n = 10 surveyed participants. Source: final presentation, slide 19.",
          "headers": [
            "Improvement theme",
            "Reported participants"
          ],
          "rows": [
            [
              "Larger device / greater contact area",
              "5 of 10"
            ],
            [
              "More reliable locking mechanism",
              "2 of 10"
            ],
            [
              "Discomfort during snapping",
              "3 of 10"
            ]
          ]
        },
        {
          "type": "gallery",
          "items": [
            {
              "src": "assets/tourniquet/figure-13.png",
              "alt": "Comfort Rating Scale results immediately after use."
            },
            {
              "src": "assets/tourniquet/figure-14.png",
              "alt": "Comfort Rating Scale results after five minutes."
            }
          ],
          "caption": "Comfort-rating results immediately after application (left) and after five minutes (right). Categories and scoring follow the original questionnaire."
        },
        {
          "type": "figure",
          "src": "assets/tourniquet/figure-17.png",
          "caption": "Usability-question responses as plotted in the report. The displayed item scores should not be interpreted as a validated 0–100 SUS result.",
          "alt": "Grouped bars comparing usability-related responses for the prototype and two bandage devices.",
          "width": "600px"
        }
      ]
    },
    {
      "id": "limitations",
      "heading": "Limitations and Next Steps",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The study used a small preliminary sample and simplified test conditions. Slide 13 specifies n = 5 and mean (SD) for the pressure measurements, and the presentation specifies ten survey participants. The application-time cohort remains unclear: the report’s timing methods mention five participants, while its preliminary-results section refers to ten overall participants. That cohort and the full usability scoring procedure should be reconciled before making statistical comparisons."
        },
        {
          "type": "paragraph",
          "text": "Compression was not demonstrated to remain within a validated target range, and the report does not establish sustained compression safety, biological hemostatic performance, or suitability across different limb sizes. The swelling layer’s long-term contribution remains unquantified."
        },
        {
          "type": "paragraph",
          "text": "The proposed next steps are to test larger limbs, motion, irregular wound geometries, and more realistic conditions; improve comfort and locking; quantify swelling-assisted pressure maintenance; and evaluate modular coupling for a wider size range. Hemostatic-agent release, biocompatibility, and shelf-life testing were proposed future work rather than demonstrated outcomes."
        }
      ]
    },
    {
      "id": "project-info",
      "heading": "Project Information",
      "blocks": [
        {
          "type": "info",
          "items": [
            ["Duration", "Spring Semester 2025"],
            ["Type", "Course project (Kwanwoo, Minjun, Jaehun, Soeun, and Sanghyun)"],
            ["Institution", "Seoul National University"],
            ["Course", "Introduction to Design of Medical Robots and Devices"],
            ["Topics", "Snap-through buckling for a rapid-application limb-compression device"],
            ["Evaluation", "Application time, compression pressure, simulated leakage, and usability tests"]
          ]
        }
      ]
    }
  ],
  "heroCaption": "Prototype application from the team’s final presentation. Original on-screen timing is preserved.",
  "mediaAutoplay": true
};
  const i = d.projects.findIndex(x => x.id === p.id);
  if (i >= 0) d.projects[i] = p; else d.projects.push(p);
})();
