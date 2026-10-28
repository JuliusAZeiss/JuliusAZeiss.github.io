---
title: "Optimal entanglement-assisted source coding under a balanced-difference promise"
collection: publications
type: preprint
venue: arXiv
permalink: /publication/optimal-entanglement-assisted-source-coding/
date: 2026-09-14
authors: "Julius A. Zeiss"
arxiv: "2609.15757"
paperurl: "https://arxiv.org/abs/2609.15757"
citation: 'Julius A. Zeiss (2026). <i>Optimal entanglement-assisted source coding under a balanced-difference promise</i>. arXiv:2609.15757.'
# Abstract verified against arXiv:2609.15757v1 on 2026-10-28.
mathjax: true
abstract: |
  Entanglement can reduce the communication required for coding tasks, but establishing the minimum achievable cost is essential to understanding its limits. We address this question in a zero-error source-coding task where Alice receives a word and Bob knows an unordered pair of candidates containing it. Alice does not know the pair and must enable Bob to identify her word without error using shared entanglement and one classical message.

  The candidates satisfy a balanced-difference promise: for words in $$\mathbb{Z}_q^n$$ with $$n=q\ell$$, each residue modulo $$q$$ occurs exactly $$\ell$$ times in their coordinatewise difference. For all integers $$q\geq2$$ and $$\ell\geq1$$, we prove that the task requires exactly $$n$$ messages when $$(q-1)\ell$$ is even and two messages when it is odd. These minima allow arbitrary finite-dimensional shared states independent of the inputs and arbitrary local measurements.

  In even parity, this establishes optimality of an existing entanglement-assisted protocol. In odd parity, an explicit deterministic protocol achieves the optimum of one bit without entanglement. Our proof combines Fourier analysis with a combinatorial counting argument to determine the smallest eigenvalue of the associated graphs. In even parity, this resolves the spectral assertion of Cao et al.'s Conjecture 6.3 for balanced cyclic generalized Hadamard graphs.

  Together with an explicit odd-parity bipartition, this determines the quantum chromatic number as $$n$$ in even parity and $$2$$ in odd parity, where the classical chromatic number is also $$2$$. All lemmas, theorems, and corollaries are formalized and verified in Lean.
---
