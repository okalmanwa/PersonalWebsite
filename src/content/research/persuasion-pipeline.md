---
title: 'Persuasion Strategy Classification in Political News'
lab: 'Social Dynamics Lab'
dates: 'Feb – Jun 2026'
status: 'Concluded'
abstract: 'The ingestion and cleaning pipelines behind a roughly 2-million-article corpus of U.S. political news (14 outlets, 2000–2025), built for NSF-funded research on how persuasive style varies with editorial credibility and ideology.'
methods: ['Data engineering', 'NLP', 'Classification']
stack: ['Python', 'GDELT', 'RoBERTa']
order: 2
featured: true
---

<style>
  .newspaper-open {
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-5);
    border-bottom: 1px solid var(--hairline);
  }

  .newspaper-open p {
    margin-top: 0;
    margin-bottom: var(--space-4);
  }

  .newspaper-open p.dropcap {
    text-wrap: pretty;
  }

  .newspaper-open .dropcap-letter {
    float: left;
    font-family: var(--font-display);
    font-size: 2.45em;
    line-height: 0.84;
    font-weight: 400;
    color: var(--ink);
    padding: 0.02em 0.6rem 0 0;
    margin: 0.06em 0.45rem 0 0;
    border-right: 1px solid var(--hairline);
  }

  .newspaper-open p:last-child {
    margin-bottom: 0;
  }
</style>

<div class="newspaper-open">

<p class="dropcap"><span class="dropcap-letter" aria-hidden="true">T</span>he lab's NSF-funded project studies persuasive AI and the spread of misinformation. One thread of it is a classifier that scores text across four rhetorical strategies, causal, empirical, emotional, and moral, fine-tuned on LLM-labeled synthetic debates and validated against human annotators. The work has been published at NAACL and EMNLP 2025.</p>

</div>

## What I built

My work was building the corpus, roughly 2 million articles across 14 outlets spanning 2000 to 2025. I wrote a [GDELT](https://www.gdeltproject.org/) scraper from scratch with concurrent pipeline jobs, retry logic, resumable progress tracking, and content validation to maximize clean-text yield. The result fed directly into the classifier's fine-tuning and evaluation pipeline.

## Findings

Low-credibility outlets rely substantially more on moral and emotional appeals than high-credibility outlets, which lean toward causal reasoning. Ideological differences emerge primarily along the same affective dimension. Within mainstream opinion journalism, the Times leans more on causal, empirical, and moral argumentation while the Post leans more on emotional appeals, with partial convergence between the two over time.
