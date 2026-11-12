---
title: "Octopus-Inspired Embodied Tactile Intelligence: A Universally Calibrated Miniature Vision-Based Suction Cup"
excerpt: "A small suction cup. A sense of touch. Vision-based force and orientation sensing for delicate robotic manipulation."
header:
  teaser: /assets/images/projects/octopus-suction-cup/egg-pickup.jpg
author_profile: false
classes: wide suction-project
---

<div class="suction-story">
  <header class="sc-hero" id="sc-top">
    <div>
      <p class="sc-eyebrow">Bio-inspired robotics · TMECH 2026</p>
      <p class="sc-display">Small cup.<br>Deep sense of touch.</p>
      <p class="sc-lead">Before a robot can lift something delicate, it needs to understand how it touches it.</p>
      <p>Inspired by the octopus, our miniature suction cup uses a camera to sense contact — turning deformation into force and orientation estimates for closed-loop alignment.</p>
      <div class="sc-actions"><a class="sc-button" href="https://ieeexplore.ieee.org/document/11556293">Read the paper ↗</a><a class="sc-text-link" data-scroll-ignore href="#sc-loop">Follow the pickup ↓</a></div>
    </div>
    <figure class="sc-hero-figure"><img src="/assets/images/projects/octopus-suction-cup/egg-pickup.jpg" width="669" height="678" alt="Miniature suction cup mounted on a robot holding an egg above its support platform"><figcaption>A delicate lift, guided by touch.<br>Detail from the egg pickup experiment.</figcaption></figure>
  </header>
  <nav class="sc-nav" aria-label="Research story"><a data-scroll-ignore href="#sc-challenge">01 Challenge</a><a data-scroll-ignore href="#sc-previous">02 Previous work</a><a data-scroll-ignore href="#sc-contributions">03 Contributions</a><a data-scroll-ignore href="#sc-sense">04 Sensing</a><a data-scroll-ignore href="#sc-loop">05 Pickup</a><a data-scroll-ignore href="#sc-evidence">06 Evidence</a></nav>
  <section class="sc-section sc-intro" id="sc-challenge">
    <p class="sc-eyebrow">01 / The challenge</p>
    <h2>Grasping starts before the lift.</h2>
    <div class="sc-two"><p class="sc-lead">Small, curved objects rarely meet a robot at the perfect angle.</p><div><p>A suction cup must establish contact and a seal. With delicate objects, simply pressing harder is not the answer. Contact orientation and pressing force provide the feedback needed to adjust the approach.</p><p>Our approach brings that sensing into a <strong>22 × 40 mm</strong> suction cup, rather than treating touch and attachment as separate functions.</p></div></div>
    <div class="sc-facts"><div><strong>22 × 40 <span>mm</span></strong><span>Compact sensorized device</span></div><div><strong>3 <span>axes</span></strong><span>Pressing-force estimation</span></div><div><strong>1 <span>shared model</span></strong><span>Across same-design devices</span></div></div>
  </section>
  <section class="sc-section" id="sc-previous">
    <p class="sc-eyebrow">02 / Previous work</p>
    <h2>From optical touch sensing to a miniature multimodal cup.</h2>
    <p class="sc-section-deck">This project builds on a wider effort to make suction cups sense contact, not only attach to surfaces.</p>
    <div class="sc-literature-grid">
      <article class="sc-literature-card"><p class="sc-citation">FIELD OVERVIEW · 2024</p><h3>What should an intelligent sucker do?</h3><p>A review of octopus-inspired suction cups maps design and evaluation challenges, including tactile sensing, adhesion under imperfect contact and integration with soft continuum robots.</p><a href="https://doi.org/10.1002/advs.202400806">van Veggel et al., <em>Advanced Science</em> ↗</a></article>
      <article class="sc-literature-card"><p class="sc-citation">DIRECT PREDECESSOR · 2025</p><h3>Seeing how a cup touches.</h3><p>An earlier optoelectronically innervated cup used a camera to track markers embedded in the compliant structure, estimate contact orientation and reorient for a perpendicular approach.</p><a href="https://doi.org/10.1002/aisy.202400544">van Veggel et al., <em>Advanced Intelligent Systems</em> ↗</a></article>
    </div>
    <div class="sc-research-gap"><p class="sc-citation">THE GAP THIS PAPER ADDRESSES</p><p>The camera-based predecessor focused on contact orientation. The 2026 study targets a more compact cup that estimates force and orientation together, while addressing the need for per-device calibration across manufactured units.</p></div>
    <p class="sc-project-history">The project’s earlier compact-cup direction was presented as ongoing work at the <a href="/publications/2025-01-17-SRC/">2025 Conference on Robots for Science (SRC)</a>.</p>
  </section>
  <section class="sc-section" id="sc-contributions">
    <p class="sc-eyebrow">03 / Research contributions</p>
    <h2>What this study adds.</h2>
    <p class="sc-section-deck">The paper’s contributions are at the system level: a compact sensor, a shared tactile model and a robot that uses its estimates to improve contact.</p>
    <div class="sc-contrib-grid">
      <article><span>01 / Device</span><h3>Miniaturized sensing</h3><p>A 22 × 40 mm suction cup integrates an internal camera for vision-based tactile sensing.</p></article>
      <article><span>02 / Estimation</span><h3>Force + orientation</h3><p>The system estimates three-axis pressing force together with contact pitch and roll.</p></article>
      <article><span>03 / Calibration</span><h3>One model, same design</h3><p>A shared model applies across suction cups of identical design, without individual per-unit calibration.</p></article>
      <article><span>04 / Validation</span><h3>Estimates guide action</h3><p>Closed-loop perpendicular approaches were demonstrated in handling small, delicate, misaligned and curved objects.</p></article>
    </div>
    <p class="sc-source">The quantitative estimation errors are reported in the evidence section below; they are not grasp-success rates or adhesion-strength measurements.</p>
  </section>
  <section class="sc-section" id="sc-sense">
    <p class="sc-eyebrow">04 / From deformation to information</p>
    <h2>A camera that looks inward.</h2>
    <div class="sc-two"><div><p class="sc-lead">The cup’s deformation becomes its tactile signal.</p><p>A micro-camera observes the sensing markers inside the cup. Comparing contact images with the non-contact reference reveals changes that a prediction model uses to estimate three-axis pressing force and contact orientation.</p><p><strong>Universally calibrated, not universally applicable.</strong> Devices with the same design can share a model without per-unit calibration. This does not imply transfer to arbitrary suction cups or every surface.</p></div><div class="sc-pipeline" aria-label="Conceptual sensing pipeline"><div><span>01</span><strong>Touch</strong><p>The compliant cup deforms on contact.</p></div><div><span>02</span><strong>Observe</strong><p>The internal camera captures the visual change.</p></div><div><span>03</span><strong>Estimate</strong><p>A shared model predicts force, pitch and roll.</p></div><div><span>04</span><strong>Adjust</strong><p>The robot corrects its contact orientation.</p></div></div></div>
    <details class="sc-detail"><summary>Look inside the experimental system</summary><figure><a href="/assets/images/projects/octopus-suction-cup/experiment-setup.jpg"><img src="/assets/images/projects/octopus-suction-cup/experiment-setup.jpg" width="1435" height="636" loading="lazy" alt="Experimental setup showing the UR5 robot, force sensor, internal micro-camera, pressure measurement and miniature suction cup"></a><figcaption>Research setup and device construction. The reference force sensor is part of the experimental setup; the cup’s tactile estimates come from vision. Select the image to view it at full size.</figcaption></figure></details>
  </section>
  <section class="sc-section" id="sc-loop">
    <p class="sc-eyebrow">05 / Closing the loop</p>
    <h2>Touch. Align. Attach. Lift.</h2>
    <p class="sc-section-deck">Not a blind pickup: contact feedback informs the next movement.</p>
    <div class="sc-loop-layout"><figure class="sc-sticky-figure"><a href="/assets/images/projects/octopus-suction-cup/cover-v6.jpg"><img src="/assets/images/projects/octopus-suction-cup/cover-v6.jpg" width="787" height="819" loading="lazy" alt="Egg pickup workflow: approach, visual difference images, force and angle prediction, alignment, attachment and lift, with a cross-section of the sensing cup"></a><figcaption>The research workflow links internal images to robot alignment. Select the figure to inspect its labels.</figcaption></figure><ol class="sc-steps"><li><span>01 / Approach</span><h3>Make contact, then listen.</h3><p>The robot approaches the surface. Differences from the non-contact image supply the visual input for force and orientation prediction.</p></li><li><span>02 / Align</span><h3>Correct the angle.</h3><p>Estimated contact orientation guides robot realignment. The cup approaches again, using predicted pressing force to limit the contact preload.</p></li><li><span>03 / Attach</span><h3>Establish the seal.</h3><p>After alignment and preparation for pickup, the cup attaches to the object. Sensing and suction serve distinct roles: understanding contact, then securing the grasp.</p></li><li><span>04 / Lift</span><h3>Carry something delicate.</h3><p>Egg and tomato demonstrations show the process on curved, delicate objects. These examples illustrate the method, not a guarantee of success on every object.</p></li></ol></div>
    <details class="sc-detail"><summary>Explore the full tomato and egg sequences</summary><figure><a href="/assets/images/projects/octopus-suction-cup/egg-tomato-v2.png"><img src="/assets/images/projects/octopus-suction-cup/egg-tomato-v2.png" width="1600" height="566" loading="lazy" alt="Two chronological rows showing tomato and egg pickup from initialization through prediction, alignment, attachment and final lift"></a><figcaption>Top: tomato. Bottom: egg. Read left to right; these are experimental sequences, not a speed benchmark. Open the image for full-size labels.</figcaption></figure></details>
    <div class="sc-video"><iframe width="560" height="315" loading="lazy" src="https://www.youtube.com/embed/x3l9vSXl9gc" title="Miniature vision-based suction cup research demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="sc-video-caption">Watch the experimental demonstration · <a href="https://www.youtube.com/watch?v=x3l9vSXl9gc">Open on YouTube ↗</a></p>
  </section>
  <section class="sc-section" id="sc-evidence">
    <p class="sc-eyebrow">06 / Quantitative evidence</p>
    <h2>What does the cup measure?</h2>
    <p class="sc-section-deck">Reported mean absolute errors (MAE). Orientation and force are different quantities — shown separately, in their own units.</p>
    <div class="sc-results"><div><h3>Contact orientation</h3><dl><div><dt>Pitch</dt><dd>1.43<span>° MAE</span></dd></div><div><dt>Roll</dt><dd>1.45<span>° MAE</span></dd></div></dl></div><div><h3>Pressing force</h3><dl><div><dt>F<sub>x</sub></dt><dd>0.254<span>N MAE</span></dd></div><div><dt>F<sub>y</sub></dt><dd>0.256<span>N MAE</span></dd></div><div><dt>F<sub>z</sub></dt><dd>0.763<span>N MAE</span></dd></div></dl></div></div>
    <p class="sc-source">Source: published IEEE abstract. These are estimation errors, not adhesion strength, maximum payload or grasp-success rates. See the paper for experimental conditions and evaluation protocol.</p>
    <div class="sc-two sc-boundaries"><div><h3>What is demonstrated</h3><p>Compact vision-based tactile sensing; shared calibration across identically designed devices; closed-loop alignment and real-world handling of small, delicate, misaligned and curved objects.</p></div><div><h3>What remains open</h3><p>The reported demonstrations do not establish performance on every material, surface texture or geometry. Broader surface testing, long-term durability and transfer beyond the same device design are useful directions for future evaluation, not results claimed here.</p></div></div>
  </section>
  <footer class="sc-paper"><p class="sc-eyebrow">The publication</p><h2>Octopus-Inspired Embodied Tactile Intelligence: A Universally Calibrated Miniature Vision-Based Suction Cup</h2><p><strong>Authors</strong><br>Yuchen Liang; Lai Yin Garmisch Wong; Yang Wei; Ming Chun Chan; Wenqi Hu; Rob B.N. Scharff</p><p><em>IEEE/ASME Transactions on Mechatronics</em>, vol. 31, no. 4, pp. 4719–4727, August 2026. Published online June 9, 2026.</p><p class="sc-doi">DOI: 10.1109/TMECH.2026.3694100</p><div class="sc-actions"><a class="sc-button" href="https://doi.org/10.1109/TMECH.2026.3694100">Read the published paper ↗</a><a class="sc-text-link" href="/publications/2026-06-01-suctioncup-tmech/">Publication details →</a></div><p class="sc-related">Earlier related work: <a href="https://doi.org/10.1002/aisy.202400544">Optoelectronically Innervated Suction Cup Inspired by the Octopus</a> · <em>Advanced Intelligent Systems</em>, 2025</p><a class="sc-text-link" data-scroll-ignore href="#sc-top">Back to the beginning ↑</a></footer>
</div>
