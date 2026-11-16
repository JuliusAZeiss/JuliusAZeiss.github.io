---
layout: archive
title: "Research"
eyebrow: "Research profile"
subtitle: "Mathematics and algorithms for quantum information."
permalink: /research/
---

<nav class="section-nav" aria-label="Research themes"><a href="#algorithms">Algorithms</a><a href="#entanglement">Entanglement</a><a href="#verification">AI for science</a><a href="#background">Background</a></nav>

<section class="theme-section" id="algorithms" markdown="1">
<div class="theme-label"><span class="eyebrow">01 / Research theme</span><h2>Algorithms with provable guarantees</h2></div>
<div class="prose" markdown="1">
I develop classical algorithms that make difficult quantum problems tractable. Many fundamental questions in quantum information, such as the strength of quantum correlations and the limits of quantum error correction, are computationally intractable and, in some settings, even undecidable.

By combining group theory, quantum Shannon theory, and convex optimization, I build methods with provable guarantees. In particular, I use quantum de Finetti theorems and symmetry-reduced semidefinite programming hierarchies to obtain rigorous, computable bounds for problems that would otherwise remain out of reach.

Provable guarantees often come at a high computational cost. I am therefore exploring how machine learning, in particular supervised and reinforcement learning, can complement these rigorous methods and improve their performance in practical applications. This work is ongoing; see [AI for science](#verification) below.
</div>
</section>

<section class="theme-section" id="entanglement" markdown="1">
<div class="theme-label"><span class="eyebrow">02 / Research theme</span><h2>Entanglement and non-local games</h2></div>
<div class="prose" markdown="1">
Alongside these algorithmic questions, I study the power and limitations of quantum entanglement in communication tasks and non-local games, especially quantum graph coloring. I am particularly interested in how entanglement changes classical combinatorial constraints and how graph structure determines the possibilities and limits of quantum strategies.

Graph problems provide a common thread through this work, connecting fundamental mathematical questions with operational tasks in quantum information.

I have recently started training neural networks to search for strategies in non-local games; see [AI for science](#verification) below.
</div>
<section class="research-video" id="quantum-graph-colouring" aria-labelledby="quantum-graph-colouring-title" markdown="0">
  <div class="research-video-copy">
    <p class="eyebrow">Research in brief · 1:13</p>
    <h3 id="quantum-graph-colouring-title">Quantum graph colouring</h3>
    <p id="quantum-graph-colouring-description">How can shared entanglement let two players win a colouring game with fewer colours than a classical strategy allows? A 73-second introduction to one of the central ideas behind my research.</p>
    <div class="research-video-related">
      <h4>Related research</h4>
      <ul>
        <li><a href="{{ '/publication/quantum-hedetniemi-counterexample/' | relative_url }}">A counterexample to the quantum Hedetniemi conjecture <span aria-hidden="true">→</span></a></li>
        <li><a href="{{ '/publication/optimal-entanglement-assisted-source-coding/' | relative_url }}">Optimal entanglement-assisted source coding under a balanced-difference promise <span aria-hidden="true">→</span></a></li>
      </ul>
    </div>
  </div>
  <figure class="research-video-player">
    <video controls playsinline preload="none" width="1080" height="1920" poster="{{ '/files/videos/quantum-graph-colouring-poster.jpg' | relative_url }}" aria-labelledby="quantum-graph-colouring-title" aria-describedby="quantum-graph-colouring-description quantum-graph-colouring-credit">
      <source src="{{ '/files/videos/quantum-graph-colouring.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/files/videos/quantum-graph-colouring.mp4' | relative_url }}">Watch the quantum graph colouring video</a>.
    </video>
    <figcaption id="quantum-graph-colouring-credit">Example: Mančinska &amp; Roberson (2016). <a href="{{ '/files/videos/quantum-graph-colouring.mp4' | relative_url }}">Open video <span aria-hidden="true">↗</span></a></figcaption>
  </figure>
</section>
</section>

<section class="theme-section" id="verification" markdown="1">
<div class="theme-label"><span class="eyebrow">03 / Research theme</span><h2>AI for science and formally verified mathematics</h2></div>
<div class="prose" markdown="1">
As of 2026, I am especially interested in furthering our understanding of nature through AI, ranging from large language models to formally verified proofs in Lean. In my [paper on optimal entanglement-assisted source coding](https://arxiv.org/abs/2609.15757), every lemma, theorem, and corollary is formalized and verified in Lean. The [verification code is available on GitHub](https://github.com/JuliusAZeiss/Lean-Verification-for-Optimal-entanglement-assisted-source-coding-under-a-balanced-di-erence-promise).

I also use AI agents to build and train neural networks with supervised and reinforcement learning. The goal is to complement provable algorithms and improve their performance in practical applications. In my own work, networks search for strategies for non-local games; my role is the science: formulating the learning task, constructing good training data, and assessing how far the results can be trusted. In September 2026, I initiated a project at our institute in which researchers train compact, specialized models for problems across quantum information and algorithms and run them locally on small hardware. This work is ongoing.

To share this expertise, I host a regular [AI Workshop](/workshop/) at RWTH Aachen, a forum for exchanging hands-on experience with AI tools and discussing how they can improve the way we conduct science.
</div>
</section>

<section class="theme-section" id="background" markdown="1">
<div class="theme-label"><span class="eyebrow">Background</span><h2>Connecting theory and practice</h2></div>
<div class="prose" markdown="1">
I am a final-year PhD student in quantum information theory supervised by Prof. Dr. Mario Berta at RWTH Aachen. My interest in the interplay between graph structure and quantum information began during my master's thesis, where I investigated the quantum causal compatibility problem through inflation graphs.

I have presented my work at international conferences such as TQC, Beyond IID, and AQIS, and given invited talks at institutions including Stanford's theoretical computer science group and the Perimeter Institute for Theoretical Physics. See the complete [talks and presentations](/talks/).

I also thoroughly enjoy [teaching and supervising students](/teaching/). Outside of research, I enjoy chess, cooking, and playing the guitar.
</div>
</section>

<div class="page-actions"><a class="button primary" href="/publications/">Browse publications <span aria-hidden="true">↗</span></a><a class="button" href="/cv/">Curriculum vitae <span aria-hidden="true">↗</span></a></div>
